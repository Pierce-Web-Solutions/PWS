import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy",
  "Privacy policy describing how Pierce Web Solutions handles website inquiries and usage information.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 11, 2026">
      <h2>Purpose of this notice</h2>
      <p>
        This policy explains how Pierce Web Solutions, a brand of Pierce
        Business Group LLC, may handle information submitted through this
        website and information generated through normal website use.
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
        This website may use basic server logs, analytics tools, and marketing
        attribution parameters when they are present in a landing URL. This may
        include referral information, campaign parameters, and advertising click
        identifiers. Contact submissions are also checked by anti-spam
        infrastructure.
      </p>
      <h2>How information may be used</h2>
      <p>
        Information may be used to respond to inquiries, evaluate a potential
        project, provide requested services, maintain website security, and
        understand how the website is used. Pierce Web Solutions does not sell
        information submitted through the contact form.
      </p>
      <h2>Service providers and retention</h2>
      <p>
        Hosting, analytics, email-delivery, and anti-spam providers may process
        information on behalf of Pierce Web Solutions to operate the website and
        deliver inquiries. Information is retained only as reasonably needed for
        the inquiry, service relationship, security, recordkeeping, or
        applicable business obligations.
      </p>
      <h2>Your questions</h2>
      <p>
        Questions about this policy may be sent to{" "}
        <a href="mailto:contact@piercewebsolutions.com">
          contact@piercewebsolutions.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
