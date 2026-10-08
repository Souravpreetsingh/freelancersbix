"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    if (busy) return;
    setBusy(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <button
      className="fbx-btn inline-flex items-center gap-space-xs rounded-lg bg-primary px-space-lg py-space-xs font-label-md text-label-md text-on-primary hover:bg-primary/90 font-semibold shrink-0 disabled:opacity-60 disabled:pointer-events-none"
      disabled={busy}
      onClick={() => void logout()}
      type="button"
    >
      <span>Sign out</span>
      <MaterialIcon name="exit_to_app" className="text-[16px]" />
    </button>
  );
}
