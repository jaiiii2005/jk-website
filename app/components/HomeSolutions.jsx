"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const SOL = ["Outdoor Hoardings", "Digital OOH", "Unipoles", "Transit & Airport", "In-shop Branding", "Rural & Events"];

export default function HomeSolutions() {
  return (
    <section className="grad-panel text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        {/* left — heading */}
        <div>
          <Reveal><p className="tracking-[0.4em] text-xs sm:text-sm font-bold text-white/70 mb-6">OUR SOLUTIONS</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.5rem,5.5vw,4.5rem)", letterSpacing: "-0.02em" }}>
              Our outdoor<br />media solutions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="mt-9 inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-jkred">
              Explore services →
            </Link>
          </Reveal>
        </div>

        {/* right — big stacked service words (filled / outlined) */}
        <div className="flex flex-col lg:items-end">
          {SOL.map((s, i) => (
            <Reveal key={s} delay={i * 0.06}>
              <span
                className="block font-display font-extrabold uppercase leading-[1.04] lg:text-right"
                style={{
                  fontSize: "clamp(1.75rem,4vw,3.5rem)",
                  letterSpacing: "-0.01em",
                  color: i % 2 ? "transparent" : "#ffffff",
                  WebkitTextStroke: i % 2 ? "1.4px rgba(255,255,255,0.7)" : "0",
                }}
              >
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
