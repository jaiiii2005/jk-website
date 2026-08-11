"use client";

import { motion } from "framer-motion";

// Generic scroll-reveal: fades + slides its children in when they enter view.
// `dir` controls the slide direction, `delay` staggers siblings.
export default function Reveal({ children, dir = "up", delay = 0, className = "" }) {
  const offset = { up: { y: 40 }, down: { y: -40 }, left: { x: 60 }, right: { x: -60 } }[dir] || { y: 40 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
