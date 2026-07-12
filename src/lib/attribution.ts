"use client";

const STORAGE_KEY = "pws_initial_attribution";

export type Attribution = {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  msclkid?: string;
  fbclid?: string;
};

const queryMap: Record<string, keyof Attribution> = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term: "utmTerm",
  utm_content: "utmContent",
  gclid: "gclid",
  msclkid: "msclkid",
  fbclid: "fbclid",
};

export function captureInitialAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
  } catch {
    return;
  }
  const values: Attribution = {
    landingPage: window.location.pathname.slice(0, 1000),
    referrer: document.referrer.slice(0, 1000) || undefined,
  };
  const params = new URLSearchParams(window.location.search);
  for (const [queryKey, storageKey] of Object.entries(queryMap)) {
    const value = params.get(queryKey)?.trim();
    if (value) {
      const max = storageKey.startsWith("utm") ? 300 : 500;
      values[storageKey] = value.slice(0, max);
    }
  }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {
    // Storage may be unavailable in hardened browser modes; submission still works.
  }
}

export function getInitialAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : {};
  } catch {
    return {};
  }
}
