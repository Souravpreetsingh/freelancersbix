import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SITE } from "@/lib/design/site";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How do I request a quote?",
    answer:
      "You can use the structured 6-step quote wizard on this page to detail your service track, attach supporting documents, and indicate your timeline. Once submitted, our domain lead will formulate a scope evaluation within 24 hours.",
  },
  {
    question: "What information should I include in my request?",
    answer:
      "The most useful requests clarify: (1) your objective and deliverable format, (2) software environments involved (e.g. QuickBooks, Xero, Excel, Python), (3) deadline expectations, and (4) any existing draft materials or data schemas.",
  },
  {
    question: "Can I upload confidential project documents?",
    answer:
      "Yes. All uploads are encrypted via TLS and access-restricted strictly to the practice lead formulating your estimate. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to formal engagement kickoff for sensitive business and accounting data.",
  },
  {
    question: "Can I request multiple service areas for one project?",
    answer:
      'Absolutely. Many clients combine Foreign Accounting with Data Analytics, or Startup Deck Design with Business Research. You can select "Multi-Disciplinary / Custom" on Step 1 or specify your mixed requirements in the project description box.',
  },
  {
    question: "Do I need to know exactly which service I need beforehand?",
    answer:
      "Not at all. You can pick your closest discipline, and during our review we will diagnose the exact functional scope, clarifying whether your project requires accounting, research, technical writing, or automated digital operations.",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "Your brief is assigned to a lead practitioner in your discipline. They evaluate resource availability, estimate milestone effort, and reply via your preferred contact channel with a clear milestone proposal and quotation.",
  },
  {
    question: "Can I discuss my requirement with someone before requesting a quote?",
    answer: `Yes. You can email us at ${SITE.email} or call ${SITE.phone} to request an introductory 15-minute briefing call with an engagement coordinator.`,
  },
  {
    question: "Can I contact FreelancersBix for general questions?",
    answer:
      "Yes. Our general enquiry desk handles partnership queries, institutional vendor reviews, and career applications every business day.",
  },
];

export function ContactFAQ() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-space-2xl">
        <span className="font-label-md text-label-md text-signal-green uppercase tracking-widest font-semibold">
          Frequently Asked Questions
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-1">
          Intake &amp; Engagement FAQ.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Everything you need to know about our quote procedure, confidentiality frameworks, and service coordination.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-space-sm">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="faq-item rounded-xl bg-surface-container-low overflow-hidden transition-all group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="w-full p-space-lg flex items-center justify-between text-left cursor-pointer">
              <span className="font-headline-sm text-[16px] text-primary font-medium">{faq.question}</span>
              <MaterialIcon
                name="expand_more"
                className="faq-icon text-on-surface-variant transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="fbx-faq-body faq-content px-space-lg pb-space-lg">
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
