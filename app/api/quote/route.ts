import { NextRequest, NextResponse } from "next/server";
import { createQuoteRequest, isQuoteStoreConfigured } from "@/lib/db/quote-store";
import { notifyNewQuote } from "@/lib/notifications/quote-notify";
import { clientIp, pruneRateLimitBuckets, rateLimit } from "@/lib/security/rate-limit";
import { quoteRequestSchema } from "@/lib/validation/quote";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 256 * 1024;
const HONEYPOT_FIELD = "website";
const MAX_PERIODIC_PRUNE_INTERVAL_MS = 5 * 60 * 1000;

let lastPruneAt = 0;

function json(body: unknown, status: number): NextResponse {
  return NextResponse.json(body, { status });
}

function validationError(details?: { field: string; message: string }[]): NextResponse {
  const body: Record<string, unknown> = { success: false, error: "VALIDATION_ERROR" };
  if (details && details.length > 0) body.details = details;
  return json(body, 400);
}

/** Parse the request body, isolating structural errors from field errors. */
async function readBody(
  request: Request,
): Promise<{ ok: true; body: unknown } | { ok: false; response: NextResponse }> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return { ok: false, response: validationError() };
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return { ok: false, response: validationError() };
  }
  try {
    return { ok: true, body: JSON.parse(text) };
  } catch {
    return { ok: false, response: validationError() };
  }
}

function fromZodError(error: unknown): { field: string; message: string }[] {
  if (!error || typeof error !== "object" || !("issues" in error)) return [];
  const issues = (error as { issues: { path: (string | number)[]; message: string }[] }).issues;
  return issues.map((issue) => ({
    field: String(issue.path[0] ?? "root"),
    message: issue.message,
  }));
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const now = Date.now();
  if (now - lastPruneAt > MAX_PERIODIC_PRUNE_INTERVAL_MS) {
    pruneRateLimitBuckets();
    lastPruneAt = now;
  }

  const ip = clientIp(request);
  console.log(`[quote] request received (ip=${ip})`);

  if (!rateLimit({ key: `quote:ip:${ip}` })) {
    console.log(`[quote] rate_limited (ip=${ip})`);
    return json({ success: false, error: "RATE_LIMITED" }, 429);
  }

  const read = await readBody(request);
  if (!read.ok) {
    console.log(`[quote] invalid_body`);
    return read.response;
  }

  const body = read.body;
  if (body && typeof body === "object") {
    const honeypot = (body as Record<string, unknown>)[HONEYPOT_FIELD];
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      console.log(`[quote] rejected_honeypot (ip=${ip})`);
      return validationError();
    }
  }

  const email = typeof body === "object" && body !== null ? (body as Record<string, unknown>).contactEmail : undefined;
  if (typeof email === "string" && email !== "") {
    const key = `quote:email:${email.toLowerCase()}`;
    if (!rateLimit({ key, max: 5 })) {
      console.log(`[quote] rate_limited_email`);
      return json({ success: false, error: "RATE_LIMITED" }, 429);
    }
  }

  const parsed = quoteRequestSchema.safeParse(body);
  if (!parsed.success) {
    console.log(`[quote] validation_error`);
    return validationError(fromZodError(parsed.error));
  }

  if (!isQuoteStoreConfigured()) {
    console.log(`[quote] server_error kind=store_unconfigured`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  const result = await createQuoteRequest(parsed.data);
  if (!result.ok) {
    console.log(`[quote] server_error kind=store_${result.code}`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  console.log(`[quote] stored reference=${result.reference}`);

  await notifyNewQuote({ reference: result.reference, request: parsed.data });

  return json({ success: true, trackerId: result.reference }, 200);
}

export async function GET(): Promise<NextResponse> {
  return json({ success: false, error: "METHOD_NOT_ALLOWED" }, 405);
}
