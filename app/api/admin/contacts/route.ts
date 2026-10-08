import { NextRequest, NextResponse } from "next/server";
import { authorizeRequest, isSameOrigin } from "@/lib/auth/api";
import { listContacts, updateContactStatus } from "@/lib/db/contact-store";
import { statusUpdateSchema } from "@/lib/validation/admin";
import { CONTACT_STATUSES } from "@/lib/validation/contact";
import { fromZodError, json, readBody, validationError } from "@/lib/api/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const authorized = await authorizeRequest(request);
  if ("response" in authorized) return authorized.response;

  const contacts = await listContacts();
  return json({ success: true, contacts }, 200);
}

export async function PATCH(request: NextRequest): Promise<NextResponse> {
  const authorized = await authorizeRequest(request);
  if ("response" in authorized) return authorized.response;

  if (!isSameOrigin(request)) {
    return json({ success: false, error: "FORBIDDEN" }, 403);
  }

  const read = await readBody(request);
  if (!read.ok) return read.response;

  const parsed = statusUpdateSchema(CONTACT_STATUSES).safeParse(read.body);
  if (!parsed.success) {
    return validationError(fromZodError(parsed.error));
  }

  const updated = await updateContactStatus(parsed.data.id, parsed.data.status);
  if (!updated) {
    return json({ success: false, error: "NOT_FOUND" }, 404);
  }

  console.log(`[admin.contacts] status updated id=${parsed.data.id} -> ${parsed.data.status}`);
  return json({ success: true }, 200);
}
