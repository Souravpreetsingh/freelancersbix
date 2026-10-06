import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const USE_CASES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "travel_explore",
    title: "Entering a New Market",
    desc: "Evaluate geographic demographics, localized customer behavior, barrier-to-entry regulations, and distribution partnerships.",
  },
  {
    icon: "psychology_alt",
    title: "Evaluating a Business Idea",
    desc: "Stress-test assumptions against real-world alternatives, customer willingness-to-pay, and required unit economics.",
  },
  {
    icon: "visibility",
    title: "Understanding Competitors",
    desc: "Demystify competitor product roadmaps, pricing models, marketing strategies, and churn weaknesses.",
  },
  {
    icon: "rocket",
    title: "Planning a Startup",
    desc: "Build investor-grade pitch documents with defensible market size estimates, operating assumptions, and risk buffers.",
  },
  {
    icon: "analytics",
    title: "Preparing Management Reports",
    desc: "Equip board meetings, executive committees, and partners with objective data synthesis rather than subjective hunches.",
  },
  {
    icon: "chevron_left",
    title: "Supporting Strategic Decisions",
    desc: "Provide the required analytical backing when deciding whether to pivot, scale, discontinue, or acquire product lines.",
  },
];

export function BusinessUseCases() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Strategic Applications"
        title="Where Business Research Can Create Clarity"
        lead="Empirical business research solves tangible operational inflection points across organizations."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold"
        containerClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {USE_CASES.map((item) => (
          <div
            key={item.title}
            className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-signal-blue mb-space-sm">
                <MaterialIcon name={item.icon} className="text-[18px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
