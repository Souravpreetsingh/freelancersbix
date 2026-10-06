import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const COMPANIONS: { name: IconName; title: string; desc: string; label: string; href: string }[] = [
  {
    name: "business_center",
    title: "Business & Startup",
    desc: "Business plans, pitch decks, market feasibility studies, and commercial planning frameworks.",
    label: "Explore Business Support",
    href: "/services",
  },
  {
    name: "query_stats",
    title: "Data & Research",
    desc: "Statistical modeling, quantitative research, data cleaning, and advanced visual dashboards.",
    label: "Explore Data Services",
    href: "/services",
  },
  {
    name: "history_edu",
    title: "Content & Writing",
    desc: "High-impact copywriting, technical documentation, white papers, and corporate editorial support.",
    label: "Explore Writing Services",
    href: "/services",
  },
  {
    name: "account_balance",
    title: "Foreign Accounting",
    desc: "Cross-border bookkeeping, international ledger reconciliation, and multi-currency reporting.",
    label: "Explore Foreign Accounting",
    href: "/services/foreign-accounting",
  },
];

export function DigitalCompanion() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            FREELANCERSBIX ECOSYSTEM
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Companion Service Lines
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {COMPANIONS.map((companion) => (
            <div
              key={companion.name}
              className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between"
            >
              <div>
                <MaterialIcon name={companion.name} className="text-signal-blue text-2xl mb-space-sm" />
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                  {companion.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{companion.desc}</p>
              </div>
              <Link
                href={companion.href}
                className="font-label-sm text-label-sm text-signal-blue hover:text-whiteout flex items-center gap-1"
              >
                <span>{companion.label}</span>
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
