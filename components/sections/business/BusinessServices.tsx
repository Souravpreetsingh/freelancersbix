import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const SERVICES: { num: string; icon: IconName; title: string; desc: string }[] = [
  {
    num: "01",
    icon: "analytics",
    title: "Market Research Reports",
    desc: "In-depth analysis of market size, emerging patterns, vertical segments, and target demographics for your sector.",
  },
  {
    num: "02",
    icon: "leaderboard",
    title: "Industry & Competitor Analysis",
    desc: "Benchmarking competitor capabilities, pricing architectures, market share, and untapped differentiation zones.",
  },
  {
    num: "03",
    icon: "assignment",
    title: "Business Plans",
    desc: "Comprehensive, evidence-based business plans crafted for investors, grant applications, and internal roadmaps.",
  },
  {
    num: "04",
    icon: "fact_check",
    title: "Feasibility Studies",
    desc: "Rigorous evaluation of operational, technical, legal, and economic viability before committing capital.",
  },
  {
    num: "05",
    icon: "auto_stories",
    title: "Business Reports",
    desc: "Executive briefs, operational assessments, and thematic whitepapers tailored for leadership boards.",
  },
  {
    num: "06",
    icon: "rocket_launch",
    title: "Startup Research & Planning",
    desc: "Target market sizing (TAM/SAM/SOM), customer validation pathways, and lean go-to-market strategy definition.",
  },
  {
    num: "07",
    icon: "group_work",
    title: "Customer & Market Analysis",
    desc: "Buyer persona profiling, willingness-to-pay studies, journey mapping, and behavioral driver analysis.",
  },
  {
    num: "08",
    icon: "view_in_ar",
    title: "SWOT & PESTLE Analysis",
    desc: "Rigorous environmental scanning covering political, economic, sociological, and technological influences.",
  },
  {
    num: "09",
    icon: "slideshow",
    title: "Business Presentations",
    desc: "High-impact pitch decks, shareholder briefings, and visual slide narratives designed for strategic buy-in.",
  },
  {
    num: "10",
    icon: "account_balance",
    title: "Financial & Business Research",
    desc: "Cross-industry financial benchmarks, margin trends, cost-driver assessments, and operational forecasting.",
  },
];

export function BusinessServices() {
  return (
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
      id="services-grid"
    >
      <ServiceSectionHeading
        eyebrow="Specialized Practice Offerings"
        title="Business Research & Consulting Services"
        lead="Focused research support for strategic, operational, and business planning requirements across various verticals."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {SERVICES.map((service) => (
          <div
            key={service.num}
            className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors shadow-md"
          >
            <div>
              <div className="flex justify-between items-start mb-space-md">
                <span className="font-label-lg text-label-lg font-mono text-deep-sage font-bold">{service.num}</span>
                <MaterialIcon name={service.icon} className="text-signal-green text-[24px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{service.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{service.desc}</p>
            </div>
            <div className="pt-space-md flex items-center text-label-sm text-signal-green font-semibold gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore Scope</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </div>
          </div>
        ))}
        <div className="bg-secondary-container/30 rounded-xl p-space-lg flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2 shadow-md">
          <div>
            <div className="flex items-center gap-2 mb-space-sm text-signal-green">
              <MaterialIcon name="tune" className="text-[24px]" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Custom Inquiries
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
              Have a Custom Strategic Scope?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Our multi-disciplinary advisory desk regularly formulates customized scopes of work combining
              multi-country secondary research, customized consumer surveys, and proprietary business modeling.
            </p>
          </div>
          <div className="pt-space-md">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>Speak with our Advisory Desk</span>
              <MaterialIcon name="north_east" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
