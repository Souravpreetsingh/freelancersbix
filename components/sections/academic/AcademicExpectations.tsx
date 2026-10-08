import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const pillars = [
  {
    num: "PILLAR 01",
    title: "Structured Work",
    body: "Clear milestone organization, upfront project scoping, and transparent outlines before drafting starts.",
  },
  {
    num: "PILLAR 02",
    title: "Research Focus",
    body: "Analysis anchored in verified peer-reviewed publications and transparent, reproducible methodologies.",
  },
  {
    num: "PILLAR 03",
    title: "Clear Presentation",
    body: "Complex quantitative arrays translated into legible diagrams, clear summaries, and publication-ready tables.",
  },
  {
    num: "PILLAR 04",
    title: "Professional Delivery",
    body: "Strict adherence to delivery calendars with files formatted cleanly in DOCX, PDF, LaTeX, or XLSX packages.",
  },
];

export function AcademicExpectations() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto">
        <ServiceSectionHeading
          eyebrow="Core Commitments"
          title="What You Can Expect"
          lead="Predictable delivery parameters grounded in scholarly rigour and transparent communication."
          containerClassName="text-center items-center mx-auto mb-space-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="p-space-lg rounded-xl bg-surface-container shadow-sm">
              <span className="font-label-sm text-label-sm text-signal-green font-bold">{pillar.num}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-space-xs mb-space-xs">{pillar.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
