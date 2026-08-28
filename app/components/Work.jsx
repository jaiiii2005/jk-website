"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Clean, colour-led editorial gallery of real JK campaigns, with simple
// category filtering. Matches the site's white / black / red aesthetic.
// Every item is a REAL campaign — add more as photos come in from the office;
// category tabs appear automatically from the data below.
const FEATURE = {
  src: "/work/w-audi.jpg",
  brand: "Audi A4",
  meta: "HOARDING · KOLKATA",
  line: "Some see what's there. We see beyond.",
};

const ITEMS = [
  { src: "/work/w-stylebaazar.jpg", brand: "Style Baazar", meta: "Kolkata", cat: "Hoardings" },
  { src: "/work/w-joi-clean.jpg", brand: "JOI Yogurt", meta: "Kolkata", cat: "Hoardings" },
  { src: "/work/w-idee.jpg", brand: "IDEE Eyewear", meta: "Kolkata", cat: "Transit & Airport" },
];

// Build the filter list from the data so it stays honest + auto-updates.
const CATS = ["All", ...Array.from(new Set(ITEMS.map((i) => i.cat)))];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <section id="work" className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-40 md:pt-48 pb-24 md:pb-32">
        {/* header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <Reveal><p className="text-jkred font-semibold tracking-wide text-sm mb-5">Our Work</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.5rem,6.5vw,5.5rem)", letterSpacing: "-0.03em" }}>
              Campaigns that <span className="text-grad">turned heads.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink/60 leading-relaxed">
              Real brands, real sites, real impact — a look at some of the campaigns
              we&rsquo;ve put in front of Eastern India.
            </p>
          </Reveal>
        </div>

        {/* featured campaign — big, full colour */}
        <Reveal>
          <figure className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-jkblue/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FEATURE.src}
              alt={FEATURE.brand}
              className="aspect-[16/10] sm:aspect-[16/8] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-cream">
              <p className="text-copper text-xs tracking-[0.3em] mb-2">{FEATURE.meta}</p>
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold">{FEATURE.brand}</h3>
              <p className="mt-2 text-cream/80 max-w-lg">{FEATURE.line}</p>
            </figcaption>
          </figure>
        </Reveal>

        {/* filter tabs */}
        <div className="mt-14 mb-8 flex flex-wrap gap-2.5">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-jkblue-deep text-cream"
                  : "border border-ink/15 text-ink/60 hover:border-jkred/40 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* gallery grid — colour, reflows on filter change */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {shown.map((w) => (
              <motion.figure
                key={w.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl shadow-lg shadow-jkblue/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.brand}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-cream">
                  <p className="text-copper text-[10px] tracking-[0.3em] mb-1 uppercase">{w.cat} · {w.meta}</p>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight">{w.brand}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              Your brand, next →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
