"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

const variants: Variants = {
  hidden: (custom: { y: number }) => ({ opacity: 0, y: custom.y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={{ y }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
