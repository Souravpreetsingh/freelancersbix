import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function CareerBrand() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-4xl bg-surface">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-space-xl relative">
        <MaterialIcon name="all_inclusive" className="text-deep-sage text-5xl opacity-40" />
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase text-primary tracking-tight max-w-4xl">
          Expertise grows when people are given the opportunity to use it.
        </h2>
        <div className="w-16 h-0.5 bg-signal-green" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          At FreelancersBix, we aim to create an environment where professional knowledge, curiosity and responsible
          execution can come together without organizational noise.
        </p>
      </div>
    </section>
  );
}
