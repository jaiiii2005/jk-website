"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// "Our world" — a full-bleed, edge-to-edge showcase of Kolkata with JK on every
// surface (like Bright's about-us banner). Compact heading above, the image
// fills the entire page width, with a gentle scroll zoom and a caption tag.
export default function BrandCity({ src = "/jk-kolkata.png" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]); // slow settle-in zoom

  return (
    <section className="bg-jkblue-deep text-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR WORLD</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold mx-auto max-w-4xl" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            Five decades of being the name brands <span className="text-grad">count on.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            From the biggest hoardings to the bus you take home — across Kolkata,
            JK Advertising is impossible to miss.
          </p>
        </Reveal>
      </div>

      {/* full-bleed banner — spans the entire page width, edge to edge */}
      <div ref={ref} className="relative w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          style={{ scale }}
          src={src}
          alt="JK Advertising across Kolkata — hoardings, bus, tram and bus shelters"
          className="w-full h-auto block"
        />
        {/* caption tag, bottom-left */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="mx-auto max-w-7xl px-6 py-5 md:py-7">
            <p className="text-cream/90 text-sm md:text-lg font-medium tracking-wide">
              Kolkata &middot; Every surface, one brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
