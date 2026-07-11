import clsx from "clsx";
import { Check } from "lucide-react";

export default function PricingPackage({
  name,
  price,
  label,
  features,
  note,
}: {
  name: string;
  price: string;
  label?: string;
  features: string[];
  note?: string;
}) {
  return (
    <article
      className={clsx(
        "relative flex h-full flex-col border border-charcoal/15 bg-ivory p-7 md:p-9",
        label && "border-brass shadow-soft",
      )}
    >
      {label && (
        <p className="mb-6 w-fit bg-brass px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ivory">
          {label}
        </p>
      )}
      <h3 className="heading-serif text-3xl text-charcoal">{name}</h3>
      <p className="mt-3 font-serif text-2xl italic text-brass-deep">{price}</p>
      <ul className="mt-7 grid gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-charcoal-soft">
            <Check size={17} className="mt-1 shrink-0 text-foothill" />
            {feature}
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-7 border-t border-charcoal/15 pt-5 text-sm italic text-taupe">
          {note}
        </p>
      )}
    </article>
  );
}
