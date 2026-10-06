const steps = [
  {
    num: "01",
    label: "Understand",
    body: "Clarify purpose, target audience, core objectives, constraints, and delivery formats.",
    highlighted: false,
  },
  {
    num: "02",
    label: "Research",
    body: "Gather primary background materials, verify references, and review relevant benchmarks.",
    highlighted: false,
  },
  {
    num: "03",
    label: "Structure",
    body: "Map out logical hierarchies, section headings, visual cues, and key messaging arcs.",
    highlighted: false,
  },
  {
    num: "04",
    label: "Write",
    body: "Author focused, concise drafts using precise industry vocabulary tailored to readers.",
    highlighted: false,
  },
  {
    num: "05",
    label: "Refine",
    body: "Perform rigorous editorial passes for clarity, syntax, formatting, and precision.",
    highlighted: false,
  },
  {
    num: "06",
    label: "Deliver",
    body: "Supply publication-ready files formatted cleanly for deployment and review.",
    highlighted: true,
  },
];

export function ContentWorkflow() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs text-center items-center mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
            Our Writing Process
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            From Information to Communication
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Every project follows a defined systematic framework to ensure accuracy, depth, and timely delivery.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-whiteout/10 -z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-lg relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-space-sm items-start">
                <div
                  className={`w-20 h-20 rounded-2xl bg-surface-container-high flex flex-col items-center justify-center text-whiteout shadow-lg ${
                    step.highlighted ? "border border-signal-blue/40" : "border border-whiteout/15"
                  }`}
                >
                  <span className="font-mono text-label-sm text-signal-blue">{step.num}</span>
                  <span className="font-label-md text-label-md font-semibold">{step.label}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
