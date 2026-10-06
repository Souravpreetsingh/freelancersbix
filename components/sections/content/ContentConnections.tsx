import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const cards = [
  {
    eyebrow: "Academic & Research",
    title: "Need deep research support behind the writing?",
    body: "Pair your documentation with our literature reviews, empirical methodology frameworks, and secondary data synthesis.",
    cta: "Explore Academic & Research",
    href: "/services/academic-and-research",
  },
  {
    eyebrow: "Business Advisory",
    title: "Need content for a commercial requirement?",
    body: "Combine strategic consulting, market competitor analysis, and financial feasibility models directly into your executive collateral.",
    cta: "Explore Business Research",
    href: "/services/business-and-consulting",
  },
  {
    eyebrow: "Operational Execution",
    title: "Need digital implementation support?",
    body: "Leverage our digital support infrastructure for CMS publishing, document layout formatting, and presentation styling.",
    cta: "Explore Digital Support",
    href: "/services/digital-support",
  },
] as const;

export function ContentConnections() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Connected Practices
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            Need specialized assistance alongside writing?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {cards.map((card) => (
            <div
              key={card.cta}
              className="p-space-lg rounded-xl bg-surface-container border border-whiteout/10 flex flex-col justify-between"
            >
              <div>
                <span className="font-label-sm text-label-sm text-signal-blue uppercase font-mono">{card.eyebrow}</span>
                <h3 className="font-headline-sm text-headline-sm text-whiteout mt-1 mb-space-xs font-semibold">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{card.body}</p>
              </div>
              <div className="pt-space-lg">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-whiteout hover:text-signal-blue transition-colors font-medium"
                >
                  <span>{card.cta}</span>
                  <MaterialIcon name="arrow_forward" className="text-[14px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
