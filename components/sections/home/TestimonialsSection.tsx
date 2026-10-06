import { SectionHeading } from "@/components/sections/SectionHeading";
import { TestimonialCard } from "@/components/sections/TestimonialCard";

const TESTIMONIALS: { quote: string; role: string; context: string }[] = [
  {
    quote:
      "Exceptional depth in literature reviews and data synthesis. The research team captured the academic rigor required for our multi-disciplinary publication without missing a single citation benchmark.",
    role: "Senior Researcher",
    context: "Postgraduate & Academic Practice",
  },
  {
    quote:
      "Outsourcing our foreign accounting and monthly bank reconciliations gave us total financial clarity. Their ledger turnaround is prompt, compliant and impeccably documented.",
    role: "Operations Director",
    context: "Cross-Border SaaS Scaleup",
  },
  {
    quote:
      "The market feasibility analysis and pitch documentation directly secured our seed investor meetings. FreelancersBix functions like an embedded institutional advisory wing.",
    role: "Startup Founder",
    context: "B2B Logistics Platform",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <SectionHeading eyebrow="Client Experience" title="Professional support. Clear outcomes." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.role} quote={item.quote} role={item.role} context={item.context} />
          ))}
        </div>
      </div>
    </section>
  );
}
