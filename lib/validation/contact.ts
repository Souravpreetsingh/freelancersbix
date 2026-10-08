import { z } from "zod";
import { optionalText } from "@/lib/validation/quote";

export const CONTACT_STATUSES = ["NEW", "RESPONDED", "ARCHIVED"] as const;

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().trim().max(254).toLowerCase(),
  phone: optionalText(40),
  subject: optionalText(200),
  message: z.string().trim().min(10).max(4000),
  /** Privacy-policy consent checkbox — must be explicitly accepted. */
  consent: z.literal(true, {
    message: "Consent to the privacy policy is required before sending a message.",
  }),
  /** Honeypot field. Never rendered by the form; a populated value indicates a bot. */
  website: optionalText(200),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
export type ContactStatus = (typeof CONTACT_STATUSES)[number];
