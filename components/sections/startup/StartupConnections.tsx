import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const COLLECT: { title: string; sub: string }[] = [
  { title: "Collect", sub: "Raw Datasets" },
  { title: "Analyse", sub: "Pattern Mining" },
  { title: "Visualize", sub: "Executive Charts" },
];

const RESEARCH_CHECKLIST: string[] = [
  "Granular competitor benchmark matrices",
  "Target audience surveys & sentiment analysis",
  "Commercial viability & feasibility reporting",
];

export function StartupConnections() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
              Integrations
            </span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mt-1 mb-space-md">
              When business planning requires data.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Quantitative rigor elevates business plans from subjective propositions to defensible strategic documents.
            </p>
            <div className="grid grid-cols-3 gap-space-sm mb-space-lg">
              {COLLECT.map((item) => (
                <div key={item.title} className="bg-surface-container p-space-sm rounded-lg text-center">
                  <span className="font-headline-sm text-headline-sm text-primary block">{item.title}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/services/data-and-research"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-signal-blue hover:text-primary transition-colors font-medium"
          >
            <span>Explore Data &amp; Research Services</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
        <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
              Extended Advisory
            </span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mt-1 mb-space-md">
              Need deeper market research?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Connect directly with specialized analytical modules: full primary and secondary market research,
              comprehensive competitor intelligence, and independent commercial feasibility studies.
            </p>
            <div className="space-y-space-xs mb-space-lg font-body-sm text-body-sm text-on-surface">
              {RESEARCH_CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-space-xs">
                  <MaterialIcon name="check" className="text-[16px] text-signal-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/services/business-and-consulting"
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-signal-blue hover:text-primary transition-colors font-medium"
          >
            <span>Explore Business Research</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
