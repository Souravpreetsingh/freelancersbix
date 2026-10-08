import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

interface Deliverable {
  icon: IconName;
  label: string;
}

const deliverables: Deliverable[] = [
  { icon: "draft", label: "Word / DOCX" },
  { icon: "picture_as_pdf", label: "Formatted PDF" },
  { icon: "markdown", label: "Markdown (.md)" },
  { icon: "web", label: "Web Wireframe Copy" },
  { icon: "slideshow", label: "Slide Outlines" },
  { icon: "book", label: "Annual Reports" },
  { icon: "newspaper", label: "White Papers" },
  { icon: "smart_outlet", label: "Executive Summaries" },
  { icon: "library_books", label: "Policy Manuals" },
  { icon: "rule", label: "Standard SOPs" },
  { icon: "track_changes", label: "Track Changes Files" },
  { icon: "contact_page", label: "Executive Bios" },
  { icon: "edit_note", label: "Editorial Feedback Notes" },
  { icon: "format_quote", label: "Citation Index Packs" },
  { icon: "share", label: "Thought Leadership Copy" },
];

export function ContentDeliverables() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-space-xs text-center items-center mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-sage font-semibold">
            Turnkey Outputs
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
            Professional deliverables, ready for their intended use.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {deliverables.map((item) => (
            <div
              key={item.label}
              className="p-space-sm rounded-lg bg-surface-container border border-primary/40 flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors"
            >
              <MaterialIcon name={item.icon} className="text-signal-green text-[18px]" />
              <span className="font-body-sm text-body-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
