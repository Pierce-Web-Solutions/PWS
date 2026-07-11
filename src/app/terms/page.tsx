import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
// LEGAL REVIEW REQUIRED: Attorney review is required before production publication.
export const metadata: Metadata = pageMetadata(
  "Website Terms",
  "Draft website terms for Pierce Web Solutions, provided for attorney review before production use.",
  "/terms",
);
export default function TermsPage() {
  return (
    <LegalPage title="Website Terms" updated="July 11, 2026">
      <h2>Informational website</h2>
      <p>
        This website provides general information about Pierce Web Solutions and
        its services. Website content is not a binding proposal, professional
        legal advice, or a guarantee of project availability, cost, timing,
        rankings, leads, revenue, advertising performance, or other results.
      </p>
      <h2>Project engagements</h2>
      <p>
        Any project or ongoing service is governed by a separate written
        proposal or agreement describing scope, responsibilities, pricing,
        payment terms, timing, third-party costs, and other applicable terms.
      </p>
      <h2>Pricing information</h2>
      <p>
        Published prices are starting points for common scopes. Final pricing is
        confirmed in writing after the requirements are understood. Third-party
        subscriptions, advertising spend, content production, and work outside
        the agreed scope may be priced separately.
      </p>
      <h2>Website content and intellectual property</h2>
      <p>
        The website’s original branding, copy, design, and other materials may
        not be reproduced or presented as another business’s work without
        permission. The final terms should address approved sharing, trademarks,
        and any licensed third-party materials.
      </p>
      <h2>External services</h2>
      <p>
        This website may eventually link to or use services operated by other
        providers. Pierce Web Solutions does not control third-party services,
        availability, or policies. Vendor-specific language should be confirmed
        before launch.
      </p>
      <h2>Changes and contact</h2>
      <p>
        These draft terms may change as the website and business practices are
        finalized. Questions may be sent to{" "}
        <a href="mailto:contact@piercewebsolutions.com">
          contact@piercewebsolutions.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
