"use client";

import { useMemo, useState } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { Reveal } from "@/components/motion/Reveal";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "accounting", label: "Accounting" },
  { id: "business", label: "Business" },
  { id: "data", label: "Data" },
  { id: "content", label: "Writing" },
  { id: "digital", label: "Operations" },
  { id: "hr", label: "HR" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

interface Job {
  category: string;
  title: string;
  badges: { text: string; highlight?: string }[];
  description: string;
  experience: string;
}

const JOBS: Job[] = [
  {
    category: "research",
    title: "Research Analyst",
    badges: [
      { text: "Research & Academic", highlight: "signal" },
      { text: "Flexible / Contract" },
      { text: "Global Remote" },
    ],
    description:
      "Perform secondary academic research, literature syntheses, structured data gathering, and formal reference validation across varied domains.",
    experience: "Exp: 1-3 Yrs",
  },
  {
    category: "business",
    title: "Business Research Associate",
    badges: [{ text: "Business Consulting", highlight: "signal" }, { text: "Project-Based" }, { text: "Remote" }],
    description:
      "Analyze competitive landscapes, evaluate market sizes, construct business model canvas deliverables, and summarize commercial feasibility.",
    experience: "Exp: 2-4 Yrs",
  },
  {
    category: "accounting",
    title: "Accounting & Bookkeeping Associate",
    badges: [
      { text: "Foreign Accounting", highlight: "signal" },
      { text: "Spotlight Specimen", highlight: "secondary" },
      { text: "Structured Retainer" },
    ],
    description:
      "Support multinational ledger maintenance, AP/AR workflows, multi-currency ledger reconciliations, and quarterly closure documentation.",
    experience: "Exp: 2+ Yrs",
  },
  {
    category: "accounting",
    title: "Bookkeeper",
    badges: [
      { text: "Foreign Accounting", highlight: "signal" },
      { text: "Flexible / Contract" },
      { text: "Global Remote" },
    ],
    description:
      "Record day-to-day AP/AR transactions, reconcile bank and card statements, track payables and receivables, and keep client ledgers accurate across multiple currencies.",
    experience: "Exp: 1-3 Yrs",
  },
  {
    category: "accounting",
    title: "Accountant",
    badges: [{ text: "Foreign Accounting", highlight: "signal" }, { text: "Structured Retainer" }, { text: "Remote" }],
    description:
      "Prepare monthly and quarterly financial statements, manage adjustments and account reconciliations, and support period-end closures with compliant reporting.",
    experience: "Exp: 2-5 Yrs",
  },
  {
    category: "hr",
    title: "Human Resources (HR) Executive",
    badges: [{ text: "People & Culture", highlight: "signal" }, { text: "Full-Time" }, { text: "Remote" }],
    description:
      "Coordinate recruitment pipelines, screen and shortlist candidates, manage onboarding workflows, and maintain employee records and internal HR documentation.",
    experience: "Exp: 1-3 Yrs",
  },
  {
    category: "data",
    title: "Data Analyst",
    badges: [{ text: "Data & Analytics", highlight: "signal" }, { text: "Technical Track" }, { text: "Flexible" }],
    description:
      "Transform disparate survey and operational datasets into clean tabular formats, statistical indicators, and executive dashboards.",
    experience: "Exp: 1-3 Yrs",
  },
  {
    category: "content",
    title: "Content Writer & Editor",
    badges: [{ text: "Content & Editorial", highlight: "signal" }, { text: "Editorial" }, { text: "Remote" }],
    description:
      "Produce whitepapers, executive executive summaries, corporate profiles, and ensure grammatical perfection across all client assets.",
    experience: "Exp: 2+ Yrs",
  },
  {
    category: "digital",
    title: "Virtual Assistant / Operations Associate",
    badges: [
      { text: "Digital Operations", highlight: "signal" },
      { text: "Administrative" },
      { text: "Flexible Hours" },
    ],
    description:
      "Manage executive schedules, CRM data hygiene, cross-platform file organization, and administrative communications for client teams.",
    experience: "Exp: 1+ Yrs",
  },
];

function badgeClasses(highlight?: string): string {
  switch (highlight) {
    case "signal":
      return "bg-surface-container-lowest text-signal-green";
    case "secondary":
      return "bg-surface-container-lowest text-primary";
    default:
      return "bg-surface-container-lowest text-on-surface-variant";
  }
}

export function CareerOpportunities() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const visibleJobs = useMemo(() => {
    const q = query.toLowerCase().trim();
    return JOBS.filter((job) => {
      const matchesFilter = filter === "all" || job.category === filter;
      const matchesSearch = job.title.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section
      className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"
      id="opportunities"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
                Open Opportunities
              </span>
              <span className="px-2 py-0.5 rounded text-xs bg-surface-container-high text-on-surface-variant">
                Active Pipeline
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
              Find where your skills fit.
            </h2>
          </div>
          <div className="bg-surface-container p-space-sm rounded-lg flex items-center gap-space-sm max-w-md">
            <MaterialIcon name="info" className="text-signal-green text-[20px]" />
            <p className="font-label-md text-label-md text-on-surface-variant">
              Sample opportunity specimen roster. Openings updated periodically based on active international
              engagements.
            </p>
          </div>
        </div>
        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-xs w-full lg:w-auto" id="filter-tabs">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`job-filter-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all ${
                  filter === item.id
                    ? "bg-primary text-on-primary font-medium"
                    : "bg-surface-container text-on-surface-variant hover:text-primary"
                }`}
                data-filter={item.id}
                aria-pressed={filter === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <MaterialIcon name="search" className="absolute left-3 top-2.5 text-outline text-[20px]" />
            <input
              className="w-full h-11 pl-10 pr-space-md bg-surface-container text-on-surface text-body-sm font-body-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-signal-green placeholder:text-outline"
              id="job-search-input"
              placeholder="Search positions..."
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
        <Reveal stagger>
          <div className="grid grid-cols-1 gap-space-sm" id="jobs-container">
            {visibleJobs.map((job) => (
              <div
                key={job.title}
                className="job-card group bg-surface-container p-space-lg rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-all"
                data-category={job.category}
                data-title={job.title}
              >
                <div className="flex flex-col gap-space-xs max-w-xl">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    {job.badges.map((badge) => (
                      <span
                        key={badge.text}
                        className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${badgeClasses(badge.highlight)}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{job.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{job.description}</p>
                </div>
                <div className="flex items-center gap-space-md self-start md:self-center shrink-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{job.experience}</span>
                  <a
                    className="px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-primary/90 font-medium transition-all"
                    href="#role-specimen"
                  >
                    View Position
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
