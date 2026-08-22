"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";

// Pinned, scroll-driven case-study showcase (OUTFRONT style): the section locks
// while a full-bleed campaign photo + its story sit on the left and a kinetic
// name list rolls on the right — scrolling advances through the cases.
// NOTE: real JK campaigns — add more with real photos/stories from management.
const CASES = [
  { brand: "Audi A4", img: "/work/w-audi.jpg", line: "Front and centre on Kolkata’s busiest flyover.", tags: ["Kolkata", "Hoarding"] },
  { brand: "Style Baazar", img: "/work/w-stylebaazar.jpg", line: "Fashion, larger than life — right across the city.", tags: ["Kolkata", "Hoarding"] },
  { brand: "JOI Yogurt", img: "/work/w-joi-clean.jpg", line: "Launched India’s first Nolen Gur probiotic, outdoors.", tags: ["Kolkata", "Product Launch"] },
  { brand: "IDEE Eyewear", img: "/work/w-idee.jpg", line: "Premium eyewear, at eye level in the terminal.", tags: ["Kolkata", "Airport Media"] },
  { brand: "Red FM 93.5", img: "/work-2.jpg", line: "A live radio studio — built inside a billboard.", tags: ["Kolkata", "Innovation"] },
];

function Photos({ active }) {
  return (
    <div className="absolute inset-0">
      {CASES.map((c, i) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={c.img}
          src={c.img}
          alt={c.brand}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-jkblue-deep via-jkblue-deep/70 to-jkblue-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep/80 to-transparent" />
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(CASES.length - 1, Math.max(0, Math.floor(p * CASES.length)));
    setActive(i);
  });

  const a = CASES[active];

  return (
    <section id="work" className="relative bg-jkblue-deep text-cream">
      {/* ===== desktop: pinned scroll experience ===== */}
      <div ref={ref} className="hidden lg:block" style={{ height: `${CASES.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <Photos active={active} />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <div className="grid grid-cols-2 items-center gap-8">
              {/* left — active case story */}
              <div>
                <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">OUR WORK</p>
                <div className="flex gap-2 mb-5">
                  {a.tags.map((t) => (
                    <span key={t} className="rounded-full border border-cream/25 px-3 py-1 text-xs text-cream/80">{t}</span>
                  ))}
                </div>
                <h2 key={a.line} className="font-display font-extrabold leading-[1.05] max-w-lg" style={{ fontSize: "clamp(2rem,3.4vw,3.25rem)", letterSpacing: "-0.02em" }}>
                  {a.line}
                </h2>
                <a href="#contact" className="group mt-10 inline-flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 text-lg transition-all duration-300 group-hover:bg-jkred group-hover:border-jkred">→</span>
                  <span className="text-sm font-semibold tracking-wide">Read full case</span>
                </a>
              </div>

              {/* right — kinetic name list */}
              <div className="flex flex-col items-end justify-center">
                {CASES.map((c, i) => {
                  const on = i === active;
                  return (
                    <span
                      key={c.brand}
                      className="block text-right font-display font-extrabold uppercase leading-[1.05] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.75rem,3.4vw,3rem)",
                        color: on ? "#f6efdf" : "transparent",
                        WebkitTextStroke: on ? "0" : "1.2px rgba(246,239,223,0.4)",
                      }}
                    >
                      {c.brand}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* progress dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {CASES.map((_, i) => (
                <span key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === active ? 28 : 8, background: i === active ? "var(--color-jkred)" : "rgba(255,255,255,0.3)" }} />
              ))}
            </div>
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
