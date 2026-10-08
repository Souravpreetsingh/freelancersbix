import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const SERVICES: { num: string; name: IconName; title: string; desc: string; tag: string }[] = [
  {
    num: "01",
    name: "support",
    title: "Virtual Assistance",
    desc: "Structured support for recurring digital, research and organizational tasks tailored to your weekly rhythm.",
    tag: "Operations Layer",
  },
  {
    num: "02",
    name: "input",
    title: "Data Entry",
    desc: "Accurate organization and entry of information into spreadsheets, documents or agreed systems with verification.",
    tag: "Data Sanitation",
  },
  {
    num: "03",
    name: "format_shapes",
    title: "Document Formatting",
    desc: "Professional formatting, layout design, typography styling, and organization of business, research, and operational files.",
    tag: "Typography & Layout",
  },
  {
    num: "04",
    name: "table_chart",
    title: "Excel & Sheets Management",
    desc: "Organize, format, formula-balance, and maintain spreadsheet-based systems for clear operational review.",
    tag: "Spreadsheet Operations",
  },
  {
    num: "05",
    name: "manage_search",
    title: "Research Assistance",
    desc: "Support secondary information gathering, academic/commercial source organization, and synthesis collation.",
    tag: "Source Gathering",
  },
  {
    num: "06",
    name: "person_search",
    title: "Lead Research",
    desc: "Research and organize relevant public business or prospect profiles according to defined parameters.",
    tag: "Prospect Discovery",
  },
  {
    num: "07",
    name: "assignment",
    title: "Administrative Support",
    desc: "Assist with recurring documentation, business correspondence preparation, schedules, and administrative workflows.",
    tag: "Executive Assistance",
  },
  {
    num: "08",
    name: "folder_zip",
    title: "Document & File Management",
    desc: "Systematize legacy cloud folders, establish disciplined naming conventions, and structure clean directory trees.",
    tag: "Cloud Architecture",
  },
  {
    num: "09",
    name: "task_alt",
    title: "Digital Task Support",
    desc: "Support defined recurring digital tasks, web updating checklists, format conversions, and repetitive workflows.",
    tag: "Batch Execution",
  },
];

export function DigitalServices() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="services-grid">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
              CAPABILITIES INVENTORY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
              Digital & Administrative Services
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Practical support for recurring digital, research and administrative requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="group p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-headline-sm text-headline-sm font-bold text-signal-green font-mono">
                    {service.num}
                  </span>
                  <MaterialIcon
                    name={service.name}
                    className="text-on-surface-variant group-hover:text-primary transition-colors text-2xl"
                  />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                  {service.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{service.desc}</p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant group-hover:text-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-mono">{service.tag}</span>
                <MaterialIcon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-signal-green/20 flex items-center justify-center shrink-0">
              <MaterialIcon name="tune" className="text-signal-green text-2xl" />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                Have a Custom Administrative or Operations Requirement?
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Speak with our Operations Desk to scope a structured bespoke workflow schedule.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            Discuss Custom Scope
          </Link>
        </div>
      </div>
    </section>
  );
}
