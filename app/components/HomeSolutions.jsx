"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const SOL = [
  ["Outdoor Hoardings", "/work/w-audi.jpg"],
  ["Digital OOH", "/work-2.jpg"],
  ["Unipoles", "/work/w-stylebaazar.jpg"],
  ["Transit & Airport", "/work/w-idee.jpg"],
  ["In-shop Branding", "/work-3.jpg"],
  ["Rural & Events", "/work-4.jpg"],
];

export default function HomeSolutions() {
  return (
    <section className="relative bg-white text-ink overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">WHAT WE DO</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em" }}>
                A <span className="text-grad">360°</span> outdoor partner.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/services" className="inline-flex items-center gap-3 text-sm font-semibold text-jkred hover:gap-4 transition-all">
              All services <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SOL.map(([name, img], i) => (
            <Reveal key={name} delay={(i % 3) * 0.06}>
              <Link href="/services" className="group relative block overflow-hidden rounded-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-cream">{name}</h3>
                </div>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-jkred text-white text-sm opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
