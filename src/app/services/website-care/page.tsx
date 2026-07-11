import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "website-care")!;
export const metadata: Metadata = pageMetadata(
  "Website Care & Support",
  "Responsive ongoing website support, monitoring, updates, form checks, analytics review, and continued improvements.",
  "/services/website-care",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
