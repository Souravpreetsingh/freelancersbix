import { ServiceRelated, type ServiceRelatedItem } from "@/components/sections/service/ServiceRelated";

const RELATED: ServiceRelatedItem[] = [
  {
    path: "/services/business-and-consulting",
    icon: "corporate_fare",
    title: "Business Research & Consulting",
    description: "Deep market intelligence and feasibility modeling.",
  },
  {
    path: "/services/foreign-accounting",
    icon: "account_balance",
    title: "Foreign Accounting",
    description: "Cross-border book management and reconciliations.",
  },
  {
    path: "/services/data-and-research",
    icon: "analytics",
    title: "Data & Research Services",
    description: "Data collection, analytics, and business reporting.",
  },
  {
    path: "/services/content-and-writing",
    icon: "draw",
    title: "Content & Professional Writing",
    description: "Executive summaries and corporate messaging.",
  },
  {
    path: "/services/digital-support",
    icon: "devices",
    title: "Digital & Administrative Support",
    description: "Virtual assistance and operational data entry.",
  },
];

export function StartupRelated() {
  return <ServiceRelated eyebrow="Ecosystem" title="Explore related services" items={RELATED} />;
}
