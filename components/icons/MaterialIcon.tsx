import { iconPaths, type IconName } from "@/lib/design/icons";

interface MaterialIconProps {
  name: IconName;
  className?: string;
}

/**
 * Local Material Symbols Outlined icon. Sized in `em` so the export's
 * `text-*` size utilities behave exactly like the original icon font.
 */
export function MaterialIcon({ name, className }: MaterialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 -960 960 960"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
