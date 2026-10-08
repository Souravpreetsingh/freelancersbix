import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const TOOLS: { icon: IconName; label: string }[] = [
  { icon: "receipt", label: "Accounting Software" },
  { icon: "table_view", label: "Spreadsheet Workflows" },
  { icon: "point_of_sale", label: "Invoice Systems" },
  { icon: "groups", label: "Payroll Systems" },
  { icon: "account_balance", label: "Banking Feeds" },
  { icon: "pie_chart", label: "Reporting Tools" },
];

const PIPELINE: { label: string; value: string }[] = [
  { label: "Source Inflow", value: "Client Records" },
  { label: "Processing Engine", value: "Accounting Workflow" },
  { label: "Verification", value: "Multi-Check Review" },
  { label: "Final Hand-off", value: "Actionable Reports" },
];

export function ForeignTools() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Tools &amp; Workflows
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Designed To Fit Into Modern Accounting Operations.
          </h2>
          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
            Our team adapts directly to your preferred software environment, secure shared drives, and enterprise file
            exchange protocols.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
          {TOOLS.map((tool) => (
            <div
              key={tool.label}
              className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant text-center flex flex-col items-center justify-center space-y-2 hover:border-outline-variant transition-all"
            >
              <MaterialIcon name={tool.icon} className="text-signal-green text-[28px]" />
              <span className="font-headline-sm text-xs font-bold text-primary">{tool.label}</span>
            </div>
          ))}
        </div>
        <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-md text-center">
            {PIPELINE.map((stage, index) => (
              <div key={stage.label} className="contents">
                <div className="flex-1">
                  <span className="font-mono text-xs text-signal-green uppercase tracking-widest block mb-1">
                    {stage.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">{stage.value}</span>
                </div>
                {index < PIPELINE.length - 1 ? (
                  <MaterialIcon name="east" className="text-outline-variant rotate-90 md:rotate-0" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-on-surface-variant font-body-sm text-center">
          Supported tools and integrations vary based on client preferences, regulatory domicile, and existing
          operational setup.
        </p>
      </div>
    </section>
  );
}
