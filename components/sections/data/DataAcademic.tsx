import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const flow = ["Question", "Data Ingest", "Analysis", "Findings", "Discussion", "Conclusion"];

export function DataAcademic() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="p-space-2xl rounded-2xl bg-surface-container-low border border-whiteout/10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-signal-blue/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Scholarly Rigor
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
                Research data for academic and professional projects.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                We assist doctoral candidates, academic faculties, and institutional investigators in organizing raw
                field datasets, constructing statistical validation models, and preparing formal empirical tables.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-space-xs font-mono text-label-sm text-label-sm text-secondary">
                {flow.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    {index > 0 ? <span className="text-outline">&rarr;</span> : null}
                    <span className={step === "Conclusion" ? "text-whiteout font-bold" : ""}>{step}</span>
                  </span>
                ))}
              </div>
              <div className="pt-space-sm">
                <Link
                  href="/services/academic-and-research"
                  className="inline-flex items-center gap-2 bg-whiteout hover:bg-whiteout/90 text-ink font-label-lg text-label-lg px-space-lg py-3 rounded-lg font-medium transition-all"
                >
                  <span>Explore Academic &amp; Research Support</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="p-space-md rounded-xl bg-surface-container-lowest/80 border border-whiteout/5">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block mb-2">
                  Ethical Disclosure
                </span>
                <p className="font-body-sm text-body-sm text-outline text-[12px] leading-relaxed">
                  We support data structuring and evidenced analytical reasoning. We never fabricate research results,
                  manufacture statistical significance, or misrepresent sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
