const SUBNAV_ITEMS: { label: string; href: string; active?: boolean }[] = [
  { label: "Academic & Research", href: "#cat-academic" },
  { label: "Business & Consulting", href: "#cat-consulting" },
  { label: "Foreign Accounting", href: "#cat-accounting", active: true },
  { label: "Startup Support", href: "#cat-startup" },
  { label: "Content & Writing", href: "#cat-writing" },
  { label: "Data & Research", href: "#cat-data" },
  { label: "Digital Support", href: "#cat-digital" },
];

export function ServicesSubnav() {
  return (
    <nav
      aria-label="Service categories"
      className="sticky top-20 z-40 w-full bg-surface-container-lowest/90 backdrop-blur-xl border-y border-outline-variant"
    >
      <div className="w-full px-margin-mobile md:px-margin max-w-7xl mx-auto overflow-x-auto no-scrollbar py-3">
        <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap min-w-max">
          {SUBNAV_ITEMS.map((item) =>
            item.active ? (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-primary bg-signal-green/20 border border-signal-green/40 shadow-sm transition-all flex items-center gap-1.5"
                aria-current="true"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
