"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 text-center md:py-32">
      <div className="container-x mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          About
        </motion.p>

        <div className="ornament mx-auto mb-8 max-w-[220px]">
          <span className="text-brass">&#9670;</span>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="heading-serif text-[clamp(1.8rem,3.4vw,2.7rem)] font-normal italic leading-[1.3] text-charcoal"
        >
          &ldquo;Small businesses are the heart of our towns. My work is simply
          to give them modern technology and a partner who&rsquo;s genuinely in
          their corner.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-sm uppercase tracking-[0.18em] text-taupe"
        >
          Pierce &middot; Founder, Pierce Web Solutions
        </motion.p>
      </div>
    </section>
  );
}
