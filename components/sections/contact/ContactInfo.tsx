import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/design/site";

const CHANNELS: { icon: IconName; label: string; value: string; note: string; href?: string }[] = [
  {
    icon: "alternate_email",
    label: "Direct Mail",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "24-hour response turnaround on business days",
  },
  {
    icon: "mail",
    label: "Secondary Mail",
    value: SITE.secondaryEmail,
    href: `mailto:${SITE.secondaryEmail}`,
    note: "Alternate inbox for ongoing correspondence",
  },
  {
    icon: "call",
    label: "Enquiry Desk & Messaging",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: "Available Mon–Fri · 08:00–19:00 UTC",
  },
  {
    icon: "assignment",
    label: "Business Enquiries",
    value: "Structured Intake via the Interactive Form",
    note: "Fast-tracks priority allocation to specialized team leads",
  },
];

const DISCIPLINES: { icon: IconName; title: string; text: string; featured?: boolean }[] = [
  {
    icon: "school",
    title: "Academic & Research",
    text: "Literature reviews, thesis structures, peer-reviewed source curation, and academic data frameworks.",
  },
  {
    icon: "trending_up",
    title: "Business & Consulting",
    text: "Market feasibility studies, competitor landscape mapping, and commercial growth strategy models.",
  },
  {
    icon: "account_balance",
    title: "Foreign Accounting",
    text: "US GAAP / IFRS bookkeeping, multi-entity reconciliation, tax pack prep, and QBO/Xero ledger audits.",
    featured: true,
  },
  {
    icon: "rocket_launch",
    title: "Startup Support",
    text: "Investor pitch deck architecture, cap table modeling, operational SOPs, and go-to-market plans.",
  },
  {
    icon: "edit_note",
    title: "Content & Writing",
    text: "Technical whitepapers, industry reports, corporate copywriting, and authoritative B2B thought leadership.",
  },
  {
    icon: "database",
    title: "Data & Research",
    text: "Statistical synthesis, Python/R automation, spreadsheet modeling, and dashboard development.",
  },
  {
    icon: "hub",
    title: "Digital & Administrative Support",
    text: "Executive back-office operations, CRM migration, workflow automation, and custom digital maintenance.",
    featured: false,
  },
];

export function ContactInfo() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-5 flex flex-col">
          <span className="font-label-md text-label-md text-signal-green uppercase tracking-widest font-semibold mb-space-sm">
            Contact FreelancersBix
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight leading-tight mb-space-md">
            We are ready to hear your brief.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl">
            Direct communication channels for institutional clients, venture-backed teams, independent researchers, and
            growing firms.
          </p>
          <div className="flex flex-col gap-space-md">
            {CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all"
              >
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                    <MaterialIcon name={channel.icon} className="text-signal-green" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      {channel.label}
                    </span>
                    {channel.href ? (
                      <a
                        className="font-body-lg text-body-lg font-medium text-primary mt-space-xs hover:text-signal-green transition-colors break-words"
                        href={channel.href}
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="font-body-lg text-body-lg font-medium text-primary mt-space-xs break-words">
                        {channel.value}
                      </span>
                    )}
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
                      {channel.note}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col mt-space-2xl lg:mt-0">
          <div className="p-space-xl rounded-xl bg-surface-container-lowest">
            <div className="flex items-center justify-between mb-space-lg">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-semibold">
                  Practice Matrix
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                  What can we help you solve?
                </h3>
              </div>
              <span className="font-label-sm text-label-sm text-signal-green bg-signal-green/10 px-space-sm py-space-xs rounded-full">
                7 Specializations
              </span>
            </div>
            <Reveal stagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                {DISCIPLINES.map((discipline) => (
                  <div
                    key={discipline.title}
                    className={`p-space-md rounded-lg ${discipline.featured ? "bg-surface-container-high relative overflow-hidden group" : "bg-surface-container hover:bg-surface-container-high transition-all"} ${
                      discipline.title === "Digital & Administrative Support" ? "sm:col-span-2" : ""
                    }`}
                  >
                    {discipline.featured && (
                      <div className="absolute top-0 right-0 px-2 py-0.5 bg-signal-green text-whiteout font-label-sm text-[10px] font-bold uppercase rounded-bl">
                        Featured
                      </div>
                    )}
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <MaterialIcon
                        name={discipline.icon}
                        className={`text-[20px] ${discipline.featured ? "text-signal-green" : "text-on-surface"}`}
                      />
                      <span className="font-headline-sm text-[16px] text-primary font-semibold">
                        {discipline.title}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{discipline.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
