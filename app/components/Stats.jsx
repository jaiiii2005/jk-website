"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// CALM / NEUTRAL style test — the restraint the top OOH sites use: soft neutral
// background, huge dark numbers, lots of whitespace, no gradients or effects.
// Let the type and the space do the work.
// NOTE: 15+ cities and 500+ brands are placeholders — confirm with management.
const STATS = [
  { to: 50, suffix: "", label: "Years, forging ahead" },
  { to: 3800, suffix: "+", label: "Media sites across the East" },
  { to: 15, suffix: "+", label: "Cities covered" },
  { to: 500, suffix: "+", label: "Brands served" },
];

const fmt = (n) => n.toLocaleString("en-IN");

function Stat({ to, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const dur = 1500;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="px-2"
    >
      <div
        className="font-display font-extrabold leading-none tabular-nums text-ink whitespace-nowrap"
        style={{ fontSize: "clamp(3rem,8vw,6.5rem)", letterSpacing: "-0.03em" }}
      >
        {fmt(n)}<span className="text-copper">{suffix}</span>
      </div>
      <p className="mt-4 text-sm uppercase tracking-[0.15em] text-ink/45">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#f3eee2] text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-16"
        >
          BY THE NUMBERS
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {STATS.map((s) => (
            <Stat key={s.label} to={s.to} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
