/** Shared HTTP helpers for public JSON endpoints (mirrors app/api/quote/route.ts). */

import { NextResponse } from "next/server";

export const MAX_BODY_BYTES = 256 * 1024;
export const HONEYPOT_FIELD = "website";

export function json(body: unknown, status: number): NextResponse {
  return NextResponse.json(body, { status });
}

export function validationError(details?: { field: string; message: string }[]): NextResponse {
  const body: Record<string, unknown> = { success: false, error: "VALIDATION_ERROR" };
  if (details && details.length > 0) body.details = details;
  return json(body, 400);
}

/** Parse the request body, isolating structural errors from field errors. */
export async function readBody(
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

export function fromZodError(error: unknown): { field: string; message: string }[] {
  if (!error || typeof error !== "object" || !("issues" in error)) return [];
  const issues = (error as { issues: { path: (string | number)[]; message: string }[] }).issues;
  return issues.map((issue) => ({
    field: String(issue.path[0] ?? "root"),
    message: issue.message,
  }));
}

export function readHoneypot(body: unknown): string | undefined {
  if (body && typeof body === "object") {
    const value = (body as Record<string, unknown>)[HONEYPOT_FIELD];
    return typeof value === "string" && value.trim() !== "" ? value : undefined;
  }
  return undefined;
}
