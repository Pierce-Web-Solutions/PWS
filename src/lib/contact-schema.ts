import { z } from "zod";
import {
  budgetOptions,
  referralOptions,
  serviceOptions,
  timelineOptions,
} from "./contact-options";

const trimmed = (max: number) => z.string().trim().max(max);
const requiredText = (label: string, min: number, max: number) =>
  trimmed(max).min(min, `${label} is required.`);
const optionalText = (max: number) =>
  z
    .union([z.literal(""), trimmed(max)])
    .transform((value) => value || undefined)
    .optional();
const optionalUrl = z
  .union([
    z.literal(""),
    z.string().trim().max(500).url("Enter a valid website URL."),
  ])
  .transform((value) => value || undefined)
  .optional();

export const contactSchema = z
  .object({
    firstName: requiredText("First name", 1, 100),
    lastName: requiredText("Last name", 1, 100),
    email: z
      .string()
      .trim()
      .email("Enter a valid email address.")
      .max(254)
      .transform((value) => value.trim().toLowerCase()),
    phone: optionalText(40),
    business: requiredText("Business name", 1, 200),
    website: optionalUrl,
    service: z
      .string()
      .trim()
      .pipe(
        z.enum(serviceOptions, { error: "Choose a valid starting point." }),
      ),
    budget: z
      .string()
      .trim()
      .pipe(
        z.enum(budgetOptions, { error: "Choose a valid estimated budget." }),
      ),
    timeline: z
      .string()
      .trim()
      .pipe(z.enum(timelineOptions, { error: "Choose a valid timeline." })),
    message: requiredText("Message", 10, 5000),
    referral: z
      .union([z.literal(""), z.enum(referralOptions)])
      .transform((value) => value || undefined)
      .optional(),
    consent: z.literal(true, { error: "Consent is required." }),
    honeypot: optionalText(200),
    turnstileToken: requiredText("Spam verification", 1, 2048),
    formStartedAt: z.number().int().positive(),
    landingPage: optionalText(1000),
    currentPage: optionalText(1000),
    referrer: optionalText(1000),
    utmSource: optionalText(300),
    utmMedium: optionalText(300),
    utmCampaign: optionalText(300),
    utmTerm: optionalText(300),
    utmContent: optionalText(300),
    gclid: optionalText(500),
    msclkid: optionalText(500),
    fbclid: optionalText(500),
  })
  .strict();

export type ContactSubmission = z.infer<typeof contactSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "form");
    errors[field] ??= issue.message;
  }
  return errors;
}
