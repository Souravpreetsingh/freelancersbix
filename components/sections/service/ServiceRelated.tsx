import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";
import type { IconName } from "@/lib/design/icons";

export interface ServiceRelatedItem {
  path: string;
  icon: IconName;
  title: string;
  description: string;
}

interface ServiceRelatedProps {
  eyebrow: string;
  title: string;
  lead?: string;
  items: ServiceRelatedItem[];
  gridClassName?: string;
  sectionClassName?: string;
  cardClassName?: string;
  ctaLabel?: string;
}

export function ServiceRelated({
  eyebrow,
  title,
  lead,
  items,
  gridClassName,
  sectionClassName,
  cardClassName,
  ctaLabel,
}: ServiceRelatedProps) {
  return (
    <section className={sectionClassName ?? "w-full px-margin-mobile md:px-margin py-space-3xl bg-surface"}>
      <ServiceSectionHeading eyebrow={eyebrow} title={title} lead={lead} />
      <div className={gridClassName ?? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter"}>
        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={
              cardClassName ??
              "bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between hover:bg-surface-container transition-all group"
            }
          >
            <div>
              <MaterialIcon name={item.icon} className="text-signal-green text-[24px] mb-space-xs" />
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-signal-green transition-colors">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.description}</p>
            </div>
            {ctaLabel ? (
              <div className="pt-space-md flex items-center text-label-sm text-signal-green font-semibold gap-1 group-hover:translate-x-1 transition-transform">
                <span>{ctaLabel}</span>
                <MaterialIcon name="arrow_forward" className="text-[16px]" />
              </div>
            ) : (
              <MaterialIcon
                name="arrow_forward"
                className="text-on-surface-variant group-hover:text-primary mt-space-md self-end transition-colors"
              />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
