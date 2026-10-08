import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const cards: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "summarize",
    title: "Business Reports",
    body: "Analytical market overviews, quarterly shareholder briefs, and operational assessment summaries.",
  },
  {
    icon: "web",
    title: "Website Copy",
    body: "Converting corporate landing pages, solution overviews, and capability summaries tailored for enterprise buyers.",
  },
  {
    icon: "description",
    title: "Business Documents",
    body: "Formal RFP proposals, partnership memoranda, standard operating protocols, and executive briefs.",
  },
  {
    icon: "co_present",
    title: "Presentation Content",
    body: "Slide architecture, talking points, board-level slide decks, and conference address materials.",
  },
];

export function ContentBusiness() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Business Communication
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight leading-tight">
            Professional writing for professional environments.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            In executive environments, poorly constructed messaging costs credibility and delays contracts. We construct
            high-impact documentation that respects reader time and establishes institutional authority.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg font-medium px-space-xl py-space-md rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>Get a Quote</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          {cards.map((card) => (
            <div key={card.title} className="p-space-lg rounded-xl bg-surface-container border border-outline-variant">
              <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-signal-green mb-space-sm">
                <MaterialIcon name={card.icon} className="text-[18px]" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-semibold">{card.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
