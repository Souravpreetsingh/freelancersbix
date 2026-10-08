import Link from "next/link";
import { listCareerApplications } from "@/lib/db/career-store";
import { CAREER_DISCIPLINE_LABELS } from "@/data/careers";
import { QUOTE_STATUSES } from "@/lib/validation/quote";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminCareersPage() {
  const applications = await listCareerApplications();

  return (
    <section>
      <header className="mb-space-lg">
        <span className="font-label-md text-label-md uppercase tracking-widest text-signal-green font-semibold">
          Talent
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          Career applications
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {applications.length} application{applications.length === 1 ? "" : "s"} from the /careers general-application
          form.
        </p>
      </header>

      {applications.length === 0 ? (
        <div className="rounded-xl bg-surface-container p-space-2xl text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            No career applications yet. Submissions through the /careers form will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl bg-surface-container">
          <div className="divide-y divide-[#E2D8C4]">
            {applications.map((application) => (
              <div key={application.id} className="flex flex-wrap items-center gap-space-md px-space-lg py-space-md">
                <Link href={`/admin/careers/${application.id}`} className="min-w-0 flex-1">
                  <h2 className="truncate font-body-md text-body-md font-semibold text-primary hover:text-on-primary-container">
                    {application.name}
                  </h2>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
                    {CAREER_DISCIPLINE_LABELS[application.discipline]} · {application.email} ·{" "}
                    {formatDateTime(application.createdAt)}
                  </p>
                </Link>
                <StatusBadge status={application.status} />
                <StatusSelect
                  id={application.id}
                  status={application.status}
                  options={QUOTE_STATUSES}
                  endpoint="/api/admin/careers"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
