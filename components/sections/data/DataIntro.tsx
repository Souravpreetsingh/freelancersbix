import { MaterialIcon } from "@/components/icons/MaterialIcon";

const stages = [
  {
    num: "01",
    label: "Raw Datasets & Unstructured Feeds",
    chip: "Ingest",
    chipClasses: "bg-surface-variant text-on-surface-variant",
  },
  {
    num: "02",
    label: "Data Cleansing & Deduplication",
    chip: "Filter",
    chipClasses: "bg-signal-green/20 text-secondary",
  },
  {
    num: "03",
    label: "Structured Normalization & Logic",
    chip: "Structure",
    chipClasses: "bg-surface-variant text-on-surface-variant",
  },
  {
    num: "04",
    label: "Statistical Analysis & Cross-Tabs",
    chip: "Analyze",
    chipClasses: "bg-surface-variant text-on-surface-variant",
  },
  {
    num: "05",
    label: "Executive Visualizations & Interpretations",
    chip: "Presentation Ready",
    chipClasses: "bg-signal-green text-whiteout font-semibold",
    highlight: true,
  },
];

export function DataIntro() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-background border-b border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Data + Research
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Data becomes valuable when it becomes understandable.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Raw information rarely speaks on its own. Methodical structuring, disciplined analysis, and clear visual
            synthesis transform spreadsheet cells and survey exports into the reasoning your team can actually act on.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            From early data ingest through to final codebook handover, our practice follows a transparent, reproducible
            lifecycle — so nothing is left as a black box.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-xl p-space-xl bg-surface-container-low/60 border border-outline-variant backdrop-blur-md">
            <div className="flex items-center justify-between mb-space-lg">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-deep-sage font-semibold">
                End-to-End Transformation Pipeline
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Structured Lifecycle
              </span>
            </div>
            <div className="flex flex-col">
              {stages.map((stage, index) => (
                <div key={stage.num} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      stage.highlight
                        ? "bg-signal-green/10 border border-signal-green/30 shadow-[0_0_20px_rgba(22,122,82,0.2)]"
                        : "bg-surface-container/70 border border-outline-variant"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`font-mono text-sm font-bold ${stage.highlight ? "text-secondary" : "text-outline"}`}
                      >
                        {stage.num}
                      </span>
                      <span className="font-body-sm text-body-sm text-primary font-medium truncate">{stage.label}</span>
                    </div>
                    <span
                      className={`whitespace-nowrap px-2.5 py-1 rounded-full font-label-sm text-label-sm ${stage.chipClasses}`}
                    >
                      {stage.chip}
                    </span>
                  </div>
                  {index < stages.length - 1 ? (
                    <div className="flex justify-center -my-1 text-signal-green">
                      <MaterialIcon name="south" className="text-[18px]" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
