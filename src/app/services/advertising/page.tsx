import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "advertising")!;
export const metadata: Metadata = pageMetadata(
  "Google Ads Management in North Georgia",
  "Google Ads, Meta Ads, landing pages, conversion tracking, and campaign optimization focused on qualified leads for North Georgia businesses.",
  "/services/advertising",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
