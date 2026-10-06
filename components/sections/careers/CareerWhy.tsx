import { type IconName } from "@/lib/design/icons";
import { MaterialIcon } from "@/components/icons/MaterialIcon";

const REASONS: { icon: IconName; number: string; title: string; text: string }[] = [
  {
    icon: "trending_up",
    number: "01",
    title: "Professional Growth",
    text: "Build experience across research, business, accounting, data and digital work through demanding real-world assignments.",
  },
  {
    icon: "domain_add",
    number: "02",
    title: "Diverse Projects",
    text: "Work across different types of professional requirements and industries, from startups to complex cross-border accounts.",
  },
  {
    icon: "groups_2",
    number: "03",
    title: "Collaborative Culture",
    text: "Work with people who value knowledge, communication and structured execution over arbitrary micromanagement.",
  },
  {
    icon: "psychology",
    number: "04",
    title: "Learning Mindset",
    text: "Continue developing your skills through practical professional work, high peer standards, and structured feedback loops.",
  },
  {
    icon: "verified_user",
    number: "05",
    title: "Responsibility",
    text: "Take direct ownership of your work products and make tangible, traceable contributions to meaningful client outcomes.",
  },
  {
    icon: "tune",
    number: "06",
    title: "Flexible Opportunities",
    text: "Explore engagements and working tracks that align naturally with your verified skills, experience, and lifestyle goals.",
  },
];

export function CareerWhy() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-3xl bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-signal-blue font-bold">
            Why FreelancersBix
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary">
            Bring your expertise to work that matters.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {REASONS.map((reason) => (
            <div
              key={reason.number}
              className="bg-surface-container p-space-xl rounded-xl flex flex-col gap-space-md hover:bg-surface-container-high transition-colors"
            >
              <div className="flex items-center justify-between text-twilight-blue">
                <MaterialIcon name={reason.icon} className="text-3xl" />
                <span className="font-label-sm text-label-sm font-bold tracking-widest text-on-surface-variant">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary uppercase font-bold">{reason.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
