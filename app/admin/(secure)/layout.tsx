import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AdminShell } from "@/components/admin/AdminShell";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { getAdminByToken } from "@/lib/auth/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Admin surfaces must never be indexed (belt-and-suspenders with robots.txt). */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function SecureAdminLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const admin = await getAdminByToken(token);
  if (!admin) redirect("/admin/login");
  return <AdminShell admin={admin}>{children}</AdminShell>;
}
