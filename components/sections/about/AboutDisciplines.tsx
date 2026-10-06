import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { IconName } from "@/lib/design/icons";

const DISCIPLINES: {
  index: string;
  icon: IconName;
  title: string;
  description: string;
  href: string;
  highlight?: boolean;
}[] = [
  {
    index: "01",
    icon: "school",
    title: "Academic & Research Support",
    description:
      "Literature reviews, research methodology, academic editing, dissertations, and analytical study support.",
    href: "/services/academic-and-research",
  },
  {
    index: "02",
    icon: "query_stats",
    title: "Business Research & Consulting",
    description:
      "Competitor benchmarks, industry market reports, feasibility assessments, and data-backed business strategy.",
    href: "/services/business-and-consulting",
  },
  {
    index: "03",
    icon: "account_balance",
    title: "Foreign Accounting",
    description:
      "US, UK, and Australian GAAP/IFRS bookkeeping, reconciliations, payroll administration, and financial reporting.",
    href: "/services/foreign-accounting",
    highlight: true,
  },
  {
    index: "04",
    icon: "rocket_launch",
    title: "Business & Startup Support",
    description:
      "Investor pitch decks, financial models, executive summaries, go-to-market roadmaps, and business planning.",
    href: "/services/business-and-startup",
  },
  {
    index: "05",
    icon: "edit_note",
    title: "Content & Professional Writing",
    description:
      "Whitepapers, technical documentation, corporate profiles, articles, and high-impact executive communications.",
    href: "/services/content-and-writing",
  },
  {
    index: "06",
    icon: "database",
    title: "Data & Research Services",
    description:
      "Data gathering, cleaning, SPSS/R/Excel statistical analysis, survey interpretation, and visualization dashboards.",
    href: "/services/data-and-research",
  },
  {
    index: "07",
    icon: "devices",
    title: "Digital & Administrative Support",
    description:
      "Workflow automation, project coordination, CRM maintenance, document formatting, and operational backlog clearing.",
    href: "/services/digital-support",
  },
];

export function AboutDisciplines() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Multiple disciplines. One professional support ecosystem."
          className="flex flex-col gap-space-xs"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {DISCIPLINES.map((item) => (
            <div
              key={item.index}
              className={
                item.highlight
                  ? "group p-space-lg rounded-xl bg-surface-container-high border-2 border-signal-blue relative flex flex-col justify-between min-h-[260px] shadow-[0_8px_32px_rgba(43,127,255,0.15)]"
                  : "group p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 hover:border-signal-blue/50 transition-all flex flex-col justify-between min-h-[260px]"
              }
            >
              {item.highlight ? (
                <div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-signal-blue text-black-void font-label-sm text-label-sm font-bold tracking-wide uppercase">
                  Primary Core Practice
                </div>
              ) : null}
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span
                    className={
                      item.highlight
                        ? "font-label-md text-label-md font-mono text-signal-blue"
                        : "font-label-md text-label-md font-mono text-on-surface-variant"
                    }
                  >
                    {item.index}
                  </span>
                  <MaterialIcon name={item.icon} className="text-signal-blue text-2xl" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold mb-space-xs">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
              </div>
              <Link
                href={item.href}
                className={
                  item.highlight
                    ? "inline-flex items-center gap-1 font-label-md text-label-md text-signal-blue font-bold mt-space-md group-hover:translate-x-1 transition-transform"
                    : "inline-flex items-center gap-1 font-label-md text-label-md text-primary font-medium mt-space-md group-hover:text-secondary group-hover:translate-x-1 transition-all"
                }
              >
                <span>Explore Service</span>
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const COHORTS: { monogram: string; title: string; description: string; tag: string }[] = [
  {
    monogram: "ST",
    title: "Students",
    description: "Academic research, projects, reports, analysis, documentation and research support.",
    tag: "HIGHER EDUCATION",
  },
  {
    monogram: "PR",
    title: "Professionals",
    description: "Research, content, documentation, data and productivity support.",
    tag: "CAREER & LEADERSHIP",
  },
  {
    monogram: "SU",
    title: "Startups",
    description: "Market research, business planning, pitch decks, operational documentation and strategic support.",
    tag: "VENTURE FORMATION",
  },
  {
    monogram: "BZ",
    title: "Businesses",
    description: "Accounting, research, data, administrative and business support for day-to-day and strategic needs.",
    tag: "OPERATIONAL SCALE",
  },
];

export function AboutCohorts() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built around the needs of modern clients."
          className="flex flex-col gap-space-xs"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {COHORTS.map((item) => (
            <div
              key={item.title}
              className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between min-h-[280px]"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-whiteout border border-outline-variant/40">
                  <span className="font-headline-sm text-headline-sm font-bold">{item.monogram}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-whiteout font-bold">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-mono">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
