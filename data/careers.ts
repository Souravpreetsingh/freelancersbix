import { CAREER_DISCIPLINES, CAREER_EXPERIENCE } from "@/lib/validation/career";

/** Value → display-label maps for the careers surface (single source of truth). */

export const CAREER_DISCIPLINE_LABELS: Record<(typeof CAREER_DISCIPLINES)[number], string> = {
  research: "Academic & Research",
  business: "Business & Strategy Consulting",
  accounting: "Foreign Accounting & Bookkeeping",
  data: "Data Analysis & Visualization",
  content: "Content Writing & Editorial",
  digital: "Digital Operations / VA",
  hr: "Human Resources & Recruitment",
  tech: "Technology & Infrastructure",
  other: "Other Interdisciplinary",
};

export const CAREER_EXPERIENCE_LABELS: Record<(typeof CAREER_EXPERIENCE)[number], string> = {
  entry: "Entry Level / Emerging Professional",
  "1-3": "1 to 3 Years",
  "3-5": "3 to 5 Years",
  "5+": "5+ Years Senior Specialist",
};

export const CAREER_DISCIPLINES_UI = CAREER_DISCIPLINES.map((value) => ({
  value,
  label: CAREER_DISCIPLINE_LABELS[value],
}));

export const CAREER_EXPERIENCE_UI = CAREER_EXPERIENCE.map((value) => ({
  value,
  label: CAREER_EXPERIENCE_LABELS[value],
}));
