"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// Interactive service switcher (Bright Outdoor style): a dark panel on the cream
// page — active service detail on the left, a big filled/outlined word list on
// the right. Hover (or tap) a service to make it active.
const SERVICES = [
  { name: "Outdoor Hoardings", tag: "OUTDOOR", desc: "Landmark hoardings & billboards across the East." },
  { name: "Digital OOH", tag: "DIGITAL", desc: "LED & programmatic screens at prime junctions." },
  { name: "Unipoles", tag: "UNIPOLE", desc: "High-rise landmark unipoles that own the skyline." },
  { name: "Transit & Airport", tag: "TRANSIT", desc: "Airport, metro & transit media that moves with the crowd." },
  { name: "In-shop Branding", tag: "RETAIL", desc: "Point-of-sale visibility, right where buying happens." },
  { name: "Rural Promotions", tag: "RURAL", desc: "Reaching audiences far beyond the metros." },
  { name: "Innovations", tag: "FIRST-OF-ITS-KIND", desc: "OOH firsts — like a live radio studio inside a billboard." },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const a = SERVICES[active];

  return (
    <section id="services" className="cv-auto relative bg-cream text-ink overflow-hidden">
      {/* deep blue -> cream blend so it flows from Reach */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-8">OUR SERVICES</p></Reveal>

        {/* dark panel */}
        <Reveal delay={0.05}>
          <div className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-ink text-cream p-8 sm:p-12 lg:p-14 shadow-2xl shadow-jkblue/20">
            {/* left — active service detail */}
            <div className="flex flex-col justify-between min-h-[280px]">
              <div>
                <p key={a.tag} className="text-copper tracking-[0.35em] text-xs mb-4">{a.tag}</p>
                <h3
                  key={a.name}
                  className="font-display font-extrabold leading-[0.95]"
                  style={{ fontSize: "clamp(2.25rem,4.5vw,3.75rem)", letterSpacing: "-0.02em" }}
                >
                  {a.name}
                </h3>
                <p key={a.desc} className="mt-5 max-w-sm text-cream/70 leading-relaxed">{a.desc}</p>
              </div>

              <a href="#contact" className="group mt-8 inline-flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 text-lg transition-all duration-300 group-hover:bg-jkred group-hover:border-jkred">
                  →
                </span>
                <span className="text-sm font-semibold tracking-wide">Enquire</span>
              </a>
            </div>

            {/* right — big word list */}
            <div className="flex flex-col items-start lg:items-end justify-center">
              {SERVICES.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.name}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="block text-left lg:text-right font-display font-extrabold uppercase leading-[1.05] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(1.5rem,3.6vw,3rem)",
                      letterSpacing: "-0.01em",
                      color: on ? "#f6efdf" : "transparent",
                      WebkitTextStroke: on ? "0" : "1px rgba(246,239,223,0.45)",
                    }}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
