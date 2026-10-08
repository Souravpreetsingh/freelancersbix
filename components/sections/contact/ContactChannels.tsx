import Link from "next/link";
import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SITE } from "@/lib/design/site";

const OPTIONS: {
  icon: IconName;
  iconColor: string;
  title: string;
  text: string;
  link: string;
  linkLabel: string;
  linkIcon: IconName;
}[] = [
  {
    icon: "contact_support",
    iconColor: "text-signal-green",
    title: "General Enquiries",
    text: "Have general questions about how FreelancersBix operates, payment structures, or service coverage?",
    link: `mailto:${SITE.email}`,
    linkLabel: "Contact Us",
    linkIcon: "arrow_forward",
  },
  {
    icon: "task_alt",
    iconColor: "text-signal-green",
    title: "Project Enquiry",
    text: "Have a complex deliverable, foreign ledger reconciliation, or urgent research sprint ready to start?",
    link: "#quote-engine",
    linkLabel: "Get a Quote",
    linkIcon: "north_east",
  },
  {
    icon: "groups",
    iconColor: "text-secondary",
    title: "Practitioner Careers",
    text: "Interested in joining our international network of researchers, certified accountants, analysts, and writers?",
    link: "/careers",
    linkLabel: "Explore Careers",
    linkIcon: "arrow_forward",
  },
];

export function ContactChannels() {
  const cardClass = (isActive: boolean) =>
    `p-space-xl rounded-xl transition-all flex flex-col justify-between ${
      isActive
        ? "bg-surface-container hover:bg-surface-container-high"
        : "bg-surface-container-low hover:bg-surface-container"
    }`;

  const cardBody = (option: (typeof OPTIONS)[number]) => (
    <>
      <div>
        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-space-lg">
          <MaterialIcon name={option.icon} className={`text-[24px] ${option.iconColor}`} />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{option.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{option.text}</p>
      </div>
      <div className="pt-space-xl">
        <span className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary font-medium hover:text-signal-green transition-colors">
          <span>{option.linkLabel}</span>
          <MaterialIcon name={option.linkIcon} className="text-[16px]" />
        </span>
      </div>
    </>
  );

  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-xl mb-space-2xl">
        <span className="font-label-md text-label-md text-signal-green uppercase tracking-widest font-semibold">
          Direct Channels
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-1">
          Quick engagement tracks.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {OPTIONS.map((option, index) =>
          option.link.startsWith("/") ? (
            <Link key={option.title} href={option.link} className={cardClass(index === 1)} prefetch>
              {cardBody(option)}
            </Link>
          ) : (
            <a key={option.title} href={option.link} className={cardClass(index === 1)}>
              {cardBody(option)}
            </a>
          ),
        )}
      </div>
    </section>
  );
}
