import { MaterialIcon } from "@/components/icons/MaterialIcon";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "1. What does foreign accounting support include?",
    answer:
      "Foreign accounting support includes structured bookkeeping, multi-currency ledger management, accounts payable and receivable logging, bank reconciliations, payroll administrative support, and recurring financial summary reporting tailored to cross-border operational needs.",
  },
  {
    question: "2. What bookkeeping services do you provide?",
    answer:
      "We handle day-to-day recording of purchases, revenue, banking transactions, and expense receipts. Our team keeps your transaction history balanced, indexed, and categorized in accordance with your internal chart of accounts.",
  },
  {
    question: "3. Do you support accounts payable and receivable?",
    answer:
      "Yes. For accounts payable, we organize supplier bills, schedule approval queues, and maintain payable logs. For accounts receivable, we track customer billing, issue invoices, log incoming receipts, and generate aging reports.",
  },
  {
    question: "4. Do you provide bank reconciliation support?",
    answer:
      "Yes. We routinely match your bank statements, payment processors (such as Stripe or PayPal), and credit card feeds against your general ledger, identifying variances, duplicate charges, or missing documentation for your review.",
  },
  {
    question: "5. Can you help organize monthly financial reports?",
    answer:
      "Yes. At the conclusion of each accounting period, we prepare structured summaries including Profit & Loss drafts, balance updates, expense breakdown schedules, and cash movement overviews for management evaluation.",
  },
  {
    question: "6. Can accounting support be customized to our workflow?",
    answer:
      "Absolutely. Whether you need full end-to-end administration or support focused strictly on transaction data entry and reconciliation, we calibrate our cadence, software access, and deliverables to your operating rhythm.",
  },
  {
    question: "7. What information is needed to begin?",
    answer:
      "To start an onboarding review, we typically request your existing chart of accounts, sample monthly statements, overview of current software platforms, and an estimated monthly transaction volume.",
  },
  {
    question: "8. How do I request a quote?",
    answer:
      'You can use the "Get an Accounting Quote" button on this page. Provide details about your business scale and accounting needs, and our team will prepare a structured proposal and scope overview.',
  },
];

export function ForeignFAQ() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-[1000px] mx-auto space-y-space-2xl">
        <div className="text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            FAQs
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Frequently Asked Questions.
          </h2>
          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
            Clear answers on how we scope, manage, and deliver foreign accounting and bookkeeping support.
          </p>
        </div>
        <div className="space-y-space-sm">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-surface-container-low border border-outline-variant overflow-hidden transition-all [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full p-space-lg text-left flex items-center justify-between gap-space-md cursor-pointer">
                <span className="font-headline-sm text-headline-sm font-bold text-primary">{faq.question}</span>
                <MaterialIcon name="add" className="text-secondary text-[20px] group-open:hidden shrink-0" />
                <MaterialIcon name="remove" className="text-secondary text-[20px] hidden group-open:block shrink-0" />
              </summary>
              <div className="fbx-faq-body px-space-lg pb-space-lg text-on-surface-variant font-body-sm text-body-sm border-t border-outline-variant pt-space-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
