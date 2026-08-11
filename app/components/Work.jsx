"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bokeh from "./Bokeh";

const WORKS = [
  { src: "/work/w-audi.jpg", brand: "Audi A4", meta: "Hoarding · Kolkata", line: "“Some see what’s there. We see beyond.”" },
  { src: "/work/w-stylebaazar.jpg", brand: "Style Baazar", meta: "Hoarding · Kolkata", line: "Fashion, front and centre on the flyover." },
  { src: "/work/w-joi.jpg", brand: "JOI Yogurt", meta: "Hoarding · Kolkata", line: "Launching the first-ever Nolen Gur probiotic." },
  { src: "/work/w-idee.jpg", brand: "IDEE Eyewear", meta: "Airport Media · Kolkata", line: "Premium eyewear, at eye level in the terminal." },
];

const slide = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
};

export default function Work() {
  const [[i, dir], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const n = WORKS.length;

  const go = useCallback((d) => setState(([p]) => [(p + d + n) % n, d]), [n]);
  const jump = (t) => setState(([p]) => [t, t > p ? 1 : -1]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [paused, go]);

  const w = WORKS[i];

  return (
    <section id="work" className="relative bg-jkblue-deep text-cream overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <Bokeh tone="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-3">OUR WORK</p>
            <h2 className="font-display h-xl font-extrabold">
              Campaigns that <span className="text-grad">turned heads.</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button onClick={() => go(-1)} aria-label="Previous" className="h-11 w-11 rounded-full border border-white/25 hover:bg-white/10 transition text-lg">‹</button>
            <button onClick={() => go(1)} aria-label="Next" className="h-11 w-11 rounded-full border border-white/25 hover:bg-white/10 transition text-lg">›</button>
          </div>
        </div>

        {/* stage */}
        <div
          className="relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 bg-black/30"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.div
              key={i}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => { if (info.offset.x < -80) go(1); else if (info.offset.x > 80) go(-1); }}
            >
              {/* Ken-Burns slow zoom */}
              <motion.img
                src={w.src}
                alt={w.brand}
                className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 6, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/25 to-transparent" />
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
              >
                <p className="text-copper text-xs tracking-[0.3em] mb-2">{w.meta.toUpperCase()}</p>
                <h3 className="font-display text-3xl sm:text-5xl font-extrabold">{w.brand}</h3>
                <p className="mt-2 text-cream/75 max-w-lg">{w.line}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* index */}
          <div className="absolute top-5 right-6 font-display font-bold text-sm text-cream/70 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
        </div>

        {/* dots + progress */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {WORKS.map((_, k) => (
            <button
              key={k}
              onClick={() => jump(k)}
              aria-label={`Go to ${WORKS[k].brand}`}
              className="group relative h-2.5 rounded-full transition-all duration-300"
              style={{ width: k === i ? 34 : 10, background: k === i ? "var(--color-jkred)" : "rgba(255,255,255,0.25)" }}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-block rounded-full bg-jkred px-7 py-3.5 font-semibold text-white hover:bg-red-600 transition shadow-lg shadow-jkred/30">
            Your brand, next →
          </a>
        </div>
      </div>
    </section>
  );
}
