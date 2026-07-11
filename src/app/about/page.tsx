import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FounderPortrait from "@/components/FounderPortrait";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "About Jacob Pierce",
  "Meet Jacob Pierce, a North Georgia developer helping local businesses with websites, practical systems, and long-term technical support.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pierce Web Solutions"
        title={
          <>
            Local perspective.
            <br />
            <span className="italic text-foothill">Direct partnership.</span>
          </>
        }
      >
        Pierce Web Solutions helps North Georgia businesses use technology with
        more clarity, confidence, and practical purpose.
      </PageHero>
      <section className="section-pad bg-ivory">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FounderPortrait eager />
          <div>
            <SectionHeading
              eyebrow="Meet Jacob Pierce"
              title="A developer focused on the business behind the technology"
              copy={
                <>
                  <p>
                    I’m Jacob Pierce, a North Georgia developer who helps local
                    businesses replace outdated websites and disconnected
                    systems with technology built around how they actually
                    operate.
                  </p>
                  <p className="mt-5">
                    I started Pierce Web Solutions to offer the kind of
                    technical partnership small businesses deserve: direct
                    communication, careful work, honest recommendations, and
                    support that continues after launch. Clients work with me
                    from the initial conversation through design, development,
                    launch, and ongoing improvement.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>
      <section className="section-pad bg-ivory-deep">
        <div className="container-x">
          <SectionHeading
            eyebrow="How I Work"
            title="Business-first problem solving"
            copy="The best technical solution is not always the largest or most complicated one. It is the one that addresses the real constraint, fits the team, and can be supported over time."
          />
          <div className="mt-14 grid border-y border-charcoal/15 md:grid-cols-3">
            <article className="py-8 md:pr-9">
              <h3 className="font-serif text-2xl">Listen closely</h3>
              <p className="mt-3 text-charcoal-soft">
                Understand the customers, workflow, priorities, and constraints
                before prescribing technology.
              </p>
            </article>
            <article className="border-y border-charcoal/15 py-8 md:border-x md:border-y-0 md:px-9">
              <h3 className="font-serif text-2xl">Build deliberately</h3>
              <p className="mt-3 text-charcoal-soft">
                Create a clear, maintainable solution shaped around the business
                rather than a rigid template.
              </p>
            </article>
            <article className="py-8 md:pl-9">
              <h3 className="font-serif text-2xl">Stay involved</h3>
              <p className="mt-3 text-charcoal-soft">
                Offer a direct path for support, review, and thoughtful
                improvements as the business changes.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
