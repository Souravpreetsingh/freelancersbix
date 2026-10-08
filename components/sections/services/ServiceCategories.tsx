import Link from "next/link";
import { DiagonalLines } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { Reveal } from "@/components/motion/Reveal";
import type { IconName } from "@/lib/design/icons";

interface ChecklistItem {
  label: string;
  spanClass?: string;
}

interface Category {
  id: string;
  practice: string;
  icon: IconName;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  checklist: ChecklistItem[];
  featured?: boolean;
}

const CATEGORIES: Category[] = [
  {
    id: "cat-academic",
    practice: "Practice // 01",
    icon: "school",
    title: "Academic & Research Support",
    description:
      "Structured research and academic support for students, researchers, and professionals working on rigorous, evidence-based deliverables.",
    linkLabel: "Explore Academic & Research",
    href: "/services/academic-and-research",
    checklist: [
      { label: "Academic Research Support" },
      { label: "Research Papers & Reports" },
      { label: "Literature Reviews" },
      { label: "Dissertation & Thesis Support" },
      { label: "Case Studies" },
      { label: "PhD Assistance" },
      { label: "Assignments & Projects" },
      { label: "Referencing & Citation" },
      { label: "Data Analysis & Interpretation" },
      { label: "Academic Editing & Proofreading" },
      { label: "Research Proposal Development", spanClass: "sm:col-span-2 md:col-span-2" },
    ],
  },
  {
    id: "cat-consulting",
    practice: "Practice // 02",
    icon: "query_stats",
    title: "Business Research & Consulting",
    description:
      "Research-driven business support for organizations that need market intelligence, competitive benchmarking, and structured decision frameworks.",
    linkLabel: "Explore Business Consulting",
    href: "/services/business-and-consulting",
    checklist: [
      { label: "Market Research Reports" },
      { label: "Industry Analysis" },
      { label: "Competitor Analysis" },
      { label: "Business Plans" },
      { label: "Feasibility Studies" },
      { label: "Business Reports" },
      { label: "Startup Research & Planning" },
      { label: "Customer & Market Analysis" },
      { label: "SWOT Analysis" },
      { label: "PESTLE Analysis" },
      { label: "Business Presentations" },
      { label: "Financial & Business Research" },
    ],
  },
  {
    id: "cat-accounting",
    practice: "Practice // 03",
    icon: "account_balance",
    title: "Foreign Accounting",
    description:
      "Professional outsourced accounting and bookkeeping support for international businesses needing rigorous multi-jurisdiction ledgers and audit-ready reporting.",
    linkLabel: "Deep-Dive Accounting Practice",
    href: "#featured-accounting-deepdive",
    featured: true,
    checklist: [
      { label: "Bookkeeping" },
      { label: "Accounts Payable" },
      { label: "Accounts Receivable" },
      { label: "Payroll Management" },
      { label: "Bank Reconciliation" },
      { label: "Financial Data Entry" },
      { label: "Monthly Financial Reporting" },
      { label: "Invoice Management" },
      { label: "Expense Management" },
      { label: "Accounting Support" },
      { label: "Custom Management Reports", spanClass: "sm:col-span-2" },
    ],
  },
  {
    id: "cat-startup",
    practice: "Practice // 04",
    icon: "rocket_launch",
    title: "Business & Startup Support",
    description:
      "Practical execution support for entrepreneurs and ventures developing initial models, entering target markets, and scaling workflow foundations.",
    linkLabel: "Explore Startup Support",
    href: "/services/business-and-startup",
    checklist: [
      { label: "Startup Documentation" },
      { label: "Business Model Development" },
      { label: "Business Plan Preparation" },
      { label: "Pitch Decks" },
      { label: "Market Entry Research" },
      { label: "Competitor Research" },
      { label: "Process Documentation" },
      { label: "Operational Support" },
      { label: "Virtual Business Assistance" },
    ],
  },
  {
    id: "cat-writing",
    practice: "Practice // 05",
    icon: "edit_note",
    title: "Content & Professional Writing",
    description:
      "Precise writing, technical documentation, and editorial refinement for enterprises, practitioners, and publication projects.",
    linkLabel: "Explore Content Services",
    href: "/services/content-and-writing",
    checklist: [
      { label: "Business Content Writing" },
      { label: "Website Content" },
      { label: "Blog & Article Writing" },
      { label: "Technical Writing" },
      { label: "Research-Based Content" },
      { label: "Reports & Documentation" },
      { label: "Professional Editing" },
      { label: "Proofreading" },
      { label: "Presentation Content" },
    ],
  },
  {
    id: "cat-data",
    practice: "Practice // 06",
    icon: "database",
    title: "Data & Research Services",
    description:
      "Structured data cleaning, quantitative collation, survey evaluation, and analytical modeling to derive verified insights.",
    linkLabel: "Explore Data Services",
    href: "/services/data-and-research",
    checklist: [
      { label: "Data Collection" },
      { label: "Data Cleaning" },
      { label: "Excel & Sheets Modeling" },
      { label: "Survey Data Analysis" },
      { label: "Statistical Support" },
      { label: "Data Visualization" },
      { label: "Research Interpretation" },
      { label: "Custom Quantitative Reports", spanClass: "sm:col-span-2" },
    ],
  },
  {
    id: "cat-digital",
    practice: "Practice // 07",
    icon: "terminal",
    title: "Digital & Administrative Support",
    description:
      "Reliable operational assistance for research, documentation, virtual administration, and day-to-day workflow management.",
    linkLabel: "Explore Digital Support",
    href: "/services/digital-support",
    checklist: [
      { label: "Virtual Assistance" },
      { label: "Data Entry" },
      { label: "Document Formatting" },
      { label: "Spreadsheet Management" },
      { label: "Research Assistance" },
      { label: "Lead Research" },
      { label: "Administrative Support" },
      { label: "File & Document Archival", spanClass: "sm:col-span-2" },
    ],
  },
];

