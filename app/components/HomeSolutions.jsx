"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const SOL = ["Outdoor Hoardings", "Digital OOH", "Unipoles", "Transit & Airport", "In-shop Branding", "Rural Promotions", "Innovations"];

export default function HomeSolutions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // the whole tilted stack glides up smoothly as you scroll through the section
  const y = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);

  return (
    <section ref={ref} className="grad-panel text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid lg:grid-cols-2 gap-10 items-center">
        {/* left */}
        <div>
          <Reveal><p className="tracking-[0.35em] text-xs sm:text-sm font-bold text-white/70 mb-5">OUR SOLUTIONS</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}>
              Our outdoor<br />media solutions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="mt-9 inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-jkred">
              Explore services →
            </Link>
          </Reveal>
        </div>

        {/* right — tilted stacked words sliding up on scroll */}
        <div className="relative h-[55vh] sm:h-[62vh] overflow-hidden">
          {/* soft top/bottom fade so words emerge & vanish */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 z-10 bg-gradient-to-b from-black/10 to-transparent" />
          <motion.div style={{ y, rotate: -4 }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 lg:items-end origin-center">
            {SOL.map((s) => (
              <span
                key={s}
                className="block font-display font-extrabold uppercase leading-[0.98] whitespace-nowrap lg:text-right"
                style={{ fontSize: "clamp(2rem,4.5vw,4rem)", letterSpacing: "-0.01em" }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
