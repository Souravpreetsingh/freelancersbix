import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import type { IconName } from "@/lib/design/icons";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  index: string;
  icon: IconName;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  /** Highlights the Foreign Accounting card as the primary core practice. */
  highlight?: boolean;
  /** Full-width bento card layout (used for the 7th category on the home grid). */
  wide?: boolean;
}

export function ServiceCard({
  index,
  icon,
  title,
  description,
  href,
  linkLabel = "Explore Service",
  highlight = false,
  wide = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "fbx-card p-space-xl rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 border border-outline-variant/20 flex flex-col justify-between group",
        highlight &&
          "bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest border-2 border-signal-green/70 shadow-[0_12px_40px_rgba(22,122,82,0.15)] relative overflow-hidden",
        wide && "md:col-span-2 lg:col-span-3",
      )}
    >
      {highlight ? (
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-signal-green/15 rounded-full blur-2xl pointer-events-none" />
      ) : null}
      {wide ? (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-mono text-on-surface-variant/60 font-semibold text-label-sm">{index}</span>
              <MaterialIcon
                name={icon}
                className="text-on-surface-variant group-hover:text-primary transition-colors text-[22px]"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{description}</p>
          </div>
          <div className="flex-shrink-0 pt-space-md md:pt-0">
            <Link
              href={href}
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-signal-green transition-colors"
            >
              <span>{linkLabel}</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className={cn("flex flex-col gap-space-md", highlight && "relative z-10")}>
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "font-mono text-on-surface-variant/60 font-semibold text-label-sm",
                  highlight && "text-signal-green font-bold text-label-sm",
                )}
              >
                {index}
              </span>
              {highlight ? (
                <span className="px-space-xs py-0.5 rounded-full bg-signal-green/20 text-signal-green font-label-sm text-[11px] font-bold tracking-wider uppercase border border-signal-green/30">
                  Primary Core Practice
                </span>
              ) : (
                <MaterialIcon
                  name={icon}
                  className="text-on-surface-variant group-hover:text-primary transition-colors text-[24px]"
                />
              )}
            </div>
            <h3 className={cn("font-headline-sm text-headline-sm text-primary font-bold", highlight && "text-primary")}>
              {title}
            </h3>
            <p
              className={cn(
                "font-body-sm text-body-sm text-on-surface-variant leading-relaxed",
                highlight && "text-on-surface",
              )}
            >
              {description}
            </p>
          </div>
          <div
            className={cn(
              "pt-space-xl mt-space-lg border-t border-outline-variant/15",
              highlight && "border-signal-green/20 relative z-10",
            )}
          >
            <Link
              href={href}
              className={cn(
                "inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-signal-green transition-colors",
                highlight && "text-signal-green font-bold hover:text-primary",
              )}
            >
              <span>{linkLabel}</span>
              <MaterialIcon name="arrow_forward" className="fbx-arrow text-[16px]" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
