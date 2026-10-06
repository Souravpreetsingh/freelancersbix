import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

export interface ProcessStep {
  label: string;
  title: string;
  description: string;
  icon: IconName;
  phase: string;
}

interface ProcessStepsProps {
  eyebrow: string;
  title: string;
  badge?: string;
  steps: ProcessStep[];
  banner?: React.ReactNode;
  sectionClassName?: string;
}

export function ProcessSteps({ eyebrow, title, badge, steps, banner, sectionClassName }: ProcessStepsProps) {
  return (
    <section
      className={
        sectionClassName ??
        "w-full bg-black-void py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15"
      }
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-sm text-label-sm tracking-widest text-signal-blue uppercase font-bold">
              {eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout tracking-tight">
              {title}
            </h2>
          </div>
          {badge ? (
            <div className="px-space-md py-space-xs rounded-full bg-surface-container-high border border-outline-variant/30 text-primary font-mono text-label-sm">
              {badge}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg relative">
          {steps.map((step) => (
            <div
              key={step.label}
              className="p-space-xl rounded-xl bg-surface-container/60 border border-outline-variant/20 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <span className="font-mono text-label-sm text-signal-blue font-bold">{step.label}</span>
                <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold uppercase">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-space-xs">
                  {step.description}
                </p>
              </div>
              <div className="pt-space-lg mt-space-lg border-t border-outline-variant/15 flex items-center justify-between">
                <MaterialIcon name={step.icon} className="text-signal-blue text-[20px]" />
                <span className="text-on-surface-variant text-[12px] font-mono">{step.phase}</span>
              </div>
            </div>
          ))}
        </div>

        {banner}
      </div>
    </section>
  );
}
