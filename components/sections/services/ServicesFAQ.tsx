import { MaterialIcon } from "@/components/icons/MaterialIcon";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What types of clients do you support?",
    answer:
      "We support students, researchers, early-stage entrepreneurs, established corporate executives, and international small-to-medium businesses requiring specialized execution in research, accounting, content, or digital operations.",
  },
  {
    question: "What services does FreelancersBix provide?",
    answer:
      "We operate across seven core practices: Academic & Research Support, Business Research & Consulting, Foreign Accounting & Bookkeeping, Business & Startup Support, Content & Professional Writing, Data & Research Services, and Digital/Administrative Support.",
  },
  {
    question: "Can I request multiple services for one project?",
    answer:
      "Yes. Many clients combine services—such as pairing market research with financial modeling, or combining academic thesis drafting with advanced statistical data analysis. We provide unified scoping across multiple practices.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can use our 'Get a Quote' button or contact form to share your project objectives, timeline, and deliverables. Our team evaluates the technical requirements and provides a structured quotation with transparent parameters.",
  },
  {
    question: "Can I discuss my requirement before placing a request?",
    answer:
      "Absolutely. We offer preliminary scoping discussions via email or scheduled calls to review complex requirements, clarify scope boundaries, and ensure alignment before any commercial engagement begins.",
  },
  {
    question: "How do I submit project documents?",
    answer:
      "Documents can be provided via secure direct upload links, shared cloud drives (Google Drive, OneDrive, Dropbox), or encrypted email attachments according to your security preferences.",
  },
  {
    question: "Do you provide foreign accounting support?",
    answer:
      "Yes, Foreign Accounting is one of our dedicated core practices. We support international businesses with bookkeeping, multi-currency ledger reconciliation, accounts payable/receivable, payroll schedules, and standard US GAAP / IFRS financial statements.",
  },
  {
    question: "How does the process work after I submit an enquiry?",
    answer:
      "Upon submission, our coordinating team analyzes your brief within 12–24 hours, contacts you with any clarifying queries, provides a clear scope proposal with timeline commitments, and assigns the project to the relevant practice lead once confirmed.",
  },
];

export function ServicesFAQ() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl border-t border-outline-variant">
      <div className="w-full px-margin-mobile md:px-margin max-w-4xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-center text-center gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Service FAQ
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Frequently Asked Questions.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Clear answers about how we scope, contract, protect data, and execute professional tasks.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group p-5 rounded-xl bg-surface-container border border-outline-variant [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all"
            >
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-primary font-medium">
                <span>{faq.question}</span>
                <MaterialIcon
                  name="expand_more"
                  className="group-open:rotate-180 transition-transform text-on-surface-variant"
                />
              </summary>
              <div className="fbx-faq-body mt-3 text-on-surface-variant font-body-sm text-body-sm leading-relaxed border-t border-outline-variant pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
