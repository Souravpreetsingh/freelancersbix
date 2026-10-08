const PILLARS = [
  {
    number: "01",
    title: "Quality",
    text: "We care deeply about precision, clarity, and publication-ready presentation. Good enough is never our benchmark.",
  },
  {
    number: "02",
    title: "Ownership",
    text: "We encourage self-directed accountability. Every contributor owns their deliverables from kickoff through final handover.",
  },
  {
    number: "03",
    title: "Communication",
    text: "Clear, asynchronous communication solves problems quickly, avoids ambiguity, and keeps team commitments transparent.",
  },
  {
    number: "04",
    title: "Continuous Learning",
    text: "Professional skills must constantly adapt. We champion active curiosity, methodological updates, and tool mastery.",
  },
];

export function CareerPrinciples() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col gap-space-xs max-w-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            How We Work
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Professional standards shape how we work.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-surface-container-low p-space-xl rounded-xl flex flex-col gap-space-md"
            >
              <span className="font-label-sm text-label-sm font-bold text-signal-green tracking-widest">
                {pillar.number} / PILLAR
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase font-bold">{pillar.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
