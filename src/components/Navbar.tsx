"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Brand from "./Brand";
import { EASE } from "@/lib/motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("window-viewport");
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 32);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={clsx(
        "fixed left-2 right-2 top-[3rem] z-30 transition-all duration-500 sm:left-3 sm:right-3 sm:top-[3.25rem] md:left-4 md:right-4 md:top-[3.75rem]",
        scrolled
          ? "border-b border-charcoal/10 bg-ivory/90 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="container-x flex items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.9rem] tracking-wide text-charcoal-soft transition-colors hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="btn-outline px-5 py-2 text-[0.85rem]">
            Request a Consultation
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-charcoal lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-ivory/95 backdrop-blur-md lg:hidden"
          >
            <div className="container-x flex flex-col gap-4 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-charcoal-soft"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-brass w-fit"
              >
                Request a Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
