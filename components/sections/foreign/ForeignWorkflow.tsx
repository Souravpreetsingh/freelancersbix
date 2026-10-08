import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const STEPS: { number: string; icon: IconName; title: string; description: string; phase: string }[] = [
  {
    number: "01",
    icon: "upload_file",
    title: "Collect",
    description:
      "Gather relevant financial records, receipts, bank feeds, invoices, and supporting documents in designated secure vaults.",
    phase: "Ingestion Phase",
  },
  {
    number: "02",
    icon: "view_agenda",
    title: "Organize",
    description:
      "Structure financial information into the appropriate account charts, general ledgers, and workflow modules.",
    phase: "Classification",
  },
  {
    number: "03",
    icon: "balance",
    title: "Reconcile",
    description:
      "Compare transaction logs against statements, isolate uncategorized entries, and flag variances for resolution.",
    phase: "Ledger Matching",
  },
  {
    number: "04",
    icon: "table_chart",
    title: "Report",
    description:
      "Organize financial records into clean summaries, executive digests, P&L drafts, and operational schedules.",
    phase: "Aggregation",
  },
  {
    number: "05",
    icon: "task_alt",
    title: "Review",
    description:
      "Provide organized outputs for management review, authorization, strategic decision-making, and file archive.",
    phase: "Delivery Phase",
  },
];

export function ForeignWorkflow() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            How Accounting Support Works
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            A Structured Workflow For Recurring Financial Operations.
          </h2>
          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant max-w-2xl">
            A disciplined 5-stage pipeline designed for predictability, transparent handoffs, and audit readiness across
            cross-border accounts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between relative group hover:border-outline-variant transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="font-mono text-lg font-bold text-signal-green">{step.number}</span>
                  <MaterialIcon name={step.icon} className="text-outline-variant text-[20px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold uppercase">{step.title}</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
              <span className="mt-space-lg font-mono text-[10px] text-signal-green uppercase tracking-wider">
                {step.phase}
              </span>
            </div>
          ))}
        </div>
        <div className="p-space-md rounded-lg bg-surface-container/60 border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <MaterialIcon name="verified_user" className="text-secondary text-[18px]" />
            <span>
              Collaborative operational support. Client retains full management approval and regulatory governance.
            </span>
          </div>
          <span className="font-mono text-[11px] text-on-surface-variant">PROTOCOL // FBX-ACC-V2</span>
        </div>
      </div>
    </section>
  );
}
