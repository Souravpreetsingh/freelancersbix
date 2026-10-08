import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

const FLOW: { label: string; outcome: string }[] = [
  { label: "1. Actionable Insights", outcome: "→ Clarity" },
  { label: "2. Structural Analysis", outcome: "→ Rigor" },
  { label: "3. Business Documents", outcome: "→ Readiness" },
  { label: "4. Decision Support", outcome: "→ Execution" },
];

export function BusinessMethodology() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="bg-surface-container-low rounded-xl p-space-xl md:p-space-2xl shadow-xl">
        <ServiceSectionHeading
          eyebrow="Analytical Synthesis Hub"
          title="Integrated Research Methodology"
          lead="Research scope and methodology vary according to project objectives and available information."
          containerClassName="flex flex-col gap-space-xs mb-space-xl"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex items-center justify-center p-space-md">
            <svg className="w-full max-w-md aspect-square" fill="none" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="180" stroke="rgba(13,95,64,0.06)" strokeDasharray="4 4" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="120" stroke="rgba(13,95,64,0.12)" strokeWidth="1.5" />
              <circle cx="200" cy="200" fill="#08452F" r="60" stroke="#167A52" strokeWidth="2" />
              <text
                fill="#ffffff"
                fontFamily="Inter"
                fontSize="12"
                fontWeight="700"
                textAnchor="middle"
                x="200"
                y="196"
              >
                BUSINESS
              </text>
              <text
                fill="#167A52"
                fontFamily="Inter"
                fontSize="11"
                fontWeight="600"
                textAnchor="middle"
                x="200"
                y="212"
              >
                RESEARCH
              </text>
              <circle cx="200" cy="80" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="200" y="84">
                Market
              </text>
              <circle cx="304" cy="140" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="304" y="144">
                Industry
              </text>
              <circle cx="304" cy="260" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="304" y="264">
                Rivals
              </text>
              <circle cx="200" cy="320" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="200" y="324">
                Customers
              </text>
              <circle cx="96" cy="260" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="96" y="264">
                Financial
              </text>
              <circle cx="96" cy="140" fill="#0D5F40" r="24" />
              <text fill="#FBF8F1" fontFamily="Inter" fontSize="10" textAnchor="middle" x="96" y="144">
                Strategy
              </text>
              <line stroke="#0D5F40" strokeWidth="1.5" x1="200" x2="200" y1="140" y2="104" />
              <line stroke="#0D5F40" strokeWidth="1.5" x1="242" x2="280" y1="170" y2="148" />
              <line stroke="#0D5F40" strokeWidth="1.5" x1="242" x2="280" y1="230" y2="252" />
              <line stroke="#0D5F40" strokeWidth="1.5" x1="200" x2="200" y1="260" y2="296" />
              <line stroke="#0D5F40" strokeWidth="1.5" x1="158" x2="120" y1="230" y2="252" />
              <line stroke="#0D5F40" strokeWidth="1.5" x1="158" x2="120" y1="170" y2="148" />
            </svg>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-signal-green font-semibold">
              From Core to Impact
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Input data gathered across six foundational domains is consolidated within our central analytical engine
              and channeled into practical, client-specific strategic outcomes.
            </p>
            <div className="space-y-space-sm pt-space-xs">
              {FLOW.map((item) => (
                <div
                  key={item.label}
                  className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between"
                >
                  <span className="font-body-sm text-body-sm text-primary font-medium">{item.label}</span>
                  <span className="font-label-sm text-label-sm text-signal-green">{item.outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
