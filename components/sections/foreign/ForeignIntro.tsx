import { LinePattern } from "@/components/brand/Backdrop";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const FEATURES: { icon: IconName; title: string; description: string; stage: string }[] = [
  {
    icon: "folder_special",
    title: "Organized Records",
    description: "Structured handling of accounting information, digital paperwork, and transaction documentation.",
    stage: "STAGE // CLASSIFIED",
  },
  {
    icon: "visibility",
    title: "Clear Reporting",
    description:
      "Professional reporting support designed to give business leaders unobstructed visibility into cash flow.",
    stage: "STAGE // REVEALED",
  },
  {
    icon: "cached",
    title: "Reliable Workflows",
    description: "Consistent, recurring cycles for accounting tasks that eliminate period-end stress and logjams.",
    stage: "STAGE // RECURRING",
  },
];

export function ForeignIntro() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-outline-variant">
      <div className="max-w-[1400px] mx-auto space-y-space-2xl">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Accounting Support
          </span>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-tight max-w-4xl">
            Keep Financial Operations Organized, Accurate And Easier To Manage.
          </h2>
          <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            FreelancersBix provides structured accounting and bookkeeping support for businesses that need dependable
            assistance with financial administration, transaction records, reconciliations, reporting, and day-to-day
            accounting workflows. Our role is to support organized financial operations while helping clients maintain
            clearer records and more efficient processes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
          <div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-container flex flex-col justify-between border border-outline-variant relative overflow-hidden">
            <LinePattern pattern="diagonal" className="opacity-40" />
            <div>
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">Philosophy // 01</span>
              <h3 className="mt-space-md font-headline-md text-headline-md text-primary font-bold leading-snug">
                Better financial organization starts with better processes.
              </h3>
            </div>
            <p className="mt-space-xl font-body-sm text-body-sm text-on-surface-variant">
              Disciplined tracking turns chaotic transaction histories into audit-ready systems that give leadership
              full confidence in their operational health.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between hover:bg-surface-container transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-signal-green mb-space-md">
                    <MaterialIcon name={feature.icon} className="text-[20px]" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">{feature.title}</h4>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
                </div>
                <span className="mt-space-lg font-mono text-[11px] text-signal-green">{feature.stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
