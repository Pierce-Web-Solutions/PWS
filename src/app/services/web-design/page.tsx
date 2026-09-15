import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "web-design")!;
export const metadata: Metadata = pageMetadata(
  "Web Design in North Georgia",
  "Custom, responsive websites and redesigns for North Georgia businesses, built for usability, accessibility, performance, and local search visibility.",
  "/services/web-design",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
