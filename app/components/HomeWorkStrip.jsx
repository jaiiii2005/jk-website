"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const W = [
  ["Audi A4", "/work/w-audi.jpg", "HOARDING · KOLKATA"],
  ["Style Baazar", "/work/w-stylebaazar.jpg", "HOARDING · KOLKATA"],
  ["JOI Yogurt", "/work/w-joi-clean.jpg", "PRODUCT LAUNCH · KOLKATA"],
];

export default function HomeWorkStrip() {
  return (
    <section className="relative bg-jkblue-deep text-cream overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">OUR WORK</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em" }}>
                Campaigns that <span className="text-grad">turned heads.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/work" className="inline-flex items-center gap-3 text-sm font-semibold text-jkred hover:gap-4 transition-all">
              All work <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {W.map(([brand, img, meta], i) => (
            <Reveal key={brand} delay={i * 0.08}>
              <Link href="/work" className="group relative block overflow-hidden rounded-2xl border border-white/10 aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={brand} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep/95 via-jkblue-deep/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-copper text-[10px] tracking-[0.3em] mb-1">{meta}</p>
                  <h3 className="font-display text-xl font-bold">{brand}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
