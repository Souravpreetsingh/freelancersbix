import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const steps = [
  {
    num: "01",
    tag: "REQUIREMENT",
    title: "Requirement Discussion",
    body: "You share project instructions, formatting criteria, citation guidelines, and timeline constraints.",
  },
  {
    num: "02",
    tag: "PLANNING",
    title: "Research Planning",
    body: "We confirm scope, identify foundational academic databases, align milestones, and set delivery windows.",
  },
  {
    num: "03",
    tag: "EXECUTION",
    title: "Research & Analysis",
    body: "Rigorous gathering of literature, thematic modeling, and systematic dataset preparation.",
  },
  {
    num: "04",
    tag: "DRAFTING",
    title: "Development",
    body: "Drafting chapters, synthesizing analytical narratives, and constructing comprehensive citation bibliographies.",
  },
  {
    num: "05",
    tag: "AUDIT",
    title: "Review & Refine",
    body: "You review interim deliverables. Feedback is integrated for clarity, tone, and structural consistency.",
  },
  {
    num: "06",
    tag: "SIGN-OFF",
    title: "Final Delivery",
    body: "Delivery of all editable deliverables, datasets, and citation files in required academic software formats.",
  },
];

export function AcademicWorkflow() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Engagement Model"
          title="How An Engagement Works"
          containerClassName="mb-space-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {steps.map((step) => (
            <div key={step.num} className="p-space-lg rounded-xl bg-surface-container-low shadow-sm">
              <span className="font-label-sm text-label-sm text-signal-green font-bold">{`${step.num} ${step.tag}`}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-space-xs mb-space-xs">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
