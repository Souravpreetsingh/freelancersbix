import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const applications: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "storefront",
    title: "Market Data",
    body: "Compile industry benchmark tables, price scraping repositories, and market share tracking matrices.",
  },
  {
    icon: "group",
    title: "Customer Data",
    body: "Synthesize CRM outputs, churn indicators, customer feedback arrays, and user satisfaction scores.",
  },
  {
    icon: "point_of_sale",
    title: "Sales Data",
    body: "Support pipeline volume reviews, historical revenue tracking, and cohort conversion analysis.",
  },
  {
    icon: "settings_suggest",
    title: "Operational Data",
    body: "Standardize SLA records, supply chain lead times, logistics volumes, and internal ticket queues.",
  },
  {
    icon: "account_balance",
    title: "Financial Data",
    body: "Support financial data structuring and reporting sheets (pure operational structuring, non-advisory).",
  },
  {
    icon: "leaderboard",
    title: "Management Reporting",
    body: "Deliver structured monthly and quarterly summary packs with consolidated executive KPI tracking.",
  },
];

export function DataBusiness() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Enterprise Applications
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Data support for business questions.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Wherever your organization tracks numbers — markets, customers, operations, or finance — we structure the
            raw material into a format leadership can act on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {applications.map((application) => (
            <div
              key={application.title}
              className="p-space-lg rounded-xl bg-surface-container border border-whiteout/5 flex flex-col justify-between"
            >
              <div>
                <MaterialIcon name={application.icon} className="text-[28px] text-signal-blue mb-2" />
                <h3 className="font-headline-sm text-headline-sm text-whiteout mb-2">{application.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{application.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
