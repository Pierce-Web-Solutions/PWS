"use client";

import { useEffect } from "react";
import { captureInitialAttribution } from "@/lib/attribution";

export default function AttributionCapture() {
  useEffect(() => captureInitialAttribution(), []);
  return null;
}
