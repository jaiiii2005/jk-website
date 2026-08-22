"use client";

import { useEffect, useRef, useState } from "react";

// Scroll-kinetic "Featured Work" (OUTFRONT style): left intro stays put while a
// big list of brand names rolls past on the right. Whichever name crosses the
// screen centre fills in solid — the highlight travels as you scroll.
// NOTE: real JK campaigns — add more recognisable brands from management later.
const BRANDS = [
  { name: "AUDI", meta: "Hoarding · Kolkata" },
  { name: "STYLE BAAZAR", meta: "Hoarding · Kolkata" },
  { name: "JOI YOGURT", meta: "Product launch · Kolkata" },
  { name: "IDEE EYEWEAR", meta: "Airport media · Kolkata" },
  { name: "RED FM 93.5", meta: "Live radio billboard · Kolkata" },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    // root is a thin line at the vertical centre — an item "activates" as it crosses it
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(e.target.getAttribute("data-i"));
            setActive(i);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-jkblue text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10">
        {/* left — sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">FEATURED WORK</p>
          <h2 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}>
            Campaigns brands <span className="text-grad">remember.</span>
          </h2>
          <p className="mt-6 max-w-sm text-cream/70 leading-relaxed">
            Fifty years of putting the East&rsquo;s biggest names exactly where they need to be seen.
          </p>
          {/* live meta of the active brand */}
          <p key={active} className="mt-8 text-sm tracking-[0.2em] text-copper uppercase">
            {BRANDS[active].meta}
          </p>
        </div>

        {/* right — rolling brand list */}
        <div className="flex flex-col items-start lg:items-end">
          {BRANDS.map((b, i) => {
            const on = i === active;
            return (
              <div
                key={b.name}
                data-i={i}
                ref={(el) => (refs.current[i] = el)}
                className="py-5 sm:py-7"
              >
                <h3
                  className="font-display font-extrabold uppercase leading-[1.02] transition-colors duration-300"
                  style={{
                    fontSize: "clamp(2.25rem,6.5vw,5.5rem)",
                    letterSpacing: "-0.01em",
                    color: on ? "#f6efdf" : "transparent",
                    WebkitTextStroke: on ? "0" : "1.2px rgba(246,239,223,0.4)",
                  }}
                >
                  {b.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
