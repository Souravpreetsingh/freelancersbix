import { MaterialIcon } from "@/components/icons/MaterialIcon";

const standards = [
  {
    label: "Completeness",
    body: "Systematically isolate missing cells, sample attrition, and truncated records.",
  },
  {
    label: "Consistency",
    body: "Standardize chronological syntax, naming taxonomies, and numerical conventions.",
  },
  {
    label: "Structure",
    body: "Reformat tables into normalized relational or flat tabular schema suitable for modeling.",
  },
  {
    label: "Context",
    body: "Ground mathematical outputs in domain knowledge and documented project goals.",
  },
];

export function DataQuality() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Verification Standards
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Good analysis starts with organized data.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Flawed inputs inevitably generate misleading conclusions. Our quality framework enforces four pillars of
            scrutiny to ensure analytical validity and executive confidence.
          </p>
          <div className="space-y-3 pt-space-xs">
            {standards.map((standard) => (
              <div key={standard.label} className="p-3.5 rounded-lg bg-surface-container-low border border-whiteout/5">
                <span className="font-label-lg text-label-lg text-whiteout font-semibold block mb-0.5">
                  {standard.label}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{standard.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="p-space-xl rounded-xl bg-surface-container border border-whiteout/10">
            <div className="flex items-center justify-between mb-space-lg">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-whiteout font-semibold">
                Data Maturity Progression
              </span>
              <span className="font-label-sm text-label-sm text-outline">Illustrative example</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest/80 border border-whiteout/10 text-center flex flex-col items-center">
                <MaterialIcon name="warning" className="text-[28px] text-error mb-space-sm" />
                <span className="font-headline-sm text-headline-sm text-whiteout font-semibold mb-2">
                  Messy Dataset
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  High entropy, null collisions, varied dates
                </p>
                <span className="px-3 py-1 rounded-full bg-error/10 text-error border border-error/30 font-label-sm text-label-sm">
                  Unverified
                </span>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest/80 border border-whiteout/10 text-center flex flex-col items-center">
                <MaterialIcon name="sync_saved_locally" className="text-[28px] text-secondary mb-space-sm" />
                <span className="font-headline-sm text-headline-sm text-whiteout font-semibold mb-2">
                  Structured Dataset
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Normalized headers, standardized schema
                </p>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/30 font-label-sm text-label-sm">
                  Formatted
                </span>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest/80 border border-signal-blue/20 text-center flex flex-col items-center bg-signal-blue/5">
                <MaterialIcon name="verified" className="text-[28px] text-signal-blue mb-space-sm" />
                <span className="font-headline-sm text-headline-sm text-whiteout font-semibold mb-2">
                  Analysis-Ready
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Imputed, verified, documented variables
                </p>
                <span className="px-3 py-1 rounded-full bg-signal-blue text-whiteout border border-signal-blue/50 font-label-sm text-label-sm font-bold">
                  &quot;100% Ready&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
