import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const BLOCKS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "public",
    title: "Market",
    desc: "Market characteristics, maturity indices, macro demand drivers, and relevant sectoral trends.",
  },
  {
    icon: "psychology",
    title: "Customers",
    desc: "Target segments, user behaviors, operational needs, decision drivers, and buying considerations.",
  },
  {
    icon: "hub",
    title: "Competition",
    desc: "Competitor landscapes, positioning vectors, pricing matrices, and visible market differences.",
  },
  {
    icon: "radar",
    title: "Opportunities",
    desc: "Underserved niches, operational white space, and potential high-probability areas for investigation.",
  },
];

export function StartupResearch() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
            Startup Research
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight">
            Research before committing resources.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Early capital and operational momentum are finite. Validating foundational premises through rigorous desk
            research, competitive profiling, and market scanning mitigates premature deployment of capital.
          </p>
          <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface-variant font-label-sm text-label-sm">
            <MaterialIcon name="fact_check" className="text-[16px] text-signal-blue" />
            <span>Illustrative research framework tailored to early-stage decision validation.</span>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-sm hover:bg-surface-container transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-signal-blue">
                <MaterialIcon name={block.icon} className="text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{block.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
