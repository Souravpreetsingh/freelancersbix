import { MaterialIcon } from "@/components/icons/MaterialIcon";

const items = [
  { title: "Purpose & Audience", body: "Tone matches target context" },
  { title: "Structure & Flow", body: "Seamless narrative pacing" },
  { title: "Heading Hierarchy", body: "Clear scannability" },
  { title: "Clarity & Economy", body: "Zero redundant phrases" },
  { title: "Consistency", body: "Uniform stylistic voice" },
  { title: "Terminology", body: "Domain-accurate vocab" },
  { title: "Formatting", body: "Clean margins and lists" },
  { title: "Citations", body: "Verified references" },
  { title: "Visual Readability", body: "Comfortable reading pace" },
  { title: "Final Presentation", body: "Board-ready delivery" },
];

export function ContentChecklist() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest border-y border-whiteout/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-semibold">
            Editorial Governance
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-whiteout uppercase tracking-tight">
            Before content reaches the final page, we look at more than grammar.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Grammar is table stakes. Our multi-stage review checks ten essential dimensions of document effectiveness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-space-md rounded-xl bg-surface-container border border-whiteout/5 flex items-start gap-space-sm"
            >
              <MaterialIcon name="check_circle" className="text-signal-blue text-[20px] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-label-md text-label-md text-whiteout font-semibold">{item.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
