import type { Metadata, Viewport } from "next";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Pierce Web Solutions | Business Systems in North Georgia",
  "Pierce Web Solutions diagnoses operational problems and architects practical solutions, including custom business systems, websites, and advertising.",
  "/",
);

export const viewport: Viewport = {
  themeColor: "#071117",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
      <Footer />
    </>
  );
}
