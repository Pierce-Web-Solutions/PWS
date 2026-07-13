import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "North Georgia Web Design & Technology Partner",
  "Custom websites, practical systems, advertising, and reliable support for small businesses across North Georgia and beyond.",
  "/",
);

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
      <Footer />
    </>
  );
}
