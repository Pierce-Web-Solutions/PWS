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

      <CTASection />
    </>
  );
}
