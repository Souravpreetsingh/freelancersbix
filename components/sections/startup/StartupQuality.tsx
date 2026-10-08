import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const PILLARS: { num: string; title: string; desc: string }[] = [
  {
    num: "01",
    title: "Clarity",
    desc: "Make the business idea, requirement or strategy easier to understand for diverse reader groups.",
  },
  {
    num: "02",
    title: "Structure",
    desc: "Organize complex information into logical, professional sections that facilitate straightforward analysis.",
  },
  {
    num: "03",
    title: "Research",
    desc: "Support planning with verifiable information, industry context, and objective competitor benchmarking.",
  },
  {
    num: "04",
    title: "Practicality",
    desc: "Focus on deliverables that can be understood and used immediately in the intended business context.",
  },
];

export function StartupQuality() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading
        eyebrow="Standard of Work"
        title="Quality Framework"
        lead="Every document and analysis conforms to four non-negotiable operational principles."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm hover:bg-surface-container transition-colors"
          >
            <span className="font-headline-sm text-headline-sm text-deep-sage font-bold">{pillar.num}</span>
            <h3 className="font-headline-sm text-headline-sm text-primary">{pillar.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
