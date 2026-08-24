"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";

// Cursor-gated horizontal service switcher: hover the panel and the wheel swaps
// the giant service name — current slides out left, next slides in from the right
// (tilted, flowing gradient). No vertical roll. Page scrolls normally off it, and
// the wheel releases at the ends so you're never trapped.
const SERVICES = [
  { tag: "OUTDOOR", name: "Outdoor Hoardings", desc: "Landmark hoardings & billboards across the East." },
  { tag: "DIGITAL", name: "Digital OOH", desc: "LED & programmatic screens at prime junctions." },
  { tag: "UNIPOLE", name: "Unipoles", desc: "High-rise landmark unipoles that own the skyline." },
  { tag: "TRANSIT", name: "Transit & Airport", desc: "Media that moves with the crowd — metro, transit & airport." },
  { tag: "RETAIL", name: "In-shop Branding", desc: "Point-of-sale visibility, right where buying happens." },
  { tag: "RURAL", name: "Rural Promotions", desc: "Reaching audiences far beyond the metros." },
  { tag: "INNOVATION", name: "Innovations", desc: "OOH firsts — like a live radio studio inside a billboard." },
];

const N = SERVICES.length;
const SENS = 0.0013;

const GRAD = {
  backgroundImage: "linear-gradient(90deg,#ffffff,#ffd9a8,#00a8d6,#5b52ff,#ffd9a8,#ffffff)",
  backgroundSize: "220% 100%",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  animation: "jkslide 3.2s linear infinite",
};

export default function Services() {
  const wheelRef = useRef(null);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const mp = useMotionValue(0);

  useMotionValueEvent(mp, "change", (p) => {
    const i = Math.min(N - 1, Math.max(0, Math.round(p * (N - 1))));
    setActive((prev) => {
      if (i !== prev) setDir(i > prev ? 1 : -1);
      return i;
    });
  });

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const cur = mp.get();
      const atEndDown = cur >= 0.999 && e.deltaY > 0;
      const atStartUp = cur <= 0.001 && e.deltaY < 0;
      if (atEndDown || atStartUp) return; // release to the page
      e.preventDefault();
      e.stopPropagation();
      mp.set(Math.min(1, Math.max(0, cur + e.deltaY * SENS)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [mp]);

  const a = SERVICES[active];

  return (
    <section id="services" className="relative bg-cream text-ink">
      {/* ===== desktop: cursor-gated horizontal switcher ===== */}
      <div className="hidden lg:flex items-center justify-center px-6 py-24">
        <div ref={wheelRef} className="relative grid h-[78vh] w-full max-w-7xl grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-3xl bg-jkred text-cream shadow-2xl shadow-jkred/25 cursor-ns-resize">
          {/* left — category + description */}
          <div className="flex flex-col justify-between p-12 lg:p-16">
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={a.tag}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="tracking-[0.4em] text-xs font-bold text-cream/70 mb-6"
                >
                  {a.tag}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={a.desc}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-sm text-lg text-cream/85 leading-relaxed"
                >
                  {a.desc}
                </motion.p>
              </AnimatePresence>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/50 text-lg transition-all duration-300 group-hover:bg-cream group-hover:text-jkred">→</span>
              <span className="text-sm font-semibold tracking-wide">Read More</span>
            </a>
          </div>

          {/* right — giant name that swaps horizontally */}
          <div className="relative flex items-center overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.h2
                key={active}
                custom={dir}
                initial={(d) => ({ opacity: 0, x: d > 0 ? 160 : -160, rotate: -3 })}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                exit={(d) => ({ opacity: 0, x: d > 0 ? -160 : 160, rotate: -3 })}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold uppercase leading-[0.95] pl-6 pr-4"
                style={{ fontSize: "clamp(2.75rem,5.5vw,5.5rem)", letterSpacing: "-0.02em", ...GRAD }}
              >
                {a.name}
              </motion.h2>
            </AnimatePresence>

            {/* index counter */}
            <div className="absolute top-10 right-10 font-display font-bold text-cream/60 tabular-nums">
              {String(active + 1).padStart(2, "0")} <span className="text-cream/30">/ {String(N).padStart(2, "0")}</span>
            </div>
            <div className="pointer-events-none absolute bottom-8 right-10 text-[10px] tracking-[0.3em] text-cream/50">SCROLL HERE TO EXPLORE ↕</div>
          </div>

          {/* progress dots */}
          <div className="absolute bottom-8 left-12 lg:left-16 flex gap-2">
            {SERVICES.map((_, i) => (
              <span key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === active ? 26 : 8, background: i === active ? "#f6efdf" : "rgba(246,239,223,0.4)" }} />
            ))}
          </div>
        </div>
      </div>

      {/* ===== mobile: bold stacked list ===== */}
      <div className="lg:hidden px-6 py-20">
        <div className="rounded-3xl bg-jkred text-cream p-8">
          <Reveal><p className="tracking-[0.4em] text-xs font-bold text-cream/70 mb-8">OUR SERVICES</p></Reveal>
          <div className="divide-y divide-cream/15">
            {SERVICES.map((s) => (
              <Reveal key={s.name}>
                <div className="py-4">
                  <p className="text-[10px] tracking-[0.3em] text-cream/60 mb-1">{s.tag}</p>
                  <h3 className="font-display text-2xl font-extrabold">{s.name}</h3>
                  <p className="mt-1 text-sm text-cream/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/50">→</span>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
