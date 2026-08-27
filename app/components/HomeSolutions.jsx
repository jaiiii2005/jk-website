"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const SOL = ["Outdoor Hoardings", "Digital OOH", "Unipoles", "Transit & Airport", "In-shop Branding", "Rural Promotions", "Innovations"];

export default function HomeSolutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // the big tilted stack glides up as you scroll through
  const y = useTransform(scrollYProgress, [0, 1], ["22%", "-22%"]);

  return (
    <section ref={ref} className="grad-panel text-cream relative overflow-hidden flex items-center" style={{ minHeight: "90vh" }}>
      {/* left — heading */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-md">
          <Reveal><p className="tracking-[0.35em] text-xs sm:text-sm font-bold text-white/70 mb-5">OUR SOLUTIONS</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.25rem,5vw,4rem)", letterSpacing: "-0.02em" }}>
              Our outdoor<br />media solutions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="mt-9 inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-jkred">
              Explore services →
            </Link>
          </Reveal>
        </div>
      </div>

      {/* right — HUGE tilted words that bleed off the right edge, sliding up */}
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-[44%] -translate-y-1/2">
        <motion.div style={{ y, rotate: -3 }} className="flex flex-col gap-3 origin-left will-change-transform">
          {SOL.map((s) => (
            <span
              key={s}
              className="block font-display font-extrabold uppercase leading-[0.98] whitespace-nowrap text-white/95"
              style={{ fontSize: "clamp(2.5rem,6.5vw,6rem)", letterSpacing: "-0.02em" }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
