"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";

// Big-type service list with a cursor-following image reveal — the signature
// modern-agency interaction. Hover a service on desktop and its billboard photo
// pops up and trails the cursor. Mobile shows a clean big-type list.
const SERVICES = [
  ["Outdoor Advertising", "/work/w-audi.jpg"],
  ["Digital OOH", "/work-2.jpg"],
  ["Unipoles", "/work/w-stylebaazar.jpg"],
  ["Branding", "/work/w-idee.jpg"],
  ["In-shop Branding", "/work-3.jpg"],
  ["Corporate Events", "/hero-1.jpg"],
  ["Rural Promotions", "/work-4.jpg"],
  ["Printing", "/work/w-joi-clean.jpg"],
  ["Digital Wall Painting", "/work-2.jpg"],
  ["Innovations", "/work/w-audi.jpg"],
];

export default function Services() {
  const [touch, setTouch] = useState(false);
  const [hover, setHover] = useState(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const x = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const onMove = (e) => { mx.set(e.clientX); my.set(e.clientY); };

  return (
    <section id="services" className="cv-auto relative bg-cream text-ink overflow-hidden">
      {/* deep blue -> cream blend so it flows from Reach */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">OUR COMPETENCIES</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.5rem,7vw,6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              A <span className="text-grad">360°</span> partner.
            </h2>
          </Reveal>
        </div>

        {/* the big-type list */}
        <div onMouseMove={touch ? undefined : onMove}>
          {SERVICES.map(([name, img], i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => !touch && setHover(i)}
              onMouseLeave={() => !touch && setHover(null)}
              className="group flex items-center justify-between gap-4 border-b border-ink/10 py-4 sm:py-6"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-display text-xs sm:text-sm font-bold text-jkred/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display font-extrabold leading-none transition-colors duration-200 group-hover:text-jkred"
                  style={{ fontSize: "clamp(1.5rem,4.5vw,3.5rem)", letterSpacing: "-0.01em" }}
                >
                  {name}
                </h3>
              </div>
              <span className="shrink-0 text-xl sm:text-2xl text-ink/25 transition-all duration-200 group-hover:translate-x-1 group-hover:text-jkred">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* cursor-following image reveal (desktop only) */}
      {!touch && (
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-[60]"
        >
          <motion.div
            animate={{ opacity: hover != null ? 1 : 0, scale: hover != null ? 1 : 0.8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-72 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 rotate-3"
          >
            {hover != null && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={SERVICES[hover][1]} alt="" className="h-full w-full object-cover" />
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
