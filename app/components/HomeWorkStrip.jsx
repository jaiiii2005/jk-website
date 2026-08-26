"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const W = [
  ["Audi A4", "/work/w-audi.jpg", "Front and centre on Kolkata's busiest flyover — seen by lakhs every day."],
  ["Style Baazar", "/work/w-stylebaazar.jpg", "Fashion, larger than life across the city's arterial roads."],
  ["JOI Yogurt", "/work/w-joi-clean.jpg", "Launched India's first Nolen Gur probiotic — entirely outdoors."],
];

export default function HomeWorkStrip() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <Reveal><p className="text-jkred font-semibold tracking-wide text-sm mb-4">Campaigns</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}>
                Our recent works.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-jkred hover:gap-3 transition-all">
              Explore projects <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {W.map(([brand, img, desc], i) => (
            <Reveal key={brand} delay={i * 0.08}>
              <Link href="/work" className="group block">
                <div className="overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={brand} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold group-hover:text-jkred transition-colors">{brand}</h3>
                <p className="mt-2 text-sm text-ink/55 leading-relaxed">{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
