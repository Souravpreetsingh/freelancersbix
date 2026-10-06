import { ServiceFAQ, type ServiceFAQItem } from "@/components/sections/service/ServiceFAQ";

const FAQS: ServiceFAQItem[] = [
  {
    q: "What is the difference between market research and business consulting?",
    a: "Market research is primarily focused on gathering and analyzing external market, industry, and competitor information. Business consulting uses those research findings and applies strategic thinking to guide decisions, optimize operations, and formulate forward-looking plans. Our services bridge both areas seamlessly.",
  },
  {
    q: "Can you prepare a business plan from an early-stage concept?",
    a: "Yes. We regularly work with founders at the idea stage. We help structure your initial hypotheses, run market validations, verify competitor presence, establish unit economics, and synthesize the narrative into an investor-ready document.",
  },
  {
    q: "What data sources do you use for market and industry research?",
    a: "We leverage reputable secondary sources including public trade databases, regulatory repositories, industry associations, peer-reviewed market publications, and corporate financial disclosures. All primary citations and references are systematically documented.",
  },
  {
    q: "How long does a typical research project take to complete?",
    a: "Timelines depend on complexity and depth. Concise competitor reviews or brief market overviews typically require 5 to 8 business days. Comprehensive institutional market feasibility studies or complex business plans generally take 2 to 4 weeks.",
  },
  {
    q: "Can you customize the research scope to our specific requirements?",
    a: "Absolutely. While we maintain standard frameworks for consistency, every engagement is adjusted to target your exact questions, specific geographic constraints, and desired output formats.",
  },
  {
    q: "Do you provide raw data and calculation sheets alongside final reports?",
    a: "Yes. Whenever financial modeling, survey analysis, or numeric benchmarking is included, we provide fully unlocked Excel or spreadsheet workbooks with active formulas and cleanly annotated source tags.",
  },
  {
    q: "How do you handle confidential business ideas and information?",
    a: "Confidentiality is fundamental to our practice. We execute mutual Non-Disclosure Agreements (NDAs) prior to receiving proprietary documents, and ensure your data remains restricted to verified project analysts.",
  },
  {
    q: "What formats are deliverables supplied in?",
    a: "Deliverables are standardly provided as presentation decks (PowerPoint/Keynote/PDF), editorial executive reports (Word/PDF), and accompanying spreadsheet models (Excel/Google Sheets), structured for immediate executive use.",
  },
  {
    q: "Can your team support revision requests or follow-up questions?",
    a: "Every custom engagement includes a structured review period during which your team can request clarifications, adjustments to emphasis, or minor scope refinements within the original brief parameters.",
  },
  {
    q: "How do we get started on an engagement?",
    a: 'Simply submit an inquiry via our "Get a Quote" form detailing your business objectives, industry sector, and desired deliverables. An advisory lead will review your requirements and coordinate an initial scope alignment session.',
  },
];

export function BusinessFAQ() {
  return (
    <ServiceFAQ
      eyebrow="Clarifications"
      title="Business Research & Consulting — FAQ"
      lead="Common questions regarding project scopes, timelines, data sources, and engagement deliverables."
      items={FAQS}
      headingClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
    />
  );
}
