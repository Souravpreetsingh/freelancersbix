import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const DELIVERABLES: { icon: IconName; label: string }[] = [
  { icon: "article", label: "Business Plans" },
  { icon: "grid_view", label: "Business Model Documents" },
  { icon: "slideshow", label: "Pitch Decks" },
  { icon: "bar_chart", label: "Market Research Reports" },
  { icon: "query_stats", label: "Competitor Analysis" },
  { icon: "science", label: "Startup Research Reports" },
  { icon: "rule", label: "Feasibility Documents" },
  { icon: "co_present", label: "Business Presentations" },
  { icon: "table_chart", label: "SWOT Analysis" },
  { icon: "language", label: "PESTLE Analysis" },
  { icon: "schema", label: "Process Documentation" },
  { icon: "assignment", label: "Operational Documents" },
  { icon: "summarize", label: "Business Research Summaries" },
  { icon: "table_view", label: "Supporting Spreadsheets" },
  { icon: "psychology_alt", label: "Strategy Documents" },
];

export function StartupDeliverables() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <ServiceSectionHeading
        eyebrow="Deliverable Index"
        title="Professional deliverables built around your requirement."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm mb-space-md">
        {DELIVERABLES.map((deliverable) => (
          <div
            key={deliverable.label}
            className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-xs text-on-surface"
          >
            <MaterialIcon name={deliverable.icon} className="text-signal-blue text-[18px]" />
            <span className="font-body-sm text-body-sm">{deliverable.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
        <MaterialIcon name="note" className="text-[16px] text-outline" />
        <span>Deliverables are customized according to project scope, objectives and intended use.</span>
      </div>
    </section>
  );
}
