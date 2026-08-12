"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// NOTE: 15+ cities and 500+ brands are placeholders — confirm exact figures with management.
const STATS = [
  { to: 50, suffix: "", label: "Years, forging ahead" },
  { to: 3800, suffix: "+", label: "Media sites across the East" },
  { to: 15, suffix: "+", label: "Cities covered" },
  { to: 500, suffix: "+", label: "Brands served" },
];

const fmt = (n) => n.toLocaleString("en-IN");

// subtle film grain (SVG noise) as a data URI
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Stat({ to, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.45 });   // no "once" — replays each time
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { setN(0); return; }                // reset when it leaves, so it counts again
    let raf;
    const t0 = performance.now();
    const dur = 1400;
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center px-3"
    >
      <div
        className="font-display font-extrabold leading-none tabular-nums whitespace-nowrap text-cream"
        style={{ fontSize: "clamp(2.1rem,5vw,4rem)", textShadow: "0 2px 30px rgba(255,180,140,0.45), 0 4px 20px rgba(0,0,0,0.35)" }}
      >
        {fmt(n)}{suffix}
      </div>
      <p className="mt-3 text-white/85 text-sm sm:text-base tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden text-cream">
      {/* 1. slowly-drifting cinematic gradient */}
      <div
        className="jkcine absolute inset-0"
        style={{
          background: "linear-gradient(120deg,#1a0a1e,#e11b2e,#8a0f2e,#3a1150,#241c7a,#12103f)",
          backgroundSize: "300% 300%",
          animation: "jkgrad 16s ease infinite",
        }}
      />
      {/* 2. warm key-light spotlight behind the text */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[90vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,150,90,0.35), rgba(255,90,120,0.12), transparent)" }}
        animate={{ opacity: [0.6, 0.95, 0.6], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 3. drifting embers (desktop only — heavy on phones) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="jkcine absolute rounded-full"
            style={{
              left: `${(i * 61) % 100}%`,
              bottom: `-10px`,
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: i % 2 ? "rgba(255,190,140,0.9)" : "rgba(255,120,140,0.85)",
              filter: "blur(0.4px)",
              animation: `jkember ${7 + (i % 5) * 2}s linear ${i * -1.1}s infinite`,
            }}
          />
        ))}
      </div>
      {/* 4. moving light sheen */}
      <div
        className="jkcine pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)",
          backgroundSize: "300% 100%",
          animation: "jkslide 7s linear infinite",
        }}
      />
      {/* 5. film grain (desktop only — mix-blend is heavy on phones) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay hidden md:block" style={{ backgroundImage: GRAIN }} />
      {/* 6. vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(10,6,20,0.6) 100%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center font-display text-lg sm:text-2xl font-bold mb-12 text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          The largest OOH network in the East.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 divide-white/15 lg:divide-x">
          {STATS.map((s, i) => (
            <Stat key={s.label} to={s.to} suffix={s.suffix} label={s.label} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
