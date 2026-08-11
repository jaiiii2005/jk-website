"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// The 10 competencies (from the deck's "360° for brand activation").
const SERVICES = [
  ["🛣️", "Outdoor Advertising", "Hoardings, gantries & billboards across the East."],
  ["📺", "Digital OOH", "LED screens & programmatic digital displays."],
  ["🗼", "Unipoles", "Landmark high-rise unipoles at prime junctions."],
  ["✨", "Branding", "End-to-end brand presence, built to be seen."],
  ["🏪", "In-shop Branding", "Point-of-sale visibility where buying happens."],
  ["🎤", "Corporate Events", "Launches & activations that make noise."],
  ["🌾", "Rural Promotions", "Reaching audiences far beyond the metros."],
  ["🖨️", "Printing", "High-quality large-format production, in-house."],
  ["🎨", "Digital Wall Painting", "Hand-crafted wall media, at scale."],
  ["💡", "Innovations", "First-of-its-kind OOH — like live radio on a billboard."],
];

export default function Services() {
  return (
    <section id="services" className="relative bg-cream text-ink overflow-hidden">
      {/* deep blue -> cream blend at the top */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
      <Bokeh tone="light" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR COMPETENCIES</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display h-xl font-extrabold max-w-2xl">
                A <span className="text-grad">360°</span> partner for brand activation.
              </h2>
            </Reveal>
          </div>

          {/* rotating 360 badge */}
          <Reveal delay={0.1}>
            <div className="relative h-28 w-28 shrink-0">
              <div className="spin-slow absolute inset-0 rounded-full border-2 border-dashed border-jkblue/40" />
              <div className="absolute inset-2 rounded-full bg-jkblue text-cream flex flex-col items-center justify-center">
                <span className="font-display font-extrabold text-2xl leading-none">360°</span>
                <span className="text-[9px] tracking-[0.2em] text-copper mt-1">ACTIVATION</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {SERVICES.map(([icon, title, desc], i) => (
            <Reveal key={title} delay={(i % 5) * 0.06 + Math.floor(i / 5) * 0.05}>
              <div className="shine group h-full rounded-2xl border border-ink/10 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-jkred/60 hover:bg-white hover:shadow-xl hover:shadow-jkblue/10">
                <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                  {icon}
                </div>
                <div className="font-display text-[11px] font-bold text-jkred/70 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-base font-bold leading-tight text-ink group-hover:text-jkblue">
                  {title}
                </h3>
                <p className="mt-2 text-xs text-ink/55 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
