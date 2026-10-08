import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function DataRelated() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
              Practice Synergy
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Need research around the data?</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              Our Business Research &amp; Consulting practice conducts competitor analyses, industry benchmarking, and
              strategic feasibility dossiers to accompany your raw metrics.
            </p>
          </div>
          <Link
            href="/services/business-and-consulting"
            className="inline-flex items-center gap-1.5 text-secondary hover:text-primary font-label-lg text-label-lg transition-colors"
          >
            Explore Business Research
            <MaterialIcon name="arrow_forward" className="text-[20px]" />
          </Link>
        </div>
        <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
              Practice Synergy
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Need structured financial data support?
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Connect with our Foreign Accounting practice for cross-border ledger reconciliation, spreadsheet auditing,
              and multi-currency consolidation.
            </p>
          </div>
          <div className="mt-space-lg">
            <Link
              href="/services/foreign-accounting"
              className="inline-flex items-center gap-1.5 text-secondary hover:text-primary font-label-lg text-label-lg transition-colors mb-2"
            >
              Explore Foreign Accounting
              <MaterialIcon name="arrow_forward" className="text-[20px]" />
            </Link>
            <p className="font-label-sm text-label-sm text-[11px] text-outline">
              * Operational data organization &amp; bookkeeping synthesis — not licensed statutory tax advice or CPA
              audit certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
