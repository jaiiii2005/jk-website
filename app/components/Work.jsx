"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";

// Pinned, scroll-driven case-study showcase (OUTFRONT style). The names are big
// and bleed off the right edge, roll continuously with scroll, and the centred
// one fills white while the rest stay outlined; the photo + story change with it.
const CASES = [
  { brand: "AUDI A4", img: "/work/w-audi.jpg", line: "Front and centre on Kolkata’s busiest flyover.", tags: ["Kolkata", "Hoarding"] },
  { brand: "STYLE BAAZAR", img: "/work/w-stylebaazar.jpg", line: "Fashion, larger than life — right across the city.", tags: ["Kolkata", "Hoarding"] },
  { brand: "JOI YOGURT", img: "/work/w-joi-clean.jpg", line: "Launched India’s first Nolen Gur probiotic, outdoors.", tags: ["Kolkata", "Product Launch"] },
  { brand: "IDEE EYEWEAR", img: "/work/w-idee.jpg", line: "Premium eyewear, at eye level in the terminal.", tags: ["Kolkata", "Airport Media"] },
  { brand: "RED FM 93.5", img: "/work-2.jpg", line: "A live radio studio — built inside a billboard.", tags: ["Kolkata", "Innovation"] },
];

const ITEM = 120; // px per name row
const N = CASES.length;

export default function Work() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // continuous roll — the whole name column slides with scroll
  const listY = useTransform(scrollYProgress, [0, 1], [-ITEM / 2, -ITEM / 2 - (N - 1) * ITEM]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(N - 1, Math.max(0, Math.round(p * (N - 1)))));
  });

  const a = CASES[active];

  return (
    <section id="work" className="relative bg-jkblue-deep text-cream">
      {/* ===== desktop: pinned scroll experience ===== */}
      <div ref={ref} className="hidden lg:block" style={{ height: `${N * 110}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* full-bleed photo with slow zoom + crossfade */}
          <div className="absolute inset-0">
            {CASES.map((c, i) => (
              <motion.img
                key={c.img}
                src={c.img}
                alt={c.brand}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1.08 : 1 }}
                transition={{ opacity: { duration: 0.7 }, scale: { duration: 6, ease: "easeOut" } }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-jkblue-deep via-jkblue-deep/75 to-jkblue-deep/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep/80 to-transparent" />
          </div>

          {/* left — active case story */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1/2 z-10 max-w-[44%] -translate-y-1/2 px-8 lg:px-14"
          >
            <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR WORK</p>
            <div className="flex gap-2 mb-5">
              {a.tags.map((t) => (
                <span key={t} className="rounded-full border border-cream/25 px-3 py-1 text-xs text-cream/80">{t}</span>
              ))}
            </div>
            <h2 className="font-display font-extrabold leading-[1.05]" style={{ fontSize: "clamp(1.75rem,2.8vw,2.75rem)", letterSpacing: "-0.02em" }}>
              {a.line}
            </h2>
            <a href="#contact" className="group mt-9 inline-flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 text-lg transition-all duration-300 group-hover:bg-jkred group-hover:border-jkred">→</span>
              <span className="text-sm font-semibold tracking-wide">Read full case</span>
            </a>
          </motion.div>

          {/* right — big rolling name list that bleeds off the edge */}
          <div className="absolute inset-y-0 left-[44%] right-0 z-10 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2">
              <motion.div style={{ y: listY }}>
                {CASES.map((c, i) => {
                  const on = i === active;
                  return (
                    <div key={c.brand} className="flex items-center" style={{ height: ITEM }}>
                      <span
                        className="font-display font-extrabold uppercase whitespace-nowrap leading-none transition-all duration-300 pl-4"
                        style={{
                          fontSize: "clamp(2.75rem,6.5vw,6rem)",
                          letterSpacing: "-0.02em",
                          color: on ? "#f6efdf" : "transparent",
                          WebkitTextStroke: on ? "0" : "1.4px rgba(246,239,223,0.38)",
                          opacity: on ? 1 : 0.75,
                        }}
                      >
                        {c.brand}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-jkblue-deep to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-jkblue-deep to-transparent" />
          </div>

          {/* progress dots */}
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex gap-2">
            {CASES.map((_, i) => (
              <span key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === active ? 28 : 8, background: i === active ? "var(--color-jkred)" : "rgba(255,255,255,0.3)" }} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== mobile: simple stacked case cards ===== */}
      <div className="lg:hidden mx-auto max-w-2xl px-6 py-20">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs mb-8">OUR WORK</p></Reveal>
        <div className="space-y-6">
          {CASES.map((c) => (
            <Reveal key={c.brand}>
              <div className="relative overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.brand} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex gap-2 mb-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-cream/25 px-2.5 py-0.5 text-[10px] text-cream/80">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-extrabold">{c.brand}</h3>
                  <p className="mt-1 text-sm text-cream/75">{c.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
