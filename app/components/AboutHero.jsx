"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]); // slow photo parallax
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[85vh] items-end overflow-hidden bg-jkblue-deep text-cream">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img style={{ y }} src="/work-2.jpg" alt="JK Advertising outdoor media" className="absolute inset-0 h-[130%] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/55 to-jkblue-deep/30" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">
          ABOUT JK ADVERTISING
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.75rem,8vw,6.5rem)", letterSpacing: "-0.03em" }}>
          Fifty years,<br /><span className="text-grad">forging ahead.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
          The largest OOH media owner in the East — leading in impactful, high-quality outdoor media, built on trust, service and value.
        </motion.p>
      </motion.div>
    </section>
  );
}
