import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100dvh-5rem)] overflow-hidden bg-ivory"
    >
      {/* Video — right column on desktop, full bleed on mobile */}
      <div className="absolute inset-0 overflow-hidden lg:left-[46%]">
        {/* <video
          src="/videos/drone.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Golden-hour view over a historic North Georgia town framed by the foothills"
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover object-center"
        /> */}

        <Image
          src="/images/hero3.png"
          alt="Golden-hour view over a historic North Georgia town framed by the foothills"
          fill
          priority
          // quality={90}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="animate-slow-zoom object-cover object-center"
        />
        {/* Desktop seam fade into ivory */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory from-0% via-ivory/60 via-18% to-transparent to-45% lg:block" />
        {/* Mobile readability wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-ivory/30 lg:hidden" />
      </div>

      {/* Faint blueprint grid on the far left */}
      <div className="grid-texture pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-70" />

      <div className="container-x relative grid min-h-[calc(100dvh-5rem)] items-center">
        <div className="max-w-xl pb-16 pt-24 lg:max-w-3xl lg:pb-8 lg:pt-24 xl:max-w-4xl">
          <p className="eyebrow mb-6">Helping North Georgia Businesses Grow</p>

          <h1 className="heading-serif text-[clamp(2.6rem,5.2vw,4.4rem)] text-charcoal">
            Modern Technology.
            <br />
            Built Around{" "}
            <span className="italic text-foothill">Your Business.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg text-charcoal-soft lg:max-w-xl xl:max-w-2xl">
            Custom websites, practical systems, and reliable support for small
            businesses across North Georgia.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-brass group">
              Request a Consultation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>

          <div className="mt-12 max-w-sm">
            <div className="ornament mb-3">
              <span className="text-foothill">&#9670;</span>
            </div>
            <p className="text-center font-serif text-lg italic text-taupe">
              Modern technology. Local partnership.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 hidden h-11 w-7 -translate-x-1/2 justify-center rounded-full border border-charcoal/30 pt-2 lg:flex"
      >
        <span className="h-2 w-[3px] animate-scroll-dot rounded-full bg-charcoal/60" />
      </a>
    </section>
  );
}
