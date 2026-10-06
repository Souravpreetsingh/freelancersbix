const STEPS = [
  { num: "01", title: "Requirement", desc: "Define task scope and deliverables", highlight: false },
  { num: "02", title: "Access", desc: "Review files and instructions provided", highlight: false },
  { num: "03", title: "Organization", desc: "Structure data and set rules before processing", highlight: false },
  { num: "04", title: "Execution", desc: "Complete agreed tasks systematically", highlight: false },
  { num: "05", title: "Review", desc: "Check format, consistency, completeness", highlight: false },
  { num: "06", title: "Delivery", desc: "Provide clean, validated output files", highlight: false },
  { num: "07", title: "Follow-Up", desc: "Handle agreed revisions or extensions", highlight: true },
];

export function DigitalTimeline() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            CLIENT ENGAGEMENT PATHWAY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Typical Engagement Timeline
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-space-sm">
          {STEPS.map((step) => (
            <div key={step.num} className="p-space-sm rounded-lg bg-surface-container-low text-center">
              <span
                className={`font-mono text-label-sm font-bold block mb-1 ${
                  step.highlight ? "text-secondary" : "text-signal-blue"
                }`}
              >
                {step.num}
              </span>
              <h3 className="font-label-lg text-label-lg text-primary font-bold mb-1">{step.title}</h3>
              <p className="text-[12px] text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
