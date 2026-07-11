import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingPackage from "@/components/PricingPackage";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Pricing",
  "Straightforward website, website care, automation, and advertising pricing for North Georgia businesses.",
  "/pricing",
);

const websites = [
  {
    name: "Foundation Website",
    price: "Starting at $3,000",
    features: [
      "Discovery and planning session",
      "Custom visual direction",
      "Up to five core pages",
      "Mobile-responsive development",
      "Contact or lead form",
      "Google Analytics and Search Console setup",
      "Local SEO foundation",
      "Basic accessibility and performance review",
      "Two revision rounds",
      "Launch assistance",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Growth Website",
    price: "Starting at $5,500",
    label: "Most Popular",
    features: [
      "Everything in Foundation",
      "Up to ten core pages",
      "Conversion strategy",
      "Service-specific landing pages",
      "Content-management capability",
      "Copy refinement and page-structure assistance",
      "Advanced lead forms",
      "One standard business integration",
      "Conversion-event tracking",
      "Expanded on-page SEO",
      "Three revision rounds",
      "60 days of post-launch support",
    ],
  },
  {
    name: "Custom Web Platform",
    price: "Starting at $9,000",
    features: [
      "Client portals",
      "Internal dashboards",
      "Custom applications",
      "Secure account access",
      "Advanced integrations",
      "Workflow automation",
      "Membership systems",
      "Complex intake or quoting systems",
      "Custom administration tools",
    ],
    note: "Custom platforms begin with a paid discovery and planning process.",
  },
];
const care = [
  {
    name: "Essential Care",
    price: "$149/month",
    features: [
      "Uptime monitoring",
      "Basic security and platform oversight",
      "Form-delivery checks",
      "Up to 30 minutes of minor updates each month",
      "Target initial response within three business days",
    ],
  },
  {
    name: "Business Care",
    price: "$299/month",
    label: "Recommended",
    features: [
      "Everything in Essential",
      "Up to 90 minutes of updates each month",
      "Monthly analytics summary",
      "Conversion-tracking checks",
      "Quarterly performance review",
      "Target initial response within two business days",
    ],
  },
  {
    name: "Priority Care",
    price: "$599/month",
    features: [
      "Everything in Business",
      "Up to three hours of updates or development each month",
      "Monthly website and lead-performance review",
      "Usability and conversion recommendations",
      "Quarterly strategy session",
      "Target initial response within one business day",
    ],
  },
];
const additional = [
  ["Focused Landing Pages", "starting at $1,500"],
  ["Workflow Audit and Roadmap", "starting at $750"],
  ["Automation Implementation", "starting at $2,000"],
  ["Automation Management", "starting at $500/month"],
  ["Advertising Launch", "starting at $1,250"],
  ["Advertising Management", "starting at $750/month"],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Straightforward Pricing.
            <br />
            <span className="italic text-brass">
              Solutions Built Around Your Business.
            </span>
          </>
        }
      >
        Every business is different, but pricing should not be a mystery. These
        packages cover the most common needs of local businesses. After a brief
        consultation, you’ll receive a clear scope, timeline, and fixed project
        price.
      </PageHero>
      <section className="section-pad bg-ivory-deep">
        <div className="container-x">
          <SectionHeading
            eyebrow="Website Projects"
            title="A clear starting point for your next website"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {websites.map((pkg) => (
              <PricingPackage key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="Website Care Plans"
            title="Responsive ongoing support after launch"
            copy="Response targets describe the initial reply during business days. Completion timing depends on the scope and complexity of the request."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {care.map((pkg) => (
              <PricingPackage key={pkg.name} {...pkg} />
            ))}
          </div>
          <div className="mt-10 grid gap-3 border-y border-charcoal/15 py-7 text-sm text-charcoal-soft sm:grid-cols-2">
            <p>Included time does not roll over.</p>
            <p>Major redesigns and new systems require separate scope.</p>
            <p>Third-party subscriptions and ad spend are separate.</p>
            <p>Final pricing is confirmed in a written proposal.</p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-ivory-deep">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Additional Services"
            title="Focused work when you do not need a full website project"
          />
          <dl className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {additional.map(([name, price]) => (
              <div
                key={name}
                className="flex flex-col justify-between gap-2 py-5 sm:flex-row"
              >
                <dt className="font-serif text-xl text-charcoal">{name}</dt>
                <dd className="text-brass-deep">{price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection
        title="Not sure which starting point fits?"
        copy="A brief consultation is enough to clarify the likely scope, priorities, and most practical next step."
      />
      <Footer />
    </>
  );
}
