import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function IntroSection() {
  return (
    <section className="w-full bg-surface py-space-3xl px-margin-mobile md:px-margin border-b border-outline-variant/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <SectionHeading
          eyebrow="Who We Are"
          title="Professional support built around expertise, research and results."
          className="flex flex-col gap-space-xs"
          titleClassName="max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center pt-space-md">
          <div className="lg:col-span-5 p-space-xl rounded-xl bg-surface-container-high border border-outline-variant/20 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-space-md">
              <span className="font-headline-md text-headline-md text-primary leading-tight font-semibold">
                Expertise that moves your work forward.
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We operate as a high-precision intellectual backbone, removing friction across research rigor,
                compliance, analytics and administrative delivery.
              </p>
            </div>
            <div className="pt-space-xl mt-space-lg border-t border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 bg-whiteout rounded-full" />
                <span className="w-3 h-3 bg-signal-blue rounded-full" />
                <span className="w-3 h-3 bg-twilight-blue rounded-full" />
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">EST. 2026</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-space-lg pl-0 lg:pl-space-lg">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              FreelancersBix helps students, professionals, startups and businesses with reliable, structured and
              high-quality professional services. From academic research and business analysis to accounting, data and
              digital support, we bring specialized expertise together under one platform.
            </p>
            <div className="pt-space-xs">
              <Link
                href="/about"
                className="group inline-flex items-center gap-space-xs font-label-lg text-label-lg text-whiteout font-semibold hover:text-signal-blue transition-colors"
              >
                <span>Discover FreelancersBix</span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-[18px] transform group-hover:translate-x-1.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
