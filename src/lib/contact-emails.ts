import type { ContactSubmission } from "./contact-schema";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const display = (value?: string) => value || "Not provided";

export function internalEmail(
  submission: ContactSubmission,
  submittedAt: Date,
) {
  const name = `${submission.firstName} ${submission.lastName}`;
  const attribution = [
    ["Landing page", submission.landingPage],
    ["Current page", submission.currentPage],
    ["Referrer", submission.referrer],
    ["UTM source", submission.utmSource],
    ["UTM medium", submission.utmMedium],
    ["UTM campaign", submission.utmCampaign],
    ["UTM term", submission.utmTerm],
    ["UTM content", submission.utmContent],
    ["GCLID", submission.gclid],
    ["MSCLKID", submission.msclkid],
    ["FBCLID", submission.fbclid],
  ] as const;
  const details = [
    ["Contact", name],
    ["Email", submission.email],
    ["Phone", submission.phone],
    ["Business", submission.business],
    ["Current website", submission.website],
    ["Service interest", submission.service],
    ["Estimated budget", submission.budget],
    ["Desired timeline", submission.timeline],
    ["Referral source", submission.referral],
    [
      "Submitted",
      submittedAt.toLocaleString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " ET",
    ],
  ] as const;
  const rows = (items: readonly (readonly [string, string | undefined])[]) =>
    items
      .map(
        ([label, value]) =>
          `<tr><th style="padding:10px 16px 10px 0;text-align:left;vertical-align:top;color:#5D6E5E;font:600 11px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase">${escapeHtml(label)}</th><td style="padding:10px 0;color:#1F1F1D;font:14px Arial,sans-serif;line-height:1.5;word-break:break-word">${escapeHtml(display(value))}</td></tr>`,
      )
      .join("");

  const html = `<!doctype html><html><body style="margin:0;background:#efe8dc;padding:28px"><div style="max-width:680px;margin:auto;background:#F7F3ED;border:1px solid #d7c7aa"><div style="padding:26px 30px;background:#1F1F1D;color:#F7F3ED"><p style="margin:0;color:#A8B6A6;font:600 11px Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase">Pierce Web Solutions</p><h1 style="margin:10px 0 0;font:28px Georgia,serif">New consultation inquiry</h1></div><div style="padding:24px 30px"><table style="width:100%;border-collapse:collapse">${rows(details)}</table><div style="margin:22px 0;border-top:1px solid #d9d0c3"></div><p style="color:#5D6E5E;font:600 11px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase">Message</p><p style="white-space:pre-wrap;color:#1F1F1D;font:15px Arial,sans-serif;line-height:1.7">${escapeHtml(submission.message)}</p><div style="margin:22px 0;border-top:1px solid #d9d0c3"></div><p style="color:#5D6E5E;font:600 11px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase">Attribution</p><table style="width:100%;border-collapse:collapse">${rows(attribution)}</table></div></div></body></html>`;
  const textRows = [
    ...details,
    ["Message", submission.message] as const,
    ...attribution,
  ]
    .map(([label, value]) => `${label}: ${display(value)}`)
    .join("\n");
  return {
    subject: `New PWS Inquiry — ${(submission.business || name).replace(/[\r\n]+/g, " ")}`,
    html,
    text: `NEW PWS CONSULTATION INQUIRY\n\n${textRows}`,
  };
}

export function confirmationEmail(submission: ContactSubmission) {
  const html = `<!doctype html><html><body style="margin:0;background:#efe8dc;padding:28px"><div style="max-width:620px;margin:auto;background:#F7F3ED;border:1px solid #d7c7aa"><div style="padding:26px 30px;background:#1F1F1D;color:#F7F3ED"><p style="margin:0;color:#A8B6A6;font:600 11px Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase">Pierce Web Solutions</p><h1 style="margin:10px 0 0;font:28px Georgia,serif">Thank you for reaching out.</h1></div><div style="padding:28px 30px;color:#3a3a37;font:15px Arial,sans-serif;line-height:1.75"><p>Hi ${escapeHtml(submission.firstName)},</p><p>Thank you for contacting Pierce Web Solutions. I’ve received the information you submitted and will review it personally.</p><p>You can expect a response within one business day.</p><p>In the meantime, no further action is required.</p><p style="margin-top:28px">Thanks,<br><strong>Jacob Pierce</strong><br>Pierce Web Solutions<br><a style="color:#495847" href="mailto:contact@piercewebsolutions.com">contact@piercewebsolutions.com</a><br><a style="color:#495847" href="https://piercewebsolutions.com">piercewebsolutions.com</a></p></div></div></body></html>`;
  const text = `Hi ${submission.firstName},

Thank you for contacting Pierce Web Solutions. I’ve received the information you submitted and will review it personally.

You can expect a response within one business day.

In the meantime, no further action is required.

Thanks,
Jacob Pierce
Pierce Web Solutions
contact@piercewebsolutions.com
piercewebsolutions.com`;
  return {
    subject: "We received your inquiry — Pierce Web Solutions",
    html,
    text,
  };
}
