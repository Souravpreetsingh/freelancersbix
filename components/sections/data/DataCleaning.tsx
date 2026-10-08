const beforeRows = [
  { id: "[ROW 01]", cells: 'ID: 104 • Date: "03/12/2024" • Region: " east " • Revenue: "$12,400.00"', anomaly: "" },
  {
    id: "[ROW 02]",
    cells: 'ID: 104 • Date: "2024-03-12" • Region: "EAST" • Revenue: "12400"',
    anomaly: "(Duplicate Row)",
  },
  { id: "[ROW 03]", cells: 'ID: 105 • Date: "14-Mar-24" • Region: "West" • Revenue: NULL', anomaly: "(Missing Value)" },
  { id: "[ROW 04]", cells: 'ID: 106 • Date: "2024/03/15" • Region: "CENTRAL_div" • Revenue: "9800.5"', anomaly: "" },
];

const afterRows = [
  {
    id: "[REC 01]",
    cells: 'ID: 00104 • ISO_DATE: 2024-03-12 • REGION: "EAST" • REV_USD: 12400.00',
    note: "",
    muted: false,
  },
  { id: "[REC 02]", cells: "--- REDUNDANT RECORD PURGED (Deduplication Check Passed) ---", note: "", muted: true },
  {
    id: "[REC 03]",
    cells: 'ID: 00105 • ISO_DATE: 2024-03-14 • REGION: "WEST" • REV_USD: 10520.00',
    note: "(Imputed)",
    muted: false,
  },
  {
    id: "[REC 04]",
    cells: 'ID: 00106 • ISO_DATE: 2024-03-15 • REGION: "CENTRAL" • REV_USD: 9800.50',
    note: "",
    muted: false,
  },
];

export function DataCleaning() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Interactive Data Audit
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Data Cleaning in Action
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            A realistic before-and-after comparison of how a single messy export is reconciled into a rigorous,
            analysis-ready structure.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <div className="p-space-lg rounded-xl bg-surface-container-low border border-error/20">
            <div className="flex items-center justify-between pb-space-md border-b border-error/20 mb-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error" />
                <span className="font-label-lg text-label-lg uppercase text-error font-bold">
                  Before: Unstructured Raw Ingest
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-error/80 font-mono">5 Anomalies Flagged</span>
            </div>
            <div className="space-y-2 font-mono text-[12px] text-on-surface-variant overflow-x-auto">
              {beforeRows.map((row) => (
                <div
                  key={row.id}
                  className="px-3 py-2.5 rounded-lg bg-surface-container-lowest/80 border border-error/20 text-error/90 whitespace-nowrap"
                >
                  {row.id} {row.cells} <span className="font-medium">{row.anomaly}</span>
                </div>
              ))}
            </div>
            <p className="font-label-sm text-label-sm text-[11px] text-outline mt-space-md leading-relaxed">
              Inconsistent timestamps, unhandled whitespace, missing numerical parameters, unindexed keys.
            </p>
          </div>
          <div className="p-space-lg rounded-xl bg-surface-container-low border border-signal-green/30">
            <div className="flex items-center justify-between pb-space-md border-b border-signal-green/30 mb-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-green" />
                <span className="font-label-lg text-label-lg uppercase text-secondary font-bold">
                  After: Standardized &amp; Reconciled
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-mono">100% Normalized</span>
            </div>
            <div className="space-y-2 font-mono text-[12px] overflow-x-auto">
              {afterRows.map((row) => (
                <div
                  key={row.id}
                  className={`px-3 py-2.5 rounded-lg bg-surface-container-lowest/80 border border-signal-green/20 whitespace-nowrap ${
                    row.muted ? "text-outline" : "text-primary"
                  }`}
                >
                  {row.id} {row.cells} <span className="text-secondary">{row.note}</span>
                </div>
              ))}
            </div>
            <p className="font-label-sm text-label-sm text-[11px] text-secondary mt-space-md leading-relaxed">
              Strict ISO 8601 formatting, sanitized categorical casing, resolved nulls, deduplicated identity fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
