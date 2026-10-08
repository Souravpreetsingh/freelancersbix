import { MaterialIcon } from "@/components/icons/MaterialIcon";

const items = [
  { icon: "science", label: "Research-Driven" },
  { icon: "architecture", label: "Structured Approach" },
  { icon: "format_align_left", label: "Professional Presentation" },
  { icon: "forum", label: "Clear Communication" },
  { icon: "lock", label: "Confidentiality-Conscious" },
] as const;

export function AcademicTrust() {
  return (
    <section className="w-full bg-surface-container-low py-space-lg px-margin-mobile md:px-margin shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-space-md">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-space-sm p-space-sm ${
              item.label === "Confidentiality-Conscious" ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <MaterialIcon name={item.icon} className="text-signal-green text-[20px]" />
            <span className="font-label-lg text-label-lg text-primary font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
