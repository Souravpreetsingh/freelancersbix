import { ServiceFAQ } from "@/components/sections/service/ServiceFAQ";

const items = [
  {
    q: "Can you support the full research lifecycle from proposal to dissertation?",
    a: "Yes. We assist researchers across distinct chapters or through multi-stage milestone workflows — including research proposal framing, systematic literature reviews, methodological architecture, data analysis, and final proofreading.",
  },
  {
    q: "How do you approach literature reviews?",
    a: "We construct thematic and chronological literature reviews by identifying core seminal works, recent peer-reviewed journal papers (from Scopus, Web of Science, PubMed, etc.), evaluating conceptual disagreements, and highlighting existing research gaps.",
  },
  {
    q: "What statistical and qualitative software tools do you work with?",
    a: "We handle quantitative modeling with SPSS, R, Python, STATA, and advanced Excel. For qualitative analysis, we conduct thematic and content coding using NVivo and Atlas.ti, paired with comprehensive interpretive summaries.",
  },
  {
    q: "Can you help with individual chapters rather than an entire dissertation?",
    a: "Certainly. Many researchers engage us specifically for their Data Analysis chapter, Literature Review, or Methodology design. We calibrate our workflow strictly around the specific chapter required.",
  },
  {
    q: "Do you guarantee specific grades, examination scores, or journal publication?",
    a: "No. FreelancersBix does not make fabricated guarantees regarding grades, degree awards, or journal acceptance. Evaluation is entirely at the discretion of your university professors, review boards, and journal editors. We guarantee professional, rigorous, and citation-compliant research assistance.",
  },
  {
    q: "How do you maintain project confidentiality and intellectual property?",
    a: "We execute strict Non-Disclosure Agreements (NDAs) upon request. Your raw datasets, proprietary questionnaires, and research notes are never reused, shared, or indexed externally. All data transmission is handled over encrypted channels.",
  },
  {
    q: "How do I submit custom research guidelines or institutional stylesheets?",
    a: "You can upload your university handbook, assignment brief, reference guide, and feedback notes during our initial quote consultation. We align project deliverables directly with your supplied specifications.",
  },
];

export function AcademicFAQ() {
  return (
    <ServiceFAQ
      eyebrow="Clarifications"
      title="Frequently Asked Questions"
      lead="Direct, honest answers about scope, academic standards, and data handling."
      items={items}
      sectionClassName="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface"
      headingClassName="flex flex-col gap-space-xs mb-space-2xl text-center items-center"
    />
  );
}
