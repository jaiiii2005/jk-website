"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Reveal from "./Reveal";

// Pinned service switcher with kinetic-typography motion: the whole name stack is
// tilted and gets pulled DIAGONALLY through the viewport by scroll — vertical roll
// + horizontal drift + rotation shift + tiny scale, with each line drifting at a
// slightly different speed (parallax). Active name = flowing gradient fill.
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

// One line — drifts horizontally at its own speed (parallax) as you scroll.
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
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // vertical roll
  const listY = useTransform(scrollYProgress, [0, 1], [-ITEM / 2, -ITEM / 2 - (N - 1) * ITEM]);
  // diagonal pull: rotation shift + horizontal drift + tiny scale — all scrubbed
  const rot = useTransform(scrollYProgress, [0, 1], [-6, -1.5]);
  const groupX = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1.07]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(N - 1, Math.max(0, Math.round(p * (N - 1)))));
  });

  const a = SERVICES[active];

  return (
    <section id="services" className="relative bg-cream text-ink">
      {/* ===== desktop: pinned kinetic switcher ===== */}
      <div ref={ref} className="hidden lg:block" style={{ height: `${N * 85}vh` }}>
        <div className="sticky top-0 flex h-screen items-center justify-center px-6 py-10">
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

            {/* right — diagonally pulled kinetic name stack */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-1/2">
                <motion.div style={{ rotate: rot, x: groupX, scale }} className="origin-center will-change-transform">
                  <motion.div style={{ y: listY }}>
                    {SERVICES.map((s, i) => (
                      <ServiceLine key={s.name} progress={scrollYProgress} i={i} total={N} name={s.name} active={i === active} />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-jkred to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-jkred to-transparent" />
            </div>

            {/* progress dots */}
            <div className="absolute bottom-8 left-12 lg:left-16 flex gap-2">
              {SERVICES.map((_, i) => (
                <span key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === active ? 26 : 8, background: i === active ? "#f6efdf" : "rgba(246,239,223,0.4)" }} />
              ))}
            </div>
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
