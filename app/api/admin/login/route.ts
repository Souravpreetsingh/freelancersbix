import { NextRequest, NextResponse } from "next/server";
import { findAdminByEmail } from "@/lib/db/admin-store";
import { isDbConfigured } from "@/lib/db/db";
import { verifyPassword } from "@/lib/auth/password";
import { createSession, newSessionToken, sessionCookieOptions } from "@/lib/auth/session";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { adminLoginSchema } from "@/lib/validation/admin";
import { clientIp, pruneRateLimitBuckets, rateLimit } from "@/lib/security/rate-limit";
import { fromZodError, json, readBody, readHoneypot, validationError } from "@/lib/api/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PERIODIC_PRUNE_INTERVAL_MS = 5 * 60 * 1000;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 10;

let lastPruneAt = 0;

export async function POST(request: NextRequest): Promise<NextResponse> {
  const now = Date.now();
  if (now - lastPruneAt > MAX_PERIODIC_PRUNE_INTERVAL_MS) {
    pruneRateLimitBuckets();
    lastPruneAt = now;
  }

  const ip = clientIp(request);
  console.log(`[admin.login] attempt (ip=${ip})`);

  if (!rateLimit({ key: `admin:login:ip:${ip}`, max: LOGIN_MAX_ATTEMPTS, windowMs: LOGIN_WINDOW_MS })) {
    console.log(`[admin.login] rate_limited (ip=${ip})`);
    return json({ success: false, error: "RATE_LIMITED" }, 429);
  }

  const read = await readBody(request);
  if (!read.ok) {
    return read.response;
  }

  if (readHoneypot(read.body)) {
    console.log(`[admin.login] rejected_honeypot (ip=${ip})`);
    return validationError();
  }

  const parsed = adminLoginSchema.safeParse(read.body);
  if (!parsed.success) {
    return validationError(fromZodError(parsed.error));
  }

  if (!isDbConfigured()) {
    console.log(`[admin.login] server_error kind=store_unconfigured`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  const admin = await findAdminByEmail(parsed.data.email);
  const passwordOk = admin ? await verifyPassword(parsed.data.password, admin.passwordHash) : false;
  if (!admin || !passwordOk) {
    console.log(`[admin.login] invalid_credentials (ip=${ip})`);
    return json({ success: false, error: "INVALID_CREDENTIALS" }, 401);
  }

  const token = newSessionToken();
  try {
    await createSession({
      adminId: admin.id,
      token,
      ip,
      userAgent: request.headers.get("user-agent"),
    });
  } catch {
    console.log(`[admin.login] server_error kind=session_create`);
    return json({ success: false, error: "SERVER_ERROR" }, 503);
  }

  const response = json({ success: true, admin: { name: admin.name, email: admin.email, role: admin.role } }, 200);
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  console.log(`[admin.login] ok (admin=${admin.email})`);
  return response;
}

export async function GET(): Promise<NextResponse> {
  return json({ success: false, error: "METHOD_NOT_ALLOWED" }, 405);
}
