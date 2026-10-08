import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/data/services";

export function ServicesMatrix() {
  return (
    <section
      id="services-matrix"
      className="w-full bg-surface py-space-4xl px-margin-mobile md:px-margin border-b border-outline-variant/40"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Expert support across research, business and digital work."
          description="From complex research to everyday business operations, our services are designed to help you work smarter, make informed decisions and deliver better results."
        />
        <Reveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                index={String(index + 1).padStart(2, "0")}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                linkLabel={service.slug === "foreign-accounting" ? "Explore Dedicated Practice" : "Explore Service"}
                wide={service.slug === "digital-support"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
