import clsx from "clsx";
import { Check } from "lucide-react";
import InspectionFrame from "./InspectionFrame";
import PlanFitGuide from "./PlanFitGuide";

const frameLabels: Record<string, string> = {
  "Foundation Website": "FOUNDATION",
  "Growth Website": "GROWTH",
  "Custom Web Platform": "CUSTOM",
  "Essential Care": "ESSENTIAL CARE",
  "Business Care": "BUSINESS CARE",
  "Priority Care": "PRIORITY CARE",
  "Advertising Oversight": "AD OVERSIGHT",
  "Local Ads Management": "LOCAL ADS",
  "Growth Ads Management": "GROWTH ADS",
  "Lead Generation Launch": "LAUNCH",
};

export default function PricingPackage({
  name,
  price,
  label,
  features,
  note,
  description,
  bestFor,
  fit,
  pairing,
  frameLabel,
}: {
  name: string;
  price: string;
  label?: string;
  features: string[];
  note?: string;
  description?: string;
  bestFor: string;
  fit: string;
  pairing?: string;
  frameLabel?: string;
}) {
  return (
    <InspectionFrame
      as="article"
      label={frameLabel || frameLabels[name]}
      focusable
      className={clsx(
        "relative flex h-full flex-col border border-charcoal/15 bg-ivory p-7 md:p-9",
        label && "border-foothill shadow-soft",
      )}
    >
      {label && (
        <p className="mb-6 w-fit bg-foothill px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ivory">
          {label}
        </p>
      )}
      <h3 className="heading-serif text-3xl text-charcoal">{name}</h3>
      <p className="mt-3 font-serif text-2xl italic text-foothill-deep">
        {price}
      </p>
      {description && (
        <p className="mt-5 text-sm text-charcoal-soft">{description}</p>
      )}
      {pairing && (
        <p className="mt-5 border-l-2 border-brass pl-3 text-xs font-semibold uppercase tracking-[0.12em] text-brass-deep">
          {pairing}
        </p>
      )}
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
      <PlanFitGuide planName={name} bestFor={bestFor}>
        {fit}
      </PlanFitGuide>
    </InspectionFrame>
  );
}
