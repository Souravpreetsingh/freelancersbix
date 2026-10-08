import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-haze px-5 py-20 text-center">
      <span className="font-mono text-label-lg text-signal-green font-bold tracking-widest">404</span>
      <h1 className="mt-4 font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight">
        This page could not be found.
      </h1>
      <p className="mt-3 max-w-xl font-body-md text-body-md text-on-surface-variant">
        The page may have moved or the address may be incorrect. Use one of the paths below to continue.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-lg text-label-lg font-semibold text-whiteout hover:bg-[#08452F] transition-colors"
        >
          <MaterialIcon name="home" className="text-[18px]" />
          Back to Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-transparent px-6 py-3 font-label-lg text-label-lg font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          Explore Services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-transparent px-6 py-3 font-label-lg text-label-lg font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
