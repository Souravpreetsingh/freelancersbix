import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const CARDS: { name: IconName; title: string; desc: string }[] = [
  {
    name: "view_column",
    title: "Organization",
    desc: "Structure columns, define standardized field formats, remove trailing spaces, and categorize records.",
  },
  {
    name: "format_paint",
    title: "Formatting",
    desc: "Create clear, professional layouts with subtle row banding, bold headers, and contextual conditional styling.",
  },
  {
    name: "cleaning_services",
    title: "Data Hygiene",
    desc: "Deduplicate records, resolve cross-reference errors (#N/A, #REF!), and standardize naming patterns.",
  },
  {
    name: "summarize",
    title: "Reporting",
    desc: "Build lightweight summary dashboards, pivot tables, and intuitive visual sheets for senior decision-makers.",
  },
];

const TASKS = [
  "Data Entry & Migration",
  "Spreadsheet Cleanup",
  "Sorting & Advanced Filtering",
  "SUMIFS, VLOOKUP & XLOOKUP",
  "Pivot Table Creation",
  "Executive Summary Cards",
  "Date & Currency Standardization",
  "Template Architecture",
];

export function DigitalSpreadsheets() {
  return (
    <section className="w-full bg-surface py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            SPREADSHEET EXCELLENCE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Turn spreadsheets into organized working tools.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Messy, bloated sheets invite calculation errors and cognitive fatigue. We transform unstructured tables into
            clean, readable operational models.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {CARDS.map((card) => (
            <div key={card.name} className="p-space-lg rounded-xl bg-surface-container-low">
              <MaterialIcon name={card.name} className="text-signal-green text-2xl mb-space-sm" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{card.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-space-lg rounded-xl bg-surface-container">
          <h4 className="font-label-lg text-label-lg text-primary uppercase font-bold tracking-wider mb-space-sm font-mono">
            Typical Supported Spreadsheet Tasks
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm text-body-sm">
            {TASKS.map((task) => (
              <div key={task} className="flex items-center gap-2 text-on-surface-variant">
                <MaterialIcon name="check_circle" className="text-signal-green text-sm" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
