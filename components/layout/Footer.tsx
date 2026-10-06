"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { footerColumns } from "@/data/navigation";
import { SITE } from "@/lib/design/site";
import { cn } from "@/lib/utils/cn";

const inactiveFooterLink = "font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors";
const activeFooterLink = "font-body-sm text-body-sm text-primary font-bold transition-colors";

const socialLink =
  "p-space-xs rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors";

const socialLinks = [
  { name: "public", label: "Global Network" },
  { name: "mail", label: "Corporate Email" },
  { name: "share", label: "Corporate Location" },
] as const;

function FooterColumnNav({ links }: { links: (typeof footerColumns)[number]["links"] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-space-xs">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(active ? activeFooterLink : inactiveFooterLink)}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant">
      <div className="w-full px-margin-mobile md:px-margin py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-2xl mb-space-3xl">
          <div className="lg:col-span-2 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="FreelancersBix Logo"
                className="h-8 w-auto object-contain"
                src="/images/freelancersbix-logo.png"
              />
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
                {SITE.name}
              </span>
            </div>
            <p className="font-label-lg text-label-lg text-primary tracking-wide uppercase">{SITE.tagline}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">{SITE.description}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-space-xs">
                {column.heading}
              </span>
              <FooterColumnNav links={column.links} />
            </div>
          ))}
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
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
