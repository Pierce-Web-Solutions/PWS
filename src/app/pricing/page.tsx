import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PricingPackage from "@/components/PricingPackage";
import PricingLifecycle from "@/components/PricingLifecycle";
import PlanFitGuide from "@/components/PlanFitGuide";
import InspectionFrame from "@/components/InspectionFrame";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Website, Advertising & Automation Pricing",
  "Website projects, lead generation launch support, website care, advertising management, and automation pricing for North Georgia businesses.",
  "/pricing",
);

const websites = [
  {
    name: "Foundation Website",
    price: "Starting at $3,000",
    bestFor:
      "Best for new or smaller businesses that need a professional, credible online presence.",
    fit: "A strong fit for a local business that needs a clear website, essential service information, and a reliable way for customers to get in touch, without complex integrations or a large content structure.",
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
      "30 days of managed launch hosting and post-launch support",
    ],
  },
  {
    name: "Growth Website",
    price: "Starting at $5,500",
    label: "Most Popular",
    pairing: "Best paired with Lead Generation Launch",
    bestFor:
      "Best for established businesses that want the website to generate and measure more opportunities.",
    fit: "Designed for businesses with several services, stronger lead-generation goals, and a need for landing pages, conversion tracking, content management, advanced forms, or a connection to another business system.",
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
      "60 days of managed launch hosting and post-launch support",
    ],
  },
  {
    name: "Custom Web Platform",
    price: "Starting at $9,000",
    bestFor:
      "Best for businesses whose needs extend beyond a traditional marketing website.",
    fit: "Appropriate when the project requires client accounts, portals, dashboards, quoting systems, advanced integrations, workflow automation, or custom administrative tools.",
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
    note: "Custom Platform Discovery & Planning is required and starts at $1,500. Discovery evaluates workflows, users, integrations, data requirements, security considerations, technical feasibility, implementation phases, timeline, and estimated development investment.",
  },
];

const care = [
  {
    name: "Essential Care",
    price: "$149/month",
    bestFor:
      "Best for informational websites that need dependable hosting, monitoring, and regular minor updates.",
    fit: "A practical choice for businesses whose website does not change frequently but still needs reliable technical oversight and timely support.",
    features: [
      "Managed website hosting for a qualifying website",
      "SSL certificate management",
      "Uptime and deployment monitoring",
      "Basic security and platform oversight",
      "Form-delivery checks",
      "Up to 60 minutes of minor updates each month",
      "Target initial response within one business day",
    ],
  },
  {
    name: "Business Care",
    price: "$299/month",
    label: "Recommended",
    bestFor:
      "Best for active businesses that depend on their website for regular inquiries, updates, and measurable customer activity.",
    fit: "Designed for companies that need more monthly support time, faster assistance, analytics visibility, and ongoing performance oversight.",
    features: [
      "Everything in Essential Care",
      "Up to 120 minutes of updates each month",
      "Monthly analytics summary",
      "Conversion-tracking checks",
      "Routine performance review",
      "Target initial response within four business hours",
    ],
  },
  {
    name: "Priority Care",
    price: "$599/month",
    bestFor:
      "Best for businesses that treat their website as an important sales or operational system and need faster access to technical support, regular development assistance, closer performance review, and ongoing recommendations.",
    fit: "Priority Care provides the largest monthly allowance, the fastest response target, and an ongoing strategy cadence.",
    features: [
      "Everything in Business Care",
      "Up to 240 minutes of updates or development each month",
      "Monthly website and lead-performance review",
      "Usability and conversion recommendations",
      "Quarterly strategy session",
      "Priority support queue",
      "Target initial response within two business hours",
    ],
  },
];

