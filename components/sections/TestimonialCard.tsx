import { MaterialIcon } from "@/components/icons/MaterialIcon";

interface TestimonialCardProps {
  quote: string;
  role: string;
  context: string;
}

export function TestimonialCard({ quote, role, context }: TestimonialCardProps) {
  return (
    <div className="p-space-xl rounded-xl bg-surface-container border border-outline-variant/20 flex flex-col justify-between">
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center gap-space-xs text-signal-blue">
          {Array.from({ length: 5 }, (_, index) => (
            <MaterialIcon key={index} name="star" className="text-[18px]" />
          ))}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface leading-relaxed italic">&quot;{quote}&quot;</p>
      </div>
      <div className="pt-space-lg mt-space-lg border-t border-outline-variant/20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg text-primary font-bold">{role}</span>
          <span className="font-body-sm text-[12px] text-on-surface-variant">{context}</span>
        </div>
        <MaterialIcon name="format_quote" className="text-on-surface-variant/40 text-[24px]" />
      </div>
    </div>
  );
}
