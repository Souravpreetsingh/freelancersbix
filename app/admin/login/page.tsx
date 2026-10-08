import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginForm } from "@/components/admin/LoginForm";
import { SESSION_COOKIE } from "@/lib/auth/constants";
import { getAdminByToken } from "@/lib/auth/session";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Admin Sign In",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const admin = await getAdminByToken(token);
  if (admin) redirect("/admin");
  return <LoginForm />;
}
