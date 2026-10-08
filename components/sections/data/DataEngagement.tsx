const steps = [
  {
    num: "01",
    label: "Requirement & Scope Specification",
    tag: "Initial Consultation",
    numClass: "text-signal-green",
    bold: false,
  },
  {
    num: "02",
    label: "Data Review & Integrity Ingest",
    tag: "Feasibility Check",
    numClass: "text-secondary",
    bold: false,
  },
  {
    num: "03",
    label: "Cleansing, Normalization & Structuring",
    tag: "Preparation",
    numClass: "text-secondary",
    bold: false,
  },
  {
    num: "04",
    label: "Statistical Analysis & Empirical Execution",
    tag: "Computation",
    numClass: "text-secondary",
    bold: false,
  },
  {
    num: "05",
    label: "Visualization Drafting & Chart Construction",
    tag: "Design",
    numClass: "text-secondary",
    bold: false,
  },
  {
    num: "06",
    label: "Analytical Interpretation & Contextualization",
    tag: "Synthesis",
    numClass: "text-secondary",
    bold: false,
  },
  {
    num: "07",
    label: "Delivery, Codebook Handover & Review",
    tag: "Project Completion",
    numClass: "text-primary",
    bold: true,
    highlighted: true,
  },
];

export function DataEngagement() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Engagement Cadence
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Typical Project Workflow
          </h2>
        </div>
        <div className="space-y-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`p-4 rounded-xl border flex items-center justify-between ${
                step.highlighted
                  ? "bg-signal-green/15 border-signal-green/30"
                  : "bg-surface-container border-outline-variant"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`font-mono font-bold text-sm ${step.numClass}`}>{step.num}</span>
                <span className={`font-label-lg text-label-lg text-primary ${step.bold ? "font-bold" : "font-medium"}`}>
                  {step.label}
                </span>
              </div>
              <span
                className={`font-label-sm text-label-sm ${step.highlighted ? "text-primary/80" : "text-on-surface-variant"}`}
              >
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
