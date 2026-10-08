import Image from "next/image";
import Link from "next/link";
import { GreenStrip, LinePattern } from "@/components/brand/Backdrop";
import { FooterAccent } from "@/components/brand/Geometry";
import { CurrentYear, FooterColumnNav } from "@/components/layout/FooterClient";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { footerColumns } from "@/data/navigation";
import { SITE } from "@/lib/design/site";

const columnHeading = "font-label-sm text-label-sm uppercase tracking-widest text-[#7EB99E] font-bold mb-space-xs";

const socialLink =
  "p-space-xs rounded-full text-whiteout/70 hover:text-whiteout hover:bg-whiteout/10 transition-colors";

const socialLinks = [
  { name: "public", label: "Global Network" },
  { name: "mail", label: "Corporate Email" },
  { name: "share", label: "Corporate Location" },
] as const;

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-brand-deep text-whiteout">
      <LinePattern pattern="grid" tone="on-dark" className="opacity-50" />
      <GreenStrip orientation="horizontal" tone="on-dark" className="left-0 top-0" />
      <FooterAccent className="-bottom-10 -right-10 h-56 w-56 md:h-80 md:w-80 lg:h-96 lg:w-96" />
      <div className="relative w-full px-margin-mobile md:px-margin py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-2xl mb-space-3xl">
          <div className="lg:col-span-2 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <Image
                alt="FreelancersBix Logo"
                className="h-8 w-auto object-contain"
                height={512}
                sizes="32px"
                src="/images/freelancersbix-logo-light.png"
                width={512}
              />
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-whiteout">
                {SITE.name}
              </span>
            </div>
            <p className="font-label-lg text-label-lg text-[#7EB99E] tracking-wide uppercase">{SITE.tagline}</p>
            <p className="font-body-sm text-body-sm text-whiteout/75 max-w-sm">{SITE.aboutExcerpt}</p>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <a
                href={`mailto:${SITE.email}`}
                className="font-body-sm text-body-sm text-whiteout/75 hover:text-whiteout transition-colors"
              >
                {SITE.email}
              </a>
              <a
                href={`mailto:${SITE.secondaryEmail}`}
                className="font-body-sm text-body-sm text-whiteout/75 hover:text-whiteout transition-colors"
              >
                {SITE.secondaryEmail}
              </a>
              <a
                href={SITE.phoneHref}
                className="font-body-sm text-body-sm text-whiteout/75 hover:text-whiteout transition-colors"
              >
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="font-body-sm text-body-sm text-whiteout/75 hover:text-whiteout transition-colors"
              >
                Contact &amp; enquiries
              </Link>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-sm w-full max-w-sm border-t border-[rgba(220,206,180,0.25)]">
              <p className="font-body-sm text-body-sm text-whiteout/75">
                <span className="text-[#7EB99E] font-semibold">GSTIN</span>: 03ANIPY7753K1ZB
              </p>
              <p className="font-body-sm text-body-sm text-whiteout/75">
                <span className="text-[#7EB99E] font-semibold">UDHYAM REGISTRATION</span>: UDYAM-PB-20-0125720
              </p>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-space-sm">
              <span className={columnHeading}>{column.heading}</span>
              <FooterColumnNav links={column.links} />
            </div>
          ))}
        </div>

        <div className="pt-space-lg border-t border-[rgba(220,206,180,0.25)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-whiteout/60">
            © <CurrentYear /> {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md">
            {socialLinks.map((social) => (
              <Link key={social.name} href="/contact" aria-label={social.label} className={socialLink}>
                <MaterialIcon name={social.name} className="text-[20px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
