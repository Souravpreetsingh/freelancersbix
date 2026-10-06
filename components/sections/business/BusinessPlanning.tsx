const EQUATION = ["Market", "Customer", "Competition", "Business Model", "Operations", "Financials"];

const EVIDENCE_PILLARS = [
  "Validated Target Demographics",
  "Concrete Revenue Mechanics",
  "Competitor Moat Analysis",
  "Realistic Operating Expenses",
  "Multi-scenario Cash Flows",
  "Go-to-Market Milestones",
  "Regulatory Feasibility",
  "Exit & Expansion Options",
];

export function BusinessPlanning() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
              Evidence-Based Strategy
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
              Build plans around evidence, not assumptions.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A sustainable business plan is not an exercise in optimism; it is an organized, coherent mathematical and
              strategic synthesis of verified market realities.
            </p>
            <div className="bg-surface-container p-space-md rounded-lg mt-space-xs">
              <span className="font-label-sm text-label-sm uppercase text-twilight-blue tracking-wider block mb-2">
                Synthesis Framework
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-body-sm font-medium text-primary">
                {EQUATION.map((term, index) => (
                  <span key={term} className="flex items-center gap-1.5">
                    {index > 0 ? <span className="text-signal-blue">+</span> : null}
                    <span className="px-2 py-1 bg-surface-container-high rounded text-[12px]">{term}</span>
                  </span>
                ))}
                <span className="text-signal-blue">=</span>
                <span className="px-2.5 py-1 bg-signal-blue text-whiteout rounded font-semibold text-[12px]">
                  Structured Plan
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            {EVIDENCE_PILLARS.map((pillar) => (
              <div key={pillar} className="p-space-sm bg-surface-container rounded-lg flex items-center gap-space-sm">
                <span className="w-1.5 h-6 bg-signal-blue rounded-full" />
                <span className="font-body-sm text-body-sm text-on-surface font-medium">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
