import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const FEATURES: { icon: IconName; title: string; description: string; tag: string }[] = [
  {
    icon: "menu_book",
    title: "01. Bookkeeping",
    description:
      "General ledger recording, cloud ledger synchronization, chart of accounts management, and multi-entity classification compliant with GAAP and IFRS.",
    tag: "Continuous Audit-Ready Entries",
  },
  {
    icon: "receipt_long",
    title: "02. AP / AR Management",
    description:
      "Vendor invoice intake, purchase order matching, approval tracking, customer statement generation, and aging receivable follow-up workflows.",
    tag: "Zero Delay Payment Routing",
  },
  {
    icon: "payments",
    title: "03. Payroll Administration",
    description:
      "Cross-border payroll calculations, contractor disbursement sheets, benefits and deductions tracking, and paystub documentation.",
    tag: "Regional Withholding Verification",
  },
  {
    icon: "sync_alt",
    title: "04. Bank & Merchant Recon",
    description:
      "Rigorous monthly reconciliation across multiple financial institutions, payment gateways (Stripe, PayPal), credit cards, and digital wallets.",
    tag: "Discrepancy Resolution Protocol",
  },
  {
    icon: "monitoring",
    title: "05. Financial Reporting",
    description:
      "Standardized monthly and quarterly packages: Balance Sheet, Income Statement (P&L), Cash Flow statement, and management variance commentaries.",
    tag: "Executive Synthesis Reports",
  },
  {
    icon: "request_quote",
    title: "06. Expense & Invoice Flow",
    description:
      "Receipt verification, policy checking, business expense categorization, custom invoicing templates, and automated delivery reminders.",
    tag: "Tax Classification Ready",
  },
];

const DASHBOARD_CARDS: { label: string; value: string; note: string; noteClass: string }[] = [
  { label: "Reconciliation Status", value: "Balanced", note: "100% Verified Ledger", noteClass: "text-signal-green" },
  { label: "Audit Verification", value: "GAAP Compliant", note: "Zero Pending Flags", noteClass: "text-signal-green" },
  { label: "Currency Pairings", value: "USD • EUR • GBP", note: "Daily FX Adjusted", noteClass: "text-secondary" },
  { label: "Reporting Cycle", value: "Day +3 Monthly", note: "On-Schedule Delivery", noteClass: "text-signal-green" },
];

export function AccountingDeepDive() {
  return (
    <section
      id="featured-accounting-deepdive"
      className="w-full bg-surface-container-lowest py-space-4xl border-y border-outline-variant relative overflow-hidden"
    >
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-3xl">
        {/* Section Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-space-xl">
          <div className="max-w-3xl flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/20">
              <span className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Specialized Offshore Practice
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Keep Your Financial Operations Organized.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              From day-to-day bookkeeping and multi-bank reconciliation to financial reporting and accounting
              administration, our foreign accounting support is designed around absolute accuracy, structured workflows,
              and dependable audit readiness.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              href="/contact"
              className="px-space-lg py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-[#08452F] transition-all font-medium"
            >
              Talk to Our Team
            </Link>
            <Link
              href="#cat-accounting"
              className="px-space-lg py-space-sm rounded-lg font-label-lg text-label-lg border border-outline-variant text-primary hover:bg-surface-container-high transition-all font-medium"
            >
              View Accounting Scope
            </Link>
          </div>
        </div>

        {/* 6 Structured Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant hover:border-signal-green/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center mb-space-sm text-signal-green">
                  <MaterialIcon name={feature.icon} className="text-[22px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{feature.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
              </div>
              <span className="font-mono text-xs text-secondary mt-space-md">{feature.tag}</span>
            </div>
          ))}
        </div>

        {/* Executive Dashboard Mockup Visual Component */}
        <div className="w-full rounded-2xl bg-surface-container p-6 md:p-8 border border-outline-variant shadow-2xl flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-on-surface-variant pl-2">ledger_session_sync // v4.28</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-on-surface-variant">
                Status: <span className="text-signal-green font-semibold">Live Pipeline</span>
              </span>
              <span className="text-on-surface-variant">
                Jurisdiction: <span className="text-primary">US/UK/EU Standard</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DASHBOARD_CARDS.map((card) => (
              <div
                key={card.label}
                className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant"
              >
                <span className="text-xs text-on-surface-variant font-mono uppercase">{card.label}</span>
                <div className="text-2xl font-bold text-primary mt-1">{card.value}</div>
                <span className={`text-xs mt-1 inline-block ${card.noteClass}`}>{card.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
