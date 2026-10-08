import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const DELIVERABLES: { icon: IconName; label: string }[] = [
  { icon: "draft", label: "Market Research Reports" },
  { icon: "domain", label: "Industry Analysis Reports" },
  { icon: "group", label: "Competitor Analysis" },
  { icon: "menu_book", label: "Business Plans" },
  { icon: "task_alt", label: "Feasibility Studies" },
  { icon: "summarize", label: "Business Reports" },
  { icon: "rocket", label: "Startup Research Documents" },
  { icon: "record_voice_over", label: "Customer Research" },
  { icon: "grid_view", label: "SWOT Analysis" },
  { icon: "public", label: "PESTLE Analysis" },
  { icon: "co_present", label: "Business Presentations" },
  { icon: "article", label: "Strategic Summaries" },
  { icon: "recommend", label: "Action Recommendations" },
  { icon: "table_chart", label: "Excel / Models" },
  { icon: "pie_chart", label: "Data Visualizations" },
];

export function BusinessDeliverables() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Standard Outputs
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            Clear Research. Professional Deliverables.
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Deliverables are tailored to the scope, requirements, and intended use of each project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm">
          {DELIVERABLES.map((item) => (
            <div key={item.label} className="bg-surface-container p-space-sm rounded-lg flex items-center gap-2">
              <MaterialIcon name={item.icon} className="text-signal-green text-[18px]" />
              <span className="font-body-sm text-body-sm text-on-surface">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
