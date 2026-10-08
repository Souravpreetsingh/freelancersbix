/**
 * Site-wide constants derived from the approved Stitch export.
 * Copy strings here are verbatim from the export (never invented).
 * Presentation values (colors, borders, buttons) follow the deep green x
 * cream x charcoal theme defined in tailwind.config.ts.
 */

export const SITE = {
  name: "FreelancersBix",
  /** Origin used for metadataBase, canonical URLs, sitemap and robots. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://freelancersbix.com",
  /** Approved homepage title (export has no title; supplied for SEO foundation). */
  title: "FreelancersBix | Professional Research, Business, Accounting & Digital Support",
  /** Verbatim home hero / footer description. */
  description:
    "Professional research, business, accounting, data and digital support for students, professionals, startups and businesses worldwide.",
  /** Verbatim brand tagline from footer. */
  tagline: "Research. Analyse. Create. Deliver.",
  /** Short supporting line from the home hero. */
  supportLine: "Structured expertise. Reliable delivery. Global support.",
  titleTemplate: "%s | FreelancersBix",
  /** Official contact channels - single source of truth for the whole site. */
  email: "info@freelancersbix.com",
  secondaryEmail: "freelancersbix@gmail.com",
  phone: "+91 9815922206",
  /** Dial target for the official phone (no spaces in tel: values). */
  phoneHref: "tel:+919815922206",
  /** Approved company description - About page, exact wording. */
  about:
    "Founded in 2020 and incorporated in 2022, FreelancersBix was built on a simple insight: research and business work usually fail for the same reason — no one owns the whole chain. So we don't split the process into disconnected handoffs. Scoping, analysis, drafting and delivery all sit under one accountable protocol, from start to finish.",
  /** Concise excerpt of the approved description for compact surfaces (home, footer). */
  aboutExcerpt:
    "Founded in 2020 and incorporated in 2022, FreelancersBix was built on a simple insight: research and business work usually fail for the same reason — no one owns the whole chain.",
} as const;

/**
 * Every route required by the approved design.
 * `/security` and `/services/digital-support` have no design reference yet:
 * they ship as named placeholders only.
 */
export const allRoutes = [
  "/",
  "/about",
  "/services",
  "/services/academic-and-research",
  "/services/business-and-consulting",
  "/services/foreign-accounting",
  "/services/business-and-startup",
  "/services/content-and-writing",
  "/services/data-and-research",
  "/services/digital-support",
  "/careers",
  "/insights",
  "/case-studies",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/security",
] as const;
