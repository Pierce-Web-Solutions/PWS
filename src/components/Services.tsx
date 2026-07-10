"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Workflow, LifeBuoy } from "lucide-react";
import Reveal from "./ui/Reveal";

const services = [
  {
    num: "01",
    icon: MonitorSmartphone,
    title: "Custom Websites",
    body: "Hand-built, responsive websites — no bloated templates — designed to look elegant and load fast on every device.",
  },
  {
    num: "02",
    icon: Workflow,
    title: "Automation & Systems",
    body: "Practical tools that handle the busywork: online booking, forms, invoicing, and integrations that save you hours.",
  },
  {
    num: "03",
    icon: LifeBuoy,
    title: "Support & Maintenance",
    body: "Ongoing updates, hosting, security, and a local partner who answers when you call. Reliable, worry-free care.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">What We Do</p>
          <h2 className="heading-serif text-[clamp(2rem,3.8vw,3rem)] text-charcoal">
            Everything your business needs to thrive online
          </h2>
          <p className="mt-4 text-lg text-charcoal-soft">
            From first pixel to ongoing partnership — modern technology,
            delivered with a local handshake.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.num} delay={i * 0.12}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-charcoal/10 bg-white p-9 transition-shadow duration-500 hover:border-transparent hover:shadow-soft"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ivory-deep text-brass-deep transition-colors duration-500 group-hover:bg-brass group-hover:text-ivory">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-serif text-xl italic text-brass">
                      {service.num}
                    </span>
                  </div>
                  <h3 className="heading-serif mb-3 text-2xl text-charcoal">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-soft">{service.body}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
