import { z } from "zod";

/**
 * Canonical server-side schema for quote/contact submissions.
 *
 * Mirrors the fields collected by the Contact Quote Wizard exactly and
 * enforces safe limits on a public internet endpoint. The client performs
 * its own UX validation; this schema is the server-side source of truth.
 */

export const QUOTE_SERVICES = [
  "Academic & Research Support",
  "Business Research & Consulting",
  "Foreign Accounting & Ledger Support",
  "Business & Startup Support",
  "Content & Professional Writing",
  "Data & Research Services",
  "Digital & Administrative Support",
  "Custom Multi-Disciplinary Project",
] as const;

export const QUOTE_DEADLINES = ["Flexible", "< 1 Week", "1–2 Weeks", "2–4 Weeks", "1+ Month", "Retainer"] as const;

export const QUOTE_BUDGETS = [
  "Flexible / Open",
  "Under $250",
  "$250 – $750",
  "$750 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
] as const;

export const QUOTE_CURRENCIES = ["USD", "EUR", "GBP", "INR", "AUD", "CAD"] as const;

export const QUOTE_STRUCTURES = [
  "Single Milestone Deliverable",
  "Multi-Milestone Project",
  "Ongoing Monthly Support",
] as const;

export const QUOTE_CHANNELS = ["Email", "WhatsApp", "Call / Zoom"] as const;

export const QUOTE_STATUSES = ["NEW", "IN_REVIEW", "CONTACTED", "COMPLETED", "CANCELLED"] as const;

/** Per-batch file metadata cap — matches the wizard's UI limit of 8 files. */
const MAX_FILES = 8;

/**
 * Optional free-text field. The wizard sends empty strings for optional
 * inputs; this helper collapses them to `undefined` so storage stays clean.
 */
export function optionalText(max: number) {
  return z
    .union([z.literal(""), z.string().trim().min(1).max(max)])
    .optional()
    .transform((value) => (value === "" ? undefined : value));
}

const attachedFileSchema = z.object({
  /** Display file name only — never file contents. */
  name: z.string().trim().min(1).max(255),
  /** User-facing size string from the wizard (e.g. "2.4 MB"). */
  size: z.string().trim().min(1).max(20),
});

export const quoteRequestSchema = z.object({
  service: z.enum(QUOTE_SERVICES),
  title: z.string().trim().min(3).max(200),
  description: z.string().trim().min(10).max(4000),
  outcome: optionalText(300),
  deadline: z.enum(QUOTE_DEADLINES),
  budget: z.enum(QUOTE_BUDGETS),
  currency: z.enum(QUOTE_CURRENCIES),
  structure: z.enum(QUOTE_STRUCTURES),
  files: z.array(attachedFileSchema).max(MAX_FILES).default([]),
  contactName: z.string().trim().min(2).max(120),
  contactOrg: optionalText(150),
  contactEmail: z.email().trim().max(254).toLowerCase(),
  contactPhone: optionalText(40),
  contactCountry: optionalText(80),
  preferredChannel: z.enum(QUOTE_CHANNELS),
  notes: optionalText(2000),
  /** Privacy-policy consent checkbox — must be explicitly accepted. */
  consent: z.literal(true, {
    message: "Consent to the privacy policy is required before submission.",
  }),
  /**
   * Honeypot field. Never rendered by the wizard; a populated value
   * indicates an automated/bot submission.
   */
  website: optionalText(200),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
export type QuoteRequestInput = z.input<typeof quoteRequestSchema>;
export type QuoteService = (typeof QUOTE_SERVICES)[number];
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

/** Fields the wizard actually renders as required. */
export const REQUIRED_QUOTE_FIELDS = [
  "service",
  "title",
  "description",
  "contactName",
  "contactEmail",
  "consent",
] as const;
