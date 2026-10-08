import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function AcademicCTA() {
  return (
    <section className="w-full bg-surface-container py-space-4xl px-margin-mobile md:px-margin relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(22, 122, 82, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green mb-space-xs inline-block">
          Initiate Consultation
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary uppercase mb-space-md tracking-tight">
          Have a Research Requirement?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-space-2xl">
          Tell us what you are working on, what you need delivered, and what outcome you are aiming for. Our team will
          review your scope and provide a structured plan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg text-on-primary bg-primary hover:bg-[#08452F] transition-all shadow-md group"
          >
            <span>Get a Quote</span>
            <MaterialIcon
              name="arrow_forward"
              className="ml-space-xs text-[18px] group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center justify-center px-space-2xl py-space-md rounded-lg font-label-lg text-label-lg text-primary bg-surface-container-high hover:bg-surface-variant transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
