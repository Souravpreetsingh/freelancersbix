import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const SECTIONS: { num: string; title: string; desc: string }[] = [
  {
    num: "Section 01",
    title: "Executive Overview",
    desc: "High-level synthesis of mission, thesis, and milestones.",
  },
  {
    num: "Section 02",
    title: "Market Analysis",
    desc: "Industry dimensioning, demand trends, and customer segments.",
  },
  {
    num: "Section 03",
    title: "Competitive Analysis",
    desc: "Direct vs indirect rivals, moats, and differentiation factors.",
  },
  {
    num: "Section 04",
    title: "Business Model",
    desc: "Revenue architecture, monetization levers, and unit economics.",
  },
  {
    num: "Section 05",
    title: "Operations",
    desc: "Supply chain, delivery workflows, technical stack, and personnel.",
  },
  {
    num: "Section 06",
    title: "Marketing & Growth",
    desc: "Acquisition channels, go-to-market strategies, and brand positioning.",
  },
  {
    num: "Section 07",
    title: "Financial Considerations",
    desc: "Cost structures, margin assumptions, and working capital needs.",
  },
  {
    num: "Section 08",
    title: "Risk & Considerations",
    desc: "Execution vulnerabilities, market variables, and mitigation plans.",
  },
];

export function StartupBusinessPlan() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Document Architecture"
        title="A business plan built around evidence and structure."
        lead="Cohesive synthesis across 8 foundational document pillars designed for stakeholder clarity."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm mb-space-md">
        {SECTIONS.map((section) => (
          <div
            key={section.num}
            className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between min-h-[140px]"
          >
            <span className="font-label-sm text-label-sm text-deep-sage font-semibold uppercase">{section.num}</span>
            <h4 className="font-headline-sm text-headline-sm text-primary">{section.title}</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{section.desc}</p>
          </div>
        ))}
      </div>
      <div className="p-space-md bg-surface-container rounded-lg flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <MaterialIcon name="verified" className="text-[16px] text-signal-green" />
        <span>
          Disclaimer: The scope and structure of a business plan vary according to the business, audience and intended
          use.
        </span>
      </div>
    </section>
  );
}
