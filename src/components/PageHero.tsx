import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  children,
  breadcrumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ivory-deep pb-20 pt-36 md:pb-24 md:pt-44">
      <div
        className="grid-texture absolute inset-0 opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-16 h-80 w-80 rounded-full border border-brass/20"
        aria-hidden="true"
      />
      <div className="container-x relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="heading-serif max-w-4xl text-[clamp(2.7rem,6vw,5.25rem)] text-charcoal">
          {title}
        </h1>
        <div className="mt-7 max-w-2xl text-lg text-charcoal-soft md:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}
