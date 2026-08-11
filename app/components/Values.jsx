"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Bokeh from "./Bokeh";

const VALUES = [
  ["01", "Trust", "Five decades of relationships built on keeping our word."],
  ["02", "Service", "Dedicated teams, impeccable delivery — every campaign."],
  ["03", "Honesty", "Transparent, net-discounted pricing. No brokering, ever."],
  ["04", "Value-Centricity", "More for less — 7.5–10% committed savings, year on year."],
  ["05", "Accountability", "Monitoring, tracking and post-buy analysis on every site."],
];

function Fifty() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { setN(0); return; }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1400);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 50));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);
  return (
    <span ref={ref} className="text-grad font-display font-extrabold leading-none" style={{ fontSize: "clamp(5rem,14vw,12rem)" }}>
      {n}
    </span>
  );
}

export default function Values() {
  return (
    <section id="values" className="relative overflow-hidden bg-cream text-ink">
      <Bokeh tone="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* the 50 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-2">FIVE DECADES OF</p>
          <Fifty />
          <p className="font-display text-xl sm:text-2xl font-bold text-jkblue -mt-2 tracking-wide">
            YEARS OF <span className="text-jkred">FORGING AHEAD</span>
          </p>
        </div>

        {/* the values */}
        <div>
          {VALUES.map(([idx, label, desc], i) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-ink/10 py-3.5"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-jkred/80 text-xs font-bold">{idx}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink transition-colors group-hover:text-jkred">{label}</h3>
              </div>
              <p className="mt-1 pl-7 text-ink/60 text-sm max-w-md">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
