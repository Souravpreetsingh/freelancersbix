const WORKFLOW = [
  {
    num: "01",
    title: "Understand",
    desc: "Define the task, explicit acceptance criteria, input formats, and expected output parameters.",
    tag: "Task Briefing",
    highlight: false,
  },
  {
    num: "02",
    title: "Organize",
    desc: "Review available information, audit raw files, check access permissions, and systematize workspace.",
    tag: "Data Staging",
    highlight: false,
  },
  {
    num: "03",
    title: "Process",
    desc: "Complete defined digital, data entry, or administrative tasks systematically according to protocol.",
    tag: "Core Execution",
    highlight: false,
  },
  {
    num: "04",
    title: "Review",
    desc: "Execute cross-check inspection for formatting rules, completeness, duplicates, and typographic accuracy.",
    tag: "Quality Audit",
    highlight: false,
  },
  {
    num: "05",
    title: "Communicate",
    desc: "Clarify relevant edge cases, confirm adjustments, and flag missing source inputs synchronously.",
    tag: "Feedback Loop",
    highlight: false,
  },
  {
    num: "06",
    title: "Deliver",
    desc: "Provide agreed final deliverables in structured folders with clear handoff change-logs.",
    tag: "Final Handover",
    highlight: true,
  },
];

export function DigitalWorkflow() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            OUR SUPPORT WORKFLOW
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Simple process. Clear ownership. Organized delivery.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-md relative">
          {WORKFLOW.map((step) => (
            <div
              key={step.num}
              className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-headline-sm mb-space-md ${
                    step.highlight ? "bg-signal-green text-whiteout" : "bg-surface-container-highest text-primary"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
              </div>
              <span
                className={`font-mono text-label-sm mt-space-md pt-space-xs block ${
                  step.highlight ? "text-secondary" : "text-signal-green"
                }`}
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
