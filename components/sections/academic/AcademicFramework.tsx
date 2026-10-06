import { MaterialIcon } from "@/components/icons/MaterialIcon";

const nodes = [
  { num: "NODE 01", label: "Research Question", highlighted: false },
  { num: "NODE 02", label: "Literature / Evidence", highlighted: false },
  { num: "NODE 03", label: "Methodology & Data", highlighted: false },
  { num: "OUTCOME", label: "Findings & Synthesis", highlighted: true },
] as const;

export function AcademicFramework() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto bg-surface-container-low rounded-xl p-space-2xl shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue mb-space-xs block">
              Architectural Integrity
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              A structured framework for complex research.
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Frameworks are systematically adapted to the requirements, domain taxonomy, and methodology of each project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-space-sm items-center">
          {nodes.map((node, index) => (
            <div key={node.num} className="contents">
              {index > 0 ? (
                <div className="hidden md:flex justify-center text-on-surface-variant">
                  <MaterialIcon name="east" />
                </div>
              ) : null}
              <div
                className={`p-space-md rounded-lg text-center shadow-sm ${
                  node.highlighted ? "bg-surface-container-high" : "bg-surface-container"
                }`}
              >
                <span
                  className={`font-label-sm text-label-sm block mb-1 ${
                    node.highlighted ? "text-secondary" : "text-signal-blue"
                  }`}
                >
                  {node.num}
                </span>
                <span className="font-label-md text-label-md text-whiteout font-medium">{node.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
