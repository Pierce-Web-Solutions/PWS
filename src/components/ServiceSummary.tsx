import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  LayoutTemplate,
  Megaphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";
import InspectionFrame from "./InspectionFrame";

const frameLabels: Record<string, string> = {
  "web-design": "02 / WEB",
  "website-care": "03 / CARE",
  automation: "01 / SYSTEMS",
  advertising: "04 / GROWTH",
};

const serviceIcons: Record<string, LucideIcon> = {
  "web-design": LayoutTemplate,
  "website-care": HeartPulse,
  automation: Workflow,
  advertising: Megaphone,
};

export default function ServiceSummary({
  service,
  description,
}: {
  service: Service;
  description?: string;
}) {
  const Icon = serviceIcons[service.slug];
  return (
    <InspectionFrame
      as="article"
      label={frameLabels[service.slug]}
      className="group border-t border-charcoal/15 px-3 py-8 md:grid md:grid-cols-[5rem_1fr_auto] md:gap-7 md:px-5 md:py-10"
    >
      <div className="flex items-center gap-4 md:grid md:gap-3">
        <span className="flex h-11 w-11 items-center justify-center border border-brass/50 bg-ivory-deep text-foothill transition-colors duration-200 group-hover:border-brass">
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="hidden font-serif text-lg italic text-foothill md:inline">
          {service.number}
        </span>
      </div>
      <div>
        <h3 className="heading-serif mt-2 text-2xl text-charcoal md:mt-0 md:text-3xl">
          {service.shortTitle}
        </h3>
        <p className="mt-3 max-w-2xl text-charcoal-soft">
          {description ?? service.description}
        </p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        data-analytics-event="Service Explored"
        data-analytics-location="homepage_services"
        data-analytics-target={service.slug}
        className="mt-5 inline-flex items-center gap-2 self-center text-sm font-medium text-charcoal underline decoration-foothill/60 underline-offset-4 transition-colors hover:text-foothill-deep md:mt-0"
      >
        Explore service <ArrowUpRight size={17} />
      </Link>
    </InspectionFrame>
  );
}
