import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

interface AcademicService {
  num: string;
  icon: IconName;
  title: string;
  body: string;
  badge?: string;
}

const services: AcademicService[] = [
  {
    num: "01",
    icon: "menu_book",
    title: "Academic Research Support",
    body: "Structured assistance with background studies, research scoping, concept framing, and literature-grounded rationale.",
  },
  {
    num: "02",
    icon: "article",
    title: "Research Papers & Reports",
    body: "Drafting, structuring, and refining peer-oriented papers, whitepapers, and formal technical research reports.",
  },
  {
    num: "03",
    icon: "find_in_page",
    title: "Literature Reviews",
    body: "Systematic and narrative literature reviews identifying core academic debates, methodological gaps, and conceptual models.",
  },
  {
    num: "04",
    icon: "school",
    title: "Dissertation & Thesis Support",
    body: "Comprehensive guidance across thesis chapters: proposal drafting, methodology framing, literature synthesis, and analysis.",
  },
  {
    num: "05",
    icon: "cases",
    title: "Case Studies",
    body: "Empirical case studies documenting real-world organizational phenomena, industry applications, and structured problem analyses.",
  },
  {
    num: "06",
    icon: "psychology",
    title: "PhD Research Assistance",
    body: "Specialized research consultation for doctoral scholars: epistemological design, quantitative matrices, and viva presentation prep.",
  },
  {
    num: "07",
    icon: "task",
    title: "Assignments & Course Projects",
    badge: "Ethics Compliant",
    body: "Structural layout, academic background research, and proofreading support aligned strictly with university integrity policies.",
  },
  {
    num: "08",
    icon: "format_quote",
    title: "Referencing & Citation",
    body: "Meticulous audit and conversion across APA 7th, Harvard, IEEE, Chicago, OSCOLA, and Vancouver styling guidelines.",
  },
  {
    num: "09",
    icon: "analytics",
    title: "Data Analysis & Interpretation",
    body: "Quantitative modeling (SPSS, R, Python, STATA) and qualitative thematic coding (NVivo) paired with clear narrative interpretation.",
  },
  {
    num: "10",
    icon: "spellcheck",
    title: "Academic Editing & Proofreading",
    body: "Rigorous line-by-line stylistic polishing, vocabulary precision, syntax enhancement, and logical flow enhancement.",
  },
  {
    num: "11",
    icon: "description",
    title: "Research Proposal Development",
    body: "Formulation of viable research questions, clear methodological designs, feasibility matrices, and timeline planning.",
  },
];

export function AcademicServices() {
  return (
    <section
      id="services-matrix"
      className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin"
    >
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Service Matrix"
          title="Academic & Research Services"
          lead="Structured support across the entire research lifecycle, from preliminary inquiry framing to analytical defense preparation."
          containerClassName="mb-space-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {services.map((service) => (
            <div
              key={service.num}
              className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-md hover:bg-surface-container transition-all group"
            >
              {service.badge ? (
                <span className="absolute top-0 right-0 bg-surface-container-highest px-3 py-1 rounded-bl-lg font-label-sm text-label-sm text-on-surface-variant">
                  {service.badge}
                </span>
              ) : null}
              <div className="flex items-start justify-between mb-space-md pt-space-sm">
                <span className="font-label-md text-label-md font-bold tracking-widest text-signal-green">
                  {service.num}
                </span>
                <MaterialIcon
                  name={service.icon}
                  className="text-on-surface-variant group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{service.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">{service.body}</p>
              <Link
                href="/contact"
                className="inline-flex items-center font-label-sm text-label-sm text-signal-green group-hover:text-primary transition-colors"
              >
                <span>Discuss Research Support</span>
                <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
              </Link>
            </div>
          ))}
          <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-center items-start shadow-md">
            <span className="font-label-sm text-label-sm text-signal-green uppercase font-bold mb-space-xs">
              Custom Scope
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              Have a unique multidisciplinary project?
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              We adapt research methods and analytical pipelines to custom institutional or industry briefs.
            </p>
            <Link
              href="/contact"
              className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all"
            >
              <span>Submit Custom Brief →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
