import { z } from "zod";
import { optionalText } from "@/lib/validation/quote";

/** Must match the Discipline options rendered by CareerForm exactly. */
export const CAREER_DISCIPLINES = [
  "research",
  "business",
  "accounting",
  "data",
  "content",
  "digital",
  "hr",
  "tech",
  "other",
] as const;

/** Must match the Experience options rendered by CareerForm exactly. */
export const CAREER_EXPERIENCE = ["entry", "1-3", "3-5", "5+"] as const;

export const careerApplicationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().trim().max(254).toLowerCase(),
  phone: optionalText(40),
  discipline: z.enum(CAREER_DISCIPLINES),
  experience: z.enum(CAREER_EXPERIENCE).default("entry"),
  role: optionalText(120),
  portfolioUrl: optionalText(300),
  /** Display name of the selected resume file only — file bytes are NOT accepted. */
  resumeFilename: optionalText(255),
  summary: optionalText(2000),
  /** Honeypot field. Never rendered by the form; a populated value indicates a bot. */
  website: optionalText(200),
});

export type CareerApplication = z.infer<typeof careerApplicationSchema>;
export type CareerDiscipline = (typeof CAREER_DISCIPLINES)[number];
