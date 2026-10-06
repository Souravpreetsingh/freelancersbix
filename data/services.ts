import type { IconName } from "@/lib/design/icons";

export interface Service {
  slug: string;
  /** Short label used in footer navigation (verbatim from the export). */
  label: string;
  /** Full heading used on cards (verbatim from the export). */
  title: string;
  href: string;
  icon: IconName;
  /** Card copy, verbatim from the approved home export. */
  description: string;
}

/** Service routes and approved copy. */
export const services: Service[] = [
  {
    slug: "academic-and-research",
    label: "Academic & Research",
    title: "Academic & Research Support",
    href: "/services/academic-and-research",
    icon: "school",
    description:
      "Research papers, literature reviews, dissertations, thesis support, case studies, assignments, proposals, editing and research assistance.",
  },
  {
    slug: "business-and-consulting",
    label: "Business & Consulting",
    title: "Business Research & Consulting",
    href: "/services/business-and-consulting",
    icon: "query_stats",
    description:
      "Market research, competitor analysis, business plans, feasibility studies, SWOT, PESTLE and comprehensive business research.",
  },
  {
    slug: "foreign-accounting",
    label: "Foreign Accounting",
    title: "Foreign Accounting",
    href: "/services/foreign-accounting",
    icon: "account_balance",
    description:
      "Bookkeeping, accounts payable and receivable, payroll, bank reconciliation, financial reporting and comprehensive accounting support.",
  },
  {
    slug: "business-and-startup",
    label: "Business & Startup",
    title: "Business & Startup Support",
    href: "/services/business-and-startup",
    icon: "rocket_launch",
    description:
      "Startup documentation, business models, pitch decks, market-entry research, and end-to-end operational roadmap support.",
  },
  {
    slug: "content-and-writing",
    label: "Content & Writing",
    title: "Content & Professional Writing",
    href: "/services/content-and-writing",
    icon: "edit_note",
    description:
      "Business content, website content, blogs, technical writing, corporate reports, documentation, editing and precise proofreading.",
  },
  {
    slug: "data-and-research",
    label: "Data & Research",
    title: "Data & Research Services",
    href: "/services/data-and-research",
    icon: "dataset",
    description:
      "Data collection, cleansing, advanced Excel modeling, survey analysis, statistical support, visualization and research interpretation.",
  },
  {
    slug: "digital-support",
    label: "Digital Support",
    title: "Digital & Administrative Support",
    href: "/services/digital-support",
    icon: "support_agent",
    description:
      "Virtual assistance, data entry, document formatting, lead research, administrative workflows, and structured digital file management support.",
  },
];
