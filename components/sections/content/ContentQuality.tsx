import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

interface QualityCard {
  icon: IconName;
  title: string;
  body: string;
  footer: string;
}

const cards: QualityCard[] = [
  {
    icon: "visibility",
    title: "Clarity",
    body: "Eliminates ambiguity. Make the primary message immediately understandable and effortless to follow without dense jargon.",
    footer: "PRINCIPLE 01 // DIRECTNESS",
  },
  {
    icon: "account_tree",
    title: "Structure",
    body: "Organize information with a disciplined hierarchy so readers can scan, locate insights, and absorb conclusions rapidly.",
    footer: "PRINCIPLE 02 // LOGIC",
  },
  {
    icon: "fact_check",
    title: "Accuracy",
    body: "Verify every supporting assertion. Ensure factual integrity, consistent nomenclature, and verified citation standards throughout.",
    footer: "PRINCIPLE 03 // INTEGRITY",
  },
  {
    icon: "ads_click",
    title: "Purpose",
    body: "Align tone with strategic context. Ensure content actively serves the client's objective—whether to persuade, inform, or align.",
    footer: "PRINCIPLE 04 // IMPACT",
  },
];

export function ContentQuality() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Institutional Standard
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            A better framework for professional writing.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {cards.map((card) => (
            <div
              key={card.footer}
              className="p-space-lg rounded-xl bg-surface-container border border-whiteout/10 flex flex-col justify-between"
            >
              <div>
                <MaterialIcon name={card.icon} className="text-signal-blue text-[28px] mb-space-md" />
                <h3 className="font-headline-sm text-headline-sm text-whiteout mb-space-xs font-semibold">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{card.body}</p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-whiteout/5 font-mono text-[11px] text-twilight-blue">
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
