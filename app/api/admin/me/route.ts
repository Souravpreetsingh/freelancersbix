import { NextRequest, NextResponse } from "next/server";
import { authorizeRequest } from "@/lib/auth/api";
import { json } from "@/lib/api/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const authorized = await authorizeRequest(request);
  if ("response" in authorized) return authorized.response;
  return json({ success: true, admin: authorized.admin }, 200);
}

export async function POST(): Promise<NextResponse> {
  return json({ success: false, error: "METHOD_NOT_ALLOWED" }, 405);
}
