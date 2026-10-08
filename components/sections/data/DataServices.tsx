import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const services: { num: string; icon: IconName; title: string; body: string }[] = [
  {
    num: "01",
    icon: "database",
    title: "Data Collection",
    body: "Organize, harvest, and systematically catalog relevant information according to specific project parameters and regulatory compliance standards.",
  },
  {
    num: "02",
    icon: "cleaning_services",
    title: "Data Cleaning",
    body: "Identify formatting inconsistencies, redundant duplicate rows, missing values, syntax errors, and structural dataset anomalies.",
  },
  {
    num: "03",
    icon: "table_chart",
    title: "Excel & Spreadsheet Work",
    body: "Create, architect, and optimize robust spreadsheet models featuring structured formulas, dynamic tables, and auditing checks.",
  },
  {
    num: "04",
    icon: "fact_check",
    title: "Survey Data Analysis",
    body: "Organize categorical and Likert scale responses, run frequency breakdowns, build cross-tabulations, and extract statistical patterns.",
  },
  {
    num: "05",
    icon: "equalizer",
    title: "Statistical Analysis Support",
    body: "Deliver disciplined quantitative execution including descriptive metrics, regression modeling, variance testing, and hypothesis checks.",
  },
  {
    num: "06",
    icon: "pie_chart",
    title: "Data Visualization",
    body: "Transform tabular complexities into clean, high-impact graphical summaries, comparative charts, and publication-ready visual assets.",
  },
  {
    num: "07",
    icon: "psychology",
    title: "Research Data Interpretation",
    body: "Help translate quantitative correlations into cogent, contextual insights that inform commercial strategy or scholarly hypotheses.",
  },
  {
    num: "08",
    icon: "article",
    title: "Custom Research Reports",
    body: "Synthesize literature reviews, empirical datasets, and analytical findings into executive-level dossiers and presentation decks.",
  },
  {
    num: "09",
    icon: "folder_special",
    title: "Research Data Organization",
    body: "Codify variable schemes, define codebooks, construct systematic folder structures, and ensure reproducible research standards.",
  },
];

export function DataServices() {
  return (
    <section
      id="services-catalog"
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Core Practice Offerings
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Data &amp; Research Services
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Structured support across the full analytical lifecycle — from messy raw exports to presentation-ready,
            decision-ready conclusions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {services.map((service) => (
            <Link
              key={service.num}
              href="/contact"
              className="group p-space-xl rounded-xl bg-surface-container-low/70 hover:bg-surface-container border border-outline-variant flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-headline-sm text-headline-sm font-mono text-outline group-hover:text-secondary transition-colors">
                    {service.num}
                  </span>
                  <span className="w-10 h-10 rounded-lg bg-surface-container text-primary group-hover:bg-signal-green/20 group-hover:text-secondary flex items-center justify-center transition-colors">
                    <MaterialIcon name={service.icon} className="text-[22px]" />
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{service.body}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-secondary group-hover:text-primary font-label-md text-label-md mt-space-lg transition-colors">
                Discuss Requirement
                <MaterialIcon
                  name="arrow_forward"
                  className="text-[18px] group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-space-2xl p-space-lg rounded-xl bg-gradient-to-r from-surface-container via-surface-container-low to-surface-container border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="w-12 h-12 rounded-lg bg-signal-green/20 text-secondary flex items-center justify-center shrink-0">
              <MaterialIcon name="support_agent" className="text-[24px]" />
            </span>
            <div>
              <h4 className="font-label-xl text-label-xl text-primary font-semibold">
                Have a Custom Data or Research Requirement?
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Connect directly with our specialized analytical desk to review data sets, NDAs, and delivery scopes.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-space-xl py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Speak with our Analytical Team
          </Link>
        </div>
      </div>
    </section>
  );
}
