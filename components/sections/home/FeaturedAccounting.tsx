import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const DELIVERABLES: { title: string; detail: string }[] = [
  { title: "Bookkeeping", detail: "General ledgers & cloud entries" },
  { title: "AP & AR Management", detail: "Invoicing, matching & payouts" },
  { title: "Payroll Management", detail: "Multi-region compliant disbursement" },
  { title: "Bank Reconciliation", detail: "Monthly precision matching" },
  { title: "Financial Reporting", detail: "P&L, Balance Sheets, Cashflows" },
  { title: "Expense Management", detail: "Receipt tracking & categorization" },
];

export function FeaturedAccounting() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-3xl items-center">
        {/* Text & Scope List */}
        <div className="lg:col-span-6 flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-signal-blue/15 w-fit border border-signal-blue/30">
              <span className="font-label-sm text-label-sm tracking-wider uppercase text-signal-blue font-bold">
                Dedicated Practice Spotlight
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight mt-space-xs">
              Reliable accounting support for modern businesses.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Keep your financial operations organized with structured bookkeeping, reporting and accounting support
              designed for businesses working across markets.
            </p>
          </div>
          {/* 6 Specialized Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="flex items-start gap-space-sm">
                <MaterialIcon name="check_circle" className="text-signal-blue text-[20px] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-primary font-semibold">{item.title}</span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-space-xs">
            <Link
              href="/services/foreign-accounting"
              className="inline-flex items-center justify-center px-space-xl py-space-md rounded-lg font-label-lg text-label-lg bg-whiteout text-ink font-semibold hover:bg-haze transition-all duration-200"
            >
              Explore Foreign Accounting
            </Link>
          </div>
        </div>

        {/* Financial Dashboard Mockup Visualization */}
        <div className="lg:col-span-6 relative">
          <div className="w-full rounded-xl bg-surface-container-high/90 border border-outline-variant/30 p-space-xl shadow-2xl backdrop-blur-xl flex flex-col gap-space-lg">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Multi-Market Ledger
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Consolidated Overview</h3>
              </div>
              <div className="px-space-sm py-space-xs rounded-full bg-signal-blue/20 text-signal-blue text-label-sm font-semibold border border-signal-blue/30">
                AUD / USD / GBP / EUR
              </div>
            </div>
            <div className="grid grid-cols-2 gap-space-md">
              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Reconciled Volume</span>
                <div className="font-headline-md text-headline-md text-whiteout font-mono font-bold mt-1">
                  $142,850.00
                </div>
                <span className="text-[12px] text-secondary mt-1 inline-flex items-center">
                  <MaterialIcon name="done_all" className="text-[14px]" /> 100% matched
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Current Burn Rate</span>
                <div className="font-headline-md text-headline-md text-whiteout font-mono font-bold mt-1">
                  $18,420 / mo
                </div>
                <span className="text-[12px] text-on-surface-variant mt-1 inline-flex items-center">
                  Balanced pacing
                </span>
              </div>
            </div>
            {/* Trend Chart Representation */}
            <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
              <div className="flex items-center justify-between text-label-sm text-on-surface-variant mb-space-xs">
                <span>Quarterly Reconciliation Trend</span>
                <span className="text-whiteout font-mono">Q1–Q4</span>
              </div>
              <svg className="w-full h-24" fill="none" viewBox="0 0 300 80">
                <path
                  d="M 0 65 L 50 55 L 100 58 L 150 40 L 200 45 L 250 25 L 300 15"
                  stroke="#2b7fff"
                  strokeWidth="2.5"
                />
                <path
                  d="M 0 65 L 50 55 L 100 58 L 150 40 L 200 45 L 250 25 L 300 15 L 300 80 L 0 80 Z"
                  fill="url(#blueGradient)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2b7fff" />
                    <stop offset="100%" stopColor="#2b7fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-between text-[12px] text-on-surface-variant pt-space-xs border-t border-outline-variant/15 font-mono">
              <span>Audit Trail: Zero Variance</span>
              <span>Tax Protocol: Standardized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
