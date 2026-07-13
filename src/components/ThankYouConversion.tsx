"use client";

import { useEffect } from "react";
import { sendGenerateLead } from "@/lib/analytics";
import { processStoredLead } from "@/lib/lead-conversion";

let conversionStarted = false;

export default function ThankYouConversion() {
  useEffect(() => {
    if (conversionStarted) return;
    conversionStarted = true;
    let attempts = 0;
    const send = () => {
      attempts += 1;
      const result = processStoredLead(sessionStorage, sendGenerateLead);
      if (result === "unavailable" && attempts < 20)
        window.setTimeout(send, 250);
      else if (result === "unavailable") conversionStarted = false;
    };
    send();
  }, []);
  return null;
}
