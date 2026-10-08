import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function AcademicIntegrity() {
  return (
    <section className="w-full bg-surface-container-highest py-space-2xl px-margin-mobile md:px-margin border-y border-outline-variant/40">
      <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-xl p-space-2xl shadow-xl flex flex-col md:flex-row items-start gap-space-xl">
        <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container">
          <MaterialIcon name="verified_user" className="text-[28px]" />
        </div>
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-green mb-space-xs block font-bold">
            Institutional Responsibility
          </span>
          <h2 className="font-headline-md text-headline-md text-primary font-bold mb-space-xs">
            Built around responsible academic support.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
            FreelancersBix provides research, educational, editing, and analytical support. Clients remain responsible
            for following the academic integrity policies and submission requirements of their respective universities
            or institutions. We do not guarantee grades, academic admissions, journal publication, examination outcomes,
            or official institutional approvals.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Our service acts as an advisory and editorial catalyst designed to help researchers organize, articulate,
            and refine their own independent scholarship.
          </p>
        </div>
      </div>
    </section>
  );
}
