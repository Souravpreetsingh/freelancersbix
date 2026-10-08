import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { Reveal } from "@/components/motion/Reveal";
import type { IconName } from "@/lib/design/icons";

const STEPS: { label: string; icon: IconName; title: string; description: string }[] = [
  {
    label: "01 // STEP",
    icon: "search",
    title: "RESEARCH",
    description:
      "Understand the core requirement, source material, parameters, and gather all relevant information systematically.",
  },
  {
    label: "02 // STEP",
    icon: "analytics",
    title: "ANALYSE",
    description:
      "Evaluate information, identify critical patterns, detect inconsistencies, and establish meaningful, validated insights.",
  },
  {
    label: "03 // STEP",
    icon: "design_services",
    title: "CREATE",
    description:
      "Develop structured, robust, and professional deliverables that adhere to academic, business, or financial standards.",
  },
  {
    label: "04 // STEP",
    icon: "verified",
    title: "DELIVER",
    description:
      "Conduct quality assurance, refine clarity, finalize formatting, and deliver directly with full accountability.",
  },
];

export function ServicesApproach() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl border-t border-outline-variant">
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-start gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Our Approach
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Research. Analyse. Create. Deliver.
          </h2>
          <div className="mt-1">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-surface-container-high text-on-surface-variant border border-outline-variant">
              Research • Analyse • Create • Deliver
            </span>
          </div>
        </div>
        <Reveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            <span aria-hidden="true" className="fbx-process-line hidden lg:block" />
            {STEPS.map((step) => (
              <div
                key={step.label}
                className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-mono text-sm text-secondary font-bold">{step.label}</span>
                    <MaterialIcon name={step.icon} className="text-signal-green" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">{step.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
