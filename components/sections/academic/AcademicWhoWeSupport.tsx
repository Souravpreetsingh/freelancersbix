import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const groups = [
  {
    icon: "badge",
    title: "Undergraduate & Masters",
    body: "Guidance with term assignments, project formatting, empirical surveys, and literature review chapters.",
  },
  {
    icon: "biotech",
    title: "Independent Researchers",
    body: "Systematic data processing, literature taxonomy construction, and scholarly paper structuring.",
  },
  {
    icon: "history_edu",
    title: "Postgraduate Candidates",
    body: "Comprehensive dissertation scaffolding, statistical tool configuration, and formal defense presentation slides.",
  },
  {
    icon: "school",
    title: "PhD Scholars",
    body: "Epistemological consistency checks, high-volume citation audits, and advanced quantitative model refinement.",
  },
  {
    icon: "business_center",
    title: "Corporate & Policy Analysts",
    body: "Industry whitepapers, evidence-based policy briefs, market telemetry, and secondary research summaries.",
  },
  {
    icon: "corporate_fare",
    title: "Institutions & Startups",
    body: "Custom technical documentation, research feasibility assessments, and grant application literature frameworks.",
  },
] as const;

export function AcademicWhoWeSupport() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Client Spectrum"
          title="Who We Support"
          lead="Serving candidates across academia, research institutions, and industry think tanks with specialized support modules."
          containerClassName="mb-space-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {groups.map((group) => (
            <div key={group.title} className="p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-signal-blue mb-space-md">
                <MaterialIcon name={group.icon} className="text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">{group.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{group.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
