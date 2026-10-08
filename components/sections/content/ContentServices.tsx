import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

interface ContentService {
  num: string;
  icon: IconName;
  title: string;
  body: string;
}

const services: ContentService[] = [
  {
    num: "01",
    icon: "corporate_fare",
    title: "Business Content Writing",
    body: "Professional written content for business communications, executive outreach, operational manuals, and corporate collateral.",
  },
  {
    num: "02",
    icon: "language",
    title: "Website Content",
    body: "Clear, purposeful web copy structured across landing pages, core capability hubs, service profiles, and value propositions.",
  },
  {
    num: "03",
    icon: "article",
    title: "Blog & Article Writing",
    body: "Research-based long-form articles, industry thought leadership, and editorial commentaries organized around defined reader intent.",
  },
  {
    num: "04",
    icon: "code",
    title: "Technical Writing",
    body: "Rigorous documentation for software platforms, engineering workflows, standard operating procedures (SOPs), and user manuals.",
  },
  {
    num: "05",
    icon: "biotech",
    title: "Research-Based Content",
    body: "Content anchored in academic and market research, structured empirical evidence, citation indices, and technical references.",
  },
  {
    num: "06",
    icon: "assignment",
    title: "Reports & Documentation",
    body: "Comprehensive business dossiers, operational audits, formal investor updates, research reports, and institutional records.",
  },
  {
    num: "07",
    icon: "auto_fix_high",
    title: "Professional Editing",
    body: "Substantive rewriting to elevate structural coherence, tone uniformity, rhetorical force, and professional alignment.",
  },
  {
    num: "08",
    icon: "spellcheck",
    title: "Proofreading",
    body: "Meticulous final review eliminating typographical errors, syntax flaws, punctuation inconsistencies, and styling discrepancies.",
  },
  {
    num: "09",
    icon: "slideshow",
    title: "Presentation Content",
    body: "Slide deck narrative structuring, keynote speechwriting, executive summaries, and pitch decks designed for immediate comprehension.",
  },
];

export function ContentServices() {
  return (
    <section id="services-inventory" className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Comprehensive Capabilities
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            Content &amp; Professional Writing Services
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Professional writing and documentation tailored for diverse corporate, institutional, and research
            applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((service) => (
            <div
              key={service.num}
              className="group p-space-lg rounded-xl bg-surface-container border border-outline-variant hover:border-signal-green/50 hover:bg-surface-container-high transition-all flex flex-col justify-between"
            >
              <span className="font-mono text-label-sm text-on-surface-variant group-hover:text-signal-green transition-colors">
                {service.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-signal-green group-hover:text-on-primary transition-all">
                <MaterialIcon name={service.icon} className="text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-semibold">
                {service.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{service.body}</p>
              <Link
                href="/contact"
                className="pt-space-md flex items-center gap-1 font-label-sm text-label-sm text-signal-green font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span>Request Service</span>
                <MaterialIcon name="arrow_forward" className="text-[14px]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
