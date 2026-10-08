import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const STEPS: { num: string; title: string; desc: string }[] = [
  { num: "01", title: "Requirement Discussion", desc: "Understand what the business needs and primary objectives." },
  { num: "02", title: "Scope Definition", desc: "Identify deliverables, milestones, criteria and boundaries." },
  {
    num: "03",
    title: "Research & Planning",
    desc: "Gather information, audit reference assets and structure approach.",
  },
  { num: "04", title: "Development", desc: "Create documents, research reports or pitch presentation materials." },
  { num: "05", title: "Review", desc: "Check structure, tone, clarity and client consistency." },
  { num: "06", title: "Final Delivery", desc: "Provide completed deliverables and native production files." },
];

export function StartupWorkflow() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <ServiceSectionHeading
        eyebrow="Operational Workflow"
        title="Typical Project Workflow"
        lead="From initial brief to final asset handover, every stage follows defined governance boundaries."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-sm">
        {STEPS.map((step) => (
          <div key={step.num} className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-signal-green font-bold">{step.num}</span>
            <h4 className="font-headline-sm text-headline-sm text-primary">{step.title}</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
