"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Brand from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = document.getElementById("window-viewport");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 24);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const active = (href: string) =>
    pathname === href ||
    (href === "/services" && pathname.startsWith("/services/"));
  const lightAtTop = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-30 border-b transition-[padding,background-color,border-color,backdrop-filter] duration-300 lg:left-4 lg:right-4 lg:top-[3.75rem]",
        scrolled || open
          ? "border-charcoal/10 bg-ivory/90 py-1.5 backdrop-blur-md"
          : "border-transparent bg-transparent py-3 backdrop-blur-none",
      )}
    >
      <div
        className="h-[env(safe-area-inset-top)] lg:hidden"
        aria-hidden="true"
      />
      <div className="container-x flex items-center justify-between">
        <Brand light={lightAtTop} compact={scrolled || open} />
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active(link.href) ? "page" : undefined}
              className={clsx(
                "relative py-2 text-[0.88rem] tracking-wide transition-colors",
                lightAtTop
                  ? active(link.href)
                    ? "text-ivory after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-brass"
                    : "text-ivory/75 hover:text-ivory"
                  : active(link.href)
                    ? "text-foothill-deep after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foothill"
                    : "text-charcoal-soft hover:text-charcoal",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={clsx(
              "px-5 py-2 text-[0.82rem]",
              lightAtTop
                ? "btn-outline-light border-brass/70 text-brass-light hover:bg-brass/10"
                : "btn-outline",
            )}
            data-analytics-event="Consultation CTA Clicked"
            data-analytics-location="desktop_nav"
            data-analytics-target="contact"
          >
            Request a Consultation
          </Link>
        </nav>
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={clsx(
            "rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:hidden",
            lightAtTop ? "text-ivory" : "text-charcoal",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-charcoal/10 bg-ivory lg:hidden"
        >
          <div className="container-x flex flex-col py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active(link.href) ? "page" : undefined}
                className={clsx(
                  "border-b border-charcoal/10 py-4 text-lg",
                  active(link.href) ? "text-foothill-deep" : "text-charcoal",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-brass mt-5 w-fit"
              data-analytics-event="Consultation CTA Clicked"
              data-analytics-location="mobile_nav"
              data-analytics-target="contact"
            >
              Request a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
