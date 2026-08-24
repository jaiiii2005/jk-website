"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Hover-to-reveal service switcher: hover a service on the right and a real
// billboard photo reveals on the left (crossfade + slow zoom), its detail
// overlaid, while the name flows in gradient. No scroll-jacking; works everywhere.
const SERVICES = [
  { tag: "OUTDOOR", name: "Outdoor Hoardings", desc: "Landmark hoardings & billboards across the East.", img: "/work/w-audi.jpg" },
  { tag: "DIGITAL", name: "Digital OOH", desc: "LED & programmatic screens at prime junctions.", img: "/work-2.jpg" },
  { tag: "UNIPOLE", name: "Unipoles", desc: "High-rise landmark unipoles that own the skyline.", img: "/work/w-stylebaazar.jpg" },
  { tag: "TRANSIT", name: "Transit & Airport", desc: "Media that moves with the crowd — metro, transit & airport.", img: "/work/w-idee.jpg" },
  { tag: "RETAIL", name: "In-shop Branding", desc: "Point-of-sale visibility, right where buying happens.", img: "/work-3.jpg" },
  { tag: "RURAL", name: "Rural Promotions", desc: "Reaching audiences far beyond the metros.", img: "/work-4.jpg" },
  { tag: "INNOVATION", name: "Innovations", desc: "OOH firsts — like a live radio studio inside a billboard.", img: "/work/w-joi-clean.jpg" },
];

const GRAD = {
  backgroundImage: "linear-gradient(90deg,#ffffff,#ffd9a8,#00a8d6,#5b52ff,#ffd9a8,#ffffff)",
  backgroundSize: "220% 100%",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  animation: "jkslide 3.2s linear infinite",
};

export default function Services() {
  const [active, setActive] = useState(0);
  const a = SERVICES[active];

  return (
    <section id="services" className="relative bg-cream text-ink">
      {/* ===== desktop: hover-to-reveal switcher ===== */}
      <div className="hidden lg:flex items-center justify-center px-6 py-24">
        <div className="grid w-full max-w-7xl grid-cols-[1.05fr_0.95fr] gap-8 rounded-3xl bg-jkred text-cream p-8 shadow-2xl shadow-jkred/25">
          {/* left — reveal image with overlaid detail */}
          <div className="relative h-[68vh] overflow-hidden rounded-2xl">
            {SERVICES.map((s, i) => (
              <motion.img
                key={s.img + i}
                src={s.img}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1.08 : 1 }}
                transition={{ opacity: { duration: 0.6 }, scale: { duration: 6, ease: "easeOut" } }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-jkred via-jkred/40 to-jkred/10" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="tracking-[0.35em] text-xs font-bold text-cream/80 mb-3">{a.tag}</p>
                  <h2 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2rem,2.8vw,3rem)", letterSpacing: "-0.02em" }}>{a.name}</h2>
                  <p className="mt-3 max-w-sm text-cream/85 leading-relaxed">{a.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* right — the list */}
          <div className="flex flex-col justify-center pr-2">
            <p className="tracking-[0.4em] text-xs font-bold text-cream/60 mb-6">OUR SERVICES</p>
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center justify-between border-b border-cream/15 py-3.5 text-left last:border-0"
                >
                  <span
                    className="font-display font-extrabold uppercase leading-none transition-all duration-300"
                    style={
                      on
                        ? { fontSize: "clamp(1.6rem,2.8vw,2.75rem)", letterSpacing: "-0.02em", transform: "translateX(10px)", ...GRAD }
                        : { fontSize: "clamp(1.6rem,2.8vw,2.75rem)", letterSpacing: "-0.02em", color: "rgba(246,239,223,0.4)" }
                    }
                  >
                    {s.name}
                  </span>
                  <span className={`text-2xl transition-all duration-300 ${on ? "translate-x-0 opacity-100 text-cream" : "-translate-x-2 opacity-0"}`}>→</span>
                </button>
              );
            })}
            <a href="#contact" className="group mt-8 inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/50 text-lg transition-all duration-300 group-hover:bg-cream group-hover:text-jkred">→</span>
              <span className="text-sm font-semibold tracking-wide">Read More</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== mobile: image cards ===== */}
      <div className="lg:hidden px-6 py-20">
        <Reveal><p className="tracking-[0.4em] text-xs font-bold text-copper mb-8">OUR SERVICES</p></Reveal>
        <div className="space-y-5">
          {SERVICES.map((s) => (
            <Reveal key={s.name}>
              <div className="relative overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-jkred via-jkred/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <p className="text-[10px] tracking-[0.3em] text-cream/70 mb-1">{s.tag}</p>
                  <h3 className="font-display text-2xl font-extrabold">{s.name}</h3>
                  <p className="mt-1 text-sm text-cream/80">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
