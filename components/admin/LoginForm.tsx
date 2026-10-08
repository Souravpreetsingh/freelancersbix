"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_CREDENTIALS: "Invalid email or password.",
  RATE_LIMITED: "Too many attempts. Please wait a few minutes and try again.",
  SERVER_ERROR: "Sign-in is temporarily unavailable. Please try again shortly.",
  VALIDATION_ERROR: "Please check your email and password.",
  LOGIN_FAILED: "Unable to sign in. Please try again.",
};

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: String(form.get("email") ?? ""),
          password: String(form.get("password") ?? ""),
          website: String(form.get("website") ?? ""),
        }),
      });
      const body = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;
      if (response.ok && body?.success) {
        router.push("/admin");
        router.refresh();
        return;
      }
      const code = body?.error ? ERROR_MESSAGES[body.error] : undefined;
      setError(code ?? ERROR_MESSAGES.LOGIN_FAILED);
      setBusy(false);
    } catch {
      setError(ERROR_MESSAGES.LOGIN_FAILED);
      setBusy(false);
    }
  }

  const inputClass =
    "h-11 w-full px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline";

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-margin-mobile py-space-2xl">
      <div className="w-full max-w-sm rounded-xl bg-surface-container p-space-xl shadow-2xl">
        <div className="mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
            FreelancersBix
          </span>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Admin sign in</h1>
          <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
            Restricted access. Team members only.
          </p>
        </div>
        <form className="flex flex-col gap-space-md" onSubmit={(event) => void onSubmit(event)}>
          <input aria-hidden="true" className="hidden" id="website" name="website" tabIndex={-1} type="text" />
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input autoComplete="email" className={inputClass} id="email" name="email" required type="email" />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              autoComplete="current-password"
              className={inputClass}
              id="password"
              name="password"
              required
              type="password"
            />
          </div>
          {error ? (
            <p
              className="rounded-lg bg-error-container px-space-md py-space-sm font-body-sm text-body-sm text-on-error-container"
              role="alert"
            >
              {error}
            </p>
          ) : null}
          <button
            className="fbx-btn mt-1 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-space-xl font-label-lg text-label-lg text-on-primary hover:bg-primary/90 font-bold disabled:opacity-60 disabled:pointer-events-none"
            disabled={busy}
            type="submit"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
