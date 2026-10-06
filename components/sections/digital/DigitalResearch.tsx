import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const FLOW = [
  { num: "01. Query", label: "Define parameters" },
  { num: "02. Search", label: "Public databases" },
  { num: "03. Collect", label: "Compile artifacts" },
  { num: "04. Organize", label: "Structure findings" },
  { num: "05. Record", label: "Attribute sources" },
  { num: "06. Deliver", label: "Structured brief", highlight: true },
];

export function DigitalResearch() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              FACTUAL ACCUMULATION
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-tight">
              Support the research behind the work.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Formulating strategy or authoring scholarly work requires hours of iterative literature compilation,
              industry survey collection, and factual verification. We handle the heavy lifting of source discovery and
              cataloging so you can focus on analysis and interpretation.
            </p>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-label-lg text-label-lg text-signal-blue hover:text-whiteout transition-colors"
              >
                <span>Explore Academic & Research Support</span>
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 p-space-lg rounded-xl bg-surface-container-low">
            <div className="text-center font-mono text-label-sm text-secondary mb-space-md">
              Secondary Research Process Flow
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm font-mono text-label-sm">
              {FLOW.map((step) => (
                <div
                  key={step.num}
                  className={`p-space-sm rounded-lg text-center ${
                    step.highlight ? "bg-signal-blue/20" : "bg-surface-container"
                  }`}
                >
                  <span className={`block font-bold ${step.highlight ? "text-secondary" : "text-signal-blue"}`}>
                    {step.num}
                  </span>
                  <span className={`text-[11px] ${step.highlight ? "text-primary" : "text-on-surface-variant"}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
