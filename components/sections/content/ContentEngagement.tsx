const steps = [
  { num: "01", title: "Requirement", body: "Intake, brief analysis & scope lock" },
  { num: "02", title: "Audience", body: "Context, persona & tone calibration" },
  { num: "03", title: "Research", body: "Data collection & source gathering" },
  { num: "04", title: "Outline", body: "Document structure & sign-off" },
  { num: "05", title: "Writing", body: "Primary draft production" },
  { num: "06", title: "Editing", body: "Substantive checks & proofreading" },
  { num: "07", title: "Delivery", body: "Final publication-ready package" },
];

export function ContentEngagement() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-semibold">
            Project Lifecycle
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            How an engagement progresses.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-space-sm">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`p-space-sm rounded-lg flex flex-col justify-between ${
                index === steps.length - 1
                  ? "bg-surface-container-high border border-signal-green/40"
                  : "bg-surface-container border border-outline-variant"
              }`}
            >
              <span className="font-mono text-label-sm text-signal-green">{step.num}</span>
              <div>
                <h4 className="font-label-md text-label-md text-primary font-semibold mt-1">{step.title}</h4>
                <p
                  className={`font-body-sm text-[12px] mt-1 ${
                    index === steps.length - 1 ? "text-secondary" : "text-on-surface-variant"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