const advertising = [
  {
    name: "Advertising Oversight",
    price: "$299/month",
    description:
      "For stable, lower-spend accounts that need professional monitoring and limited monthly optimization.",
    bestFor:
      "Best for stable, lower-spend accounts with working campaigns and tracking.",
    fit: "Appropriate when the account needs professional monthly monitoring and limited adjustments, but not frequent campaign development or weekly optimization.",
    features: [
      "One advertising platform",
      "Up to two active campaigns",
      "Monthly account-health review",
      "Conversion-tracking health check",
      "Budget-pacing review",
      "Search-term review",
      "Basic negative-keyword updates",
      "Limited targeting and configuration adjustments",
      "Concise monthly performance summary",
    ],
  },
  {
    name: "Local Ads Management",
    price: "$449/month",
    label: "Most Popular",
    description:
      "For local businesses actively generating leads through one advertising platform.",
    bestFor:
      "Best for local businesses actively relying on paid advertising to produce leads.",
    fit: "Designed for businesses that need regular search-term reviews, budget and targeting adjustments, ad refinement, conversion monitoring, and monthly performance reporting.",
    features: [
      "One advertising platform",
      "Up to four active campaigns",
      "Weekly account-health checks",
      "Regular search-term and negative-keyword management",
      "Budget, bidding, location, schedule, and targeting adjustments",
      "Ad-copy testing and refinement",
      "Conversion-tracking monitoring",
      "Landing-page recommendations",
      "Monthly performance report",
      "One monthly strategy conversation",
    ],
  },
  {
    name: "Growth Ads Management",
    price: "Starting at $750/month",
    description:
      "For more complex advertising programs involving multiple markets, platforms, locations, or service lines.",
    bestFor:
      "Best for complex programs involving multiple campaigns, locations, services, or platforms.",
    fit: "Intended for businesses with larger advertising programs that require frequent testing, deeper funnel analysis, and more involved strategy and reporting.",
    features: [
      "Multiple advertising platforms",
      "Multiple locations or service lines",
      "Larger advertising budgets",
      "More than four active campaigns",
      "Frequent campaign and creative testing",
      "Deeper call, booking, and funnel analysis",
      "More detailed reporting",
      "Regular strategy and optimization meetings",
    ],
  },
];

const evolve = [
  ["Focused Landing Page", "Starting at $1,500"],
  ["Workflow Audit & Roadmap", "Starting at $750"],
  ["Automation Implementation", "Starting at $2,000"],
  ["Advertising Setup or Remediation", "Typical projects: $500 to $1,250"],
] as const;

