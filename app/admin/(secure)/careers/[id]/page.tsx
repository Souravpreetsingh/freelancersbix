import Link from "next/link";
import { getCareerApplication } from "@/lib/db/career-store";
import { CAREER_DISCIPLINE_LABELS, CAREER_EXPERIENCE_LABELS } from "@/data/careers";
import { QUOTE_STATUSES } from "@/lib/validation/quote";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/design/format";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-space-xs sm:grid-cols-[180px_1fr]">
      <dt className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-medium">
        {label}
      </dt>
      <dd className="font-body-md text-body-md text-on-surface break-words">{children}</dd>
    </div>
  );
}

export default async function AdminCareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const application = await getCareerApplication(id);

  if (!application) {
    return (
      <div className="rounded-xl bg-surface-container p-space-2xl">
        <p className="font-body-md text-body-md text-on-surface-variant">Career application not found.</p>
        <Link
          href="/admin/careers"
          className="mt-space-md inline-block font-label-md text-label-md text-signal-green font-semibold"
        >
          ← Back to career applications
        </Link>
      </div>
    );
  }

  return (
    <section>
      <Link href="/admin/careers" className="font-label-md text-label-md text-signal-green font-semibold">
        ← Back to career applications
      </Link>
      <header className="mb-space-lg mt-space-sm flex flex-wrap items-center gap-space-md">
        <StatusBadge status={application.status} />
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
          {application.name}
        </h1>
        <StatusSelect
          id={application.id}
          status={application.status}
          options={QUOTE_STATUSES}
          endpoint="/api/admin/careers"
        />
      </header>

      <div className="space-y-gutter">
        <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Application details</h2>
          <dl className="mt-space-md space-y-space-md border-t border-[#E2D8C4] pt-space-md">
            <Field label="Name">{application.name}</Field>
            <Field label="Email">
              <a href={`mailto:${application.email}`} className="text-signal-green hover:text-on-primary-container">
                {application.email}
              </a>
            </Field>
            <Field label="Phone / WhatsApp">{application.phone ?? "—"}</Field>
            <Field label="Area of expertise">{CAREER_DISCIPLINE_LABELS[application.discipline]}</Field>
            <Field label="Experience level">
              {application.experience
                ? (CAREER_EXPERIENCE_LABELS[application.experience as keyof typeof CAREER_EXPERIENCE_LABELS] ??
                  application.experience)
                : "—"}
            </Field>
            <Field label="Preferred role">{application.role ?? "—"}</Field>
            <Field label="Portfolio / LinkedIn">
              {application.portfolioUrl ? (
                <a
                  href={application.portfolioUrl}
                  className="text-signal-green hover:text-on-primary-container"
                  rel="noreferrer"
                  target="_blank"
                >
                  {application.portfolioUrl}
                </a>
              ) : (
                "—"
              )}
            </Field>
            <Field label="Resume / CV">{application.resumeFilename ?? "—"}</Field>
            <Field label="Received">{formatDateTime(application.createdAt)}</Field>
            <Field label="Updated">{formatDateTime(application.updatedAt)}</Field>
          </dl>
        </div>

        {application.summary ? (
          <div className="rounded-xl bg-surface-container p-space-lg md:p-space-xl">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Summary</h2>
            <p className="mt-space-md font-body-md text-body-md text-on-surface whitespace-pre-wrap">
              {application.summary}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
