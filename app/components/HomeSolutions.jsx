"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {children}
  </svg>
);

const SOL = [
  { name: "Outdoor Hoardings", desc: "Landmark hoardings & billboards across the East.", icon: svg(<><rect x="2.5" y="4" width="19" height="11" rx="1.5" /><path d="M7 15v6M17 15v6M4.5 21h5M14.5 21h5M6 8h12" /></>) },
  { name: "Unipoles", desc: "High-rise landmark unipoles that own the skyline.", icon: svg(<><rect x="5" y="3" width="14" height="7.5" rx="1" /><path d="M12 10.5V21M8.5 21h7M8 6.5h8" /></>) },
  { name: "Transit & Airport", desc: "Metro, transit & airport media that moves with the crowd.", icon: svg(<><rect x="4" y="4" width="12" height="12" rx="2" /><path d="M3 16h14M6 20v-1M14 20v-1M6.5 8h7" /><path d="M17 9l4 1.5v2l-4-.5" /></>) },
  { name: "In-shop Branding", desc: "Point-of-sale visibility, right where buying happens.", icon: svg(<><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5 5 4.5h14l2 5" /><path d="M3 9.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0" /><path d="M10 20v-5h4v5" /></>) },
  { name: "Rural & Events", desc: "Reaching beyond the metros — plus launches & activations.", icon: svg(<><path d="M12 21s-6-4.5-6-9a6 6 0 0 1 12 0c0 4.5-6 9-6 9z" /><circle cx="12" cy="12" r="2.2" /></>) },
];

export default function HomeSolutions() {
  return (
    <section className="grad-panel text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <Reveal><p className="tracking-[0.35em] text-xs sm:text-sm font-bold text-white/70 mb-4">OUR SOLUTIONS</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}>
                A 360° outdoor partner.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/services" className="inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-jkred">
              Explore services →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOL.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <Link
                href="/services"
                className="group block h-full rounded-2xl border border-white/15 bg-white/[0.08] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.16] hover:border-white/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cream transition group-hover:bg-white group-hover:text-jkred">
                  {s.icon}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-cream">{s.name}</h3>
                  <span className="text-cream opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                </div>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
