const PIPELINE: { num: string; step: string; circleClass: string; detail: string }[] = [
  {
    num: "1",
    step: "Business Question",
    circleClass: "bg-signal-green/20 text-signal-green",
    detail: "Formulation of exact parameters, objectives, and market hypotheses.",
  },
  {
    num: "2",
    step: "Research",
    circleClass: "bg-surface-container text-on-surface",
    detail: "Comprehensive collection of primary signals, market literature, and empirical data.",
  },
  {
    num: "3",
    step: "Analysis",
    circleClass: "bg-surface-container text-on-surface",
    detail: "Synthesis through proven frameworks (SWOT, PESTLE, Porter's Five Forces).",
  },
  {
    num: "4",
    step: "Insight",
    circleClass: "bg-surface-container text-on-surface",
    detail: "Distillation of patterns into actionable strategic leverage points.",
  },
  {
    num: "5",
    step: "Decision Support",
    circleClass: "bg-signal-green text-whiteout",
    detail: "Clear executive presentations, risk assessments, and implementation blueprints.",
  },
];

export function BusinessIntro() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Business Research Support
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight leading-tight">
            Better business decisions start with better information.
          </h2>
          <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
            <p>
              In high-stakes markets, businesses rarely suffer from a lack of data; rather, they struggle with
              information overload, fragmented perspectives, and biased synthesis. Moving forward without empirical
              rigor exposes capital and resources to avoidable hazards.
            </p>
            <p>
              Our dedicated business research and advisory consultants bridge this operational void. By synthesizing
              structured secondary data, evaluating competitor positions, and stress-testing commercial assumptions, we
              provide organizations with the objective clarity required to enter new markets, secure investment, and
              build sustainable enterprises.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 bg-surface-container-low rounded-xl p-space-xl shadow-lg">
          <div className="flex items-center justify-between pb-space-md mb-space-md">
            <span className="font-headline-sm text-headline-sm text-primary">Strategic Discovery Pipeline</span>
            <span className="font-label-sm text-label-sm text-signal-green">Sequential Logic</span>
          </div>
          <div className="relative space-y-space-md">
            {PIPELINE.map((item, index) => (
              <div key={item.step}>
                <div className="flex items-start gap-space-md">
                  <div
                    className={`${item.circleClass} w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-md shrink-0`}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-body-lg font-medium text-primary">{item.step}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{item.detail}</p>
                  </div>
                </div>
                {index < PIPELINE.length - 1 ? <div className="w-0.5 h-6 bg-surface-container-highest ml-4" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
