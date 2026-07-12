import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  MapPinned,
  MessageSquareText,
  Shapes,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceSummary from "./ServiceSummary";
import CTASection from "./CTASection";
import TopographicContours from "./TopographicContours";
import { services } from "@/lib/site";
import CustomFoundationMap from "./CustomFoundationMap";

const industries = [
  "Contractors and home-service companies",
  "Medical and professional offices",
  "Local retailers",
  "Churches and nonprofits",
  "Family-owned businesses",
  "Growing service companies",
];
const reasons = [
  {
    title: "Local understanding",
    copy: "Recommendations grounded in the needs and pace of North Georgia businesses.",
    icon: MapPinned,
  },
  {
    title: "Direct communication",
    copy: "You work directly with Jacob from the first conversation through ongoing support.",
    icon: MessageSquareText,
  },
  {
    title: "A solution that fits",
    copy: "The business problem comes first; the technology is selected and shaped around it.",
    icon: Shapes,
  },
  {
    title: "Long-term support",
    copy: "Launch is a milestone, not the end of the working relationship.",
    icon: Handshake,
  },
];
const process = [
  {
    title: "Sit Down and Talk",
    copy: "Start with the goals, frustrations, and opportunities you see in the business.",
  },
  {
    title: "Understand the Business",
    copy: "Review the customer journey, current tools, workflow, and constraints.",
  },
  {
    title: "Design the Right Solution",
    copy: "Define a practical scope before selecting technology.",
  },
  {
    title: "Build and Launch",
    copy: "Develop, test, refine, and introduce the solution carefully.",
  },
  {
    title: "Continue Improving",
    copy: "Review performance and make useful changes as the business evolves.",
  },
];

export default function HomeSections() {
  return (
    <>
      <section id="services" className="section-pad bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="Technology that earns its place in your business"
            copy="Four focused service areas, brought together by one practical goal: helping your business communicate clearly and operate more effectively."
          />
          <div className="mt-14">
            {services.map((service) => (
              <ServiceSummary key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-charcoal text-ivory">
        <div className="container-x grid items-start gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
          <div className="xl:sticky xl:top-28">
            <SectionHeading
              eyebrow="/ Built Beyond the Template"
              title="Your Business Shouldn't Have to Fit Inside a Template"
              light
              copy={
                <div className="grid gap-4">
                  <p>
                    Many website platforms begin with a predefined theme,
                    feature set, and way of doing things. The business is then
                    expected to fit inside those boundaries.
                  </p>
                  <p>
                    Pierce Web Solutions takes the opposite approach. We begin
                    with your customers, services, workflows, and long-term
                    goals, then build a solution around them.
                  </p>
                  <p>
                    Your website can begin as a focused marketing platform today
                    and expand into something more capable tomorrow, with
                    landing pages, booking integrations, automated follow-up,
                    dashboards, portals, internal tools, and other features
                    added as the business evolves.
                  </p>
                </div>
              }
            />
            <p className="mt-7 border-l-2 border-brass pl-5 font-serif text-xl italic text-ivory">
              You are not simply purchasing pages. You are investing in a
              flexible foundation for the business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/web-design" className="btn-brass">
                Explore Custom Web Design
              </Link>
              <Link href="/pricing#build" className="btn-outline-light">
                View Website Pricing
              </Link>
            </div>
          </div>
          <CustomFoundationMap />
        </div>
      </section>

      <section className="section-pad bg-ivory-deep">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Technology Should Feel Personal"
              title="Direct support from someone who knows your business"
              copy="You should not have to submit a ticket to a national agency and wait for someone unfamiliar with your goals to catch up. Pierce Web Solutions is built around direct communication, practical recommendations, and a long-term relationship with the person doing the technical work."
            />
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-medium text-charcoal underline decoration-foothill underline-offset-4"
            >
              How the partnership works <ArrowRight size={17} />
            </Link>
          </div>
          <div className="relative hidden min-h-[360px] overflow-hidden border border-foothill/30 bg-ivory shadow-soft lg:block">
            <Image
              src="/images/window-wireframe.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-8 border border-charcoal/15 md:inset-12">
              <div className="absolute inset-x-8 top-1/2 border-t border-foothill/60" />
              <p className="absolute bottom-8 left-8 max-w-xs font-serif text-2xl italic text-charcoal">
                Business strategy before technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-help"
        className="section-pad relative overflow-hidden bg-ivory"
      >
        <TopographicContours className="absolute -bottom-20 -right-28 w-[46rem] opacity-[0.09]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who We Help"
            title="Built for the Businesses That Keep North Georgia Moving"
            copy="The best fit is a locally rooted organization that values clear communication, dependable work, and technology designed around real operations."
          />
          <ul className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {industries.map((industry, index) => (
              <li key={industry} className="flex gap-5 py-4 text-charcoal-soft">
                <span className="font-serif italic text-foothill">
                  0{index + 1}
                </span>
                <span>{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Pierce Web Solutions"
            title="A Technology Partner, Not Just Another Vendor"
            light
            copy="Careful technical work matters. So do context, honesty, responsiveness, and understanding what a decision means for the business behind the website."
          />
          <div className="mt-14 grid border-y border-ivory/15 md:grid-cols-2">
            {reasons.map(({ title, copy, icon: Icon }, index) => (
              <article
                key={title}
                className={`py-8 md:p-9 ${index % 2 === 0 ? "md:border-r md:border-ivory/15" : ""} ${index < 2 ? "border-b border-ivory/15" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-brass/50 text-foothill-light">
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-2xl text-ivory">{title}</h3>
                </div>
                <p className="mt-3 text-ivory/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="A Simple Process"
            title="Clear steps. Thoughtful decisions. No mystery."
          />
          <ol className="mt-14 grid gap-0 border-y border-charcoal/15 md:grid-cols-5">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="border-b border-charcoal/15 py-6 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
              >
                <span className="font-serif text-xl italic text-foothill">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
