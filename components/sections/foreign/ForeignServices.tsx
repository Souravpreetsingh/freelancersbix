import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const SERVICES: { number: string; icon: IconName; title: string; description: string; footer: string }[] = [
  {
    number: "01",
    icon: "menu_book",
    title: "Bookkeeping",
    description:
      "Support for maintaining organized financial transaction records, ledger integrity, and accounting documentation.",
    footer: "Daily & Weekly Logging",
  },
  {
    number: "02",
    icon: "request_quote",
    title: "Accounts Payable",
    description:
      "Support for organizing supplier invoices, aging reports, payable records, and verification workflows.",
    footer: "Vendor Schedule Control",
  },
  {
    number: "03",
    icon: "receipt_long",
    title: "Accounts Receivable",
    description:
      "Support for maintaining receivable records, customer invoices, tracking incoming transfers, and aging logs.",
    footer: "Invoicing & Receipts",
  },
  {
    number: "04",
    icon: "badge",
    title: "Payroll Management",
    description:
      "Administrative support for payroll-related transaction records, time logs, compensation files, and documentation.",
    footer: "Payroll Prep Support",
  },
  {
    number: "05",
    icon: "account_balance",
    title: "Bank Reconciliation",
    description:
      "Support for comparing financial records with bank and payment gateway statements, identifying discrepancies for review.",
    footer: "Discrepancy Auditing",
  },
  {
    number: "06",
    icon: "dataset",
    title: "Financial Data Entry",
    description:
      "Structured entry and organization of financial information into software systems, ERPs, and cloud spreadsheets.",
    footer: "High-Accuracy Ingestion",
  },
  {
    number: "07",
    icon: "analytics",
    title: "Monthly Financial Reporting",
    description:
      "Preparation and organization of recurring financial summary reports, operational overviews, and management insights.",
    footer: "P&L and Cash Summaries",
  },
  {
    number: "08",
    icon: "credit_card",
    title: "Invoice & Expense Management",
    description:
      "Support for organizing vendor invoices, internal receipt submissions, expense categorizations, and matching.",
    footer: "Digital Receipt Archive",
  },
  {
    number: "09",
    icon: "support_agent",
    title: "Accounting Support",
    description:
      "Flexible assistance with recurring accounting administration, ad-hoc queries, and routine financial task execution.",
    footer: "Custom Administration",
  },
];

export function ForeignServices() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              Our Accounting Services
            </span>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
              Accounting Support Across Essential Financial Workflows.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Comprehensive assistance tailored to recurring accounting administration, balance integrity, and transparent
            documentation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="p-space-lg rounded-xl bg-surface-container-low border border-white/5 flex flex-col justify-between group hover:border-white/20 hover:bg-surface-container transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-mono text-sm text-secondary font-bold">{`${service.number} //`}</span>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:text-signal-blue transition-colors">
                    <MaterialIcon name={service.icon} className="text-[20px]" />
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold">{service.title}</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{service.description}</p>
              </div>
              <div className="mt-space-lg pt-space-sm border-t border-white/5 flex items-center justify-between text-xs font-label-md text-secondary">
                <span>{service.footer}</span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-[16px] group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
          <div className="p-space-lg rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low border border-white/10 flex flex-col justify-between group md:col-span-2 lg:col-span-3 hover:border-white/20 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-sm text-secondary font-bold">{"10 //"}</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-signal-blue">
                    Executive Deliverable
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-whiteout font-bold">Management Reports</h3>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                  Structured preparation and compilation of periodic operational reports that provide leadership with
                  concise, decision-ready insights.
                </p>
              </div>
              <div className="flex items-center gap-space-sm self-start md:self-auto">
                <span className="px-3 py-1 rounded bg-black-void/50 text-xs font-mono text-on-surface border border-white/10">
                  Variance Tracking
                </span>
                <span className="px-3 py-1 rounded bg-black-void/50 text-xs font-mono text-on-surface border border-white/10">
                  Budget Alignment
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm border-t border-white/5 flex items-center justify-between text-xs font-label-md text-secondary">
              <span>Executive Board &amp; Team Reviews</span>
              <MaterialIcon
                name="arrow_forward"
                className="text-[16px] group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
