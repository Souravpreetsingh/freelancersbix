import Link from "next/link";
import { HeroBackdrop } from "@/components/brand/Backdrop";
import { CornerAccent } from "@/components/brand/Geometry";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export default function NotFound() {
  return (
    <section className="relative w-full overflow-hidden bg-haze px-margin-mobile md:px-margin py-space-4xl border-b border-outline-variant/60">
      <HeroBackdrop pattern="dots" block="right" diagonals="top-left" />
      <CornerAccent corner="top-right" tone="on-light" size="lg" className="-top-8 -right-10" />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center gap-space-lg">
        <span className="font-mono text-label-lg text-signal-green font-bold tracking-widest">404</span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
          This page could not be found.
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          The page may have moved or the address may be incorrect. Use the navigation above or one of the quick paths
          below to continue.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
          <Link
            href="/"
            className="fbx-btn inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-lg text-label-lg font-semibold text-whiteout hover:bg-[#08452F] transition-colors"
          >
            <MaterialIcon name="home" className="text-[18px]" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="fbx-btn inline-flex items-center gap-2 rounded-lg bg-transparent border border-primary/40 px-6 py-3 font-label-lg text-label-lg font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="fbx-btn inline-flex items-center gap-2 rounded-lg bg-transparent border border-primary/40 px-6 py-3 font-label-lg text-label-lg font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
