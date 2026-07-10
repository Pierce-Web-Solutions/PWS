"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";

const points = [
  "Personal, one-on-one collaboration from first call to launch",
  "Clean, modern design that ages gracefully",
  "Fast, accessible builds tuned for real customers",
  "A local partner who answers the phone when you call",
];

const stats = [
  { num: "100%", label: "Locally focused" },
  { num: "1:1", label: "Dedicated partnership" },
  { num: "24/7", label: "Reliable support" },
];

export default function Approach() {
  return (
    <section id="work" className="bg-ivory-deep py-24 md:py-32">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Our Approach</p>
            <h2 className="heading-serif text-[clamp(2rem,3.8vw,3rem)] text-charcoal">
              Rooted locally. Built to last.
            </h2>
            <p className="mt-5 text-lg text-charcoal-soft">
              We believe great technology should feel as welcoming as a Main
              Street storefront. Every project begins with understanding your
              story, your customers, and the community you call home.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4">
            {points.map((point, i) => (
              <Reveal key={point} delay={0.1 + i * 0.08}>
                <li className="flex items-start gap-3 text-charcoal-soft">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-foothill text-ivory">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="grid gap-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12} y={20}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-baseline justify-between rounded-2xl border border-charcoal/10 bg-white px-8 py-7"
              >
                <span className="font-serif text-4xl font-semibold text-foothill">
                  {stat.num}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-taupe">
                  {stat.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
