import type { LeadEvent } from "./analytics";

export type LeadStorage = Pick<Storage, "getItem" | "removeItem">;

export function processStoredLead(
  storage: LeadStorage,
  send: (event: LeadEvent) => boolean,
  now = Date.now(),
): "sent" | "missing" | "unavailable" {
  let marker: (LeadEvent & { createdAt: number }) | undefined;
  try {
    const raw = storage.getItem("pws_confirmed_lead");
    if (raw) marker = JSON.parse(raw) as LeadEvent & { createdAt: number };
  } catch {
    return "missing";
  }
  if (
    !marker ||
    !Number.isFinite(marker.createdAt) ||
    now - marker.createdAt > 30 * 60 * 1000
  ) {
    storage.removeItem("pws_confirmed_lead");
    return "missing";
  }
  if (!send(marker)) return "unavailable";
  storage.removeItem("pws_confirmed_lead");
  return "sent";
}
