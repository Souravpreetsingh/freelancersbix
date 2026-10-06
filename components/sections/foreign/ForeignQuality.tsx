import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

interface StandardPanel {
  icon: IconName;
  index: string;
  title: string;
  description: string;
  items: { title: string; description: string }[];
}

const PANELS: StandardPanel[] = [
  {
    icon: "fact_check",
    index: "Standard 01",
    title: "Quality & Consistency",
    description:
      "Foreign accounting support demands meticulous consistency, structured documentation indexing, and repeatable cross-check procedures.",
    items: [
      {
        title: "Multi-pass Ledger Checks",
        description: "Systematic secondary reviews of journals and transaction classifications before finalization.",
      },
      {
        title: "Structured Document Indexing",
        description:
          "Organized digital file trees that make retrieving invoices, tax receipts, and vouchers frictionless.",
      },
      {
        title: "Standardized Naming Conventions",
        description: "Predictable naming taxonomies across all shared spreadsheets, archives, and monthly decks.",
      },
    ],
  },
  {
    icon: "lock",
    index: "Standard 02",
    title: "Confidentiality & Data Security",
    description:
      "Financial records and business transaction records require responsible handling, restricted environments, and appropriate access boundaries.",
    items: [
      {
        title: "Non-Disclosure Governance",
        description:
          "Binding mutual non-disclosure and strict confidentiality agreements executed before record intake.",
      },
      {
        title: "Strict Role-Based Access",
        description: "Only assigned financial assistants possess access to your dedicated workspace and data stores.",
      },
      {
        title: "Isolated Data Handling",
        description: "Encrypted transmission channels and segmented customer repositories to safeguard your records.",
      },
    ],
  },
];

export function ForeignQuality() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            Operational Assurance
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Built On Quality, Discipline And Confidentiality.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {PANELS.map((panel) => (
            <div
              key={panel.index}
              className="p-space-xl rounded-xl bg-surface-container-low border border-white/5 space-y-space-lg"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-signal-blue">
                  <MaterialIcon name={panel.icon} className="text-[22px]" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-secondary uppercase tracking-widest">{panel.index}</span>
                  <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold uppercase">{panel.title}</h3>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">{panel.description}</p>
              <div className="space-y-space-sm border-t border-white/5 pt-space-md">
                {panel.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-space-sm">
                    <MaterialIcon name="check" className="text-signal-blue text-[18px] mt-0.5" />
                    <div>
                      <span className="font-label-lg text-label-lg font-bold text-whiteout block">{item.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
