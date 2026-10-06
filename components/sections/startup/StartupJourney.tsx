import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const STAGES: { num: string; title: string; desc: string }[] = [
  { num: "01", title: "Define", desc: "Clarify the idea, objective and business requirement." },
  { num: "02", title: "Research", desc: "Understand the market, customers, competitors and industry context." },
  { num: "03", title: "Structure", desc: "Organize the business model, strategy and operational requirements." },
  { num: "04", title: "Plan", desc: "Develop the business plan, documentation or pitch materials." },
  { num: "05", title: "Refine", desc: "Review the structure, clarity and consistency of the materials." },
  { num: "06", title: "Deliver", desc: "Provide the agreed professional deliverables and assets." },
];

export function StartupJourney() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading eyebrow="Systematic Flow" title="From idea to structured business direction." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-sm">
        {STAGES.map((stage) => (
          <div key={stage.num} className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-headline-md text-signal-blue font-bold">{stage.num}</span>
              <span className="font-label-sm text-label-sm uppercase text-twilight-blue font-semibold">Stage</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">{stage.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{stage.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
