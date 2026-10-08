"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Inline status change for admin records. PATCHes the given admin endpoint
 * and refreshes the server-rendered list/detail when the write succeeds.
 */
export function StatusSelect({
  id,
  status,
  options,
  endpoint,
}: {
  id: string;
  status: string;
  options: readonly string[];
  endpoint: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onChange(next: string) {
    if (next === status || busy) return;
    setBusy(true);
    try {
      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, status: next }),
      });
      if (!response.ok) throw new Error("PATCH failed");
      router.refresh();
    } catch {
      setBusy(false);
    }
  }

  return (
    <select
      aria-label="Change status"
      className="h-9 rounded border border-outline-variant bg-surface-bright px-space-sm text-body-sm font-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-signal-green disabled:opacity-60"
      disabled={busy}
      value={status}
      onChange={(event) => void onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
