import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AboutIntro() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Who We Are"
          title="Support that combines research, expertise and execution."
          className="flex flex-col gap-space-xs mb-space-2xl"
          titleClassName="max-w-3xl"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-lg text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>
              We work with students, professionals, startups and businesses that need dependable expertise to research
              ideas, organize information, solve business challenges and turn requirements into professional
              deliverables.
            </p>
            <div className="p-space-lg rounded-xl bg-surface-container border-l-4 border-signal-green text-primary">
              <p className="font-headline-sm text-headline-sm font-semibold tracking-tight text-primary">
                “Expertise should make complex work simpler.”
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Every deliverable is crafted to provide immediate operational clarity and structural rigor.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-space-sm hover:border-signal-green/40 transition-colors">
              <MaterialIcon name="manage_search" className="text-signal-green text-3xl" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Pillar 01
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Research</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Evidence-based inquiry grounded in primary data &amp; verified sources.
              </p>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-space-sm hover:border-signal-green/40 transition-colors">
              <MaterialIcon name="analytics" className="text-secondary text-3xl" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Pillar 02
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Analysis</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Converting dense datasets and variables into actionable patterns.
              </p>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-space-sm hover:border-signal-green/40 transition-colors">
              <MaterialIcon name="insights" className="text-secondary text-3xl" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Pillar 03
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Strategy</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Structuring actionable frameworks aligned with commercial goals.
              </p>
            </div>
            <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col gap-space-sm hover:border-signal-green/40 transition-colors">
              <MaterialIcon name="task_alt" className="text-signal-green text-3xl" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Pillar 04
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Execution</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Delivering polished, audited, ready-to-deploy final outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MISSION_STEPS: { number: string; title: string; description: string; numberClass: string }[] = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the need down to the exact scope and foundational objectives.",
    numberClass: "text-signal-green",
  },
  {
    number: "02",
    title: "Research",
    description: "Research the problem thoroughly across empirical and domain sources.",
    numberClass: "text-secondary",
  },
  {
    number: "03",
    title: "Create",
    description: "Create the solution with clear structure, precision, and elegance.",
    numberClass: "text-secondary",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Deliver with confidence, clarity, and readiness for stakeholders.",
    numberClass: "text-primary",
  },
];

export function AboutMission() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="Our Mission"
          title="To make professional expertise more accessible, structured and reliable."
          description="Our mission is to help clients move from questions and requirements to clear, useful and professionally prepared outcomes through research, analysis, creativity and disciplined execution."
          className="flex flex-col gap-space-xs max-w-3xl"
          descriptionClassName="font-body-lg text-body-lg text-on-surface-variant mt-space-sm"
          eyebrowBold={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-lg border-t border-outline-variant/20">
          {MISSION_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between h-56"
            >
              <span className={`font-headline-md text-headline-md font-mono font-bold ${step.numberClass}`}>
                {step.number}
              </span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutVision() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <SectionHeading
            eyebrow="Our Vision"
            title="To become a trusted global partner for professional support and business solutions."
            description="We envision FreelancersBix as a reliable professional-services platform connecting expertise with the people and organizations that need it — across research, business, accounting, data and digital operations."
            className="flex flex-col gap-space-md"
            descriptionClassName="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
            eyebrowBold={false}
          />
          <div className="grid grid-cols-2 gap-space-md pt-space-sm">
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/30">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">Global Reach</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Borderless collaborative execution tailored to regional compliance.
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/30">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">Zero Overhead</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Direct access to specialists without institutional bureaucracy.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="w-full aspect-[4/3] rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-space-lg flex flex-col justify-between relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-40 text-deep-sage" fill="none" viewBox="0 0 500 350">
              <path
                d="M 50 175 Q 150 50 250 175 T 450 175"
                stroke="currentColor"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <path d="M 80 220 Q 200 320 320 180 T 420 120" stroke="currentColor" strokeWidth="1" />
              <circle cx="90" cy="140" fill="#167A52" r="5" />
              <circle cx="210" cy="110" fill="#B9DCC9" r="4" />
              <circle cx="340" cy="190" fill="#0D5F40" r="6" />
              <circle cx="410" cy="130" fill="#167A52" r="5" />
              <circle cx="160" cy="240" fill="#0D5F40" r="4" />
              <circle cx="280" cy="270" fill="#B9DCC9" r="3" />
              <line stroke="#167A52" strokeOpacity="0.5" strokeWidth="1" x1="90" x2="210" y1="140" y2="110" />
              <line stroke="#0D5F40" strokeOpacity="0.3" strokeWidth="1" x1="210" x2="340" y1="110" y2="190" />
              <line stroke="#167A52" strokeOpacity="0.5" strokeWidth="1" x1="340" x2="410" y1="190" y2="130" />
              <line stroke="#B9DCC9" strokeOpacity="0.3" strokeWidth="1" x1="160" x2="280" y1="240" y2="270" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-signal-green font-mono">GLOBAL DISCIPLINE NETWORK</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                24/7 Cross-Timezone
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-space-sm pt-space-xl">
              <div className="p-space-sm rounded bg-surface-container/80 border border-outline-variant/30 text-center">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Academic</div>
                <div className="font-headline-sm text-headline-sm text-primary font-bold">Standard</div>
              </div>
              <div className="p-space-sm rounded bg-surface-container/80 border border-outline-variant/30 text-center">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Financial</div>
                <div className="font-headline-sm text-headline-sm text-secondary font-bold">GAAP/IFRS</div>
              </div>
              <div className="p-space-sm rounded bg-surface-container/80 border border-outline-variant/30 text-center">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Operations</div>
                <div className="font-headline-sm text-headline-sm text-primary font-bold">Agile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
