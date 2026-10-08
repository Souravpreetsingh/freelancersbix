const TIPS = [
  {
    number: "01",
    title: "Be Highly Specific",
    text: "Explain the core deliverable format, software tools required (e.g. QuickBooks, R, Excel, LaTeX), and end audience.",
  },
  {
    number: "02",
    title: "Share Existing Files",
    text: "Attaching preliminary drafts, sample reports, style guides, or account structures accelerates evaluation tenfold.",
  },
  {
    number: "03",
    title: "State Milestone Deadlines",
    text: "Specify internal client dates or submission windows so we can allocate dedicated practitioner slots promptly.",
  },
  {
    number: "04",
    title: "Clarify Priority Focus",
    text: "Indicate whether mathematical rigor, deep academic depth, speed-to-market, or compliance precision is paramount.",
  },
];

export function ContactTips() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="flex flex-col items-start mb-space-2xl">
        <span className="font-label-md text-label-md text-signal-green uppercase tracking-widest font-semibold">
          Intake Excellence
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-1">
          A little context ensures rapid accuracy.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Following these simple preparation principles ensures our practice leads can formulate an accurate deliverable
          plan immediately without protracted back-and-forth.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {TIPS.map((tip) => (
          <div key={tip.number} className="p-space-lg rounded-xl bg-surface hover:bg-surface-container transition-all">
            <div className="font-headline-md text-headline-md font-mono text-signal-green font-bold mb-space-sm">
              {tip.number}
            </div>
            <h4 className="font-headline-sm text-[16px] text-primary font-bold mb-space-xs">{tip.title}</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