function Checklist({ items, featured }: { items: ChecklistItem[]; featured?: boolean }) {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={
            featured
              ? `p-3 rounded-lg bg-surface-container-highest/60 border border-outline-variant flex items-start gap-2.5 ${item.spanClass ?? ""}`
              : `p-3 rounded-lg bg-surface-container border border-outline-variant flex items-start gap-2.5 ${item.spanClass ?? ""}`
          }
        >
          <MaterialIcon name="check_circle" className="text-signal-green text-[18px] shrink-0 mt-0.5" />
          <span className="font-body-sm text-body-sm text-on-surface">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function CategoryLeft({ category }: { category: Category }) {
  if (category.featured) {
    return (
      <div className="flex flex-col justify-between max-w-md">
        <div>
          <div className="flex items-center gap-3 mb-space-sm">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-signal-green text-whiteout">
              Featured Service
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">{category.practice}</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-xs flex items-center gap-2">
            <span>{category.title}</span>
            <MaterialIcon name={category.icon} className="text-secondary text-[24px]" />
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{category.description}</p>
        </div>
        {/* Miniature Visual Metric Dashboard */}
        <div className="p-4 rounded-lg bg-surface-container-lowest/80 border border-outline-variant my-space-md flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-on-surface-variant font-mono">Ledger Reconciliation Rate</span>
            <span className="text-signal-green font-bold">99.98%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
            <div className="w-[99%] h-full bg-signal-green rounded-full" />
          </div>
          <div className="flex justify-between items-center text-[11px] text-on-surface-variant pt-1">
            <span>Multi-Currency Synchronized</span>
            <span className="text-secondary font-mono">US GAAP / IFRS</span>
          </div>
        </div>
        <div>
          <Link
            href={category.href}
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary group transition-colors"
          >
            <span>{category.linkLabel}</span>
            <MaterialIcon name="arrow_forward" className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between max-w-md">
      <div>
        <div className="flex items-center gap-3 mb-space-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
            {category.practice}
          </span>
          <span className="h-px w-8 bg-outline-variant/70" />
          <MaterialIcon name={category.icon} className="text-signal-green text-[20px]" />
        </div>
        <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-xs">{category.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{category.description}</p>
      </div>
      <div className="mt-space-lg">
        <Link
          href={category.href}
          className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary group transition-colors"
        >
          <span>{category.linkLabel}</span>
          <MaterialIcon name="arrow_forward" className="text-lg group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export function ServiceCategories() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <div className="flex flex-col items-start gap-space-xs max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            What We Offer
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Seven Areas of Professional Support.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Choose the area that matches your requirement. Each service category brings together specialized support
            designed to make complex work more structured, verifiable, and manageable.
          </p>
        </div>
        <Reveal stagger>
          <div className="flex flex-col gap-space-xl">
            {CATEGORIES.map((category) =>
              category.featured ? (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32 p-space-xl md:p-space-2xl rounded-xl bg-gradient-to-b from-surface-container-high to-surface-container border-2 border-signal-green/40 shadow-2xl relative overflow-hidden"
                >
                  <DiagonalLines className="-top-6 -right-6 h-40 w-40 opacity-70 md:h-52 md:w-52" />
                  <div className="flex flex-col lg:flex-row justify-between gap-space-xl relative z-10">
                    <CategoryLeft category={category} />
                    <Checklist items={category.checklist} featured />
                  </div>
                </div>
              ) : (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32 p-space-xl md:p-space-2xl rounded-xl bg-surface-container-low border border-outline-variant hover:border-outline-variant transition-all flex flex-col lg:flex-row justify-between gap-space-xl"
                >
                  <CategoryLeft category={category} />
                  <Checklist items={category.checklist} />
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
