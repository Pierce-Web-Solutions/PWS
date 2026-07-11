import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";
import InspectionFrame from "./InspectionFrame";

const frameLabels: Record<string, string> = {
  "web-design": "01 / WEB",
  "website-care": "02 / CARE",
  automation: "03 / SYSTEMS",
  advertising: "04 / GROWTH",
};

export default function ServiceSummary({ service }: { service: Service }) {
  return (
    <InspectionFrame
      as="article"
      label={frameLabels[service.slug]}
      className="group border-t border-charcoal/15 px-3 py-8 md:grid md:grid-cols-[5rem_1fr_auto] md:gap-7 md:px-5 md:py-10"
    >
      <span className="font-serif text-xl italic text-foothill">
        {service.number}
      </span>
      <div>
        <h3 className="heading-serif mt-2 text-2xl text-charcoal md:mt-0 md:text-3xl">
          {service.shortTitle}
        </h3>
        <p className="mt-3 max-w-2xl text-charcoal-soft">
          {service.description}
        </p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 self-center text-sm font-medium text-charcoal underline decoration-foothill/60 underline-offset-4 transition-colors hover:text-foothill-deep md:mt-0"
      >
        Explore service <ArrowUpRight size={17} />
      </Link>
    </InspectionFrame>
  );
}
