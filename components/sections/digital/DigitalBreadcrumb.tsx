import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export function DigitalBreadcrumb() {
  return (
    <section className="w-full bg-surface-container-lowest/80 backdrop-blur-md">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Digital & Administrative Support", path: "/services/digital-support" },
        ]}
      />
      <div className="w-full px-margin-mobile md:px-margin py-space-sm">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant overflow-x-auto"
        >
          <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
            <MaterialIcon name="home" className="text-sm" />
            <span>Home</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <Link className="hover:text-primary transition-colors" href="/services">
            Services
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-medium">Digital & Administrative Support</span>
        </nav>
      </div>
    </section>
  );
}
