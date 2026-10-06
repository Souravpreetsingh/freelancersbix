import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const PILLARS: { name: IconName; title: string; desc: string; tag: string }[] = [
  {
    name: "verified",
    title: "Accuracy",
    desc: "Handle data meticulously. We verify fields against original source material to avoid cascading errors in your records.",
    tag: "Zero-Assumption Standard",
  },
  {
    name: "reorder",
    title: "Organization",
    desc: "Maintain logical structures for folders, documents, and datasets so team members can retrieve files instantly.",
    tag: "Structural Rigor",
  },
  {
    name: "style",
    title: "Consistency",
    desc: "Enforce identical type hierarchies, header styling, date syntax (YYYY-MM-DD), and spreadsheet formulas throughout.",
    tag: "Standardization",
  },
  {
    name: "mark_chat_read",
    title: "Communication",
    desc: "Proactively clarify scope ambiguities, flag missing source data, and keep milestones visible at all stages.",
    tag: "Transparent Sync",
  },
];

export function DigitalQuality() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            GOVERNANCE & ACCURACY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Quality Assurance Framework
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.name}
              className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-signal-blue/10 flex items-center justify-center text-signal-blue mb-space-md">
                  <MaterialIcon name={pillar.name} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
              </div>
              <span className="font-mono text-[11px] text-secondary mt-space-md">{pillar.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
