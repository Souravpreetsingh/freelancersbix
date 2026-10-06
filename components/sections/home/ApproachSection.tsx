import { ProcessSteps } from "@/components/sections/ProcessSteps";

export function ApproachSection() {
  return (
    <ProcessSteps
      eyebrow="Our Approach"
      title="A simple process. Professional execution."
      badge="Precision Workflow"
      steps={[
        {
          label: "01 / STEP",
          title: "Research",
          description: "Understand the requirement, context, baseline materials and strategic objectives.",
          icon: "manage_search",
          phase: "Phase 01",
        },
        {
          label: "02 / STEP",
          title: "Analyse",
          description:
            "Study the information, identify fundamental insights and build the right structured execution plan.",
          icon: "insights",
          phase: "Phase 02",
        },
        {
          label: "03 / STEP",
          title: "Create",
          description: "Transform research and structural insights into professional, comprehensive deliverables.",
          icon: "architecture",
          phase: "Phase 03",
        },
        {
          label: "04 / STEP",
          title: "Deliver",
          description: "Review, refine, ensure accuracy and deliver on agreed schedules with clarity and reliability.",
          icon: "verified",
          phase: "Phase 04",
        },
      ]}
      banner={
        <div className="p-space-xl rounded-xl bg-surface-container-high/80 border border-outline-variant/20 flex items-center justify-center text-center">
          <span className="font-headline-sm text-headline-sm text-primary tracking-wide">
            Research <span className="text-signal-blue px-2">•</span> Analyse{" "}
            <span className="text-signal-blue px-2">•</span> Create <span className="text-signal-blue px-2">•</span>{" "}
            Deliver
          </span>
        </div>
      }
    />
  );
}
