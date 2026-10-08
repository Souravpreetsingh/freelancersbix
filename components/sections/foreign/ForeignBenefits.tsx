import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const BENEFITS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "inventory_2",
    title: "Organized Records",
    description:
      "Keep financial information consistently structured, categorised, and significantly easier to review during management checks.",
  },
  {
    icon: "update",
    title: "Recurring Support",
    description:
      "Build predictable, clockwork workflows for regular accounting tasks without letting backlogs build up into monthly crises.",
  },
  {
    icon: "monitoring",
    title: "Better Visibility",
    description:
      "Create clearer financial information and transparent balance overviews for informed management reviews and projections.",
  },
  {
    icon: "verified",
    title: "Document Control",
    description:
      "Keep receipts, supplier invoices, payment records, and supporting records meticulously indexed in a secure digital structure.",
  },
  {
    icon: "tune",
    title: "Scalable Support",
    description:
      "Adjust bookkeeping support hours and scope seamlessly as transaction volumes surge or your business footprint expands.",
  },
  {
    icon: "precision_manufacturing",
    title: "Professional Process",
    description:
      "Leverage tested, structured procedures crafted around accuracy, disciplined naming conventions, and double-entry consistency.",
  },
];

export function ForeignBenefits() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Why Structured Accounting Support?
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Less Financial Administration. More Operational Clarity.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant space-y-space-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <MaterialIcon name={benefit.icon} className="text-[20px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold uppercase">{benefit.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
