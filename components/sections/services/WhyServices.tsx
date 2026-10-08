import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const REASONS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "manage_search",
    title: "Research-Driven",
    description:
      "Every task is approached with thorough investigation and evidence, preventing assumptions and arbitrary output.",
  },
  {
    icon: "high_quality",
    title: "Quality-Focused",
    description:
      "Multi-stage review processes ensure that deliverables meet stringent academic, financial, and corporate expectations.",
  },
  {
    icon: "forum",
    title: "Professional Communication",
    description:
      "Clear, transparent, and prompt updates at each project juncture. No guesswork regarding progress or next milestones.",
  },
  {
    icon: "schema",
    title: "Structured Workflow",
    description:
      "Defined phases, checkpoints, and documentation ensure orderly progression even in high-complexity multi-disciplinary tasks.",
  },
  {
    icon: "tune",
    title: "Flexible Support",
    description:
      "From single-task requests to dedicated monthly operational engagements, scopes scale according to actual requirements.",
  },
  {
    icon: "shield",
    title: "Confidential Handling",
    description:
      "Strict non-disclosure standards, encrypted storage, and compartmentalized file access for all business and research data.",
  },
];

export function WhyServices() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-start gap-space-xs max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Operational Discipline
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Why Clients Choose Structured Professional Support.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant hover:border-outline-variant transition-all flex flex-col gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary mb-2">
                <MaterialIcon name={reason.icon} className="text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">{reason.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
