import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ServiceSummary from "./ServiceSummary";
import CTASection from "./CTASection";
import GrowthLifecycle from "./GrowthLifecycle";
import DirectSupportSection from "./DirectSupportSection";
import SimplifiedProcess from "./SimplifiedProcess";
import { services } from "@/lib/site";

const homepageServiceCopy: Record<string, string> = {
  "web-design":
    "A custom website that explains your value clearly and turns visits into qualified inquiries.",
  "website-care":
    "Ongoing monitoring, updates, and direct support that keep your website reliable after launch.",
  automation:
    "Connected workflows and custom tools that reduce repetitive work and improve follow-through.",
  advertising:
    "Focused campaigns, landing pages, and tracking designed around qualified leads and bookings.",
};

export default function HomeSections() {
  return (
    <>
      <section id="services" className="section-pad bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Practical technology for a growing business"
            copy="Choose the right starting point, then connect services as your needs evolve."
          />
          <p className="mt-6 max-w-3xl border-l-2 border-brass pl-5 text-charcoal-soft">
            Built for service companies, professional offices, contractors,
            retailers, nonprofits, and other growing organizations across North
            Georgia.
          </p>
          <div className="mt-12">
            {services.map((service) => (
              <ServiceSummary
                key={service.slug}
                service={service}
                description={homepageServiceCopy[service.slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <GrowthLifecycle />
      <DirectSupportSection />
      <SimplifiedProcess />

      <section
        id="north-georgia"
        className="relative min-h-[26rem] scroll-mt-24 overflow-hidden bg-charcoal md:min-h-[32rem]"
      >
        <Image
          src="/images/hero3.png"
          alt="A downtown streetscape in warm evening light"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-5 border border-ivory/25 md:inset-8"
          aria-hidden="true"
        />
        <div className="container-x relative flex min-h-[26rem] items-end py-14 md:min-h-[32rem] md:items-center">
          <div className="max-w-2xl text-ivory">
            <h2 className="heading-serif text-[clamp(2.2rem,5vw,4.5rem)]">
              Close Enough to Know the Business.
              <br />
              <span className="italic">
                Capable Enough to Build What It Needs.
              </span>
            </h2>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
