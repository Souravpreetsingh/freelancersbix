import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const AREAS: { name: IconName; title: string; desc: string; tag: string }[] = [
  {
    name: "library_books",
    title: "Research Support",
    desc: "Information gathering, bibliography cross-referencing, web intelligence, and organized executive source dossiers.",
    tag: "Structured Dossiers",
  },
  {
    name: "edit_document",
    title: "Document Support",
    desc: "Standardized formatting, multi-author aggregation, typography styling, and PDF publication preparation.",
    tag: "Typography Standards",
  },
  {
    name: "dataset",
    title: "Data Support",
    desc: "Spreadsheet and information organization, column harmonization, syntax cleanup, and record sanitization.",
    tag: "Data Hygiene",
  },
  {
    name: "calendar_today",
    title: "Administrative Support",
    desc: "Recurring digital tasks, milestone cataloging, file indexing, and structured agenda documentation.",
    tag: "Operational Regularity",
  },
];

export function DigitalVirtualAssistance() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              DEDICATED BANDWIDTH
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-tight">
              A flexible digital support layer for your workflow.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every business experiences operational cycles where tasks accumulate without warranting full-time
              overhead. Our virtual assistance services plug directly into your workflow to absorb repetitive
              documentation, data verification, and research synthesis.
            </p>
            <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-3">
              <MaterialIcon name="info" className="text-signal-blue text-xl" />
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="text-primary">Note:</strong> Services are scoped strictly according to the specific
                project or workflow. We focus on structured digital deliverables rather than open-ended phone
                receptionist roles.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {AREAS.map((area) => (
              <div key={area.name} className="p-space-lg rounded-xl bg-surface-container flex flex-col justify-between">
                <div className="flex items-center gap-space-sm mb-space-sm text-signal-blue">
                  <MaterialIcon name={area.name} />
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{area.title}</h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{area.desc}</p>
                <span className="text-[12px] font-mono text-secondary mt-space-md">{area.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
