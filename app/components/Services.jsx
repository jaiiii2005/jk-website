"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Hover-to-highlight service switcher: a bold red panel — hover a service on the
// right and it fills with a flowing gradient while its detail updates on the left.
// No scroll-jacking; works on every device. Mobile shows a stacked list.
const SERVICES = [
  { tag: "OUTDOOR", name: "Outdoor Hoardings", desc: "Landmark hoardings & billboards across the East." },
  { tag: "DIGITAL", name: "Digital OOH", desc: "LED & programmatic screens at prime junctions." },
  { tag: "UNIPOLE", name: "Unipoles", desc: "High-rise landmark unipoles that own the skyline." },
  { tag: "TRANSIT", name: "Transit & Airport", desc: "Media that moves with the crowd — metro, transit & airport." },
  { tag: "RETAIL", name: "In-shop Branding", desc: "Point-of-sale visibility, right where buying happens." },
  { tag: "RURAL", name: "Rural Promotions", desc: "Reaching audiences far beyond the metros." },
  { tag: "INNOVATION", name: "Innovations", desc: "OOH firsts — like a live radio studio inside a billboard." },
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
      {/* ===== desktop: hover-to-highlight switcher ===== */}
      <div className="hidden lg:flex items-center justify-center px-6 py-24">
        <div className="grid w-full max-w-7xl grid-cols-[0.9fr_1.1fr] gap-6 rounded-3xl bg-jkred text-cream p-14 shadow-2xl shadow-jkred/25">
          {/* left — active detail */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="tracking-[0.4em] text-xs font-bold text-cream/60 mb-8">OUR SERVICES</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="tracking-[0.35em] text-xs font-bold text-cream/70 mb-4">{a.tag}</p>
                  <h2 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.25rem,3.2vw,3.5rem)", letterSpacing: "-0.02em" }}>
                    {a.name}
                  </h2>
                  <p className="mt-5 max-w-sm text-cream/80 leading-relaxed">{a.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <a href="#contact" className="group mt-10 inline-flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/50 text-lg transition-all duration-300 group-hover:bg-cream group-hover:text-jkred">→</span>
              <span className="text-sm font-semibold tracking-wide">Read More</span>
            </a>
          </div>

          {/* right — the list */}
          <div className="flex flex-col justify-center">
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center justify-between border-b border-cream/15 py-4 text-left last:border-0"
                >
                  <span
                    className="font-display font-extrabold uppercase leading-none transition-all duration-300"
                    style={
                      on
                        ? { fontSize: "clamp(1.75rem,3.2vw,3.25rem)", letterSpacing: "-0.02em", transform: "translateX(12px)", ...GRAD }
                        : { fontSize: "clamp(1.75rem,3.2vw,3.25rem)", letterSpacing: "-0.02em", color: "rgba(246,239,223,0.4)" }
                    }
                  >
                    {s.name}
                  </span>
                  <span className={`text-2xl transition-all duration-300 ${on ? "translate-x-0 opacity-100 text-cream" : "-translate-x-2 opacity-0"}`}>→</span>
                </button>
              );
            })}
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
