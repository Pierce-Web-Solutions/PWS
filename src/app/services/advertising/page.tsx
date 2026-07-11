import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "advertising")!;
export const metadata: Metadata = pageMetadata(
  "Advertising & Lead Generation",
  "Google Ads, Meta Ads, landing pages, conversion tracking, reporting, and optimization focused on qualified leads.",
  "/services/advertising",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
