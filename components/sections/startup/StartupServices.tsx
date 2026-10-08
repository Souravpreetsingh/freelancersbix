import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const SERVICES: { num: string; icon: IconName; title: string; desc: string; tag: string }[] = [
  {
    num: "01",
    icon: "folder_special",
    title: "Startup Documentation",
    desc: "Professional documentation to help organize business ideas, processes, plans and supporting information into clear operational structures.",
    tag: "Explore Documentation",
  },
  {
    num: "02",
    icon: "view_quilt",
    title: "Business Model Development",
    desc: "Structure the key elements of a business model, including customers, value proposition, channels, activities and revenue considerations.",
    tag: "Explore Model Design",
  },
  {
    num: "03",
    icon: "menu_book",
    title: "Business Plan Preparation",
    desc: "Develop structured business-plan documents covering relevant market, business, operational and strategic sections aligned to reader context.",
    tag: "Explore Planning",
  },
  {
    num: "04",
    icon: "co_present",
    title: "Pitch Decks",
    desc: "Create professional pitch-deck structures that communicate a business idea, market opportunity, business model and strategy clearly.",
    tag: "Explore Pitch Decks",
  },
  {
    num: "05",
    icon: "explore",
    title: "Market Entry Research",
    desc: "Research markets, competitors, customer segments and relevant business factors when evaluating potential market entry or geo-expansion.",
    tag: "Explore Market Entry",
  },
  {
    num: "06",
    icon: "compare",
    title: "Competitor Research",
    desc: "Organize and analyze competitor information to provide a clearer understanding of the competitive environment and relative positioning.",
    tag: "Explore Competitor Analysis",
  },
  {
    num: "07",
    icon: "account_tree",
    title: "Business Process Documentation",
    desc: "Document workflows, processes, responsibilities and operational procedures in a clear professional format built for scale.",
    tag: "Explore Processes",
  },
  {
    num: "08",
    icon: "support_agent",
    title: "Operational Support",
    desc: "Provide structured administrative and research-oriented support for ongoing business operations and internal efficiency.",
    tag: "Explore Operations",
  },
  {
    num: "09",
    icon: "laptop_chromebook",
    title: "Virtual Business Assistance",
    desc: "Support recurring research, documentation, organization and administrative requirements on a reliable, predictable schedule.",
    tag: "Explore Assistance",
  },
];

export function StartupServices() {
  return (
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
      id="services-directory"
    >
      <ServiceSectionHeading
        eyebrow="Service Catalogue"
        title="Business & Startup Services"
        lead="Structured support for founders, startups and businesses at different stages of development."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {SERVICES.map((service) => (
          <div
            key={service.num}
            className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between hover:bg-surface-container transition-all group"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-deep-sage font-bold">{service.num}</span>
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:text-signal-green transition-colors">
                  <MaterialIcon name={service.icon} className="text-[20px]" />
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-signal-green transition-colors">
                {service.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{service.desc}</p>
            </div>
            <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant group-hover:text-primary">
              <span className="font-label-sm text-label-sm font-medium">{service.tag}</span>
              <MaterialIcon
                name="arrow_forward"
                className="text-[16px] group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-surface-container rounded-xl p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-signal-green/10 text-signal-green flex items-center justify-center shrink-0">
              <MaterialIcon name="dialpad" className="text-[24px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                Have a Custom Startup Requirement?
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Every venture presents distinct operational boundaries. Speak directly with our Advisory Desk to
                configure a custom deliverable set.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-lg text-label-lg font-medium px-space-lg py-space-sm rounded-lg hover:opacity-90 transition-opacity shrink-0"
          >
            <span>Speak with Advisory Desk</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
