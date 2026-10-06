"use client";

import { useState } from "react";
import Link from "next/link";
import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const STEPS: string[] = ["Service", "Requirement", "Details", "Files", "Contact", "Review"];

const SERVICES: { value: string; icon: IconName; title: string; subtitle: string; popular?: boolean }[] = [
  {
    value: "Academic & Research Support",
    icon: "school",
    title: "Academic & Research",
    subtitle: "Literature synthesis, research design & academic methodology",
  },
  {
    value: "Business Research & Consulting",
    icon: "trending_up",
    title: "Business Research & Consulting",
    subtitle: "Market feasibility, benchmark analysis, growth advisory",
  },
  {
    value: "Foreign Accounting & Ledger Support",
    icon: "account_balance",
    title: "Foreign Accounting",
    subtitle: "US GAAP, IFRS, QBO/Xero clean-up & multi-currency ledgers",
    popular: true,
  },
  {
    value: "Business & Startup Support",
    icon: "rocket_launch",
    title: "Startup & Venture Support",
    subtitle: "Pitch decks, financial projections, business plans",
  },
  {
    value: "Content & Professional Writing",
    icon: "edit_note",
    title: "Content & Writing",
    subtitle: "Whitepapers, executive briefings, specialized B2B articles",
  },
  {
    value: "Data & Research Services",
    icon: "database",
    title: "Data Analysis & Research",
    subtitle: "Python / Excel dashboards, scraping, statistical models",
  },
  {
    value: "Digital & Administrative Support",
    icon: "hub",
    title: "Digital & Admin Support",
    subtitle: "Automation, workflow design, CRM ops, executive assistance",
  },
  {
    value: "Custom Multi-Disciplinary Project",
    icon: "tune",
    title: "Multi-Disciplinary / Custom",
    subtitle: "Cross-functional project spanning multiple domain areas",
  },
];

const DEADLINES = ["Flexible", "< 1 Week", "1–2 Weeks", "2–4 Weeks", "1+ Month", "Retainer"];

const BUDGETS: { label: string; name: string; value: string }[] = [
  { label: "Not Decided", name: "Open Discussion", value: "Flexible / Open" },
  { label: "Starter Scope", name: "Under $250", value: "Under $250" },
  { label: "Focused Project", name: "$250 – $750", value: "$250 – $750" },
  { label: "Standard Scope", name: "$750 – $2,000", value: "$750 – $2,000" },
  { label: "Complex Analysis", name: "$2,000 – $5,000", value: "$2,000 – $5,000" },
  { label: "Enterprise / Multi-Phase", name: "$5,000+", value: "$5,000+" },
];

const CURRENCIES: { value: string; label: string }[] = [
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "INR", label: "INR (₹)" },
  { value: "AUD", label: "AUD (A$)" },
  { value: "CAD", label: "CAD (C$)" },
];

const STRUCTURES = [
  { value: "Single Milestone Deliverable", title: "Single Deliverable", subtitle: "One-time specific report or asset" },
  {
    value: "Multi-Milestone Project",
    title: "Multi-Stage Project",
    subtitle: "Staged phases with intermediate reviews",
  },
  { value: "Ongoing Monthly Support", title: "Ongoing Monthly", subtitle: "Dedicated continuous team allocation" },
];

