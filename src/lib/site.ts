import type { Metadata } from "next";

export const site = {
  name: "Pierce Web Solutions",
  url: "https://www.piercewebsolutions.com",
  email: "contact@piercewebsolutions.com",
  location: "North Georgia",
  area: "Gwinnett, Hall, Barrow, Forsyth, and surrounding North Georgia communities",
  description:
    "Custom websites, practical systems, and reliable support for small businesses across North Georgia.",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/images/hero3.png",
          width: 1536,
          height: 1024,
          alt: "A North Georgia Main Street at golden hour",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero3.png"],
    },
  };
}

export type Service = {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  description: string;
  problem: string;
  fit: string;
  intro: string;
  deliverables: string[];
  closing: string;
};

export const services: Service[] = [
  {
    slug: "web-design",
    number: "01",
    shortTitle: "Web Design & Development",
    title: "Web Design & Development for North Georgia Businesses",
    description:
      "Custom websites built to represent your business clearly, perform well, and turn more visitors into real opportunities.",
    problem:
      "An outdated, confusing, or hard-to-manage website can make a capable business look less established than it is and leave prospective customers unsure what to do next.",
    fit: "New businesses establishing a credible presence, established companies ready for a redesign, and service businesses that need focused landing pages or useful integrations.",
    intro:
      "A good website is more than a polished first impression. It should explain what you do, make the next step obvious, and work reliably for customers on every device.",
    deliverables: [
      "New business websites",
      "Website redesigns",
      "Mobile-responsive development",
      "Conversion-focused page structure",
      "Performance and accessibility review",
      "Analytics and conversion tracking",
      "Local SEO foundations",
      "Focused landing pages",
      "Business-tool integrations",
    ],
    closing:
      "Every build is shaped around your business, content, customers, and practical goals, without guarantees about rankings, leads, or perfect scores.",
  },
  {
    slug: "website-care",
    number: "02",
    shortTitle: "Website Care & Support",
    title: "Responsive Website Care After Launch",
    description:
      "Managed hosting, ongoing updates, monitoring, improvements, and direct support after your website launches.",
    problem:
      "Websites need attention after launch. Unchecked forms, stale content, platform updates, and small technical issues can quietly erode customer trust.",
    fit: "Businesses that want a dependable local partner to keep their site current, review its performance, and handle routine technical needs.",
    intro:
      "Website care provides managed hosting, consistent oversight, and a direct point of contact, so small issues are addressed and useful improvements do not get lost in a support queue.",
    deliverables: [
      "Managed website hosting for qualifying websites",
      "SSL certificate management",
      "Uptime and platform monitoring",
      "Software and content updates",
      "Form-delivery checks",
      "Small content changes",
      "Analytics review",
      "Responsive ongoing support",
      "Performance and usability review",
      "Continued improvements",
    ],
    closing:
      "Response targets refer to the initial acknowledgment and assessment during normal business hours. They do not guarantee final resolution within that period.",
  },
  {
    slug: "automation",
    number: "03",
    shortTitle: "Automation & Custom Systems",
    title: "Practical Systems Built Around Your Workflow",
    description:
      "Practical tools, integrations, dashboards, and workflows built around the way your business actually operates.",
    problem:
      "Disconnected tools and repeated manual tasks cost time, create inconsistent follow-up, and make it harder to see what is happening across the business.",
    fit: "Growing service companies and professional teams with a clear operational bottleneck, repetitive workflow, or reporting need.",
    intro:
      "Useful automation starts with understanding the real workflow. The goal is not technology for its own sake. It is a simpler, more reliable way to move work forward.",
    deliverables: [
      "Lead routing",
      "Automated follow-up",
      "Appointment reminders",
      "Review requests",
      "Internal dashboards",
      "CRM connections",
      "Approval workflows",
      "Business reporting",
      "Custom business tools",
    ],
    closing:
      "Projects begin by mapping the people, tools, decisions, and exceptions involved so the resulting system supports the way your team actually works.",
  },
  {
    slug: "advertising",
    number: "04",
    shortTitle: "Advertising & Lead Generation",
    title: "Advertising Focused on Qualified Leads",
    description:
      "Landing pages, conversion tracking, Google and Meta campaign management, and reporting centered on qualified leads.",
    problem:
      "Campaigns are difficult to improve when the landing experience, tracking, account ownership, and business goals are not aligned.",
    fit: "Businesses with a clear offer, capacity to respond to leads, and a realistic test budget for measurable Google or Meta campaigns.",
    intro:
      "Effective advertising connects campaign planning, focused landing pages, accurate measurement, and ongoing review around outcomes that matter to the business.",
    deliverables: [
      "Google Ads",
      "Meta Ads",
      "Focused landing pages",
      "Conversion tracking",
      "Campaign planning",
      "Budget pacing",
      "Search-term reviews",
      "Clear reporting",
      "Ongoing optimization",
    ],
    closing:
      "Advertising spend is separate from management fees. Results cannot be guaranteed, and client advertising accounts should remain client-owned.",
  },
];
