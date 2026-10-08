import { MaterialIcon } from "@/components/icons/MaterialIcon";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What types of professionals can apply?",
    answer:
      "We welcome researchers, academic writers, accountants, bookkeepers, HR professionals, data specialists, business analysts, digital operators, and developers. Whether you are specialized in niche quantitative research or comprehensive corporate bookkeeping, there is potential alignment.",
  },
  {
    question: "Do you accept applications for roles that are not currently listed?",
    answer:
      "Yes. You can submit your resume and profile through our General Application portal below. We routinely query this talent reservoir whenever specialized client projects arise.",
  },
  {
    question: "How can I submit my resume?",
    answer:
      "Use the online form located on this page. You can upload standard PDF or Word files up to 10MB along with your LinkedIn URL and portfolio references.",
  },
  {
    question: "What information should I include in my application?",
    answer:
      "Highlight direct project experience, verified tools mastered (e.g., QuickBooks, SPSS, Python, Stata), your typical availability, and links to verified work samples or academic writing specimens.",
  },
  {
    question: "Can students or fresh graduates apply?",
    answer:
      "Yes, provided you demonstrate solid foundational knowledge, high attention to detail, and a clear eagerness to work according to rigorous professional standards.",
  },
  {
    question: "Can experienced professionals apply for advisory roles?",
    answer:
      "Certainly. Senior subject matter experts frequently collaborate with us on enterprise strategy mandates, complex tax compliance audits, and specialized academic reviews.",
  },
  {
    question: "How does the selection process work?",
    answer:
      "Applications are reviewed by our discipline leads. Shortlisted candidates are invited for a technical discussion or brief practical test to evaluate execution rigor, followed by an engagement onboarding briefing.",
  },
  {
    question: "Can I apply for multiple roles?",
    answer:
      "Yes. If your capabilities bridge multiple areas (e.g., Financial Modeling and Data Visualization), state your multi-disciplinary strengths in your application note.",
  },
];

export function CareerFAQ() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-4xl mx-auto flex flex-col gap-space-2xl">
        <div className="text-center flex flex-col items-center gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Questions &amp; Answers
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Candidate FAQ.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            Common queries regarding role expectations, workflow engagements, and our collaborative hiring framework.
          </p>
        </div>
        <div className="flex flex-col gap-space-xs" id="faq-accordion">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="faq-item bg-surface-container rounded-xl overflow-hidden transition-colors group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="faq-toggle w-full p-space-lg flex items-center justify-between text-left text-primary hover:text-signal-green transition-colors cursor-pointer">
                <span className="font-headline-sm text-headline-sm font-medium">{faq.question}</span>
                <MaterialIcon
                  name="expand_more"
                  className="faq-icon text-on-surface-variant transform transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="fbx-faq-body faq-content px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
