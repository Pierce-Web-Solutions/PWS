import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={clsx("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className={clsx("eyebrow mb-5", light && "text-brass-light")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "heading-serif text-[clamp(2rem,4vw,3.35rem)]",
          light ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {copy && (
        <div
          className={clsx(
            "mt-5 text-lg",
            light ? "text-ivory/75" : "text-charcoal-soft",
          )}
        >
          {copy}
        </div>
      )}
    </div>
  );
}
