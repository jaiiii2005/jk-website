"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const CREDS = [
  ["Largest in the East", "The biggest OOH media-owner network in Eastern India."],
  ["Most trusted", "The name brands have relied on for five decades."],
  ["Value-first", "Net-discounted rates, committed savings — no brokering."],
  ["Impeccable service", "Dedicated teams, the lowest churn in the industry."],
];

export default function HomeAbout() {
  return (
    <section className="relative bg-jkblue-deep text-cream overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">WHO WE ARE</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,4.5vw,3.75rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              We don&rsquo;t put up displays.<br />We make <span className="text-grad">brands converse.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              For fifty years JK Advertising has turned Kolkata&rsquo;s streets, stations and skylines
              into the stage where brands and people meet — the largest OOH network in the East.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/about" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-jkred hover:gap-4 transition-all">
              More about us <span>→</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} dir="left">
          <div className="grid grid-cols-2 gap-4">
            {CREDS.map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-jkred/50 hover:bg-white/[0.07]">
                <div className="mb-3 h-8 w-8 rounded-lg bg-jkred/90 flex items-center justify-center font-display font-bold text-white text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
