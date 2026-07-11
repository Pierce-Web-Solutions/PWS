import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";
// LEGAL REVIEW REQUIRED: Attorney review is required before production publication.
export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "Draft privacy policy for Pierce Web Solutions, provided for attorney review before production use.",
  "/privacy",
);
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 11, 2026">
      <h2>Purpose of this notice</h2>
      <p>
        This draft explains, in general terms, how Pierce Web Solutions may
        handle information submitted through this website. It will be updated
        when the website’s final hosting, analytics, form-delivery, and
        marketing tools are confirmed.
      </p>
      <h2>Information you choose to provide</h2>
      <p>
        If you contact Pierce Web Solutions by email or through a connected
        consultation form, you may provide contact details, business
        information, project details, and other information included in your
        message. Please do not submit sensitive personal, financial, medical, or
        account information through a general inquiry.
      </p>
      <h2>Website and analytics information</h2>
      <p>
        The production website may use basic server logs and analytics tools to
        understand visits, device types, referral sources, and site performance.
        The final version of this policy should identify the specific providers
        and settings in use.
      </p>
      <h2>How information may be used</h2>
      <p>
        Information may be used to respond to inquiries, evaluate a potential
        project, provide requested services, maintain website security, and
        understand how the website is used. The final policy should describe any
        additional business uses that are approved before launch.
      </p>
      <h2>Service providers and retention</h2>
      <p>
        Hosting, analytics, email, form-delivery, or other vendors may process
        information on behalf of Pierce Web Solutions. Retention practices and
        vendor-specific disclosures must be confirmed before this policy is
        finalized.
      </p>
      <h2>Your questions</h2>
      <p>
        Questions about this draft may be sent to{" "}
        <a href="mailto:contact@piercewebsolutions.com">
          contact@piercewebsolutions.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
