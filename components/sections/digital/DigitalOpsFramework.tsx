const STAGES = [
  {
    stage: "Stage 01",
    title: "Capture",
    desc: "Systematically gather all incoming project directives, raw materials, access keys, and source documentation.",
    tag: "Intake & Collation",
  },
  {
    stage: "Stage 02",
    title: "Organize",
    desc: "Segment artifacts into designated working silos, establish clean naming taxonomies, and clear ambiguity.",
    tag: "Classification",
  },
  {
    stage: "Stage 03",
    title: "Prioritize",
    desc: "Determine operational sequencing based on core milestones, input dependencies, and turnaround expectations.",
    tag: "Sequencing",
  },
  {
    stage: "Stage 04",
    title: "Process",
    desc: "Execute core digital, entry, formatting, and administrative production strictly aligned with defined standards.",
    tag: "Execution",
  },
  {
    stage: "Stage 05",
    title: "Review",
    desc: "Conduct methodical verification checks for layout harmony, typographic discipline, and data integrity.",
    tag: "Quality Verification",
  },
  {
    stage: "Stage 06",
    title: "Deliver",
    desc: "Transfer clean deliverables through agreed cloud directories accompanied by transparent handover reports.",
    tag: "Delivery & Close",
  },
];

export function DigitalOpsFramework() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            OPERATIONAL METHODOLOGY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            A simple framework for organized digital work.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {STAGES.map((item) => (
            <div
              key={item.stage}
              className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-label-sm text-signal-green uppercase font-bold">{item.stage}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1 mb-2">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant mt-4">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
