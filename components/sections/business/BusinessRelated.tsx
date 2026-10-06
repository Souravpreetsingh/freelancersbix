import { ServiceRelated, type ServiceRelatedItem } from "@/components/sections/service/ServiceRelated";

const RELATED: ServiceRelatedItem[] = [
  {
    path: "/services/academic-and-research",
    icon: "school",
    title: "Academic & Research",
    description: "Literature reviews, methodology design, academic sourcing, and scholarly writing support.",
  },
  {
    path: "/services/foreign-accounting",
    icon: "receipt_long",
    title: "Foreign Accounting",
    description: "Cross-border bookkeeping, international VAT/tax compliance, and multi-currency reconciliations.",
  },
  {
    path: "/services/data-and-research",
    icon: "analytics",
    title: "Data & Research Services",
    description: "Comprehensive quantitative analysis, database architecture, econometric modeling, and reporting.",
  },
  {
    path: "/services/business-and-startup",
    icon: "rocket_launch",
    title: "Business & Startup Support",
    description: "Pitch deck production, incorporation consulting, investor due-diligence readiness, and modeling.",
  },
];

export function BusinessRelated() {
  return (
    <ServiceRelated
      eyebrow="Complementary Capabilities"
      title="Explore Related FreelancersBix Services"
      lead="Connect strategic consulting seamlessly with operational execution across our global multi-disciplinary platform."
      items={RELATED}
      ctaLabel="View Practice"
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg"
      cardClassName="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-colors shadow-md group"
    />
  );
}
