"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Brand from "./Brand";

const links = [
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
  return (
    <header
      className={clsx(
        "fixed left-2 right-2 top-[3rem] z-30 border-b py-3 transition-all sm:left-3 sm:right-3 sm:top-[3.25rem] md:left-4 md:right-4 md:top-[3.75rem]",
        scrolled || pathname !== "/"
          ? "border-charcoal/10 bg-ivory/95 backdrop-blur-md"
          : "border-transparent bg-ivory/70 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex items-center justify-between">
        <Brand />
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
                "relative py-2 text-[0.88rem] tracking-wide transition-colors hover:text-charcoal",
                active(link.href)
                  ? "text-charcoal after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-brass"
                  : "text-charcoal-soft",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-outline px-5 py-2 text-[0.82rem]"
          >
            Request a Consultation
          </Link>
        </nav>
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass lg:hidden"
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
                  active(link.href) ? "text-brass-deep" : "text-charcoal",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-brass mt-5 w-fit"
            >
              Request a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
