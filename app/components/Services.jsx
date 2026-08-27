"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {children}
  </svg>
);

const SERVICES = [
  { name: "Outdoor Hoardings", desc: "Landmark hoardings & billboards at high-impact sites across the East.", icon: svg(<><rect x="2.5" y="4" width="19" height="11" rx="1.5" /><path d="M7 15v6M17 15v6M4.5 21h5M14.5 21h5M6 8h12" /></>) },
  { name: "Digital OOH", desc: "LED screens & programmatic digital displays at prime junctions.", icon: svg(<><rect x="2.5" y="4.5" width="19" height="12" rx="1.5" /><path d="M9 20h6M12 16.5V20M7.5 11l2.5 2 2-3 2 2.5 2.5-3.5" /></>) },
  { name: "Unipoles", desc: "High-rise landmark unipoles that own the skyline at key crossings.", icon: svg(<><rect x="5" y="3" width="14" height="7.5" rx="1" /><path d="M12 10.5V21M8.5 21h7M8 6.5h8" /></>) },
  { name: "Transit & Airport", desc: "Metro, transit and airport media that moves with the crowd.", icon: svg(<><rect x="4" y="4" width="12" height="12" rx="2" /><path d="M3 16h14M6 20v-1M14 20v-1M6.5 8h7" /><path d="M17 9l4 1.5v2l-4-.5" /></>) },
  { name: "In-shop Branding", desc: "Point-of-sale visibility, right where the buying happens.", icon: svg(<><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5 5 4.5h14l2 5" /><path d="M3 9.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0" /><path d="M10 20v-5h4v5" /></>) },
  { name: "Corporate Events", desc: "Launches & activations that make noise, end to end.", icon: svg(<><rect x="9" y="3" width="6" height="10" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" /></>) },
  { name: "Rural Promotions", desc: "Reaching audiences far beyond the metros.", icon: svg(<><path d="M2.5 7h10v7.5h-10z" /><path d="M12.5 9.5h4l3 3v2h-7z" /><circle cx="7" cy="17" r="1.8" /><circle cx="16.5" cy="17" r="1.8" /></>) },
  { name: "Printing", desc: "High-quality large-format production — all in-house.", icon: svg(<><path d="M7 8.5V3.5h10v5" /><rect x="4" y="8.5" width="16" height="7.5" rx="1.5" /><path d="M7 13.5h10V21H7z" /></>) },
  { name: "Digital Wall Painting", desc: "Hand-crafted wall media, delivered at scale.", icon: svg(<><rect x="3" y="5" width="12" height="5" rx="1.5" /><path d="M15 7.5h3.5A1.5 1.5 0 0 1 20 9v1a1.5 1.5 0 0 1-1.5 1.5H12" /><path d="M10.5 12.5h3v3a1.5 1.5 0 0 1-3 0z" /><path d="M12 18.5V21" /></>) },
  { name: "Innovations", desc: "First-of-its-kind OOH — like a live radio studio inside a billboard.", icon: svg(<><path d="M9.5 18h5M10.5 21h3" /><path d="M12 3a6 6 0 0 0-3.8 10.7c.6.5 1 1.2 1.1 2h5.4c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z" /></>) },
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-40 md:pt-48 pb-28 md:pb-40">
        {/* header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal><p className="text-jkred font-semibold tracking-wide text-sm mb-5">Our Services</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}>
              Outdoor media,<br /><span className="text-grad">end to end.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink/60 leading-relaxed">
              From a single landmark hoarding to a multi-city campaign across the East — with printing,
              fabrication and monitoring all handled in-house. One partner, the whole spread.
            </p>
          </Reveal>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-jkred/40 hover:shadow-xl hover:shadow-jkblue/10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jkred/5 text-jkblue transition-colors duration-300 group-hover:bg-jkred/10 group-hover:text-jkred">
                    {s.icon}
                  </div>
                  <span className="font-display text-sm font-bold text-ink/25">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-lg font-bold group-hover:text-jkblue transition-colors">{s.name}</h3>
                <p className="mt-2 text-sm text-ink/55 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-jkblue-deep text-cream px-8 py-10 sm:px-12">
            <p className="font-display text-2xl sm:text-3xl font-bold text-center sm:text-left">Not sure which format fits? <span className="text-grad">Let&rsquo;s plan it.</span></p>
            <Link href="/contact" className="shrink-0 rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              Talk to us →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
