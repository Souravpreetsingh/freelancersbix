"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { CAREER_DISCIPLINES_UI, CAREER_EXPERIENCE_UI } from "@/data/careers";

const ERROR_MESSAGES: Record<string, string> = {
  SERVER_ERROR: "We couldn’t submit your application right now. Please try again shortly.",
  RATE_LIMITED: "Too many submissions. Please wait a moment and try again.",
  VALIDATION_ERROR: "Please review your details and try again.",
};

type SubmitState = "idle" | "submitting" | "submitted" | "error";

export function CareerForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setErrorMessage(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("talent-name") ?? "").trim(),
      email: String(form.get("talent-email") ?? "").trim(),
      phone: String(form.get("talent-phone") ?? "").trim(),
      discipline: String(form.get("talent-discipline") ?? ""),
      experience: String(form.get("talent-experience") ?? "entry"),
      role: String(form.get("talent-role") ?? "").trim(),
      portfolioUrl: String(form.get("talent-portfolio") ?? "").trim(),
      resumeFilename: fileName ?? "",
      summary: String(form.get("talent-summary") ?? "").trim(),
      website: String(form.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/careers", {
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
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
      id="general-application"
    >
      <div className="max-w-4xl mx-auto bg-surface-container p-space-xl md:p-space-2xl rounded-xl shadow-2xl">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Don’t See the Right Role?
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Tell us where your expertise can make a difference.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            If you believe your skills could contribute to FreelancersBix, submit your profile for ongoing and future
            global opportunities.
          </p>
        </div>
        <form className="flex flex-col gap-space-lg" id="talent-form" onSubmit={(event) => void onSubmit(event)}>
          <input aria-hidden="true" autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-name"
              >
                Full Name <span className="text-signal-green">*</span>
              </label>
              <input
                id="talent-name"
                name="talent-name"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                placeholder="e.g. Eleanor Vance"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-email"
              >
                Email Address <span className="text-signal-green">*</span>
              </label>
              <input
                id="talent-email"
                name="talent-email"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                placeholder="eleanor@domain.com"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-phone"
              >
                Phone / WhatsApp
              </label>
              <input
                id="talent-phone"
                name="talent-phone"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-discipline"
              >
                Area of Expertise <span className="text-signal-green">*</span>
              </label>
              <select
                id="talent-discipline"
                name="talent-discipline"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green"
                required
                defaultValue=""
              >
                <option disabled value="">
                  Select Primary Discipline
                </option>
                {CAREER_DISCIPLINES_UI.map((discipline) => (
                  <option key={discipline.value} value={discipline.value}>
                    {discipline.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-experience"
              >
                Experience Level
              </label>
              <select
                id="talent-experience"
                name="talent-experience"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green"
                defaultValue="entry"
              >
                {CAREER_EXPERIENCE_UI.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
                htmlFor="talent-role"
              >
                Preferred Role or Title
              </label>
              <input
                id="talent-role"
                name="talent-role"
                className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
                placeholder="e.g. Senior Financial Analyst"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="talent-portfolio"
            >
              Portfolio, GitHub, or LinkedIn URL
            </label>
            <input
              id="talent-portfolio"
              name="talent-portfolio"
              className="h-11 px-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
              placeholder="https://linkedin.com/in/yourprofile"
              type="url"
            />
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="file-upload"
            >
              Resume / CV Document <span className="text-signal-green">*</span>
            </label>
            <label
              className="p-space-lg rounded-xl bg-surface-container-high/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-high transition-colors"
              htmlFor="file-upload"
            >
              <MaterialIcon name="upload_file" className="text-signal-green text-4xl mb-space-xs" />
              <span className="font-label-lg text-label-lg text-primary font-medium" id="file-label">
                {fileName ? `Selected: ${fileName}` : "Click to upload or drag & drop file here"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">PDF, DOCX up to 10MB</span>
              <input
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setFileName(file ? file.name : null);
                }}
              />
            </label>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              The file name is recorded with your application for follow-up. File contents are not uploaded.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium"
              htmlFor="talent-summary"
            >
              Brief Summary / How You Can Contribute
            </label>
            <textarea
              id="talent-summary"
              name="talent-summary"
              className="p-space-md bg-surface-container-high text-primary rounded text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
              placeholder="Briefly highlight your core technical skills, primary software competencies, or notable project accomplishments..."
              rows={4}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              By submitting, you agree to our standard talent confidentiality guidelines.
            </p>
            <button
              className="fbx-btn w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-2xl py-space-sm rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary/90 font-bold shrink-0 disabled:opacity-60 disabled:pointer-events-none"
              type="submit"
              disabled={submitted || state === "submitting"}
              aria-disabled={submitted || state === "submitting"}
            >
              {state === "submitting" ? "Submitting…" : submitted ? "Application Submitted" : "Submit Application"}
              {submitted ? <MaterialIcon name="task_alt" className="text-[18px]" /> : null}
            </button>
          </div>
          {state === "error" && errorMessage ? (
            <div
              className="rounded-lg bg-error-container p-space-md font-body-sm text-body-sm text-on-error-container flex items-center gap-space-sm"
              id="form-error-banner"
              role="alert"
            >
              <MaterialIcon name="warning" className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          ) : null}
          {submitted && (
            <div
              className="fbx-pop p-space-md rounded-lg bg-deep-sage/20 text-primary font-body-sm text-body-sm flex items-center gap-space-sm"
              id="form-success-banner"
              role="status"
            >
              <MaterialIcon name="task_alt" className="text-signal-green" />
              <span>
                Thank you. Your application has been recorded. Our talent team reviews incoming submissions weekly.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
