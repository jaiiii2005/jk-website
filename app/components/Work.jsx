"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Cinematic, image-led showcase: one big featured billboard + an editorial grid.
// Photos reveal with a clip-path wipe on scroll and zoom on hover — the "work is
// the hero" language of top OOH agency sites.
const FEATURE = {
  src: "/work/w-audi.jpg",
  brand: "Audi A4",
  meta: "HOARDING · KOLKATA",
  line: "Some see what’s there. We see beyond.",
};

const GRID = [
  { src: "/work/w-stylebaazar.jpg", brand: "Style Baazar", meta: "HOARDING · KOLKATA" },
  { src: "/work/w-joi-clean.jpg", brand: "JOI Yogurt", meta: "HOARDING · KOLKATA" },
  { src: "/work/w-idee.jpg", brand: "IDEE Eyewear", meta: "AIRPORT MEDIA · KOLKATA" },
  { src: "/work-2.jpg", brand: "Landmark OOH", meta: "OUTDOOR · KOLKATA" },
  { src: "/work-3.jpg", brand: "Prime Site", meta: "OUTDOOR · KOLKATA" },
  { src: "/work-4.jpg", brand: "High-Street Media", meta: "OUTDOOR · KOLKATA" },
];

const wipe = {
  initial: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  inView: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
};

export default function Work() {
  return (
    <section id="work" className="relative bg-jkblue-deep text-cream overflow-hidden">
      {/* cream -> deep blue blend so it flows from Services */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">OUR WORK</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.5rem,7vw,6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              Campaigns that <span className="text-grad">turned heads.</span>
            </h2>
          </Reveal>
        </div>

        {/* big featured billboard */}
        <motion.figure
          variants={wipe}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FEATURE.src}
            alt={FEATURE.brand}
            className="aspect-[16/10] sm:aspect-[16/7] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/20 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-copper text-xs tracking-[0.3em] mb-2">{FEATURE.meta}</p>
            <h3 className="font-display text-3xl sm:text-5xl font-extrabold">{FEATURE.brand}</h3>
            <p className="mt-2 text-cream/75 max-w-lg">{FEATURE.line}</p>
          </figcaption>
        </motion.figure>

        {/* editorial grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GRID.map((w, i) => (
            <motion.figure
              key={w.src}
              variants={wipe}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.src}
                alt={w.brand}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep/95 via-jkblue-deep/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-1 opacity-95 transition-all duration-300 group-hover:translate-y-0">
                <p className="text-copper text-[10px] tracking-[0.3em] mb-1">{w.meta}</p>
                <h3 className="font-display text-lg sm:text-xl font-bold leading-tight">{w.brand}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
            Your brand, next →
          </a>
        </div>
      </div>
    </section>
  );
}
