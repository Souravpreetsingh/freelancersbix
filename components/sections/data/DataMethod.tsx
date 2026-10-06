import { MaterialIcon } from "@/components/icons/MaterialIcon";

const nodes = [
  { letter: "Q", label: "Question", circle: "bg-signal-blue text-whiteout" },
  { letter: "V", label: "Variables", circle: "bg-surface-container-high text-whiteout" },
  { letter: "D", label: "Dataset", circle: "bg-surface-container-high text-whiteout" },
  { letter: "M", label: "Method", circle: "bg-surface-container-high text-whiteout" },
  { letter: "A", label: "Analysis", circle: "bg-surface-container-high text-whiteout" },
  { letter: "F", label: "Finding", circle: "bg-secondary text-ink" },
  { letter: "I", label: "Interpret", circle: "bg-surface-container-high text-whiteout" },
  { letter: "C", label: "Conclusion", circle: "bg-whiteout text-ink" },
];

export function DataMethod() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Methodological Integration
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-whiteout">
            Analysis should answer a question.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Every engagement runs through a single integrated chain — from the question you are asking to the conclusion
            you can defend.
          </p>
        </div>
        <div className="p-space-lg rounded-xl bg-surface-container border border-whiteout/10 overflow-x-auto">
          <div className="flex items-center min-w-[720px] justify-between gap-2">
            {nodes.map((node, index) => (
              <div key={node.letter} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1.5 px-1">
                  <span
                    className={`w-8 h-8 rounded-full ${node.circle} flex items-center justify-center font-headline-sm text-headline-sm font-bold`}
                  >
                    {node.letter}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{node.label}</span>
                </div>
                {index < nodes.length - 1 ? (
                  <MaterialIcon name="arrow_right_alt" className="text-outline text-[18px] mt-[-18px]" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-[11px] text-outline text-center mt-3">
          * Specific methodological execution depends on your dataset structure, research objective, and statistical
          assumptions — never the other way around.
        </p>
      </div>
    </section>
  );
}
