import { NextRequest, NextResponse } from "next/server";
import { authorizeRequest } from "@/lib/auth/api";
import { deleteSessionByToken } from "@/lib/auth/session";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { json } from "@/lib/api/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const authorized = await authorizeRequest(request);
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if ("admin" in authorized && token) {
    await deleteSessionByToken(token);
  }
  const response = json({ success: true }, 200);
  response.cookies.set(SESSION_COOKIE, "", { ...sessionCookieOptionsForClear(), maxAge: 0 });
  return response;
}

function sessionCookieOptionsForClear() {
  return { httpOnly: true, sameSite: "lax" as const, secure: process.env.NODE_ENV === "production", path: "/" };
}

export async function GET(): Promise<NextResponse> {
  return json({ success: false, error: "METHOD_NOT_ALLOWED" }, 405);
}
