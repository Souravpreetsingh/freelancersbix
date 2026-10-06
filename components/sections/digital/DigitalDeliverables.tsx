const DELIVERABLES = [
  "Organized Spreadsheets",
  "Data Entry Files",
  "Formatted Documents",
  "Research Lists",
  "Research Summaries",
  "Organized Files",
  "Business Documents",
  "Presentation Materials",
  "Administrative Records",
  "Lead Research Lists",
  "Data Organization Sheets",
  "Reporting Sheets",
  "Digital Task Outputs",
  "Supporting Documentation",
];

export function DigitalDeliverables() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              TANGIBLE OUTPUTS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
              Clear outputs for recurring work.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Deliverables depend on the agreed task, workflow, and project scope.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">
          {DELIVERABLES.map((item) => (
            <div
              key={item}
              className="p-space-md rounded-lg bg-surface-container-low text-center flex flex-col items-center justify-center min-h-[90px]"
            >
              <span className="font-label-md text-label-md text-primary font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
