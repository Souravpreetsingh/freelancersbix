import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const PILLARS: { num: string; title: string; icon: IconName; tag: string; desc: string }[] = [
  {
    num: "PILLAR 01",
    title: "Relevance",
    icon: "filter_center_focus",
    tag: "Targeted Scope",
    desc: "Focus research around the actual commercial question and project objectives, deliberately filtering out tangential or distracting white noise.",
  },
  {
    num: "PILLAR 02",
    title: "Evidence",
    icon: "policy",
    tag: "Sourced References",
    desc: "Draw strictly upon verified sources, recognized industry publications, regulatory filings, and clearly organized empirical evidence.",
  },
  {
    num: "PILLAR 03",
    title: "Analysis",
    icon: "insights",
    tag: "Deep Synthesis",
    desc: "Move decisively past simple information compilation toward meaningful comparative analysis, stress tests, and pattern interpretation.",
  },
  {
    num: "PILLAR 04",
    title: "Clarity",
    icon: "visibility",
    tag: "Actionable Format",
    desc: "Present complex findings in executive-ready formats that leadership teams and outside investors can immediately review and act upon.",
  },
];

export function BusinessQuality() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <ServiceSectionHeading
        eyebrow="Institutional Standards"
        title="A Structured Approach to Business Research"
        lead="Our research practice operates against four foundational pillars ensuring high reliability and clarity in every delivered engagement."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold"
        containerClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md"
          >
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm font-mono text-signal-blue font-bold">{pillar.num}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary">{pillar.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
            </div>
            <div className="pt-space-md text-twilight-blue flex items-center gap-1 font-label-sm">
              <MaterialIcon name={pillar.icon} className="text-[16px]" />
              <span>{pillar.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
