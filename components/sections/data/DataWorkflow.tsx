const steps = [
  { num: "01", title: "Understand", body: "Define research question and project scope." },
  { num: "02", title: "Collect", body: "Gather, aggregate, and stage raw datasets." },
  { num: "03", title: "Clean", body: "Audit syntax, deduplicate, and impute NULLs." },
  { num: "04", title: "Analyse", body: "Execute statistical and empirical models." },
  { num: "05", title: "Visualize", body: "Render tailored charts, graphs, and curves." },
  { num: "06", title: "Interpret", body: "Articulate findings in core commercial context." },
  { num: "07", title: "Deliver", body: "Transmit polished reports, sheets, and datasets." },
];

const numClass = (step: (typeof steps)[number]): string => {
  if (step.num === "01") return "text-signal-blue";
  if (step.num === "07") return "text-whiteout";
  return "text-secondary";
};

export function DataWorkflow() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Our Data Workflow
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout max-w-3xl">
            From raw information to meaningful presentation.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A disciplined, transparent seven-step pipeline applied consistently across every engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
          {steps.map((step) => {
            const highlight = step.num === "07";
            return (
              <div
                key={step.num}
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  highlight
                    ? "bg-signal-blue/15 border-signal-blue/40"
                    : "bg-surface-container-low/80 border-whiteout/10"
                }`}
              >
                <span className={`font-headline-sm text-headline-sm font-mono font-bold ${numClass(step)}`}>
                  {step.num}
                </span>
                <div className="mt-3">
                  <h4 className="font-label-lg text-label-lg text-whiteout font-semibold mb-1">{step.title}</h4>
                  <p
                    className={`text-[13px] leading-tight ${highlight ? "text-whiteout/80" : "text-on-surface-variant"}`}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
