"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Gauge, Accessibility, ShieldCheck, Search } from "lucide-react";
import Reveal from "./ui/Reveal";
import { EASE } from "@/lib/motion";

const metrics = [
  { label: "Performance", value: 100, icon: Gauge },
  { label: "Accessibility", value: 100, icon: Accessibility },
  { label: "Best Practices", value: 100, icon: ShieldCheck },
  { label: "SEO", value: 100, icon: Search },
];

const RADIUS = 52;
const CIRC = 2 * Math.PI * RADIUS;

function ScoreRing({
  value,
  label,
  icon: Icon,
  delay,
  inView,
}: {
  value: number;
  label: string;
  icon: typeof Gauge;
  delay: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  const offset = CIRC - (display / 100) * CIRC;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="rgba(247,243,237,0.12)"
            strokeWidth="6"
          />
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            stroke="url(#brassGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
          />
          <defs>
            <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d3b986" />
              <stop offset="100%" stopColor="#B89456" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-ivory">
          <Icon
            size={18}
            className="mb-1 text-brass-light"
            strokeWidth={1.75}
          />
          <span className="font-serif text-3xl font-semibold">{display}</span>
        </div>
      </div>
      <span className="text-xs uppercase tracking-[0.16em] text-ivory/70">
        {label}
      </span>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-ivory md:py-32">
      <div className="grid-texture-light absolute inset-0 opacity-70" />
      <div className="container-x relative">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5 text-brass-light">
            Engineered for Results
          </p>
          <h2 className="heading-serif text-[clamp(2rem,3.8vw,3rem)] text-ivory">
            Performance you can put a number on
          </h2>
          <p className="mt-4 text-lg text-ivory/70">
            Every site ships tuned for near-perfect Lighthouse scores — because
            speed, accessibility, and search visibility win real customers.
          </p>
        </Reveal>

        <div ref={ref} className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            >
              <ScoreRing
                value={m.value}
                label={m.label}
                icon={m.icon}
                delay={i * 0.12}
                inView={inView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
