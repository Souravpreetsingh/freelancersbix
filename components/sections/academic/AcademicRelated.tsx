import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const cards = [
  {
    icon: "dataset",
    title: "Data & Research Services",
    body: "Advanced statistical computing, big-data processing, and custom research scrapers for cross-domain projects.",
    cta: "Explore Data Services",
    href: "/services/data-and-research",
  },
  {
    icon: "edit_note",
    title: "Content & Professional Writing",
    body: "Executive summaries, whitepapers, thought leadership articles, and publication-ready communications.",
    cta: "Explore Writing Services",
    href: "/services/content-and-writing",
  },
  {
    icon: "insights",
    title: "Business Research & Consulting",
    body: "Competitor intelligence, market feasibility studies, financial projections, and strategic corporate frameworks.",
    cta: "Explore Business Services",
    href: "/services/business-and-consulting",
  },
] as const;

export function AcademicRelated() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Interconnected Support"
          title="You May Also Need"
          containerClassName="mb-space-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-md hover:bg-surface-container transition-all group"
            >
              <div>
                <MaterialIcon name={card.icon} className="text-signal-green text-[32px] mb-space-md" />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{card.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">{card.body}</p>
              </div>
              <Link
                href={card.href}
                className="inline-flex items-center font-label-sm text-label-sm text-signal-green group-hover:text-primary transition-colors"
              >
                <span>{card.cta}</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
