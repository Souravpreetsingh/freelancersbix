import type { ReactNode } from "react";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { ServiceSectionHeading } from "@/components/sections/service/ServiceSectionHeading";

export interface ServiceFAQItem {
  q: string;
  a: ReactNode;
}

interface ServiceFAQProps {
  eyebrow: string;
  title: string;
  lead?: string;
  items: ServiceFAQItem[];
  sectionClassName?: string;
  containerClassName?: string;
  headingClassName?: string;
}

export function ServiceFAQ({
  eyebrow,
  title,
  lead,
  items,
  sectionClassName,
  containerClassName,
  headingClassName,
}: ServiceFAQProps) {
  return (
    <section
      className={sectionClassName ?? "w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest"}
    >
      <ServiceSectionHeading eyebrow={eyebrow} title={title} lead={lead} containerClassName={headingClassName} />
      <div className={containerClassName ?? "max-w-4xl flex flex-col gap-space-sm"}>
        {items.map((faq) => (
          <details
            key={faq.q}
            className="bg-surface-container-low rounded-xl overflow-hidden transition-all group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="w-full p-space-lg text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
              <span className="font-headline-sm text-headline-sm text-primary font-medium">{faq.q}</span>
              <MaterialIcon
                name="expand_more"
                className="text-signal-blue text-[20px] transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="px-space-lg pb-space-lg pt-0">
              <p className="font-body-sm text-body-sm text-on-surface-variant">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
