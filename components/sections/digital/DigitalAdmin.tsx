import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";

const CARDS: { name: IconName; title: string; desc: string }[] = [
  {
    name: "article",
    title: "Document Preparation",
    desc: "Formatting formal letters, board briefing packs, standard memo structures, and presentation slide cleanups.",
  },
  {
    name: "folder_special",
    title: "Research Organization",
    desc: "Synthesizing reference documents, compiling bibliographic tables, and sorting competitive survey notes.",
  },
  {
    name: "grid_on",
    title: "Spreadsheet Management",
    desc: "Ongoing data entry, monthly log updates, sheet architecture cleanup, and cross-tab verification.",
  },
  {
    name: "drive_file_move",
    title: "File Organization",
    desc: "Reorganizing legacy server structures, resolving duplicate archives, and implementing standard file-naming syntax.",
  },
  {
    name: "sync_alt",
    title: "Information Processing",
    desc: "Extracting unstructured values from PDFs, forms, or paper notes into standardized digital formats.",
  },
  {
    name: "repeat",
    title: "Recurring Digital Tasks",
    desc: "Periodic catalog checkups, verification runs, format exports, and scheduled administrative sweeps.",
  },
];

export function DigitalAdmin() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="mb-space-2xl text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green font-bold">
            OPERATIONAL ASSURANCE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary mt-1">
            Support for the work between the big decisions.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {CARDS.map((card) => (
            <div key={card.name} className="p-space-lg rounded-xl bg-surface-container-low">
              <MaterialIcon name={card.name} className="text-signal-green text-2xl mb-space-sm" />
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{card.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
