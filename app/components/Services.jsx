"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";

// Cursor-gated kinetic service switcher: hover the text and the wheel drives the
// diagonal typography (page stays put); move off and the page scrolls normally.
// At the ends of the list the wheel is released so you never get trapped.
const SERVICES = [
  { tag: "OUTDOOR", name: "Outdoor Hoardings" },
  { tag: "DIGITAL", name: "Digital OOH" },
  { tag: "UNIPOLE", name: "Unipoles" },
  { tag: "TRANSIT", name: "Transit & Airport" },
  { tag: "RETAIL", name: "In-shop Branding" },
  { tag: "RURAL", name: "Rural Promotions" },
  { tag: "INNOVATION", name: "Innovations" },
];

const ITEM = 96;
const N = SERVICES.length;
const SENS = 0.0011; // wheel sensitivity

const GRAD = {
  fontSize: "clamp(2.25rem,4.5vw,4.25rem)",
  letterSpacing: "-0.02em",
  backgroundImage: "linear-gradient(90deg,#ffffff,#ffd9a8,#00a8d6,#5b52ff,#ffd9a8,#ffffff)",
  backgroundSize: "220% 100%",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  animation: "jkslide 3.2s linear infinite",
};
const OUTLINE = {
  fontSize: "clamp(2.25rem,4.5vw,4.25rem)",
  letterSpacing: "-0.02em",
  color: "transparent",
  WebkitTextStroke: "1.4px rgba(246,239,223,0.5)",
};

function ServiceLine({ progress, i, total, name, active }) {
  const center = (total - 1) / 2;
  const lineX = useTransform(progress, [0, 1], [(i - center) * 34, -(i - center) * 34]);
  return (
    <motion.div className="flex items-center" style={{ height: ITEM, x: lineX }}>
      <span className="font-display font-extrabold uppercase whitespace-nowrap leading-none pl-6" style={active ? GRAD : OUTLINE}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Services() {
  const wheelRef = useRef(null);
  const [active, setActive] = useState(0);

  const mp = useMotionValue(0); // raw progress 0..1 driven by wheel
  const sp = useSpring(mp, { stiffness: 120, damping: 26, mass: 0.5 });

  const listY = useTransform(sp, [0, 1], [-ITEM / 2, -ITEM / 2 - (N - 1) * ITEM]);
  const rot = useTransform(sp, [0, 1], [-6, -1.5]);
  const groupX = useTransform(sp, [0, 1], [40, -40]);
  const scale = useTransform(sp, [0, 1], [0.93, 1.07]);

  useMotionValueEvent(sp, "change", (p) => {
    setActive(Math.min(N - 1, Math.max(0, Math.round(p * (N - 1)))));
  });

  // capture the wheel only while the cursor is over the text (and not at an end)
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
      {/* ===== desktop: cursor-gated kinetic switcher ===== */}
      <div className="hidden lg:flex items-center justify-center px-6 py-24">
        <div className="relative grid h-[80vh] w-full max-w-7xl grid-cols-2 overflow-hidden rounded-3xl bg-jkred text-cream shadow-2xl shadow-jkred/25">
          {/* left — active service */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between p-12 lg:p-16"
          >
            <div>
              <p className="tracking-[0.4em] text-xs font-bold text-cream/70 mb-6">{a.tag}</p>
              <h2
                className="font-display font-extrabold leading-[0.95]"
                style={{
                  fontSize: "clamp(2.5rem,4vw,4rem)",
                  letterSpacing: "-0.02em",
                  backgroundImage: "linear-gradient(90deg,#ffffff,#ffd9a8,#00a8d6,#5b52ff,#ffd9a8,#ffffff)",
                  backgroundSize: "220% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "jkslide 3.2s linear infinite",
                }}
              >
                {a.name}
              </h2>
            </div>
            <a href="#contact" className="group inline-flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/50 text-lg transition-all duration-300 group-hover:bg-cream group-hover:text-jkred">→</span>
              <span className="text-sm font-semibold tracking-wide">Read More</span>
            </a>
          </motion.div>

          {/* right — wheel-driven kinetic stack (hover to explore) */}
          <div ref={wheelRef} className="relative overflow-hidden cursor-ns-resize">
            <div className="absolute inset-x-0 top-1/2">
              <motion.div style={{ rotate: rot, x: groupX, scale }} className="origin-center will-change-transform">
                <motion.div style={{ y: listY }}>
                  {SERVICES.map((s, i) => (
                    <ServiceLine key={s.name} progress={sp} i={i} total={N} name={s.name} active={i === active} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-jkred to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-jkred to-transparent" />
            {/* hint */}
            <div className="pointer-events-none absolute bottom-8 right-8 text-[10px] tracking-[0.3em] text-cream/50">SCROLL HERE TO EXPLORE ↕</div>
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
