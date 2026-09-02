"use client";

import Reveal from "./Reveal";

// "Our world" — a compact statement band (heading + line). Image removed per Sir.
export default function BrandCity() {
  return (
    <section className="bg-jkblue-deep text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR WORLD</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold mx-auto max-w-4xl" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            Five decades of being the name brands <span className="text-grad">count on.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            The East&rsquo;s most widespread outdoor media network — putting your brand
            wherever the audience looks, and making it impossible to miss.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