const faqs = [
  [
    "How are payments structured?",
    "The payment schedule is defined in the written proposal before work begins. Website projects are generally divided between an initial deposit and one or more milestone or completion payments, depending on scope.",
  ],
  [
    "Are hosting and third-party subscriptions included?",
    "Managed hosting is included with every active Website Care plan for qualifying websites. Foundation and Growth Website projects also include a limited managed launch-hosting period as stated in the proposal. Domains, business email, premium software, advertising spend, third-party subscriptions, unusually high resource usage, and advanced application infrastructure are billed separately unless expressly included.",
  ],
  [
    "Can an existing website be improved instead of rebuilt?",
    "Yes, when the current platform and technical condition support the requested improvements. An initial review helps determine whether focused updates or a rebuild is the more responsible investment.",
  ],
  [
    "Do you work with businesses outside North Georgia?",
    "Yes. Pierce Web Solutions is locally focused and works best with relationship-driven businesses, but selected projects can be completed remotely outside North Georgia.",
  ],
  [
    "What happens after the included post-launch support period?",
    "The website can move into an active Website Care plan with managed hosting, be transferred to a compatible client-owned hosting account, or receive separately scoped improvements as needed. Hosting and transition responsibilities are confirmed in the project proposal and agreement.",
  ],
  [
    "Can advertising be added to any website package?",
    "Yes. Lead Generation Launch can be added to a new website project when the selected package provides an appropriate landing experience. Any additional landing pages, integrations, or tracking requirements will be identified in the proposal.",
  ],
  [
    "What happens after the first 90 days of advertising management?",
    "You will receive a summary of the initial campaign period and a recommendation based on the account's activity and complexity. You may continue with Advertising Oversight, Local Ads Management, or a custom Growth Ads Management scope. There is no obligation to continue unless stated in the signed proposal.",
  ],
  [
    "Is advertising spend included in the management fee?",
    "No. The management fee covers the professional work required to monitor and optimize the account. Advertising spend is paid directly by the client to Google, Meta, or the applicable advertising platform.",
  ],
  [
    "What is the difference between Advertising Oversight and Local Ads Management?",
    "Advertising Oversight is intended for an established, relatively stable account that needs monthly monitoring and limited adjustments. Local Ads Management includes more frequent reviews, active optimization, ad testing, search-term management, reporting, and strategy.",
  ],
  [
    "Do I need a Website Care plan to use Advertising Management?",
    "No. Advertising Management can be purchased separately. However, advertising performance often depends on the website, landing pages, forms, booking process, and conversion tracking. Website changes outside the advertising-management scope may require a care plan or separate project.",
  ],
  [
    "Is conversion-tracking setup included?",
    "Routine monitoring of existing tracking is included with management. Initial setup, broken tracking, account-security remediation, major analytics corrections, booking integrations, and conversion-system rebuilds are handled as a separate one-time project.",
  ],
  [
    "Are landing pages included?",
    "Landing-page recommendations are included with active management. New landing-page design and development are priced separately unless specifically included in the proposal.",
  ],
  [
    "Can you guarantee a certain number of leads or sales?",
    "No responsible advertising provider can guarantee specific results. Pierce Web Solutions focuses on accurate tracking, controlled spending, qualified traffic, continuous optimization, and reporting based on measurable business outcomes.",
  ],
  [
    "Can I cancel advertising management at any time?",
    "The commitment, notice period, and final service date will be stated in the individual proposal and service agreement. Advertising access and accounts remain under the client's ownership.",
  ],
  [
    "Do I have to follow every lifecycle stage?",
    "No. The lifecycle illustrates a common path, not a required bundle. Businesses may begin with a website project, an advertising correction, ongoing management, automation, or another focused need.",
  ],
  [
    "Can I return for additional projects later?",
    "Yes. Many clients begin with one clearly scoped project and return later for landing pages, integrations, automation, new service areas, internal tools, or other improvements as the business evolves.",
  ],
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear starting points.
            <br />
            <span className="italic text-foothill">
              A relationship that can evolve.
            </span>
          </>
        }
      >
        Choose what your business needs now. Each proposal confirms the scope,
        schedule, ownership, and investment before work begins.
      </PageHero>
      <PricingLifecycle />

      <PricingSection
        id="build"
        eyebrow="01 / Build"
        title="Build"
        copy="Start with a clearly scoped project designed around the role technology needs to play in your business."
        tone="deep"
      >
        <CustomFoundationStrip />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {websites.map((pkg) => (
            <PricingPackage key={pkg.name} {...pkg} />
          ))}
        </div>
      </PricingSection>

      <PricingSection
        id="launch"
        eyebrow="02 / Launch"
        title="Launch"
        copy="Add the tracking, campaign setup, and initial management needed to begin generating measurable opportunities when your website goes live."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PricingPackage
            name="Lead Generation Launch"
            price="Starting at $1,950"
            label="Add-On"
            frameLabel="LAUNCH"
            description="Launch your new website with the advertising, tracking, and initial management needed to begin generating measurable opportunities."
            bestFor="Best for businesses that want to begin generating paid traffic when the new website launches."
            fit="Combines initial campaign setup, conversion tracking, and the first 90 days of management so advertising decisions can be based on qualified inquiries rather than clicks alone."
            features={[
              "One advertising platform",
              "Account setup and security review",
              "Campaign strategy and initial build",
              "Keyword and negative-keyword research",
              "Initial ad copy",
              "Conversion-tracking configuration",
              "Landing-page alignment",
              "Budget and location configuration",
              "First 90 days of Local Ads Management",
              "Monthly performance summaries",
            ]}
          />
          <aside className="border-y border-charcoal/15 py-7">
            <p className="eyebrow">Example starting points</p>
            <dl className="mt-5 divide-y divide-charcoal/15">
              <PriceExample
                name="Foundation Website + Lead Generation Launch"
                price="Starting at $4,950"
              />
              <PriceExample
                name="Growth Website + Lead Generation Launch"
                price="Starting at $7,450"
              />
              <PriceExample
                name="Custom Web Platform + Lead Generation Launch"
                price="Custom scope"
              />
            </dl>
            <p className="mt-6 text-sm text-charcoal-soft">
              Advertising spend is paid directly to the advertising platform.
              New landing pages, major website changes, creative production, and
              custom integrations beyond the selected website package are scoped
              separately.
            </p>
          </aside>
        </div>
      </PricingSection>

      <PricingSection
        id="care"
        eyebrow="03 / Care"
        title="Care"
        copy="Choose the level of managed hosting, monitoring, updates, and support appropriate for the role your website plays in your business."
        tone="deep"
      >
        <p className="mb-9 max-w-3xl text-sm text-charcoal-soft">
          Care plans are available for Pierce Web Solutions projects and
          qualifying existing websites following an initial technical review.
          Response targets refer to the initial acknowledgment and assessment
          during normal business hours. They do not guarantee final resolution
          within that period.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {care.map((pkg) => (
            <PricingPackage key={pkg.name} {...pkg} />
          ))}
        </div>
        <div className="mt-10 grid gap-3 border-y border-charcoal/15 py-7 text-sm text-charcoal-soft sm:grid-cols-2">
          <p>Included time does not roll over.</p>
          <p>Major redesigns and new systems require separate scope.</p>
          <p>
            Additional work beyond the included monthly allowance requires
            approval and is billed separately at the applicable support rate.
          </p>
          <p>Third-party subscriptions and ad spend are separate.</p>
          <p>Final pricing is confirmed in a written proposal.</p>
        </div>
      </PricingSection>

      <PricingSection
        id="grow"
        eyebrow="04 / Grow"
        title="Grow"
        copy="Ongoing monitoring and optimization for businesses investing in paid advertising."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {advertising.map((pkg) => (
            <PricingPackage key={pkg.name} {...pkg} />
          ))}
        </div>
        <div className="mt-10 grid gap-4 border-l-2 border-brass pl-5 text-sm text-charcoal-soft">
          <p>
            Advertising spend is paid directly to the advertising platform and
            is not included in the management fee. Third-party subscriptions,
            new landing pages, major website changes, creative production, and
            substantial tracking repairs are quoted separately.
          </p>
          <p>
            Advertising results cannot be guaranteed and depend on factors
            including the offer, market, budget, website, booking process, sales
            follow-up, and client responsiveness.
          </p>
          <p>
            Client advertising accounts remain client-owned. Pierce Web
            Solutions is granted the access necessary to configure and manage
            the account.
          </p>
        </div>
      </PricingSection>

      <PricingSection
        id="evolve"
        eyebrow="05 / Evolve"
        title="Evolve"
        copy="Add new systems, integrations, landing pages, and focused improvements as the business changes."
        tone="deep"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <dl className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {evolve.map(([name, price]) => (
              <PriceExample key={name} name={name} price={price} />
            ))}
          </dl>
          <InspectionFrame
            as="article"
            label="AUTOMATION"
            className="border border-charcoal/15 bg-ivory p-7 md:p-9"
          >
            <h3 className="heading-serif text-3xl">Automation Management</h3>
            <p className="mt-3 font-serif text-2xl italic text-foothill-deep">
              Starting at $500/month
            </p>
            <p className="mt-5 text-charcoal-soft">
              Ongoing monitoring, support, and improvement for custom workflows
              and connected business systems. Pricing depends on the number of
              systems, integrations, support requirements, and operational
              impact.
            </p>
            <PlanFitGuide
              planName="Automation Management"
              bestFor="Best for businesses relying on connected workflows or custom systems for daily operations."
            >
              Appropriate when automated processes, integrations, or internal
              tools require ongoing monitoring, troubleshooting, and
              improvement.
            </PlanFitGuide>
          </InspectionFrame>
        </div>
      </PricingSection>

      <section id="faq" className="pricing-anchor section-pad bg-ivory">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="Practical questions before we begin"
            copy="Project-specific details are always confirmed in a written proposal."
          />
          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-xl text-charcoal marker:content-none">
                  {question}
                  <span
                    className="text-2xl font-light text-foothill transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-2 pt-4 text-charcoal-soft">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Not sure where your business should begin?"
        copy="A brief consultation can clarify the most useful starting point without requiring every lifecycle stage."
      />
      <Footer />
    </>
  );
}

