"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// 111 client logos extracted from the creds deck.
const LOGOS = Array.from({ length: 111 }, (_, i) => `/clients/client-${String(i + 1).padStart(2, "0")}.png`);
const rnd = () => LOGOS[Math.floor(Math.random() * LOGOS.length)];

// One card: real 3D Y-axis flip that swaps its logo while edge-on, lifts/pops
// during the flip, cycles on its own randomized timer, and flips on hover too.
function FlipCard({ seed, active }) {
  const [faces, setFaces] = useState(() => [LOGOS[(seed * 7) % LOGOS.length], LOGOS[(seed * 7 + 41) % LOGOS.length]]);
  const [flipped, setFlipped] = useState(false);
  const [lift, setLift] = useState(false);
  const liftT = useRef(null);

  const doFlip = () => {
    setFlipped((f) => {
      const next = !f;
      setFaces((prev) => { const c = [...prev]; c[next ? 1 : 0] = rnd(); return c; }); // hidden face gets a fresh logo
      return next;
    });
    setLift(true);
    clearTimeout(liftT.current);
    liftT.current = setTimeout(() => setLift(false), 820);
  };

  useEffect(() => {
    if (!active) return;
    let t;
    const tick = () => { doFlip(); t = setTimeout(tick, 2800 + Math.random() * 3600); };
    t = setTimeout(tick, 700 + seed * 260 + Math.random() * 500);
    return () => clearTimeout(t);
  }, [active, seed]);

  useEffect(() => () => clearTimeout(liftT.current), []);

  const face = "shine absolute inset-0 flex items-center justify-center rounded-2xl bg-white p-5 sm:p-7";
  return (
    <motion.div
      className="relative aspect-square"
      style={{ perspective: "1100px" }}
      initial={{ opacity: 0, scale: 0.82, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: seed * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => active && doFlip()}
    >
      <div
        className="relative h-full w-full rounded-2xl"
        style={{
          transformStyle: "preserve-3d",
          transform: `${flipped ? "rotateY(180deg)" : "rotateY(0deg)"} scale(${lift ? 1.07 : 1})`,
          transition: "transform 0.82s cubic-bezier(0.45,0,0.2,1)",
          boxShadow: lift ? "0 34px 70px rgba(0,0,0,0.45)" : "0 12px 30px rgba(0,0,0,0.25)",
        }}
      >
        <div className={face} style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={faces[0]} alt="Client" loading="lazy" className="max-h-14 sm:max-h-16 max-w-full object-contain" />
        </div>
        <div className={face} style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={faces[1]} alt="Client" loading="lazy" className="max-h-14 sm:max-h-16 max-w-full object-contain" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="clients" ref={ref} className="cv-auto relative overflow-hidden bg-jkblue-deep text-cream">
      {/* deep-blue blend from Leadership */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      {/* subtle rotating rays (desktop only) */}
      <div className="pointer-events-none absolute -right-1/3 top-1/2 hidden -translate-y-1/2 opacity-[0.05] md:block">
        <div className="spin-slow h-[120vh] w-[120vh] rounded-full" style={{ background: "repeating-conic-gradient(#fff 0deg 5deg, transparent 5deg 11deg)" }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
        {/* left — heading */}
        <div>
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">WHO WE WORK WITH</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.25rem,5vw,4.5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
              Trusted by the <span className="text-grad">biggest brands.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              Five decades of campaigns for the names that shape the market — from bold challengers to household giants.
            </p>
          </Reveal>
        </div>

        {/* right — 3×3 flip wall */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <FlipCard key={i} seed={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
