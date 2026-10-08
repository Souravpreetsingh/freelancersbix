/** Server-side authorization for admin API routes. */

import { NextResponse, type NextRequest } from "next/server";
import { getAdminByToken, type AdminIdentity } from "@/lib/auth/session";
import { SESSION_COOKIE } from "@/lib/auth/constants";

export type AuthResult = { admin: AdminIdentity } | { response: NextResponse };

export async function authorizeRequest(request: NextRequest): Promise<AuthResult> {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const admin = await getAdminByToken(token);
  if (!admin) {
    return {
      response: NextResponse.json({ success: false, error: "UNAUTHORIZED" }, { status: 401 }),
    };
  }
  return { admin };
}

/**
 * CSRF defence for state-changing requests: a browser-originated request must
 * carry an `Origin` (or `Referer`) header matching the site origin. Same-site
 * fetches send `Origin`; non-browser callers do not and are unaffected.
 */
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (origin) {
    return new URL(origin).origin === request.nextUrl.origin;
  }
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin === request.nextUrl.origin;
    } catch {
      return false;
    }
  }
  return true;
}
