"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBg from "./HeroBg";

const HEAD = ["We", "make", "Brands"];
const rise = {
  hidden: { y: "120%" },
  show: (i) => ({ y: "0%", transition: { delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  const ref = useRef(null);
  // Scroll-linked parallax: background drifts slower, content lifts & fades as
  // you scroll on — so the hero hands off to the next section in one motion.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-jkblue-deep text-cream vignette"
    >
      {/* moving background: cinematic montage of real JK billboards */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <HeroBg />
      </motion.div>

      {/* content */}
      <motion.div style={{ y: contentY, opacity: fade }} className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6"
        >
          50 YEARS+ · FORGING AHEAD
        </motion.p>

        <h1
          className="font-display font-extrabold"
          style={{ fontSize: "clamp(3rem,10vw,8.5rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}
        >
          {HEAD.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <motion.span custom={i} variants={rise} initial="hidden" animate="show" className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
          <br />
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span custom={3} variants={rise} initial="hidden" animate="show" className="inline-block text-grad">
              Converse.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 text-cream/70 text-lg sm:text-xl tracking-wide"
        >
          The largest OOH network in the East.
        </motion.p>
      </motion.div>
    </section>
  );
}
