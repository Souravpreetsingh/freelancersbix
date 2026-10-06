const cells = [
  { num: "01", label: "Question", sub: "Core inquiry isolated", highlighted: false },
  { num: "02", label: "Research", sub: "Literature & data pull", highlighted: false },
  { num: "03", label: "Sources", sub: "Cross-verification", highlighted: false },
  { num: "04", label: "Analysis", sub: "Thematic synthesis", highlighted: false },
  { num: "05", label: "Structure", sub: "Evidence mapping", highlighted: false },
  { num: "06", label: "Content", sub: "Rigorous draft", highlighted: true },
  { num: "07", label: "Review", sub: "Final validation", highlighted: true, outcome: true },
];

export function ContentPipeline() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="p-space-xl rounded-2xl bg-surface-container border border-whiteout/10">
          <div className="max-w-2xl mb-space-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
              Empirical Rigor
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight mt-1">
              When writing needs research behind it.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Writing built on unsubstantiated opinion fails institutional scrutiny. We route complex topics through a
              continuous 7-stage evidence validation chain.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">
            {cells.map((cell) => (
              <div
                key={cell.num}
                className={
                  cell.outcome
                    ? "col-span-2 md:col-span-1 p-space-sm rounded-lg bg-secondary-container/40 border border-signal-blue/30 text-center flex flex-col justify-between"
                    : "p-space-sm rounded-lg bg-surface-container-high border border-whiteout/5 text-center flex flex-col justify-between"
                }
              >
                <span
                  className={`font-mono text-label-sm ${
                    cell.outcome || cell.highlighted ? "text-signal-blue" : "text-on-surface-variant/60"
                  }`}
                >
                  {cell.num}
                </span>
                <span className="font-label-md text-label-md text-whiteout font-medium my-2">{cell.label}</span>
                <span className={`text-[10px] ${cell.outcome ? "text-secondary" : "text-on-surface-variant"}`}>
                  {cell.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
