import InspectionFrame from "./InspectionFrame";
import { PanelsTopLeft } from "lucide-react";

const groups = [
  {
    title: "Customer Experience",
    items: [
      [
        "Lead Capture",
        "Forms and conversion paths designed around qualified inquiries.",
      ],
      [
        "Online Booking",
        "Connections to scheduling platforms and completed-booking tracking.",
      ],
      [
        "Advertising",
        "Landing pages and measurement that support paid campaigns.",
      ],
      ["Reporting", "Measure real outcomes instead of relying only on clicks."],
    ],
  },
  {
    title: "Business Connections",
    items: [
      [
        "CRM",
        "Pass qualified inquiries into the systems your team already uses.",
      ],
      [
        "Automated Follow-Up",
        "Trigger useful communications after inquiries, bookings, or other actions.",
      ],
    ],
  },
  {
    title: "Future Capabilities",
    items: [
      [
        "Customer Portal",
        "Secure experiences for clients, members, or customers.",
      ],
      [
        "Internal Dashboard",
        "Custom views for the information your team needs to act on.",
      ],
      [
        "Additional Locations",
        "Expand the platform as the business enters new markets.",
      ],
      ["Custom Workflows", "Connect tools and reduce repetitive manual work."],
    ],
  },
] as const;

export default function CustomFoundationMap() {
  return (
    <div
      className="foundation-map"
      role="group"
      aria-label="Capabilities that can connect to a custom website foundation"
    >
      <div
        className="foundation-map__line foundation-map__line--horizontal"
        aria-hidden="true"
      />
      <div
        className="foundation-map__line foundation-map__line--vertical"
        aria-hidden="true"
      />
      <div className="foundation-map__browser">
        <div className="foundation-map__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="foundation-map__screen">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-brass/50 text-foothill">
            <PanelsTopLeft size={23} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-brass-deep">
            Custom Foundation
          </span>
          <strong className="mt-3 block font-serif text-3xl font-medium text-charcoal">
            Your Website
          </strong>
          <p className="mt-3 text-sm text-charcoal-soft">
            Focused around what the business needs today, with room for useful
            additions later.
          </p>
        </div>
      </div>
      <div className="foundation-map__groups foundation-map__groups--left">
        <CapabilityGroup group={groups[0]} prominent />
      </div>
      <div className="foundation-map__groups foundation-map__groups--right">
        <CapabilityGroup group={groups[1]} />
        <CapabilityGroup group={groups[2]} />
      </div>
      <p className="foundation-map__note">
        Capabilities can be added when they become useful. They are not
        automatically included in every website package.
      </p>
    </div>
  );
}

function CapabilityGroup({
  group,
  prominent = false,
}: {
  group: (typeof groups)[number];
  prominent?: boolean;
}) {
  return (
    <section
      className="foundation-map__group"
      aria-labelledby={`map-${group.title.replaceAll(" ", "-").toLowerCase()}`}
    >
      <h3
        id={`map-${group.title.replaceAll(" ", "-").toLowerCase()}`}
        className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-taupe"
      >
        {group.title}
      </h3>
      <div className="mt-3 grid gap-3">
        {group.items.map(([name, copy]) => (
          <InspectionFrame
            key={name}
            as="article"
            focusable
            className={`foundation-map__capability ${prominent ? "is-prominent" : ""}`}
          >
            <h4 className="font-serif text-lg text-charcoal">{name}</h4>
            <p className="mt-1 text-xs leading-relaxed text-charcoal-soft">
              {copy}
            </p>
          </InspectionFrame>
        ))}
      </div>
    </section>
  );
}
