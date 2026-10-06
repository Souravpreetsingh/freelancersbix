import { ServiceFAQ, type ServiceFAQItem } from "@/components/sections/service/ServiceFAQ";

const FAQS: ServiceFAQItem[] = [
  {
    q: "How do you help turn an early-stage idea into a business plan?",
    a: "We deconstruct the concept into core assumptions regarding customer demand, market size, operations, and unit monetization. Through structured desk research and iterative planning sessions, we synthesize these details into professional documents tailored for strategic review.",
  },
  {
    q: "What is included in a typical business plan deliverable?",
    a: "A standard business plan generally contains an Executive Summary, Company Profile, Market & Industry Analysis, Competitor Benchmarking, Operational Plan, Marketing & Sales Strategy, and Preliminary Financial Considerations.",
  },
  {
    q: "Can you assist early-stage founders who only have an initial draft or concept?",
    a: "Yes. Many engagements start with unstructured notes or fragmented presentations. We organize these raw insights, identify critical gaps, conduct necessary desk research, and build structured, cohesive deliverables.",
  },
  {
    q: "Do you write pitch decks as well as design them?",
    a: "Yes. Our pitch deck service covers narrative structuring, slide copywriting, and clean visual typography. We ensure the strategic thesis is immediately legible and visually polished for executive audiences.",
  },
  {
    q: "What methodology is used for competitor research?",
    a: "We identify direct, indirect, and substitution competitors through secondary market scanning, analyzing publicly available pricing, feature sets, customer reviews, distribution methods, and visible market positioning.",
  },
  {
    q: "How is market entry research scoped?",
    a: "Market entry research focuses on identifying geographic demand trends, customer accessibility, barrier-to-entry considerations, and channel dynamics to give decision-makers a structured framework for expansion.",
  },
  {
    q: "Do you provide investment, legal, or licensed financial advice?",
    a: "No. FreelancersBix provides research, documentation, and operational planning support. We do not act as broker-dealers, investment advisors, legal counsel, or certified auditing bodies. All deliverables serve informational and organizational purposes.",
  },
  {
    q: "How do you approach business process documentation?",
    a: "We map current workflows step-by-step, clarifying inputs, operational actions, role responsibilities, deliverables, and review milestones into standard operating procedure (SOP) manuals.",
  },
  {
    q: "Is ongoing operational support available after plan completion?",
    a: "Yes. Many clients retain our operational and virtual business assistance for recurring market research, document updating, data synthesis, and presentation preparation.",
  },
  {
    q: "How do we start a new business or startup support project?",
    a: 'Submit your requirements via our "Get a Quote" portal or reach out directly to the Advisory Desk. We will schedule a scoping discussion, establish deliverable boundaries, and present a structured project proposal.',
  },
];

export function StartupFAQ() {
  return (
    <ServiceFAQ
      eyebrow="Inquiries"
      title="Frequently Asked Questions"
      lead="Clear guidance regarding project structure, scope boundaries, and delivery standards."
      items={FAQS}
    />
  );
}
