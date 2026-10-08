const phases = [
  {
    num: "01",
    title: "Understand Scope",
    body: "Initial review of instructions, methodology guidelines, citation standards, and explicit deadlines before starting work.",
  },
  {
    num: "02",
    title: "Exhaustive Literature",
    body: "Sourcing credible peer-reviewed databases, establishing theoretical framework alignments, and organizing citation meta-lists.",
  },
  {
    num: "03",
    title: "Analysis & Synthesis",
    body: "Critical comparison of academic viewpoints, statistical dataset processing, and building clear thematic structures.",
  },
  {
    num: "04",
    title: "Refined Delivery",
    body: "Strict formatting to institutional stylesheets, academic proofreading, and delivering organized source documentation.",
  },
];

export function AcademicIntro() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green mb-space-xs block">
              Operational Clarity
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-space-md">
              Research support built around your requirement.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Research projects often involve large amounts of information, complex academic parameters, and multiple
              stages of analysis. FreelancersBix helps organize the process into an articulate, traceable workflow —
              bridging initial scope scoping with final presentation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs py-space-md">
            <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">
              01 Understand
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">→</span>
            <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">
              02 Source
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">→</span>
            <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">
              03 Analyse
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">→</span>
            <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">
              04 Structure
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">→</span>
            <span className="px-space-sm py-1 rounded bg-secondary-container font-label-sm text-label-sm text-on-secondary-container">
              05 Deliver
            </span>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {phases.map((phase) => (
            <div key={phase.num} className="p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-label-sm text-label-sm text-signal-green font-bold">{`PHASE ${phase.num}`}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-space-xs mb-space-xs">{phase.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{phase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
