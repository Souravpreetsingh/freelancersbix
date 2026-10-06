import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const STAGES: { num: string; title: string; desc: string }[] = [
  {
    num: "STAGE 01",
    title: "Understand",
    desc: "Define core business questions, context, and exact analytical scope.",
  },
  {
    num: "STAGE 02",
    title: "Research",
    desc: "Collect data from verified secondary databases, filings, and industry sources.",
  },
  {
    num: "STAGE 03",
    title: "Compare",
    desc: "Organize disparate findings into structured matrices and relative baselines.",
  },
  {
    num: "STAGE 04",
    title: "Analyse",
    desc: "Identify statistical patterns, operational bottlenecks, and untapped market niches.",
  },
  {
    num: "STAGE 05",
    title: "Interpret",
    desc: "Translate mathematical correlations into concrete commercial opportunities.",
  },
  {
    num: "STAGE 06",
    title: "Present",
    desc: "Publish comprehensive decks, documentation, and executive decision summaries.",
  },
];

export function BusinessFramework() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl relative overflow-hidden">
        <ServiceSectionHeading
          eyebrow="Our Research Framework"
          title="From Business Question to Actionable Insight"
          lead="A six-stage disciplined protocol converting initial questions into verified, professional institutional intelligence."
          containerClassName="flex flex-col gap-space-xs mb-space-xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-md relative">
          {STAGES.map((stage) => (
            <div
              key={stage.num}
              className="bg-surface-container p-space-md rounded-lg flex flex-col justify-between relative"
            >
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm font-mono text-signal-blue font-bold">{stage.num}</span>
                <h3 className="font-headline-sm text-body-lg text-primary font-semibold">{stage.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
