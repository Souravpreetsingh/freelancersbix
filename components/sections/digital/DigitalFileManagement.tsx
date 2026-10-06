import { MaterialIcon } from "@/components/icons/MaterialIcon";

const TREE = [
  {
    label: "├── 01_Reports/",
    files: ["├── FY26_Q1_Operations_Final_v2.pdf", "└── Executive_Brief_2026-03.docx"],
  },
  {
    label: "├── 02_Research/",
    files: ["├── Academic_Literature_Synthesis/", "└── Industry_Competitive_Matrix.xlsx"],
  },
  {
    label: "├── 03_Operations/",
    files: ["├── Standard_Operating_Procedures_v1.4.pdf", "└── Weekly_Task_Tracking_Matrix.xlsx"],
  },
  {
    label: "└── 04_Presentations/",
    files: ["└── 2026_Stakeholder_Board_Deck_Clean.pptx"],
  },
];

export function DigitalFileManagement() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
              INFORMATION TAXONOMY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary leading-tight">
              Make information easier to find and maintain.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Disorganized cloud storage drains team hours. FreelancersBix designs logical folder hierarchies,
              establishes standard version control syntax (v1.0, Final_Audit_Approved), and archives historical
              artifacts systematically.
            </p>
            <div className="p-space-md rounded-xl bg-surface-container flex flex-wrap items-center justify-between gap-2 font-mono text-label-sm text-secondary">
              <span>Naming</span>
              <span>+</span>
              <span>Organization</span>
              <span>+</span>
              <span>Version Control</span>
              <span>+</span>
              <span>Accessibility</span>
              <span className="text-primary font-bold">= Structured Files</span>
            </div>
            <p className="text-xs text-on-surface-variant italic">
              *Clear structural categorization applied to Google Workspace, Microsoft OneDrive, and local directory
              setups without claiming formal external software certification.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="p-space-lg rounded-xl bg-surface-container-low font-mono text-label-sm text-on-surface">
              <div className="flex items-center gap-2 pb-space-sm mb-space-sm text-on-surface-variant">
                <MaterialIcon name="inventory_2" className="text-signal-blue text-sm" />
                <span>Root_Business_Archive/</span>
              </div>
              <div className="pl-4 space-y-2 text-on-surface-variant">
                {TREE.map((node) => (
                  <div key={node.label}>
                    <span className="text-primary font-bold">{node.label}</span>
                    <div className="pl-6 text-[12px] space-y-1 mt-1 text-on-surface-variant/80">
                      {node.files.map((file) => (
                        <div key={file}>{file}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
