/** Status pill shared by every admin list/detail surface. */

const STYLES: Record<string, string> = {
  NEW: "bg-secondary-container text-on-secondary-container",
  IN_REVIEW: "bg-tertiary-container text-on-tertiary-container",
  CONTACTED: "bg-primary-container text-on-primary-container",
  COMPLETED: "bg-deep-sage text-whiteout",
  CANCELLED: "bg-error-container text-on-error-container",
  RESPONDED: "bg-primary-container text-on-primary-container",
  ARCHIVED: "bg-surface-container-highest text-on-surface-variant",
};

const DEFAULT_STYLE = "bg-surface-container-highest text-on-surface-variant";

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-space-sm py-1 font-label-sm text-label-sm font-semibold uppercase tracking-wide ${
        STYLES[status] ?? DEFAULT_STYLE
      }`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}
