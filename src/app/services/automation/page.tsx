import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "automation")!;
export const metadata: Metadata = pageMetadata(
  "Business Automation in North Georgia",
  "Practical workflows, integrations, dashboards, reporting, and custom business tools for growing North Georgia businesses.",
  "/services/automation",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
