import { MaterialIcon } from "@/components/icons/MaterialIcon";

const steps = [
  {
    num: "01",
    title: "Complex Information",
    body: "Raw facts, unorganized data, technical specs",
    icon: "arrow_downward",
    highlighted: false,
  },
  {
    num: "02",
    title: "Research & Categorization",
    body: "Source validation, context mapping, audience isolation",
    icon: "arrow_downward",
    highlighted: false,
  },
  {
    num: "03",
    title: "Architectural Outlining",
    body: "Logical sequencing, hierarchy, thesis alignment",
    icon: "arrow_downward",
    highlighted: false,
  },
  {
    num: "04",
    title: "Decisive Professional Communication",
    body: "Concise, impactful, persuasive text built to achieve goals",
    icon: "check_circle",
    highlighted: true,
  },
];

export function ContentIntro() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest relative border-y border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Professional Communication
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight leading-tight">
            Good writing is more than words. It is structure, clarity and purpose.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            High-performing organizations do not struggle from a lack of facts; they struggle with distillation.
            Professional writing translates dense operational, technical, or academic data into prose that moves
            stakeholders to act.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We combine meticulous primary research with structural framing and purposeful pacing. Whether drafting
            public website copy or internal board briefs, every deliverable is engineered specifically for its target
            audience and organizational outcome.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="p-space-lg rounded-2xl bg-surface-container border border-outline-variant relative">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-label-sm text-label-sm text-primary font-medium uppercase tracking-wider">
                The Communication Transformation
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Structured Pipeline</span>
            </div>
            <div className="space-y-space-sm relative">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`flex items-center justify-between p-space-sm rounded-lg border ${
                    step.highlighted
                      ? "bg-surface-container-highest border-signal-green/40 shadow-[0_0_20px_rgba(22,122,82,0.15)]"
                      : "bg-surface-container-high border-outline-variant"
                  }`}
                >
                  <div className="flex items-center gap-space-sm">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] ${
                        step.highlighted ? "bg-signal-green text-whiteout font-bold" : "bg-surface-variant text-primary"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4
                        className={`font-label-lg text-label-lg ${
                          step.highlighted ? "text-primary font-semibold" : "text-primary font-medium"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{step.body}</p>
                    </div>
                  </div>
                  {step.icon === "check_circle" ? (
                    <MaterialIcon name="check_circle" className="text-signal-green text-[20px]" />
                  ) : (
                    <MaterialIcon name="arrow_downward" className="text-outline-variant text-[20px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
