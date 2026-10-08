import { MaterialIcon } from "@/components/icons/MaterialIcon";

const scope = [
  "Response distributions",
  "Category frequencies",
  "Cross-tabulations",
  "Mean & median splits",
  "Trend summaries",
  "Visual comparative decks",
];

const flow = [
  { label: "01. Survey Ingest (Qualtrics, Typeform, Sheets)", stage: "Stage 1", muted: false },
  { label: "02. Likert Coding & Text Parsing", stage: "Stage 2", muted: false },
  { label: "03. Contingency Matrix & Cross-Tabs", stage: "Stage 3", muted: true },
  { label: "04. Actionable Demographic Findings", stage: "Outcome", final: true },
];

export function DataSurvey() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Empirical Reviews
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Turn survey responses into structured findings.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We take raw survey exports from the platforms you already use, code open-ended text where needed, and
            produce distribution summaries, cross-tabulations, and comparative visuals your stakeholders can digest
            immediately.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {scope.map((item) => (
              <div
                key={item}
                className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant flex items-center gap-2"
              >
                <MaterialIcon name="done" className="text-signal-green text-[18px] shrink-0" />
                <span className="font-label-md text-label-md text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant">
            <div className="flex items-center justify-between mb-space-lg">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Survey Processing Flow
              </span>
              <span className="font-label-sm text-label-sm text-outline">Illustrative framework</span>
            </div>
            <div className="space-y-3 font-label-md text-label-md">
              {flow.map((row) => (
                <div
                  key={row.label}
                  className={`p-3 rounded-lg border flex items-center justify-between ${
                    row.final
                      ? "bg-signal-green/15 border-signal-green/40 text-secondary font-semibold"
                      : "bg-surface-container border-primary/40 text-primary"
                  }`}
                >
                  <span>{row.label}</span>
                  <span
                    className={`font-mono text-label-sm text-label-sm whitespace-nowrap ${
                      row.final ? "text-signal-green font-bold" : row.muted ? "text-secondary" : "text-outline"
                    }`}
                  >
                    {row.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
