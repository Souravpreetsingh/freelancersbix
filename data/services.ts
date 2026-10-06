export interface Service {
  slug: string;
  label: string;
  href: string;
}

/** Service routes, labels verbatim from the approved export footer. */
export const services: Service[] = [
  { slug: "academic-and-research", label: "Academic & Research", href: "/services/academic-and-research" },
  { slug: "business-and-consulting", label: "Business & Consulting", href: "/services/business-and-consulting" },
  { slug: "foreign-accounting", label: "Foreign Accounting", href: "/services/foreign-accounting" },
  { slug: "business-and-startup", label: "Business & Startup", href: "/services/business-and-startup" },
  { slug: "content-and-writing", label: "Content & Writing", href: "/services/content-and-writing" },
  { slug: "data-and-research", label: "Data & Research", href: "/services/data-and-research" },
  { slug: "digital-support", label: "Digital Support", href: "/services/digital-support" },
];
