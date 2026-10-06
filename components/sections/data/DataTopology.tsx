import { MaterialIcon } from "@/components/icons/MaterialIcon";

const satellites = [
  { label: "Dataset Ingest", className: "top-4 left-1/4" },
  { label: "Methodology", className: "top-4 right-1/4" },
  { label: "Statistical Models", className: "bottom-4 left-1/4" },
  { label: "Visual Summary", className: "bottom-4 right-1/4" },
];

export function DataTopology() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto p-space-2xl rounded-2xl bg-surface-container-low border border-whiteout/10 text-center relative overflow-hidden">
        <div className="flex items-center justify-between mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Concentric Research Topology
          </span>
          <span className="font-label-sm text-label-sm text-outline">Illustrative research framework</span>
        </div>
        <div className="relative py-space-2xl flex items-center justify-center">
          <span className="absolute w-72 h-72 rounded-full border border-dashed border-whiteout/10" />
          <span className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-whiteout/10" />
          <div className="relative w-44 h-44 rounded-full bg-signal-blue/20 border border-signal-blue/50 backdrop-blur flex flex-col items-center justify-center p-4 z-20 shadow-[0_0_40px_rgba(43,127,255,0.35)]">
            <MaterialIcon name="help_center" className="text-[28px] text-signal-blue mb-1" />
            <span className="font-headline-sm text-headline-sm text-whiteout uppercase font-bold text-center">
              Research Question
            </span>
          </div>
          {satellites.map((satellite) => (
            <span
              key={satellite.label}
              className={`absolute px-3 py-1.5 rounded-lg bg-surface-container border border-whiteout/15 font-label-md text-label-md text-whiteout z-30 ${satellite.className}`}
            >
              {satellite.label}
            </span>
          ))}
        </div>
        <div className="mt-space-xl pt-space-lg border-t border-whiteout/10 flex flex-col items-center gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-twilight-blue">
            Decisive Realization
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal-blue text-whiteout font-label-lg text-label-lg font-bold">
            <MaterialIcon name="flag" className="text-[20px]" />
            Final Decision / Scholarly Conclusion
          </span>
        </div>
      </div>
    </section>
  );
}
