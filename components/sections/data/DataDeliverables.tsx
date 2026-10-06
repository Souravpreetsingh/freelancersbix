const deliverables = [
  "Cleaned Datasets (CSV / Parquet / XLSX)",
  "Excel Spreadsheets with Dynamic Logic",
  "Structured Data Tables",
  "Survey Analysis Reports",
  "Statistical Summaries & Coefficients",
  "High-Resolution Data Visualizations",
  "Research Analysis Reports",
  "Custom Enterprise Research Dossiers",
  "Analytical Executive Briefings",
  "Supporting Vector SVG Charts",
  "Visual Infographic Summaries",
  "Executive Presentation Slides",
  "Data Interpretation Documents",
  "Supporting Methodology Documentation",
];

export function DataDeliverables() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Tangible Outputs
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Clear analytical deliverables.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Every engagement ends with structured, portable outputs you own outright — ready to present, share, or build
            upon.
          </p>
        </div>
        <div className="flex flex-wrap gap-space-sm">
          {deliverables.map((deliverable) => (
            <span
              key={deliverable}
              className="px-4 py-2 rounded-lg bg-surface-container border border-whiteout/10 text-whiteout font-label-md text-label-md flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal-blue" />
              {deliverable}
            </span>
          ))}
        </div>
        <p className="font-label-sm text-label-sm text-[11px] text-outline mt-space-md">
          * Specific deliverable bundles depend on project scope, data availability, and intended operational use.
        </p>
      </div>
    </section>
  );
}
