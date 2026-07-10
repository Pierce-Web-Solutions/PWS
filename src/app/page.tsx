import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Approach />
      <Metrics />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
