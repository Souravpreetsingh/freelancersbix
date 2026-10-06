import { MaterialIcon } from "@/components/icons/MaterialIcon";

const deliverables = [
  { icon: "description", label: "Research Papers" },
  { icon: "menu_book", label: "Literature Reviews" },
  { icon: "segment", label: "Dissertation Sections" },
  { icon: "school", label: "Thesis Support Docs" },
  { icon: "lightbulb", label: "Research Proposals" },
  { icon: "domain", label: "Case Studies" },
  { icon: "bar_chart", label: "Data Analysis Reports" },
  { icon: "slideshow", label: "Research Presentations" },
  { icon: "format_list_bulleted", label: "Reference Lists" },
  { icon: "corporate_fare", label: "Professional Reports" },
  { icon: "summarize", label: "Research Summaries" },
  { icon: "table_chart", label: "Supporting Spreadsheets" },
] as const;

export function AcademicDeliverables() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-space-2xl gap-space-xs">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue mb-space-xs block">
              Outputs
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Deliverables Catalog
            </h2>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 md:mt-0">
            * Final deliverables strictly depend on the agreed project scope.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm">
          {deliverables.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-low p-space-md rounded-lg flex items-center gap-space-sm shadow-sm"
            >
              <MaterialIcon name={item.icon} className="text-signal-blue text-[18px]" />
              <span className="font-label-md text-label-md text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
