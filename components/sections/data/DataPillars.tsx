const pillars = [
  {
    num: "01",
    title: "Accuracy",
    body: "Disciplined handling of complex mathematical computations and field-level cross-verifications.",
    numClass: "text-signal-green",
  },
  {
    num: "02",
    title: "Consistency",
    body: "Uniform taxonomies, harmonized naming logic, and standardized time-series notation.",
    numClass: "text-secondary",
  },
  {
    num: "03",
    title: "Relevance",
    body: "Targeted analytical focus aligned with primary research or corporate decision points.",
    numClass: "text-secondary",
  },
  {
    num: "04",
    title: "Clarity",
    body: "Visual and textual synthesis that empowers immediate, unencumbered executive review.",
    numClass: "text-primary",
  },
];

export function DataPillars() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Governance &amp; Accuracy
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            The Four Pillars of Quality
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between"
            >
              <div>
                <span className={`font-headline-sm text-headline-sm font-mono font-bold ${pillar.numClass}`}>
                  {pillar.num}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary my-2">{pillar.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
