/**
 * Request-time gate for the admin surface (Next.js `proxy`).
 *
 * This runs on the Edge runtime so it CANNOT query PostgreSQL. It is a coarse
 * first gate only: without a session cookie the request never reaches the
 * admin pages/APIs. The authoritative authorization check is server-side, in
 * `lib/auth/session.ts`, invoked by the admin layout and every admin API route.
 */
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/auth/constants";

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const isLoginRoute = pathname === "/admin/login";
  const isStaticAsset =
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".");

  if (isLoginRoute || isStaticAsset || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ success: false, error: "UNAUTHORIZED" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
