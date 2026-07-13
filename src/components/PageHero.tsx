import Breadcrumbs from "./Breadcrumbs";
import TopographicContours from "./TopographicContours";

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
      <TopographicContours className="absolute -right-64 top-2 h-full w-[38rem] opacity-[0.11] sm:-right-40 md:w-[48rem]" />
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
