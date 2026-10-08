import { NextRequest, NextResponse } from "next/server";
import { createContactMessage } from "@/lib/db/contact-store";
import { isDbConfigured } from "@/lib/db/db";
import { fromZodError, json, readBody, readHoneypot, validationError } from "@/lib/api/http";
import { clientIp, pruneRateLimitBuckets, rateLimit } from "@/lib/security/rate-limit";
import { contactMessageSchema } from "@/lib/validation/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PERIODIC_PRUNE_INTERVAL_MS = 5 * 60 * 1000;

let lastPruneAt = 0;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const now = Date.now();
  if (now - lastPruneAt > MAX_PERIODIC_PRUNE_INTERVAL_MS) {
    pruneRateLimitBuckets();
    lastPruneAt = now;
  }

  const ip = clientIp(request);
  console.log(`[contact] request received (ip=${ip})`);

  if (!rateLimit({ key: `contact:ip:${ip}` })) {
    console.log(`[contact] rate_limited (ip=${ip})`);
    return json({ success: false, error: "RATE_LIMITED" }, 429);
  }

  const read = await readBody(request);
  if (!read.ok) {
    console.log(`[contact] invalid_body`);
    return read.response;
  }

  if (readHoneypot(read.body)) {
    console.log(`[contact] rejected_honeypot (ip=${ip})`);
    return validationError();
  }

  const email =
    typeof read.body === "object" && read.body !== null ? (read.body as Record<string, unknown>).email : undefined;
  if (typeof email === "string" && email !== "") {
    if (!rateLimit({ key: `contact:email:${email.toLowerCase()}`, max: 5 })) {
      console.log(`[contact] rate_limited_email`);
      return json({ success: false, error: "RATE_LIMITED" }, 429);
    }
  }

  const parsed = contactMessageSchema.safeParse(read.body);
  if (!parsed.success) {
    console.log(`[contact] validation_error`);
    return validationError(fromZodError(parsed.error));
  }

  if (!isDbConfigured()) {
    console.log(`[contact] server_error kind=store_unconfigured`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  const result = await createContactMessage(parsed.data);
  if (!result.ok) {
    console.log(`[contact] server_error kind=store_${result.code}`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  console.log(`[contact] stored id=${result.id}`);
  return json({ success: true, id: result.id }, 200);
}

export async function GET(): Promise<NextResponse> {
  return json({ success: false, error: "METHOD_NOT_ALLOWED" }, 405);
}
