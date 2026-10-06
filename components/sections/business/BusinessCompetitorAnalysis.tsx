import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const PILLARS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "target",
    title: "Positioning",
    desc: "Evaluating how rival enterprises articulate brand promises, tier their pricing, and occupy perceived market spaces.",
  },
  {
    icon: "category",
    title: "Offerings",
    desc: "Deconstructing feature matrices, deliverable packaging, and specific technological advantages of peer alternatives.",
  },
  {
    icon: "troubleshoot",
    title: "Strengths & Gaps",
    desc: "Identifying observable friction points, service blind spots, and unmet buyer desires across existing solutions.",
  },
  {
    icon: "public",
    title: "Market Context",
    desc: "Tracking regulatory adjustments, channel consolidation, and shifting macroeconomic drivers impacting all competitors.",
  },
];

export function BusinessCompetitorAnalysis() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <ServiceSectionHeading
        eyebrow="Competitive Landscape Analysis"
        title="Understand the Competitive Landscape"
        lead="A structured visual comparison reveals gaps in the current market, helping your organization carve out uncontested space."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold"
        containerClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
      />
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl mb-space-xl">
        <div className="flex items-center justify-between pb-space-md mb-space-md">
          <span className="font-headline-sm text-headline-sm text-primary">2x2 Strategic Positioning Matrix</span>
          <span className="font-label-sm text-label-sm text-twilight-blue uppercase font-mono">
            Demonstration visual
          </span>
        </div>
        <div className="relative w-full aspect-[16/9] max-h-96 bg-surface-container rounded-lg p-space-lg flex flex-col justify-between overflow-hidden">
          <span className="absolute top-3 left-1/2 -translate-x-1/2 font-label-sm text-label-sm uppercase tracking-wider text-twilight-blue font-mono">
            High ↑ Market Position &amp; Brand Authority
          </span>
          <span className="absolute bottom-3 right-6 font-label-sm text-label-sm uppercase tracking-wider text-twilight-blue font-mono">
            Offering Breadth → Comprehensive
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-px bg-surface-container-highest" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-px bg-surface-container-highest" />
          </div>
          <span className="absolute top-6 left-6 text-on-surface-variant/20 font-headline-md uppercase pointer-events-none">
            Niche Authority
          </span>
          <span className="absolute top-6 right-6 text-on-surface-variant/20 font-headline-md uppercase pointer-events-none">
            Dominant Leaders
          </span>
          <span className="absolute bottom-8 left-6 text-on-surface-variant/20 font-headline-md uppercase pointer-events-none">
            Challengers
          </span>
          <span className="absolute bottom-8 right-6 text-on-surface-variant/20 font-headline-md uppercase pointer-events-none">
            Volume Providers
          </span>
          <div className="absolute top-[28%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-surface-container-high/90 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-outline" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-primary font-medium">Competitor A</span>
              <span className="text-[10px] text-on-surface-variant">Boutique • High Margin</span>
            </div>
          </div>
          <div className="absolute top-[22%] right-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-surface-container-high/90 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-outline" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-primary font-medium">Competitor B</span>
              <span className="text-[10px] text-on-surface-variant">Incumbent Leader</span>
            </div>
          </div>
          <div className="absolute bottom-[25%] left-[28%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-surface-container-high/90 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-outline" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-primary font-medium">Competitor C</span>
              <span className="text-[10px] text-on-surface-variant">Low Cost Disruptor</span>
            </div>
          </div>
          <div className="absolute top-[42%] right-[32%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-signal-blue/20 px-3.5 py-2 rounded-xl shadow-lg ring-1 ring-signal-blue">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-signal-blue" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-whiteout font-bold">Your Target Opportunity</span>
              <span className="text-[10px] text-secondary font-medium">Optimal Value Sweet-Spot</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-xs shadow-md"
          >
            <MaterialIcon name={pillar.icon} className="text-signal-blue text-[22px]" />
            <h3 className="font-headline-sm text-headline-sm text-primary">{pillar.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
