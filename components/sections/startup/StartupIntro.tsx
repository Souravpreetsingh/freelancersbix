const STEPS: { num: string; title: string; desc: string }[] = [
  {
    num: "01",
    title: "Idea",
    desc: "Deconstruct vision into verifiable core assumptions.",
  },
  {
    num: "02",
    title: "Research",
    desc: "Evidence-based validation across customer, market, and competitor domains.",
  },
  {
    num: "03",
    title: "Strategy",
    desc: "Synthesize clear value propositions and operating model mechanics.",
  },
  {
    num: "04",
    title: "Plan",
    desc: "Compile rigorous operational dossiers, roadmaps, and presentation assets.",
  },
  {
    num: "05",
    title: "Execution Support",
    desc: "Process documentation, ongoing research assistance, and operational assets.",
  },
];

export function StartupIntro() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-semibold">
            Business Support
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight">
            Good ideas need structure before they need scale.
          </h2>
          <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
            <p>
              Starting or growing a business involves more than having an idea. It requires research, planning,
              documentation, market understanding and clear operational thinking. FreelancersBix provides structured
              business and startup support designed around specific requirements and objectives.
            </p>
            <p>
              Whether you are developing an initial business concept, preparing a business plan, researching a market or
              organizing business documentation, our approach focuses on turning complex requirements into clear,
              professional deliverables.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col gap-space-sm">
          <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col gap-space-lg">
            <div className="flex items-center justify-between pb-space-sm bg-surface-container-high/40 px-space-md py-space-xs rounded-lg">
              <span className="font-label-sm text-label-sm text-deep-sage font-semibold uppercase tracking-wider">
                Methodology Progression
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">End-to-End Rigor</span>
            </div>
            <div className="flex flex-col gap-space-md">
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="flex items-center gap-space-md bg-surface-container p-space-md rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-signal-green/20 text-signal-green flex items-center justify-center font-bold text-label-md shrink-0">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">{step.title}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
