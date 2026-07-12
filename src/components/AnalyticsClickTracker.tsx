"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";

export default function AnalyticsClickTracker() {
  const pathname = usePathname();
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!target) return;
      const eventName = target.dataset.analyticsEvent;
      if (!eventName) return;
      track(eventName, {
        location: target.dataset.analyticsLocation || "unknown",
        target: target.dataset.analyticsTarget || "unknown",
        path: window.location.pathname,
      });
    };
    document.addEventListener("click", handleClick);
    const viewed = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || viewed.has(entry.target)) return;
          const element = entry.target as HTMLElement;
          const eventName = element.dataset.analyticsView;
          if (!eventName) return;
          viewed.add(element);
          track(eventName, {
            location: element.dataset.analyticsLocation || "unknown",
            target: element.dataset.analyticsTarget || "unknown",
            path: window.location.pathname,
          });
        });
      },
      { threshold: 0.35 },
    );
    document
      .querySelectorAll("[data-analytics-view]")
      .forEach((element) => observer.observe(element));
    return () => {
      document.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