const CHANNELS = ["Email", "WhatsApp", "Call / Zoom"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_FILES: QuotesFile[] = [
  { name: "ledger_consolidation_spec_v2.xlsx", size: "2.4 MB", note: "Ready for review", icon: "description" },
  { name: "institutional_briefing_notes.pdf", size: "1.1 MB", note: "Ready for review", icon: "picture_as_pdf" },
];

interface QuotesFile {
  name: string;
  size: string;
  note: string;
  icon: IconName;
}

interface QuoteState {
  step: number;
  service: string;
  deadline: string;
  budget: string;
  currency: string;
  structure: string;
  files: QuotesFile[];
  contactName: string;
  contactEmail: string;
  contactOrg: string;
  preferredChannel: string;
}

const INITIAL_STATE: QuoteState = {
  step: 1,
  service: "Foreign Accounting & Ledger Support",
  deadline: "1–2 Weeks",
  budget: "$750 – $2,000",
  currency: "USD",
  structure: "Single Milestone Deliverable",
  files: DEFAULT_FILES,
  contactName: "",
  contactEmail: "",
  contactOrg: "",
  preferredChannel: "Email",
};

export function ContactWizard() {
  const [quote, setQuote] = useState<QuoteState>(INITIAL_STATE);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outcome, setOutcome] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [trackerId, setTrackerId] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ field: string; message: string }[]>([]);
  const [contactError, setContactError] = useState("");

  const goToStep = (targetStep: number) => {
    if (targetStep < quote.step) {
      setQuote((state) => ({ ...state, step: targetStep }));
      return;
    }
    if (targetStep === 2 && (!title.trim() || !description.trim())) return;
    if (targetStep === 6) {
      if (!quote.contactName.trim()) {
        setContactError("Please enter your full name.");
        return;
      }
      if (!EMAIL_RE.test(quote.contactEmail)) {
        setContactError("Please enter a valid business email address.");
        return;
      }
    }
    setQuote((state) => ({ ...state, step: targetStep }));
  };

  const selectService = (value: string) => setQuote((state) => ({ ...state, service: value }));

  const selectOption = (
    key: keyof Pick<QuoteState, "deadline" | "budget" | "currency" | "structure" | "preferredChannel">,
    value: string,
  ) => setQuote((state) => ({ ...state, [key]: value }));

  const goToStepFromNav = (targetStep: number) => {
    if (targetStep < quote.step) setQuote((state) => ({ ...state, step: targetStep }));
  };

  const addFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const newFiles: QuotesFile[] = Array.from(fileList).map((file) => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      note: "Uploaded",
      icon: "attach_file",
    }));
    setQuote((state) => ({ ...state, files: [...state.files, ...newFiles] }));
  };

  const removeFile = (index: number) =>
    setQuote((state) => ({ ...state, files: state.files.filter((_, i) => i !== index) }));

  const submitQuote = async () => {
    if (submitState === "submitting") return;

    if (!consent) {
      setFieldErrors([{ field: "consent", message: "Please accept the privacy policy before submitting." }]);
      setSubmitError("");
      setSubmitState("error");
      return;
    }

    setSubmitError("");
    setFieldErrors([]);
    setSubmitState("submitting");

    const payload = {
      service: quote.service,
      title: title.trim(),
      description: description.trim(),
      outcome: outcome.trim(),
      deadline: quote.deadline,
      budget: quote.budget,
      currency: quote.currency,
      structure: quote.structure,
      files: quote.files.map((file) => ({ name: file.name, size: file.size })),
      contactName: quote.contactName.trim(),
      contactOrg: quote.contactOrg.trim(),
      contactEmail: quote.contactEmail.trim(),
      contactPhone: contactPhone.trim(),
      contactCountry: contactCountry.trim(),
      preferredChannel: quote.preferredChannel,
      notes: notes.trim(),
      consent,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        success: boolean;
        trackerId?: string;
        error?: string;
        details?: { field: string; message: string }[];
      } | null;

      if (response.ok && result?.success && result.trackerId) {
        setTrackerId(result.trackerId);
        setSubmitState("idle");
        setSubmitted(true);
        return;
      }

      if (result?.error === "VALIDATION_ERROR") {
        setSubmitError("Some details couldn't be validated. Please review your entry and try again.");
        setFieldErrors(result.details ?? []);
      } else if (result?.error === "RATE_LIMITED") {
        setSubmitError("We've received too many requests from your network. Please wait a few minutes and try again.");
      } else {
        setSubmitError("We couldn't submit your request right now. Please try again.");
      }
      setSubmitState("error");
    } catch {
      setSubmitError("We couldn't submit your request right now. Please try again.");
      setSubmitState("error");
    }
  };

  const resetWizard = () => {
    setQuote(INITIAL_STATE);
    setTitle("");
    setDescription("");
    setOutcome("");
    setContactPhone("");
    setContactCountry("");
    setNotes("");
    setConsent(true);
    setTrackerId("");
    setSubmitState("idle");
    setSubmitError("");
    setFieldErrors([]);
    setContactError("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section
        className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest relative"
        id="quote-engine"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-signal-blue mb-space-sm">
            <MaterialIcon name="calculate" className="text-[16px]" />
            <span className="font-label-md text-label-md uppercase tracking-widest font-semibold">
              PROJECT SCOPING ENGINE
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
            Tell Us About Your Project.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Complete the structured intake below. Our team reviews every detail to provide an accurate timeline and
            milestone breakdown.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-surface rounded-xl shadow-xl overflow-hidden">
          <div className="p-space-lg md:p-space-2xl">
            <div className="flex flex-col items-center text-center py-space-xl" id="wizard-success">
              <div className="w-16 h-16 rounded-full bg-signal-blue/20 text-signal-blue flex items-center justify-center mb-space-lg shadow-lg">
                <MaterialIcon name="check_circle" className="text-[36px]" />
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-signal-blue font-bold">
                TRANSMISSION CONFIRMED
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight mt-1 mb-space-xs">
                YOUR REQUEST HAS BEEN RECEIVED.
              </h3>
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container font-mono text-label-sm text-on-surface-variant my-space-md">
                <span>REQUEST TRACKER ID:</span>
                <span className="text-whiteout font-bold">{trackerId || "FBX-XXXXXX"}</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-space-2xl">
                Thank you for reaching out to FreelancersBix. Our domain practice leads are already examining your
                specifications to verify capacity, scope milestones, and turnaround windows.
              </p>
              <div className="w-full max-w-2xl bg-surface-container rounded-xl p-space-lg mb-space-2xl text-left">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-whiteout font-bold block mb-space-md">
                  Next Steps in Our Engagement Flow
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-md">
                  {[
                    { no: "01", step: "Review", text: "Specialist assesses files & objectives" },
                    { no: "02", step: "Follow-Up", text: "Direct contact within 24 business hours" },
                    { no: "03", step: "Scope & Quote", text: "Fixed deliverable proposal & timeline" },
                    { no: "04", step: "Kickoff", text: "Execution with verified handoffs" },
                  ].map((item) => (
                    <div key={item.no} className="flex flex-col">
                      <span className="font-mono text-signal-blue font-bold text-label-sm">{item.no}</span>
                      <span className="font-headline-sm text-[14px] text-whiteout font-semibold mt-1">{item.step}</span>
                      <span className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-space-md">
                <Link
                  className="px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  href="/"
                >
                  Back to Home
                </Link>
                <button
                  className="px-space-lg py-space-md bg-surface-container-high hover:bg-surface-container text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={resetWizard}
                  type="button"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest relative"
      id="quote-engine"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-space-2xl">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-signal-blue mb-space-sm">
          <MaterialIcon name="calculate" className="text-[16px]" />
          <span className="font-label-md text-label-md uppercase tracking-widest font-semibold">
            PROJECT SCOPING ENGINE
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
          Tell Us About Your Project.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Complete the structured intake below. Our team reviews every detail to provide an accurate timeline and
          milestone breakdown.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-surface rounded-xl shadow-xl overflow-hidden">
        <div className="w-full bg-surface-container px-space-md md:px-space-xl py-space-md">
          <div className="grid grid-cols-6 gap-space-xs sm:gap-space-sm text-center">
            {STEPS.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === quote.step;
              const isDone = stepNumber < quote.step;
              return (
                <button
                  key={step}
                  type="button"
                  className={`flex flex-col items-center transition-all ${isActive ? "" : isDone ? "" : "opacity-40"}`}
                  onClick={() => goToStepFromNav(stepNumber)}
                >
                  <span
                    className={`font-label-sm text-[10px] sm:text-label-sm uppercase font-mono font-bold ${
                      isActive ? "text-signal-blue" : isDone ? "text-whiteout" : "text-on-surface-variant"
                    }`}
                  >
                    {String(stepNumber).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-label-sm text-[10px] sm:text-label-sm font-medium truncate w-full ${
                      isActive || isDone ? "text-whiteout" : "text-on-surface-variant"
                    }`}
                  >
                    {step}
                  </span>
                  <span
                    className={`w-full h-1 rounded-full mt-1.5 indicator-line ${
                      isActive ? "bg-signal-blue" : isDone ? "bg-whiteout" : "bg-surface-variant"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-space-lg md:p-space-2xl">
          {quote.step === 1 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 01
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  What primary service track do you require?
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Select the discipline that best reflects your project’s core scope.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-xl">
                {SERVICES.map((service) => {
                  const selected = quote.service === service.value;
                  return (
                    <label
                      key={service.value}
                      className={`flex items-start gap-space-md p-space-md rounded-xl cursor-pointer transition-all ${
                        selected ? "bg-surface-container-high" : "bg-surface-container hover:bg-surface-container-high"
                      }`}
                    >
                      <input
                        className="sr-only"
                        name="project_service"
                        type="radio"
                        value={service.value}
                        checked={selected}
                        onChange={() => selectService(service.value)}
                      />
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 check-icon ${
                          selected ? "bg-signal-blue text-whiteout" : "bg-surface-container-highest text-primary"
                        }`}
                      >
                        <MaterialIcon name={service.icon} className="text-[20px]" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-headline-sm text-[16px] text-whiteout font-medium">
                            {service.title}
                          </span>
                          {service.popular && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 bg-signal-blue/20 text-signal-blue rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-body-sm text-[13px] text-on-surface-variant">{service.subtitle}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Step 1 of 6</span>
                <button
                  className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  onClick={() => goToStep(2)}
                  type="button"
                >
                  <span>Continue to Requirement</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>
          )}

          {quote.step === 2 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 02
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  Define your requirement & timeline.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The clearer the context, the faster and more accurately we can assemble your estimate.
                </p>
              </div>
              <div className="flex flex-col gap-space-lg mb-space-xl">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="field-title"
                  >
                    Project / Requirement Title <span className="text-signal-blue">*</span>
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="field-title"
                    placeholder="e.g. Multi-Entity Financial Consolidation & 3-Statement Model"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="field-desc"
                  >
                    Requirement Scope & Objectives <span className="text-signal-blue">*</span>
                  </label>
                  <textarea
                    className="w-full p-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="field-desc"
                    placeholder="Detail your exact deliverables, existing roadblocks, tools used (e.g., QuickBooks, Stata, Python), and any specific formatting guidelines..."
                    rows={4}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="field-outcome"
                  >
                    Desired Final Output / Deliverable Type
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="field-outcome"
                    placeholder="e.g. Reconciled Balance Sheet Workbook (.xlsx), PDF Executive Summary, Presentation Deck"
                    type="text"
                    value={outcome}
                    onChange={(event) => setOutcome(event.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                      Desired Delivery Timeline
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant italic">
                      Subject to final scope review
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-xs">
                    {DEADLINES.map((deadline) => (
                      <button
                        key={deadline}
                        type="button"
                        className={`px-space-sm py-space-xs rounded-full font-label-md text-label-md transition-all text-center ${
                          quote.deadline === deadline
                            ? "bg-whiteout text-ink font-medium"
                            : "bg-surface-container text-on-surface-variant hover:text-whiteout"
                        }`}
                        onClick={() => selectOption("deadline", deadline)}
                      >
                        {deadline}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <button
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-md text-on-surface-variant hover:text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={() => goToStep(1)}
                  type="button"
                >
                  <MaterialIcon name="arrow_back" className="text-[18px]" />
                  <span>Back</span>
                </button>
                <button
                  className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  onClick={() => goToStep(3)}
                  type="button"
                >
                  <span>Next: Project Details</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>
          )}

          {quote.step === 3 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 03
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  Project scale & investment framework.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Sharing your anticipated budget range helps us propose realistic milestone breakdowns.
                </p>
              </div>
              <div className="flex flex-col gap-space-xl mb-space-xl">
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                    Estimated Budget Range
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm">
                    {BUDGETS.map((budget) => (
                      <button
                        key={budget.value}
                        type="button"
                        className={`p-space-md rounded-xl text-left transition-all ${
                          quote.budget === budget.value
                            ? "bg-surface-container-high"
                            : "bg-surface-container hover:bg-surface-container-high"
                        }`}
                        onClick={() => selectOption("budget", budget.value)}
                      >
                        <div
                          className={`font-label-sm text-label-sm ${quote.budget === budget.value ? "text-signal-blue font-semibold" : "text-on-surface-variant"}`}
                        >
                          {budget.label}
                        </div>
                        <div className="font-headline-sm text-[16px] text-whiteout font-medium mt-1">{budget.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                    Preferred Billing Currency
                  </span>
                  <div className="flex flex-wrap gap-space-xs">
                    {CURRENCIES.map((currency) => (
                      <button
                        key={currency.value}
                        type="button"
                        className={`px-space-md py-space-xs rounded-full font-label-md text-label-md ${
                          quote.currency === currency.value
                            ? "bg-whiteout text-ink font-medium"
                            : "bg-surface-container text-on-surface-variant hover:text-whiteout"
                        }`}
                        onClick={() => selectOption("currency", currency.value)}
                      >
                        {currency.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                    Deliverable Engagement Structure
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    {STRUCTURES.map((structure) => (
                      <button
                        key={structure.value}
                        type="button"
                        className={`p-space-md rounded-xl text-left ${
                          quote.structure === structure.value
                            ? "bg-surface-container-high"
                            : "bg-surface-container hover:bg-surface-container-high"
                        }`}
                        onClick={() => selectOption("structure", structure.value)}
                      >
                        <div className="font-headline-sm text-[15px] text-whiteout font-semibold">
                          {structure.title}
                        </div>
                        <div className="font-body-sm text-[13px] text-on-surface-variant mt-1">
                          {structure.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <button
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-md text-on-surface-variant hover:text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={() => goToStep(2)}
                  type="button"
                >
                  <MaterialIcon name="arrow_back" className="text-[18px]" />
                  <span>Back</span>
                </button>
                <button
                  className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  onClick={() => goToStep(4)}
                  type="button"
                >
                  <span>Next: Attach Files</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>
          )}

          {quote.step === 4 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 04
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  Attach supporting documents.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Upload project briefs, spreadsheets, sample data sets, or presentation drafts (Optional).
                </p>
              </div>
              <label
                className="w-full p-space-2xl rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col items-center justify-center text-center mb-space-lg border border-dashed border-whiteout/20 hover:border-signal-blue"
                htmlFor="file-input"
              >
                <input
                  className="hidden"
                  id="file-input"
                  multiple
                  type="file"
                  onChange={(event) => {
                    addFiles(event.target.files);
                    event.target.value = "";
                  }}
                />
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center mb-space-md">
                  <MaterialIcon name="cloud_upload" className="text-signal-blue text-[28px]" />
                </div>
                <div className="font-headline-sm text-[18px] text-whiteout font-semibold">
                  Drop project files here, or <span className="text-signal-blue underline">browse your disk</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-space-xs">
                  Supports PDF, DOCX, XLSX, CSV, ZIP, PPTX (Up to 50MB per batch). Transferred over TLS 1.3 encryption.
                </p>
              </label>
              <div className="flex flex-col gap-space-sm mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                  Uploaded Materials (Simulated Ready)
                </span>
                {quote.files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between p-space-md rounded-lg bg-surface-container"
                  >
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0">
                        <MaterialIcon name={file.icon} className="text-signal-blue text-[20px]" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-headline-sm text-[14px] text-whiteout font-medium truncate">
                          {file.name}
                        </span>
                        <span className="font-label-sm text-[12px] text-on-surface-variant">
                          {file.size} · {file.note}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-md">
                      <span className="font-label-sm text-label-sm text-signal-blue font-mono font-medium">
                        100% READY
                      </span>
                      <button
                        className="text-on-surface-variant hover:text-whiteout p-1"
                        onClick={() => removeFile(index)}
                        type="button"
                      >
                        <MaterialIcon name="close" className="text-[18px]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <button
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-md text-on-surface-variant hover:text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={() => goToStep(3)}
                  type="button"
                >
                  <MaterialIcon name="arrow_back" className="text-[18px]" />
                  <span>Back</span>
                </button>
                <button
                  className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  onClick={() => goToStep(5)}
                  type="button"
                >
                  <span>Next: Contact Details</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>
          )}

          {quote.step === 5 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 05
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  Your contact details.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Where should our practice leads deliver your project brief evaluation and estimate?
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-lg">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="contact-name"
                  >
                    Full Name <span className="text-signal-blue">*</span>
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="contact-name"
                    placeholder="Sarah Jenkins"
                    type="text"
                    value={quote.contactName}
                    onChange={(event) => setQuote((state) => ({ ...state, contactName: event.target.value }))}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="contact-org"
                  >
                    Organization / Company
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="contact-org"
                    placeholder="Nexus Capital & Advisory"
                    type="text"
                    value={quote.contactOrg}
                    onChange={(event) => setQuote((state) => ({ ...state, contactOrg: event.target.value }))}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="contact-email"
                  >
                    Business Email <span className="text-signal-blue">*</span>
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="contact-email"
                    placeholder="sarah.jenkins@nexuscap.com"
                    type="email"
                    value={quote.contactEmail}
                    onChange={(event) => {
                      setContactError("");
                      setQuote((state) => ({ ...state, contactEmail: event.target.value }));
                    }}
                  />
                  {contactError ? <span className="font-label-sm text-label-sm text-error">{contactError}</span> : null}
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="contact-phone"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="contact-phone"
                    placeholder="+1 (415) 890-2134"
                    type="tel"
                    value={contactPhone}
                    onChange={(event) => setContactPhone(event.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                    htmlFor="contact-country"
                  >
                    Country / Timezone
                  </label>
                  <input
                    className="w-full h-11 px-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                    id="contact-country"
                    placeholder="United States (EST)"
                    type="text"
                    value={contactCountry}
                    onChange={(event) => setContactCountry(event.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-whiteout">
                    Preferred Channel
                  </span>
                  <div className="grid grid-cols-3 gap-space-xs h-11">
                    {CHANNELS.map((channel) => (
                      <button
                        key={channel}
                        type="button"
                        className={`rounded font-label-sm text-label-sm ${
                          quote.preferredChannel === channel
                            ? "bg-whiteout text-ink font-medium"
                            : "bg-surface-container-high text-on-surface-variant"
                        }`}
                        onClick={() => selectOption("preferredChannel", channel)}
                      >
                        {channel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs mb-space-lg">
                <label
                  className="font-label-sm text-label-sm uppercase font-semibold text-whiteout"
                  htmlFor="contact-notes"
                >
                  Additional Instructions or Preferences
                </label>
                <textarea
                  className="w-full p-space-md rounded bg-surface-container-high text-whiteout font-body-sm text-body-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-signal-blue"
                  id="contact-notes"
                  placeholder="e.g. Please reach out via email first with an initial scope proposal before booking a scoping call..."
                  rows={2}
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>
              <div className="flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low mb-space-xl">
                <input
                  className="mt-1 w-4 h-4 rounded bg-surface-container border-0 accent-signal-blue cursor-pointer"
                  id="privacy-check"
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                />
                <label
                  className="font-body-sm text-[13px] text-on-surface-variant cursor-pointer"
                  htmlFor="privacy-check"
                >
                  I understand that the project information and materials submitted will be treated confidentially and
                  used solely to prepare the formal FreelancersBix quote and project plan. Read our{" "}
                  <a className="text-signal-blue underline" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <button
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-md text-on-surface-variant hover:text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={() => goToStep(4)}
                  type="button"
                >
                  <MaterialIcon name="arrow_back" className="text-[18px]" />
                  <span>Back</span>
                </button>
                <button
                  className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-whiteout hover:opacity-90 text-ink rounded-lg font-label-lg text-label-lg font-medium transition-all"
                  onClick={() => goToStep(6)}
                  type="button"
                >
                  <span>Next: Review Summary</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </button>
              </div>
            </div>
          )}

          {quote.step === 6 && (
            <div className="flex flex-col">
              <div className="mb-space-lg">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
                  STAGE 06
                </span>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold mt-1">
                  Review your intake specification.
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Verify the details below before dispatching directly to our engagement leads.
                </p>
              </div>
              <div className="p-space-xl rounded-xl bg-surface-container mb-space-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg border-b border-whiteout/10 pb-space-lg mb-space-lg">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Discipline Track
                    </span>
                    <div className="font-headline-sm text-[17px] text-whiteout font-semibold mt-1">{quote.service}</div>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Estimated Budget & Currency
                    </span>
                    <div className="font-headline-sm text-[17px] text-signal-blue font-semibold mt-1">
                      {quote.budget} ({quote.currency})
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Requirement Title
                    </span>
                    <div className="font-headline-sm text-[17px] text-whiteout font-semibold mt-1">
                      {title.trim() || "Multi-Entity Financial Consolidation & 3-Statement Model"}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Scope Overview
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface mt-1 leading-relaxed">
                      {description.trim() ||
                        "Multi-currency reconciliation across foreign subsidiary entities with monthly P&L consolidation."}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Target Timeline
                    </span>
                    <div className="font-body-md text-body-md text-whiteout font-medium mt-1">{quote.deadline}</div>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Attached Materials
                    </span>
                    <div className="font-body-md text-body-md text-whiteout font-medium mt-1">
                      {quote.files.length} file(s) attached
                    </div>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Submitted By
                    </span>
                    <div className="font-body-md text-body-md text-whiteout font-medium mt-1">
                      {quote.contactName.trim() || "Sarah Jenkins"}
                      {quote.contactOrg.trim() ? ` (${quote.contactOrg.trim()})` : ""}
                    </div>
                    <div className="font-label-sm text-[12px] text-on-surface-variant">
                      {quote.contactEmail.trim() || "sarah.jenkins@nexuscap.com"} · {quote.preferredChannel}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-lg border-t border-whiteout/10">
                <button
                  className="inline-flex items-center gap-space-sm px-space-lg py-space-md text-on-surface-variant hover:text-whiteout rounded-lg font-label-lg text-label-lg transition-all"
                  onClick={() => goToStep(5)}
                  type="button"
                >
                  <MaterialIcon name="edit" className="text-[18px]" />
                  <span>Edit Details</span>
                </button>
                <button
                  className="inline-flex items-center gap-space-sm px-space-2xl py-space-md bg-whiteout hover:opacity-90 disabled:opacity-60 text-ink rounded-lg font-label-lg text-label-lg font-bold transition-all shadow-lg disabled:cursor-not-allowed"
                  onClick={submitQuote}
                  disabled={submitState === "submitting"}
                  type="button"
                  aria-busy={submitState === "submitting"}
                >
                  <span>{submitState === "submitting" ? "Submitting Request…" : "Submit Request"}</span>
                  <MaterialIcon name="send" className="text-[20px]" />
                </button>
              </div>
              {submitState === "error" ? (
                <div className="mt-space-lg p-space-md rounded-lg bg-error/10 border border-error/30 flex items-start gap-space-sm">
                  <MaterialIcon name="warning" className="text-error text-[20px] shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-body-sm text-body-sm text-whiteout">{submitError}</p>
                    {fieldErrors.length > 0 ? (
                      <ul className="flex flex-col gap-0.5">
                        {fieldErrors.map((fieldError) => (
                          <li
                            key={`${fieldError.field}-${fieldError.message}`}
                            className="font-label-sm text-label-sm text-error"
                          >
                            {fieldError.field}: {fieldError.message}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
