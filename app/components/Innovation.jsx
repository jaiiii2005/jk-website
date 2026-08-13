"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// Count up to `to` once in view.
function Count({ to, suffix = "", prefix = "", dur = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, dur]);
  return (
    <span ref={ref}>
      {prefix}{n}{suffix}
    </span>
  );
}

const STATS = [
  [1, "st", "First of its kind in India"],
  [10, " days", "Live broadcast, non-stop"],
  [5, " L", "Listenership surge (lakh)"],
  [50, "%+", "Cars dipped their headlights"],
];

const BARS = [0.6, 1, 0.4, 0.85, 0.55, 1, 0.7, 0.35, 0.9, 0.5, 0.8, 0.45];

export default function Innovation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["12%", "-18%"]);

  return (
    <section id="innovation" ref={ref} className="relative bg-jkblue-deep text-cream overflow-hidden">
      <Bokeh tone="dark" />
      <motion.span
        style={{ y: ghostY }}
        className="pointer-events-none absolute -right-8 bottom-4 font-display font-extrabold text-white/[0.03] leading-none select-none text-[26vw]"
      >
        ON AIR
      </motion.span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* text side */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-jkred opacity-75 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-jkred" />
                </span>
                <span className="text-jkred tracking-[0.4em] text-xs sm:text-sm font-semibold">FLAGSHIP INNOVATION</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display h-xl font-extrabold">
                A live radio studio,<br />
                <span className="text-grad">inside a billboard.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
                For Red FM 93.5&rsquo;s anniversary, we built a full, elevated broadcasting
                studio <em>into</em> a hoarding — and ran <strong className="text-cream">10 shows live for 10 days</strong> in
                the heart of Kolkata. A first for India, and perhaps the world.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 font-display text-xl sm:text-2xl font-bold text-copper italic">
                &ldquo;Ab Suno Mat, Dekho Bhi.&rdquo;
              </p>
            </Reveal>
          </div>

          {/* stylised "on-air billboard" with equalizer */}
          <Reveal delay={0.1} dir="left">
            <div className="relative rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-extrabold text-2xl">RED FM <span className="text-jkred">93.5</span></span>
                <span className="flex items-center gap-2 rounded-full bg-jkred px-3 py-1 text-xs font-bold">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> ON AIR
                </span>
              </div>

              {/* equalizer */}
              <div className="flex items-end justify-center gap-1.5 h-32">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className="eqbar w-2.5 rounded-full bg-gradient-to-t from-jkred to-copper"
                    style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s`, animationDuration: `${0.7 + (i % 4) * 0.12}s` }}
                  />
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-cream/60 tracking-wide">
                Live radio broadcasting — from a traditional billboard.
              </p>
            </div>
          </Reveal>
        </div>

        {/* results */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(([to, suffix, label], i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="font-display font-extrabold text-grad" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
                  <Count to={to} suffix={suffix} />
                </div>
                <p className="mt-1 text-sm text-cream/65">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
