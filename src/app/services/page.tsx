import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceSummary from "@/components/ServiceSummary";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { pageMetadata, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Services",
  "Web design, website care, automation, custom systems, and advertising for North Georgia small businesses.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Thoughtful technology.
            <br />
            <span className="italic text-brass">Practical business value.</span>
          </>
        }
      >
        From a clearer website to a better internal workflow, every engagement
        begins with understanding the business problem and choosing an
        appropriate solution.
      </PageHero>
      <section className="section-pad bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="Four Ways We Can Help"
            title="Focused services, connected by one business-first approach"
          />
          <div className="mt-14">
            {services.map((service) => (
              <ServiceSummary key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-ivory-deep">
        <div className="container-x grid gap-8 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">The Problem</p>
            <p className="text-charcoal-soft">
              We identify the point of friction, missed opportunity, or unclear
              customer experience.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">The Scope</p>
            <p className="text-charcoal-soft">
              You receive a clear recommendation, deliverables, timeline, and
              price before work begins.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">The Partnership</p>
            <p className="text-charcoal-soft">
              You work directly with Jacob and have a clear path for support
              after launch.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
