const LOOP_STEPS: string[] = ["Input", "Process", "Responsibility", "Output", "Review"];

const EXAMPLES: string[] = [
  "Client onboarding",
  "Internal workflows",
  "Documentation processes",
  "Administrative procedures",
  "Research workflows",
  "Reporting processes",
];

export function StartupProcessDocs() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
            Operational Discipline
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight">
            Turn business processes into clear systems.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Unwritten procedures lead to operational variability, onboarding friction, and lost institutional knowledge.
            We document recurring operational routines into clean, repeatable standard operating procedures.
          </p>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md">
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-twilight-blue font-semibold">
              Standard Process Loop
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-xs text-center">
              {LOOP_STEPS.map((step, index) => (
                <div key={step} className="flex items-center gap-space-xs">
                  <div
                    className={`bg-surface-container px-3 py-2 rounded-lg font-label-md text-label-md ${
                      index === LOOP_STEPS.length - 1 ? "text-signal-blue font-medium" : "text-primary"
                    }`}
                  >
                    {step}
                  </div>
                  {index < LOOP_STEPS.length - 1 ? <span className="text-signal-blue">→</span> : null}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm font-body-sm text-body-sm">
            {EXAMPLES.map((example) => (
              <div key={example} className="bg-surface-container p-space-sm rounded-lg text-on-surface">
                {example}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
