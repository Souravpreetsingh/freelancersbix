import type { ReactNode } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: "What specific types of administrative support do you provide?",
    answer:
      "We provide structured digital support including document formatting, report compilation, spreadsheet maintenance, file and directory organization, secondary research assistance, and recurring operational tasks. We focus on digital production rather than receptionist services.",
  },
  {
    question: "What are your data entry capabilities and quality standards?",
    answer:
      "We handle structured entry into Excel, Google Sheets, databases, and custom web interfaces. Every batch undergoes a verification review to eliminate duplicate records, typo artifacts, and misaligned columns before delivery.",
  },
  {
    question: "Can you clean up and format existing messy Excel or Google Sheets files?",
    answer:
      "Yes. We regularly receive complex, unformatted spreadsheets. We harmonize fonts, align column headers, resolve broken formula links, build summary tables, and format the workbook into an executive-ready working tool.",
  },
  {
    question: "How do you approach file and folder reorganization?",
    answer:
      "We establish an agreed folder taxonomy first (e.g., partitioned by department, fiscal year, or project code). We then sort assets, remove obvious redundant copies, and apply standard version naming conventions (e.g., Project_Brief_2026-03_v1.2).",
  },
  {
    question: "What is the scope of your virtual assistance?",
    answer:
      "Our virtual assistants operate as digital production specialists. We assist with compiling documentation, checking data entries, organizing research sources, and keeping recurring back-office digital queues cleared.",
  },
  {
    question: "What are your lead research guidelines and data ethics standards?",
    answer:
      "All lead research strictly targets publicly available business information (company registers, press releases, corporate directories). We do not scrape private personal profiles or harvest unauthorized data.",
  },
  {
    question: "Can we engage you for recurring weekly or monthly task management?",
    answer:
      "Yes. We structure recurring retainers with defined weekly checklists, turnaround times, and reporting protocols so you have reliable operational support without onboarding friction.",
  },
  {
    question: "How do you protect confidentiality and data security?",
    answer:
      "We adhere to strict confidentiality protocols. We sign mutual NDAs upon request, utilize encrypted file transfer channels, restrict project access strictly to assigned personnel, and permanently purge working data after handoff.",
  },
  {
    question: "Do you offer live inbound customer call-center or telemarketing support?",
    answer:
      "No. We do NOT provide live voice call-center, telephone receptionist, or cold telemarketing services. Our operational focus is purely digital, document-centric, spreadsheet-oriented, and asynchronous research tasks.",
  },
  {
    question: "Are financial bookkeeping and formal accounting handled under this service?",
    answer: (
      <>
        No. Formal ledger reconciliation, general ledger accounting, tax filing, and multi-currency bookkeeping are
        handled exclusively under our specialized <strong className="text-primary">Foreign Accounting</strong> service
        line.
      </>
    ),
  },
  {
    question: "How do we get started with our first task?",
    answer:
      "Simply submit a quote request via our contact form detailing your task description, input files, and target timeline. We will review the brief, outline the proposed scope and quotation, and confirm execution details.",
  },
];

export function DigitalFAQ() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin max-w-4xl mx-auto">
        <div className="mb-space-2xl text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            CLARIFICATIONS & POLICIES
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-space-sm" id="faq-accordion">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl bg-surface-container-low overflow-hidden transition-all group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full p-space-lg text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
                <span className="font-headline-sm text-headline-sm text-primary font-medium">{faq.question}</span>
                <MaterialIcon
                  name="expand_more"
                  className="text-signal-blue transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="faq-content px-space-lg pb-space-lg">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
