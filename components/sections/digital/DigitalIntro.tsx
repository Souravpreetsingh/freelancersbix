const STEPS = [
  {
    num: "01",
    title: "Request",
    desc: "Scope baseline, expectations & format target",
    tag: "Intake",
    tagClass: "bg-signal-green/10 text-signal-green",
    active: false,
  },
  {
    num: "02",
    title: "Organize",
    desc: "Assemble assets, catalog sources, set file rules",
    tag: "Setup",
    tagClass: "bg-secondary/10 text-secondary",
    active: false,
  },
  {
    num: "03",
    title: "Process",
    desc: "Execute entry, standardization, data assembly",
    tag: "Active",
    tagClass: "bg-signal-green/20 text-signal-green font-bold",
    active: true,
  },
  {
    num: "04",
    title: "Review",
    desc: "Verify consistency, structural check, cross-audit",
    tag: "Audit",
    tagClass: "bg-surface-container-highest text-on-surface-variant",
    active: false,
  },
  {
    num: "05",
    title: "Deliver",
    desc: "Structured handover with documentation notes",
    tag: "Complete",
    tagClass: "bg-primary/20 text-primary",
    active: false,
  },
];

export function DigitalIntro() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-signal-green font-bold">
              DIGITAL OPERATIONS SUPPORT
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-tight">
              Less administrative friction.
              <br />
              More organized work.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Businesses, independent consultants, and academic researchers frequently find their momentum hindered by
              necessary but time-consuming operational tasks. Organizing raw datasets, standardizing multi-author report
              formatting, managing directories, and collecting public market intelligence demand meticulous precision
              and uninterrupted attention.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              FreelancersBix provides structured digital and administrative backing designed to eliminate operational
              bottlenecks. By applying systematic data structures, standardized templates, and documented review cycles,
              we turn fragmented inputs into orderly, reliable outputs.
            </p>
          </div>
          <div className="lg:col-span-6 bg-surface-container-low p-space-xl rounded-xl">
            <div className="flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-mono">
                Progressive Execution Sequence
              </span>
              <div className="space-y-space-sm">
                {STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-center justify-between p-space-sm bg-surface-container rounded-lg"
                  >
                    <div className="flex items-center gap-space-sm">
                      <span
                        className={`w-7 h-7 rounded-full font-mono text-label-sm flex items-center justify-center font-bold ${
                          step.active ? "bg-signal-green text-whiteout" : "bg-surface-container-highest text-primary"
                        }`}
                      >
                        {step.num}
                      </span>
                      <div>
                        <span className="font-label-lg text-label-lg text-primary block">{step.title}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</span>
                      </div>
                    </div>
                    <span
                      className={`font-label-sm text-label-sm font-mono uppercase px-2 py-0.5 rounded ${step.tagClass}`}
                    >
                      {step.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
