import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function BusinessMarketIntelligence() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-twilight-blue font-semibold">
            Market Intelligence
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary">
            See the market from multiple perspectives.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Evaluating a commercial landscape requires triangulation. Looking exclusively at industry growth rates often
            masks shifting customer sentiment or aggressive challenger positioning.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We combine macroeconomic data with micro-level buyer insights and competitor tracking to furnish a rounded,
            360-degree assessment of where value is consolidating and where vulnerability lies.
          </p>
          <div className="space-y-space-sm pt-space-xs">
            <div className="flex items-center gap-3">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[20px]" />
              <span className="font-body-sm text-body-sm text-on-surface">Multi-source industry cross-validation</span>
            </div>
            <div className="flex items-center gap-3">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[20px]" />
              <span className="font-body-sm text-body-sm text-on-surface">
                Granular addressable market (TAM/SAM) segmentation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MaterialIcon name="check_circle" className="text-signal-blue text-[20px]" />
              <span className="font-body-sm text-body-sm text-on-surface">
                Proactive risk and vulnerability mapping
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-xl shadow-xl relative">
          <div className="flex items-center justify-between pb-space-sm mb-space-md">
            <span className="font-headline-sm text-headline-sm text-primary">Multi-Angle Market Analysis</span>
            <span className="font-label-sm text-label-sm text-twilight-blue uppercase tracking-wider font-mono">
              Illustrative visualization
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Market Size Trajectory</span>
                <span className="text-signal-blue font-mono text-label-sm font-bold">+14.2% CAGR</span>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-body-sm text-on-surface">
                  <span>Enterprise Segment</span>
                  <span className="font-mono text-twilight-blue">Expanding</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-signal-blue h-full w-[72%]" />
                </div>
                <div className="flex justify-between text-body-sm text-on-surface">
                  <span>Mid-Market Segment</span>
                  <span className="font-mono text-twilight-blue">Stable</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[48%]" />
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Risk &amp; Vulnerability Radar
                </span>
                <span className="text-secondary font-mono text-label-sm">Controlled</span>
              </div>
              <div className="flex items-center justify-around py-2">
                <div className="flex flex-col items-center">
                  <span className="font-headline-sm text-primary">Low</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Regulatory</span>
                </div>
                <div className="w-px h-8 bg-surface-container-highest" />
                <div className="flex flex-col items-center">
                  <span className="font-headline-sm text-signal-blue">Med</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Substitution</span>
                </div>
                <div className="w-px h-8 bg-surface-container-highest" />
                <div className="flex flex-col items-center">
                  <span className="font-headline-sm text-primary">Low</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Supplier</span>
                </div>
              </div>
              <span className="text-[11px] text-on-surface-variant text-center">
                Calculated across 12 sector indicators
              </span>
            </div>
            <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-between sm:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Target Customer Segment Penetration
                </span>
                <span className="text-twilight-blue font-mono text-label-sm">Distribution Breakdown</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 text-center">
                <div className="p-2 bg-surface-container-high rounded">
                  <span className="font-headline-sm text-headline-sm text-primary block">42%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Early Tech Adopters</span>
                </div>
                <div className="p-2 bg-surface-container-high rounded">
                  <span className="font-headline-sm text-headline-sm text-primary block">38%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Legacy Modernizers</span>
                </div>
                <div className="p-2 bg-surface-container-high rounded">
                  <span className="font-headline-sm text-headline-sm text-primary block">20%</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Efficiency Seekers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