function CustomFoundationStrip() {
  const attributes = [
    "Designed around your business",
    "Built for future improvements",
    "No generic theme reskin",
    "Integrations available as needs grow",
  ];
  return (
    <aside className="relative overflow-hidden border-y border-charcoal/15 bg-ivory px-6 py-8 md:px-9">
      <div
        className="absolute bottom-0 left-0 top-0 w-1 bg-brass"
        aria-hidden="true"
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">Custom Website Foundation</p>
          <h3 className="heading-serif mt-3 text-3xl text-charcoal">
            Every Website Project Starts with a Custom Foundation
          </h3>
          <p className="mt-4 text-sm text-charcoal-soft">
            Foundation, Growth, and Custom Platform projects differ in size and
            capability, but none are generic drag-and-drop template packages.
            Each begins with discovery, intentional structure, responsive
            development, and a visual direction shaped around the business.
          </p>
        </div>
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {attributes.map((attribute) => (
              <li
                key={attribute}
                className="border-l border-brass/60 pl-3 text-sm font-medium text-charcoal"
              >
                {attribute}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-taupe">
            Specific integrations and advanced functionality are included only
            when listed in the selected package or proposal.
          </p>
        </div>
      </div>
    </aside>
  );
}

function PricingSection({
  id,
  eyebrow,
  title,
  copy,
  tone,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  tone?: "deep";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-analytics-view="Pricing Section Viewed"
      data-analytics-location="pricing_page"
      data-analytics-target={id}
      className={`pricing-anchor section-pad ${tone === "deep" ? "bg-ivory-deep" : "bg-ivory"}`}
    >
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function PriceExample({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:gap-6">
      <dt className="font-serif text-xl text-charcoal">{name}</dt>
      <dd className="shrink-0 text-foothill-deep">{price}</dd>
    </div>
  );
}
