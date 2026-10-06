import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const capabilities: { icon: IconName; title: string; body: string; tag: string }[] = [
  {
    icon: "grid_on",
    title: "Data Organization",
    body: "Restructure fragmented sheets, split delimited entries, and establish tidy relational tables.",
    tag: "Tabular Architecture",
  },
  {
    icon: "functions",
    title: "Formula & Calculation",
    body: "Engineer robust XLOOKUP, dynamic arrays, INDEX-MATCH architectures, and error-trapped logic.",
    tag: "Advanced Syntax",
  },
  {
    icon: "dashboard",
    title: "Reporting Sheets",
    body: "Construct summarized executive dashboards, dynamic pivot frameworks, and automated roll-ups.",
    tag: "Executive Rollups",
  },
  {
    icon: "monitoring",
    title: "Visualization",
    body: "Convert tabular numbers into native, cleanly styled charts, conditional highlights, and KPI badges.",
    tag: "Visual Summary",
  },
];

export function DataExcel() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Spreadsheet Engineering
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Make spreadsheets easier to understand and use.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Clean layouts, dependable formulas, and intelligent structure — so your sheets stay accurate, auditable, and
            maintainable long after delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="p-space-lg rounded-xl bg-surface-container border border-whiteout/10 flex flex-col justify-between"
            >
              <div>
                <MaterialIcon name={capability.icon} className="text-[28px] text-signal-blue mb-3" />
                <h3 className="font-headline-sm text-headline-sm text-whiteout mb-2">{capability.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{capability.body}</p>
              </div>
              <span className="font-label-sm text-label-sm text-twilight-blue font-mono mt-space-md">
                {capability.tag}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-space-lg p-3 rounded-lg bg-surface-container-low border border-whiteout/5 text-center">
          <span className="font-label-sm text-label-sm text-outline">
            * Standard operational spreadsheet structuring &amp; analytical formulas — not accredited proprietary
            software licensing or enterprise ERP implementation.
          </span>
        </p>
      </div>
    </section>
  );
}
