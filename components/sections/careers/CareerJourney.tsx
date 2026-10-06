const STEPS = [
  {
    number: 1,
    title: "Explore",
    text: "Identify an active opportunity or practice discipline that closely matches your verified qualifications and interests.",
    active: true,
  },
  {
    number: 2,
    title: "Apply",
    text: "Submit your resume, profile details, and representative work samples through our secure intake portal.",
    active: false,
  },
  {
    number: 3,
    title: "Connect",
    text: "Engage in a practical review or technical dialogue assessing your domain acumen and communication alignment.",
    active: false,
  },
  {
    number: 4,
    title: "Contribute",
    text: "Complete onboarding, join the relevant functional practice group, and commence client project engagements.",
    active: false,
  },
];

export function CareerJourney() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              The Pathway
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
              Your application journey.
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Evaluation focuses strictly on demonstrated capability, analytical discipline, and structured delivery
            standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container p-space-lg rounded-xl flex flex-col gap-space-sm relative"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-label-md text-label-md ${
                  step.active ? "bg-signal-blue text-ink" : "bg-surface-container-highest text-primary"
                }`}
              >
                {step.number}
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary uppercase font-bold pt-space-xs">
                {step.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
