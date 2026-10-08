import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const STEPS: { number: string; title: string; description: string; icon: IconName; note: string }[] = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Send us the scope, target outcomes, background data, or questions. No extensive documentation required to initiate review.",
    icon: "upload_file",
    note: "Files or brief notes accepted",
  },
  {
    number: "02",
    title: "We Understand & Scrutinize",
    description:
      "Our lead practice coordinators assess technical demands, jurisdictional aspects, timeline realities, and assign the proper methodology.",
    icon: "psychology",
    note: "Domain expert scoping",
  },
  {
    number: "03",
    title: "Get The Right Support",
    description:
      "Move forward with transparent milestone schedules, structured communications, and precision deliverables ready for implementation.",
    icon: "task_alt",
    note: "Immediate structured onboarding",
  },
];

export function HowToChoose() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col items-start gap-space-xs max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            Not Sure Where to Start?
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
            Tell Us What You Need. We’ll Help Identify The Right Service.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Projects rarely fit into single rigid silos. Our onboarding protocol clarifies requirement boundaries,
            matching domain specialists to your workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-space-xl rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between"
            >
              <div>
                <span className="font-headline-lg text-headline-lg text-on-surface-variant/30 font-bold block mb-space-sm">
                  {step.number}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
              <div className="mt-space-lg pt-space-md border-t border-outline-variant flex items-center gap-2 text-secondary text-xs">
                <MaterialIcon name={step.icon} className="text-[16px]" />
                <span>{step.note}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg font-label-lg text-label-lg bg-primary text-on-primary hover:bg-[#08452F] transition-all font-medium"
          >
            Tell Us What You Need
          </Link>
        </div>
      </div>
    </section>
  );
}
