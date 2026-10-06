export interface NavLink {
  label: string;
  href: string;
}

/** Header navigation, verbatim labels from the export. */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Foreign Accounting", href: "/services/foreign-accounting" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Footer navigation, verbatim headings and labels from the export. */
export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Academic & Research", href: "/services/academic-and-research" },
      { label: "Business & Consulting", href: "/services/business-and-consulting" },
      { label: "Foreign Accounting", href: "/services/foreign-accounting" },
      { label: "Business & Startup", href: "/services/business-and-startup" },
      { label: "Content & Writing", href: "/services/content-and-writing" },
      { label: "Data & Research", href: "/services/data-and-research" },
      { label: "Digital Support", href: "/services/digital-support" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Insights / Blog", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];
