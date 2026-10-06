import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const NODES: { name: IconName; iconClass: string; title: string; sub: string }[] = [
  {
    name: "description",
    iconClass: "text-signal-blue text-2xl",
    title: "Source Info",
    sub: "Scans, PDFs, forms, links",
  },
  {
    name: "keyboard",
    iconClass: "text-signal-blue text-2xl",
    title: "Data Entry",
    sub: "Manual & batch intake",
  },
  {
    name: "rule",
    iconClass: "text-secondary text-2xl",
    title: "Validation",
    sub: "Syntax & duplicate check",
  },
];

const FORMATS = ["Microsoft Excel (.xlsx)", "Google Sheets", "Flat CSV / TSV", "Formatted Documents"];

export function DigitalDataEntry() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="max-w-3xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            INPUT ASSURANCE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Organized information starts with organized input.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Unstructured input leads to downstream chaos. We apply strict transformation schemas to guarantee format
            consistency across every data line.
          </p>
        </div>
        <div className="p-space-lg md:p-space-xl rounded-xl bg-surface-container-low mb-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md items-center">
            {NODES.map((node, i) => (
              <div key={node.name} className="md:contents">
                {i > 0 && (
                  <div className="hidden md:flex justify-center text-on-surface-variant">
                    <MaterialIcon name="arrow_forward" />
                  </div>
                )}
                <div className="p-space-md rounded-lg bg-surface-container flex flex-col text-center items-center">
                  <MaterialIcon name={node.name} className={`mb-1 ${node.iconClass}`} />
                  <span className="font-label-lg text-label-lg text-primary font-bold">{node.title}</span>
                  <span className="text-[11px] text-on-surface-variant">{node.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-md bg-surface-container/50 px-space-md py-2 rounded-lg">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-on-surface-variant font-mono uppercase">Supported Formats:</span>
              {FORMATS.map((format) => (
                <span
                  key={format}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-container-high text-primary"
                >
                  {format}
                </span>
              ))}
            </div>
            <span className="text-[11px] text-on-surface-variant italic">
              Illustrative workflow — accuracy protocols applied across structured data tasks.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
