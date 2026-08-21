"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// Consistent line-icon set (stroke = currentColor, so colour is set on the wrapper).
const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
    {children}
  </svg>
);
const ICONS = {
  outdoor: svg(<><rect x="2.5" y="4" width="19" height="11" rx="1.5" /><path d="M7 15v6M17 15v6M4.5 21h5M14.5 21h5M6 8h12" /></>),
  digital: svg(<><rect x="2.5" y="4.5" width="19" height="12" rx="1.5" /><path d="M9 20h6M12 16.5V20M7.5 11l2.5 2 2-3 2 2.5 2.5-3.5" /></>),
  unipole: svg(<><rect x="5" y="3" width="14" height="7.5" rx="1" /><path d="M12 10.5V21M8.5 21h7M8 6.5h8" /></>),
  branding: svg(<><path d="M12 3l2.2 5.3 5.8.5-4.4 3.8 1.3 5.6L12 15.8 7.1 18.8l1.3-5.6L4 9.4l5.8-.5z" /></>),
  inshop: svg(<><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5 5 4.5h14l2 5" /><path d="M3 9.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0" /><path d="M10 20v-5h4v5" /></>),
  events: svg(<><rect x="9" y="3" width="6" height="10" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" /></>),
  rural: svg(<><path d="M2.5 7h10v7.5h-10z" /><path d="M12.5 9.5h4l3 3v2h-7z" /><circle cx="7" cy="17" r="1.8" /><circle cx="16.5" cy="17" r="1.8" /></>),
  printing: svg(<><path d="M7 8.5V3.5h10v5" /><rect x="4" y="8.5" width="16" height="7.5" rx="1.5" /><path d="M7 13.5h10V21H7z" /><path d="M16.5 11.5h.01" /></>),
  wall: svg(<><rect x="3" y="5" width="12" height="5" rx="1.5" /><path d="M15 7.5h3.5A1.5 1.5 0 0 1 20 9v1a1.5 1.5 0 0 1-1.5 1.5H12" /><path d="M10.5 12.5h3v3a1.5 1.5 0 0 1-3 0z" /><path d="M12 18.5V21" /></>),
  innovation: svg(<><path d="M9.5 18h5M10.5 21h3" /><path d="M12 3a6 6 0 0 0-3.8 10.7c.6.5 1 1.2 1.1 2h5.4c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z" /></>),
};

const SERVICES = [
  ["outdoor", "Outdoor Advertising", "Hoardings, gantries & billboards across the East."],
  ["digital", "Digital OOH", "LED screens & programmatic digital displays."],
  ["unipole", "Unipoles", "Landmark high-rise unipoles at prime junctions."],
  ["branding", "Branding", "End-to-end brand presence, built to be seen."],
  ["inshop", "In-shop Branding", "Point-of-sale visibility where buying happens."],
  ["events", "Corporate Events", "Launches & activations that make noise."],
  ["rural", "Rural Promotions", "Reaching audiences far beyond the metros."],
  ["printing", "Printing", "High-quality large-format production, in-house."],
  ["wall", "Digital Wall Painting", "Hand-crafted wall media, at scale."],
  ["innovation", "Innovations", "First-of-its-kind OOH — like live radio on a billboard."],
];

export default function Services() {
  return (
    <section id="services" className="cv-auto relative bg-cream text-ink overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
      <Bokeh tone="light" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR COMPETENCIES</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display h-xl font-extrabold max-w-2xl">
                A <span className="text-grad">360°</span> partner for brand activation.
              </h2>
            </Reveal>
          </div>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {SERVICES.map(([icon, title, desc], i) => (
            <Reveal key={title} delay={(i % 5) * 0.06 + Math.floor(i / 5) * 0.05}>
              <div className="shine group h-full rounded-2xl border border-ink/10 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-jkred/60 hover:bg-white hover:shadow-xl hover:shadow-jkblue/10">
                <div className="mb-3 text-jkblue transition-all duration-300 group-hover:text-jkred group-hover:scale-110">
                  {ICONS[icon]}
                </div>
                <div className="font-display text-[11px] font-bold text-jkred/70 mb-1">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-base font-bold leading-tight text-ink group-hover:text-jkblue">{title}</h3>
                <p className="mt-2 text-xs text-ink/55 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
