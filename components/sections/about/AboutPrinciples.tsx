import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { IconName } from "@/lib/design/icons";

const PRINCIPLES: { number: string; numberClass: string; title: string; description: string }[] = [
  {
    number: "01",
    numberClass: "text-signal-green",
    title: "Quality",
    description: "We focus on accuracy, clarity and professional presentation.",
  },
  {
    number: "02",
    numberClass: "text-secondary",
    title: "Integrity",
    description: "We value responsible work, transparent communication and professional standards.",
  },
  {
    number: "03",
    numberClass: "text-signal-green",
    title: "Confidentiality",
    description: "We treat client information and project materials with appropriate care and discretion.",
  },
  {
    number: "04",
    numberClass: "text-secondary",
    title: "Reliability",
    description: "We believe clear processes and consistent communication create better outcomes.",
  },
  {
    number: "05",
    numberClass: "text-primary",
    title: "Continuous Improvement",
    description: "We continuously improve how we research, analyse, create and deliver.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="What We Believe"
          title="Professional work should be clear, useful and dependable."
          className="flex flex-col gap-space-xs"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {PRINCIPLES.map((item) => (
            <div
              key={item.number}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between h-64"
            >
              <span className={`font-label-md text-label-md font-mono ${item.numberClass}`}>{item.number}</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPROACH_STEPS: { number: string; circleClass: string; title: string; description: string }[] = [
  {
    number: "01",
    circleClass: "border-signal-green text-signal-green",
    title: "Research",
    description: "Understand the requirement, gather relevant information and establish the right context.",
  },
  {
    number: "02",
    circleClass: "border-outline-variant text-secondary",
    title: "Analyse",
    description: "Evaluate information, identify patterns and develop meaningful insights.",
  },
  {
    number: "03",
    circleClass: "border-outline-variant text-secondary",
    title: "Create",
    description: "Turn research and insights into structured, professional and useful deliverables.",
  },
  {
    number: "04",
    circleClass: "border-primary/40 text-primary",
    title: "Deliver",
    description: "Review, refine and deliver the final work with clarity and attention to detail.",
  },
];

export function AboutApproach() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="How We Work"
          title="Research. Analyse. Create. Deliver."
          className="flex flex-col gap-space-xs"
          eyebrowBold={false}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-outline-variant/30 z-0" />
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-space-md"
            >
              <div
                className={`w-10 h-10 rounded-full bg-surface-container-high border ${step.circleClass} flex items-center justify-center font-bold text-sm`}
              >
                {step.number}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="py-space-md px-space-lg rounded-lg bg-surface-container-low border border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <MaterialIcon name="verified" className="text-signal-green" />
            <span className="font-label-lg text-label-lg text-primary">
              A structured process creates better outcomes.
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-mono">
            RIGOROUS CONTROL
          </span>
        </div>
      </div>
    </section>
  );
}

const WHY_CARDS: { icon: IconName; iconClass: string; title: string; description: string }[] = [
  {
    icon: "account_tree",
    iconClass: "text-signal-green",
    title: "Structured Approach",
    description: "Milestones and clear phases prevent ambiguity.",
  },
  {
    icon: "hub",
    iconClass: "text-secondary",
    title: "Multi-Disciplinary",
    description: "Cross-functional synergy across research, finance & tech.",
  },
  {
    icon: "chat",
    iconClass: "text-signal-green",
    title: "Clear Communication",
    description: "Regular status updates and responsive interaction.",
  },
  {
    icon: "high_quality",
    iconClass: "text-secondary",
    title: "Quality-Focused",
    description: "Double-pass review cycle prior to client sign-off.",
  },
  {
    icon: "tune",
    iconClass: "text-signal-green",
    title: "Flexible Support",
    description: "On-demand projects or integrated recurring retainer.",
  },
  {
    icon: "person_pin",
    iconClass: "text-secondary",
    title: "Client-Centered",
    description: "Solutions adapted strictly to your objectives.",
  },
];

export function AboutWhy() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green">Why Choose Us</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            Professional support without unnecessary complexity.
          </h2>
          <p className="font-body-lg text-body-lg text-primary font-medium mt-space-sm">
            “Your requirement is the starting point. Understanding it is our priority.”
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We replace fragmented freelancing with verified discipline leads, clear delivery milestones, and end-to-end
            accountability.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          {WHY_CARDS.map((item) => (
            <div
              key={item.title}
              className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex items-start gap-space-md"
            >
              <MaterialIcon name={item.icon} className={`${item.iconClass} text-2xl`} />
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
