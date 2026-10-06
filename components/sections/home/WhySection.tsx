import { SectionHeading } from "@/components/sections/SectionHeading";

const WHY_ITEMS: { number: string; title: string; description: string; tag: string }[] = [
  {
    number: "01",
    title: "Research-Driven",
    description: "Every project begins with understanding, research and structured analysis before formulation.",
    tag: "Evidence-First Method",
  },
  {
    number: "02",
    title: "Quality Focused",
    description:
      "Professional processes and careful multi-pass review help us maintain consistently high-grade deliverables.",
    tag: "Peer Quality Verification",
  },
  {
    number: "03",
    title: "Reliable Delivery",
    description:
      "Clear communication, organized step-by-step workflows and dependable turnaround without surprise delays.",
    tag: "SLA Adherence Guaranteed",
  },
  {
    number: "04",
    title: "Global Perspective",
    description:
      "Professional support designed for clients, businesses and distributed teams operating seamlessly across markets.",
    tag: "International Standards",
  },
];

export function WhySection() {
  return (
    <section className="w-full bg-surface py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <SectionHeading
          eyebrow="Why FreelancersBix"
          title="More than a service provider. A reliable support partner."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.number}
              className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between hover:bg-surface-container transition-all"
            >
              <div className="flex flex-col gap-space-md">
                <span className="font-mono text-signal-blue text-headline-sm font-bold">{item.number}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{item.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-space-lg mt-space-lg border-t border-outline-variant/15">
                <span className="text-label-sm text-secondary font-medium">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
