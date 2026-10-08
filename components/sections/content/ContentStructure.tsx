const rows = [
  { num: "01", title: "Title & Positioning Frame", sub: "Immediate context and scope", accent: true },
  { num: "02", title: "Executive Summary", sub: "Distilled core findings and bottom line", accent: true },
  { num: "03", title: "Contextual Introduction", sub: "Problem statement and methodology", accent: false },
  {
    num: "04",
    title: "Main Body & Thematic Sections",
    sub: "Detailed narrative, sub-headings, and data",
    accent: false,
  },
  { num: "05", title: "Analysis & Core Findings", sub: "Evidence evaluation and implications", accent: false },
  { num: "06", title: "Actionable Recommendations", sub: "Clear strategic next steps", accent: true },
  { num: "07", title: "Conclusion & References", sub: "Rigorous bibliographic support", accent: false },
];

export function ContentStructure() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-semibold">
            Anatomy of Impact
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight mt-1">
            Hierarchical Document Structure
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every high-value institutional document follows a disciplined cognitive hierarchy.
          </p>
        </div>
        <div className="space-y-space-xs">
          {rows.map((row) => (
            <div
              key={row.num}
              className={`p-space-sm rounded-lg bg-surface-container flex items-center justify-between border-l-4 ${
                row.accent ? "border-signal-green" : "border-outline-variant"
              }`}
            >
              <div className="flex items-center gap-space-sm">
                <span className={`font-mono text-label-sm ${row.accent ? "text-signal-green" : "text-primary/60"}`}>
                  {row.num}
                </span>
                <span className="font-label-lg text-label-lg text-primary font-semibold">{row.title}</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{row.sub}</span>
            </div>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant/50 italic text-center mt-space-md">
          Document structures vary according to project, audience and intended use.
        </p>
      </div>
    </section>
  );
}
