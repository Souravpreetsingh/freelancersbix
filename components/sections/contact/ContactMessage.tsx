"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const ERROR_MESSAGES: Record<string, string> = {
  SERVER_ERROR: "We couldn’t send your message right now. Please try again shortly.",
  RATE_LIMITED: "Too many messages. Please wait a moment and try again.",
  VALIDATION_ERROR: "Please review your details and try again.",
};

type SubmitState = "idle" | "submitting" | "submitted" | "error";

export function ContactMessage() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setErrorMessage(null);

    const form = new FormData(event.currentTarget);
    const consent = form.get("consent");
    const payload = {
      name: String(form.get("contact-name") ?? "").trim(),
      email: String(form.get("contact-email") ?? "").trim(),
      phone: String(form.get("contact-phone") ?? "").trim(),
      subject: String(form.get("contact-subject") ?? "").trim(),
      message: String(form.get("contact-message") ?? "").trim(),
      consent: consent === "on",
      website: String(form.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => null)) as { success?: boolean; error?: string } | null;
      if (response.ok && body?.success) {
        setState("submitted");
        return;
      }
      setErrorMessage(
        body?.error ? (ERROR_MESSAGES[body.error] ?? ERROR_MESSAGES.VALIDATION_ERROR) : ERROR_MESSAGES.VALIDATION_ERROR,
      );
      setState("error");
    } catch {
      setErrorMessage(ERROR_MESSAGES.SERVER_ERROR);
      setState("error");
    }
  }

  const submitted = state === "submitted";

  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-dim relative" id="direct-message">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
            Direct Message
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
            Prefer a short message first?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Send a concise enquiry and our team will reply on the channel you use. For detailed project scoping use the
            quote engine above.
          </p>
        </div>

        <div className="rounded-xl bg-surface-container p-space-xl md:p-space-2xl shadow-xl">
          {submitted ? (
            <div
              className="fbx-pop flex flex-col items-start gap-space-md rounded-xl bg-surface p-space-lg"
              id="contact-success-banner"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-green/20 text-signal-green">
                <MaterialIcon name="task_alt" className="text-[24px]" />
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">Message received</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Thank you for reaching out. Your message has been recorded and our team will respond as soon as
                possible.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-space-lg" onSubmit={(event) => void onSubmit(event)}>
              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="website"
                tabIndex={-1}
                type="text"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                    htmlFor="contact-name"
                  >
                    Full Name <span className="text-signal-green">*</span>
                  </label>
                  <input
                    className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                    id="contact-name"
                    name="contact-name"
                    placeholder="e.g. Marcus Reed"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                    htmlFor="contact-email"
                  >
                    Email Address <span className="text-signal-green">*</span>
                  </label>
                  <input
                    className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                    id="contact-email"
                    name="contact-email"
                    placeholder="marcus@domain.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                    htmlFor="contact-phone"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                    id="contact-phone"
                    name="contact-phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                    id="contact-subject"
                    name="contact-subject"
                    placeholder="e.g. Scheduling a call"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label
                  className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                  htmlFor="contact-message"
                >
                  Message <span className="text-signal-green">*</span>
                </label>
                <textarea
                  className="p-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                  id="contact-message"
                  name="contact-message"
                  placeholder="Shortly describe your enquiry..."
                  required
                  rows={4}
                />
              </div>
              <label className="flex items-start gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <input className="mt-1 h-4 w-4 accent-[#0D5F40]" name="consent" required type="checkbox" />
                <span>
                  I agree to the privacy policy and consent to FreelancersBix using my details to respond to this
                  message. <span className="text-signal-green">*</span>
                </span>
              </label>
              {state === "error" && errorMessage ? (
                <p
                  className="rounded-lg bg-error-container px-space-md py-space-sm font-body-sm text-body-sm text-on-error-container"
                  role="alert"
                >
                  {errorMessage}
                </p>
              ) : null}
              <button
                className="fbx-btn w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary/90 font-bold shrink-0 disabled:opacity-60 disabled:pointer-events-none"
                disabled={state === "submitting"}
                type="submit"
              >
                {state === "submitting" ? "Sending…" : "Send Message"}
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
