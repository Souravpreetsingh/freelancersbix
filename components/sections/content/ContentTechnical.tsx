const rows = [
  { left: "1. Architecture Overview", right: "Scope & Intent", highlighted: true },
  { left: "2. Requirements & Prerequisites", right: "System Specs", highlighted: false },
  { left: "3. Execution Process & SOP", right: "Step-by-step", highlighted: false },
  { left: "4. Technical Specifications", right: "Parameters", highlighted: false },
  { left: "5. Practical Code & Use Cases", right: "Implementation", highlighted: false },
  { left: "6. References & Appendices", right: "Standards", highlighted: false },
];

export function ContentTechnical() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Technical Precision
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight leading-tight">
            Complex information deserves clear documentation.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            From developer documentation and API blueprints to enterprise manufacturing checklists, clarity in technical
            writing eliminates friction and minimizes operational overhead.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We translate intricate concepts into accessible, standardized documentation architectures with systematic
            navigation for both technical engineers and commercial executives.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="p-space-lg rounded-2xl bg-surface-container border border-outline-variant">
            <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-md">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                Standard Technical Architecture
              </span>
              <span className="font-label-sm text-label-sm text-deep-sage font-mono">DOC_SPEC_V4</span>
            </div>
            <div className="space-y-2">
              {rows.map((row) => (
                <div
                  key={row.left}
                  className={`flex items-center justify-between p-2 rounded bg-surface-container-high border-l-2 text-body-sm text-primary ${
                    row.highlighted ? "border-signal-green" : "border-outline-variant"
                  }`}
                >
                  <span className="font-medium">{row.left}</span>
                  <span className="text-[11px] text-on-surface-variant font-mono">{row.right}</span>
                </div>
              ))}
            </div>
            <div className="mt-space-md text-[11px] text-on-surface-variant/60 italic text-right">
              Illustrative documentation structure — customized to organizational governance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
