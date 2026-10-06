import Link from "next/link";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

interface ServiceBreadcrumbProps {
  current: string;
  variant?: "slash" | "chevron";
  wrapperClassName?: string;
  size?: "sm" | "md";
  currentClassName?: string;
}

export function ServiceBreadcrumb({
  current,
  variant = "slash",
  wrapperClassName,
  size = "sm",
  currentClassName,
}: ServiceBreadcrumbProps) {
  const sizeClass = size === "sm" ? "font-label-sm text-label-sm" : "font-label-md text-label-md";
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className={wrapperClassName ?? "w-full px-margin-mobile md:px-margin py-space-sm"}>
        <nav
          aria-label="Breadcrumb"
          className={`flex items-center gap-space-xs ${sizeClass} text-on-surface-variant overflow-x-auto`}
        >
          <Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
            <span>Home</span>
          </Link>
          {variant === "chevron" ? (
            <MaterialIcon name="chevron_right" className="text-outline-variant" />
          ) : (
            <span className="text-outline-variant">/</span>
          )}
          <Link className="hover:text-primary transition-colors" href="/services">
            Services
          </Link>
          {variant === "chevron" ? (
            <MaterialIcon name="chevron_right" className="text-outline-variant" />
          ) : (
            <span className="text-outline-variant">/</span>
          )}
          <span className={currentClassName ?? "text-signal-blue font-medium"}>{current}</span>
        </nav>
      </div>
    </section>
  );
}
