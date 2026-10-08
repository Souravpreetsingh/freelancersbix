import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

const STEPS: { num: string; icon: IconName; title: string; desc: string }[] = [
  {
    num: "01",
    icon: "forum",
    title: "Requirement Discussion",
    desc: "Briefing call to define precise hypotheses and parameters.",
  },
  {
    num: "02",
    icon: "event_note",
    title: "Research Planning",
    desc: "Sourcing roadmap, scope validation, and timeline sign-off.",
  },
  {
    num: "03",
    icon: "dataset",
    title: "Research & Collection",
    desc: "Extensive secondary mining across global databases.",
  },
  {
    num: "04",
    icon: "tune",
    title: "Analysis & Synthesis",
    desc: "Data correlation, model running, and pattern derivation.",
  },
  {
    num: "05",
    icon: "draw",
    title: "Deliverable Development",
    desc: "Drafting reports, models, charts, and executive decks.",
  },
  {
    num: "06",
    icon: "rate_review",
    title: "Review & Refinement",
    desc: "Collaborative feedback integration and stress testing.",
  },
  {
    num: "07",
    icon: "check_circle",
    title: "Final Delivery",
    desc: "Complete asset package handoff and final walkthrough.",
  },
];

export function BusinessJourney() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <ServiceSectionHeading
        eyebrow="Engagement Workflow"
        title="What a Typical Research Project Can Look Like"
        lead="From the initial consultation call through to final deliverables sign-off, here is our transparent sequential engagement timeline."
        eyebrowClassName="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-space-sm">
        {STEPS.map((step, index) => (
          <div
            key={step.num}
            className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="font-mono text-signal-green font-bold text-label-sm">{step.num}</span>
              <h3 className="font-headline-sm text-body-md font-semibold text-primary mt-1">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{step.desc}</p>
            </div>
            <MaterialIcon
              name={step.icon}
              className={`text-[20px] mt-4 self-end ${index === STEPS.length - 1 ? "text-signal-green" : "text-outline"}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
