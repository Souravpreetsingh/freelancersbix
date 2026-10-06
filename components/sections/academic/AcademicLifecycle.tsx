import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const steps = [
  {
    num: "1",
    title: "Define",
    body: "Clarify core research objectives, institutional criteria, and deliverables.",
  },
  {
    num: "2",
    title: "Discover",
    body: "Systematic literature indexing, source qualification, and data acquisition.",
  },
  {
    num: "3",
    title: "Analyse",
    body: "Empirical computation, thematic coding, and evidence synthesis.",
  },
  {
    num: "4",
    title: "Develop",
    body: "Structured chapter formulation, analytical graphs, and section drafts.",
  },
  {
    num: "5",
    title: "Refine",
    body: "Verification of citations, academic flow optimization, and styling audit.",
  },
  {
    num: "6",
    title: "Deliver",
    body: "Final package submission in designated formats with full reference records.",
  },
];

export function AcademicLifecycle() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="End-to-End Pipeline"
          title="From research question to final deliverable."
          containerClassName="mb-space-2xl"
        />
        <div className="relative grid grid-cols-1 md:grid-cols-6 gap-space-md">
          <div className="hidden md:block absolute top-7 left-8 right-8 h-0.5 bg-surface-container-high -z-0" />
          {steps.map((step, index) => (
            <div key={step.num} className="relative z-10 bg-surface-container-low rounded-xl p-space-md shadow-sm">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm text-headline-sm font-bold mb-space-sm ${
                  index === steps.length - 1
                    ? "bg-secondary-container text-secondary"
                    : "bg-surface-container-highest text-whiteout"
                }`}
              >
                {step.num}
              </div>
              <h3 className="font-label-lg text-label-lg text-primary font-bold mb-1">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
