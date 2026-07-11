import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceSummary({ service }: { service: Service }) {
  return (
    <article className="group border-t border-charcoal/15 py-8 md:grid md:grid-cols-[5rem_1fr_auto] md:gap-7 md:py-10">
      <span className="font-serif text-xl italic text-brass">
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
        className="mt-5 inline-flex items-center gap-2 self-center text-sm font-medium text-charcoal underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass-deep md:mt-0"
      >
        Explore service <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
