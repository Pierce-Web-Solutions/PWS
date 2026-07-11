import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { pageMetadata, services } from "@/lib/site";
const service = services.find((item) => item.slug === "automation")!;
export const metadata: Metadata = pageMetadata(
  "Automation & Custom Systems",
  "Practical workflows, integrations, dashboards, reporting, and custom business tools designed around real operations.",
  "/services/automation",
);
export default function Page() {
  return <ServiceDetailPage service={service} />;
}
