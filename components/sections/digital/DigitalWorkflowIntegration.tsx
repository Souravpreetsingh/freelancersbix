import { Fragment } from "react";

const FLOW = [
  { label: "Information", highlight: false },
  { label: "Research", highlight: false },
  { label: "Documentation", highlight: false },
  { label: "Data", highlight: false },
  { label: "Administration", highlight: false },
  { label: "Reporting", highlight: false },
  { label: "Decision Support", highlight: true },
];

export function DigitalWorkflowIntegration() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-xl text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            END-TO-END COHESION
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Business Operations Integrated Workflow
          </h2>
        </div>
        <div className="p-space-lg rounded-xl bg-surface-container-low">
          <div className="flex flex-wrap items-center justify-center gap-space-sm font-mono text-label-sm">
            {FLOW.map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && <span className="text-signal-green">→</span>}
                <div
                  className={`px-4 py-2 rounded-lg font-bold ${
                    item.highlight ? "bg-signal-green text-whiteout" : "bg-surface-container text-primary"
                  }`}
                >
                  {item.label}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
