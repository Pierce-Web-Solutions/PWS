import { z } from "zod";
import {
  intakeBudgetOptions,
  intakeInterests,
  intakeTimelineOptions,
  teamSizeOptions,
} from "./intake-options";
import { fieldErrors } from "./contact-schema";

const required = (label: string, min: number, max: number) =>
  z.string().trim().min(min, `${label} is required.`).max(max);
const optional = (max: number) => z.string().trim().max(max).default("");
const website = z
  .union([
    z.literal(""),
    z.string().trim().max(500).url("Enter a complete website URL."),
  ])
  .default("");

export const intakeSchema = z
  .object({
    firstName: required("First name", 1, 100),
    lastName: required("Last name", 1, 100),
    email: z
      .string()
      .trim()
      .email("Enter a valid email address.")
      .max(254)
      .transform((value) => value.toLowerCase()),
    phone: optional(40),
    business: required("Business name", 1, 200),
    role: optional(120),
    website,
    industry: optional(150),
    teamSize: z.union([z.literal(""), z.enum(teamSizeOptions)]).default(""),
    serviceArea: optional(200),
    interests: z
      .array(z.enum(intakeInterests))
      .min(1, "Select at least one area.")
      .max(7),
    businessOverview: optional(1500),
    projectSummary: required("Project summary", 20, 5000),
    currentSituation: required("Current situation", 10, 3000),
    painPoints: required("Operational problem", 10, 3000),
    businessImpact: optional(2000),
    desiredOutcome: required("Desired outcome", 10, 3000),
    successMeasures: optional(2000),
    existingTools: optional(2000),
    usersAndRoles: optional(1500),
    dataAndIntegrations: optional(2000),
    constraints: optional(2000),
    websiteGoals: optional(2000),
    websiteAudience: optional(1500),
    websiteContent: optional(1500),
    websiteFeatures: optional(2000),
    websiteCareNeeds: optional(1500),
    currentHosting: optional(1000),
    adChannels: optional(1000),
    targetMarket: optional(1500),
    monthlyAdSpend: optional(1000),
    qualifiedLead: optional(1500),
    adTracking: optional(1500),
    workflowDetails: optional(2000),
    workflowVolume: optional(1000),
    exceptionsAndApprovals: optional(1500),
    aiConsiderations: optional(1500),
    budget: z.enum(intakeBudgetOptions, { error: "Choose a budget range." }),
    timeline: z.enum(intakeTimelineOptions, { error: "Choose a timeline." }),
    decisionMakers: optional(1500),
    supportingMaterials: optional(1500),
    additionalContext: optional(3000),
    consent: z.literal(true, { error: "Consent is required." }),
    honeypot: optional(200),
    turnstileToken: required("Spam verification", 1, 2048),
    formStartedAt: z.number().int().positive(),
  })
  .strict();

export type IntakeSubmission = z.infer<typeof intakeSchema>;
export { fieldErrors };
