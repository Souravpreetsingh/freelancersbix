import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function ForeignHero() {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin pt-space-2xl pb-space-3xl overflow-hidden bg-black-void">
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-signal-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-twilight-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col items-start space-y-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 border border-white/10 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            <span className="font-label-md text-label-md text-on-surface tracking-widest uppercase">
              Foreign Accounting
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-whiteout tracking-tight leading-none">
            Reliable Accounting Support For Modern Businesses.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Structured bookkeeping, financial administration, and reporting support designed to help businesses keep
            their multi-entity and international accounting operations impeccably organized.
          </p>
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg bg-whiteout text-ink font-label-lg text-label-lg font-bold shadow-lg hover:bg-whiteout/90 transition-all"
            >
              Get an Accounting Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-surface-container-high/40 text-whiteout border border-white/15 font-label-lg text-label-lg font-medium hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Talk to Our Team
            </Link>
          </div>
          <div className="pt-space-md flex flex-wrap items-center gap-y-space-xs gap-x-space-md text-on-surface-variant font-label-sm text-label-sm border-t border-white/10 w-full">
            <span className="flex items-center gap-1.5 text-on-surface">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[16px]" />
              Multi-Currency Records
            </span>
            <span className="text-outline-variant">•</span>
            <span className="flex items-center gap-1.5 text-on-surface">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[16px]" />
              Audited Reconciliation Cycles
            </span>
            <span className="text-outline-variant">•</span>
            <span className="flex items-center gap-1.5 text-on-surface">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[16px]" />
              Strict Confidential Protocols
            </span>
          </div>
        </div>
        <div className="lg:col-span-6 w-full">
          <div className="relative w-full rounded-xl bg-surface-container-low/90 border border-white/10 p-space-lg shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="w-3 h-3 rounded-full bg-surface-variant" />
                <span className="ml-2 font-mono text-[11px] text-on-surface-variant">
                  ledger_session: multi_sync // v4.2
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-signal-blue/10 border border-signal-blue/20">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-ping" />
                <span className="font-label-sm text-label-sm text-secondary font-medium tracking-wider uppercase">
                  Active Reconciliation
                </span>
              </div>
            </div>
            <div className="mb-space-lg p-space-sm rounded-lg bg-surface-container-lowest/80 border border-white/5 flex flex-wrap items-center justify-between gap-space-xs">
              <div className="flex items-center gap-space-md text-[13px] font-mono">
                <span className="text-primary font-semibold">
                  USD <span className="text-outline text-xs">0.00Δ</span>
                </span>
                <span className="text-primary font-semibold">
                  EUR <span className="text-outline text-xs">0.00Δ</span>
                </span>
                <span className="text-primary font-semibold">
                  GBP <span className="text-outline text-xs">0.00Δ</span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-label-sm text-secondary">
                <MaterialIcon name="sync_saved_locally" className="text-[14px]" />
                Balanced / 100% Verified
              </div>
            </div>
            <div className="grid grid-cols-2 gap-space-sm mb-space-md">
              <div className="p-space-sm rounded-lg bg-surface-container/60 border border-white/5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Consolidated Revenue
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">$184,420</span>
                  <span className="text-[11px] text-secondary font-medium">+14.2%</span>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container/60 border border-white/5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Operational Expenses
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">$62,180</span>
                  <span className="text-[11px] text-on-surface-variant">Scheduled</span>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container/60 border border-white/5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Accounts Receivable
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">$41,890</span>
                  <span className="text-[11px] text-secondary">18 Pending Invoices</span>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container/60 border border-white/5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Accounts Payable
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">$19,450</span>
                  <span className="text-[11px] text-on-surface-variant">11 Scheduled</span>
                </div>
              </div>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-lowest/60 border border-white/5 mb-space-md">
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant pb-2">
                <span className="uppercase tracking-wider">Quarterly Inflow vs. Monthly Expense Burn</span>
                <span className="font-mono text-secondary">Net Spread: +$122.2k</span>
              </div>
              <div className="h-28 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2b7fff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2b7fff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 Q50,70 100,55 T200,45 T300,25 T400,10 L400,100 L0,100 Z" fill="url(#chartGlow)" />
                  <path
                    d="M0,80 Q50,70 100,55 T200,45 T300,25 T400,10"
                    fill="none"
                    stroke="#2b7fff"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0,85 Q60,82 120,78 T240,75 T320,70 T400,68"
                    fill="none"
                    stroke="#8e9192"
                    strokeDasharray="4 4"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-surface-container-high/80 text-[11px] font-medium text-on-surface border border-white/5">
                Bookkeeping
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high/80 text-[11px] font-medium text-on-surface border border-white/5">
                AP/AR Flow
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high/80 text-[11px] font-medium text-on-surface border border-white/5">
                Payroll Prep
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high/80 text-[11px] font-medium text-on-surface border border-white/5">
                Bank Match
              </span>
              <span className="px-2.5 py-1 rounded bg-signal-blue/20 text-[11px] font-medium text-secondary ml-auto">
                Daily Sync Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
