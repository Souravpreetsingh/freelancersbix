const sections = [
  { title: "1. Executive Summary & Key Findings", tag: "Section 01" },
  { title: "2. Research Objectives & Scope", tag: "Section 02" },
  { title: "3. Methodology & Assumptions", tag: "Section 03" },
  { title: "4. Dataset Description & Hygiene", tag: "Section 04" },
  { title: "5. Quantitative & Qualitative Analysis", tag: "Section 05" },
  { title: "6. Visual Findings & Infographics", tag: "Section 06" },
  { title: "7. Contextual Interpretation", tag: "Section 07" },
  { title: "8. Practical Conclusions", tag: "Section 08" },
  { title: "9. Actionable Next Steps", tag: "Section 09" },
  { title: "10. Statistical Appendices & Codebooks", tag: "Section 10" },
];

export function DataReportStructure() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Synthesis &amp; Publication
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Bring analysis together in a professional report.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A consistent, defensible document architecture that walks every reader from the headline insight to the raw
            appendix.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-space-xl rounded-xl bg-surface-container-low border border-whiteout/10 backdrop-blur-md">
          <div className="flex items-center justify-between pb-space-md border-b border-whiteout/10 mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
              Illustrative Report Structure
            </span>
            <span className="font-label-sm text-label-sm text-outline">Document Specification • Dossier Format</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((section) => (
              <div
                key={section.tag}
                className="p-3 rounded-lg bg-surface-container/60 border border-whiteout/5 flex items-center justify-between"
              >
                <span className="font-label-md text-label-md text-whiteout">{section.title}</span>
                <span className="font-label-sm text-label-sm text-outline whitespace-nowrap">{section.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
