import { MaterialIcon } from "@/components/icons/MaterialIcon";

const KPIS: {
  label: string;
  value: string;
  note: string;
  noteClass: string;
  icon?: "trending_up" | "horizontal_rule";
}[] = [
  {
    label: "Total Inflow",
    value: "$248,390",
    note: "+18.4% vs prev quarter",
    noteClass: "text-secondary",
    icon: "trending_up",
  },
  {
    label: "Operational Expenses",
    value: "$94,120",
    note: "Within monthly budget",
    noteClass: "text-on-surface-variant",
    icon: "horizontal_rule",
  },
  { label: "Accounts Receivable", value: "$53,600", note: "24 invoices open", noteClass: "text-on-surface-variant" },
  { label: "Accounts Payable", value: "$21,800", note: "14 scheduled runs", noteClass: "text-on-surface-variant" },
];

const LEDGER_ROWS: { account: string; status: string }[] = [
  { account: "Chase Operating Account (**4892)", status: "Balanced • $142,500.00" },
  { account: "Barclays Corporate GBP (**1032)", status: "Balanced • £58,120.40" },
  { account: "Stripe Global Clearing (EUR/USD)", status: "0 Unresolved Discrepancies" },
];

const REPORTS: { name: string; status: string }[] = [
  { name: "P&L Summary (Consolidated)", status: "Ready for Review" },
  { name: "Balance Sheet Draft", status: "Draft Synced" },
  { name: "Cash Flow Projection Schedule", status: "Updated" },
];

export function ForeignDashboard() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-brand-deep">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-primary font-bold">
            Operational Clarity
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase">
            Financial Information, Organized Clearly.
          </h2>
          <p className="mt-space-sm font-body-lg text-body-lg text-whiteout/75">
            Use an organized workflow to bring invoices, expenses, receivables, payables, and reporting into a clearer
            operational view.
          </p>
        </div>
        <div className="w-full rounded-2xl bg-haze border border-whiteout/20 p-space-md md:p-space-xl shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-space-md pb-space-lg border-b border-outline-variant/60">
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-container-lowest border border-outline-variant/60">
              <button
                type="button"
                className="px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-on-primary shadow-sm"
              >
                Global Consolidation
              </button>
              <button
                type="button"
                className="px-3 py-1.5 rounded-md text-xs font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                Entity A (US)
              </button>
              <button
                type="button"
                className="px-3 py-1.5 rounded-md text-xs font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                Entity B (UK)
              </button>
            </div>
            <div className="flex items-center gap-space-sm text-xs font-mono">
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-md bg-surface-container-lowest text-on-surface-variant border border-outline-variant/60">
                Cycle: Q3 Oct - Dec
              </span>
              <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest text-secondary border border-outline-variant/60">
                Base: USD ($)
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md my-space-lg">
            {KPIS.map((kpi) => (
              <div
                key={kpi.label}
                className="p-space-md rounded-xl bg-surface-container-lowest/80 border border-outline-variant/60"
              >
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  {kpi.label}
                </span>
                <div className="font-headline-md text-headline-md text-primary font-bold mt-1">{kpi.value}</div>
                <div className={`mt-2 text-xs flex items-center gap-1 ${kpi.noteClass}`}>
                  {kpi.icon ? <MaterialIcon name={kpi.icon} className="text-[14px]" /> : null}
                  {kpi.note}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            <div className="lg:col-span-7 p-space-lg rounded-xl bg-surface-container-lowest/80 border border-outline-variant/60 space-y-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Bank Reconciliation Engine
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Continuous cross-ledger transaction audits
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-secondary-container/40 text-secondary font-mono text-xs">
                  99.8% Matched
                </span>
              </div>
              <div className="space-y-space-sm pt-2">
                {LEDGER_ROWS.map((row) => (
                  <div
                    key={row.account}
                    className="flex items-center justify-between p-2.5 rounded bg-surface-container-low text-xs"
                  >
                    <span className="font-medium text-ink">{row.account}</span>
                    <span className="font-mono text-secondary">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 p-space-lg rounded-xl bg-surface-container-lowest/80 border border-outline-variant/60 flex flex-col justify-between">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Monthly Financial Deliverables
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Generated cycle summaries ready for leadership
                </p>
                <ul className="mt-space-md space-y-2 text-xs">
                  {REPORTS.map((report, index) => (
                    <li
                      key={report.name}
                      className={`flex items-center justify-between py-1.5 ${
                        index < REPORTS.length - 1 ? "border-b border-outline-variant/60" : ""
                      }`}
                    >
                      <span className="text-ink flex items-center gap-2">
                        <MaterialIcon name="description" className="text-signal-green text-[16px]" />
                        {report.name}
                      </span>
                      <span className="text-on-surface-variant">{report.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-space-md pt-space-xs text-[11px] font-mono text-on-surface-variant text-right">
                Archive cycle: FY26-M03
              </div>
            </div>
          </div>
          <p className="mt-space-lg text-center text-xs text-on-surface-variant font-body-sm">
            Illustrative operational interface preview. All figures represent illustrative placeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
