"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadEvent = {
  serviceInterest?: string;
  estimatedBudget?: string;
  leadSource?: string;
};

export const LEAD_MARKER_KEY = "pws_confirmed_lead";

export function sendGenerateLead(values: LeadEvent): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return false;
  window.gtag("event", "generate_lead", {
    form_name: "consultation_form",
    service_interest: values.serviceInterest,
    estimated_budget: values.estimatedBudget,
    lead_source: values.leadSource,
    page_location: window.location.href,
  });
  return true;
}
