"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// "Our world" — a full-width showcase of Kolkata with JK on every surface.
// Shown whole (not cropped) like Bright's about-us banner, with a soft reveal,
// a gentle scroll zoom, and a caption that gives the image a purpose.
export default function BrandCity({ src = "/jk-kolkata.png" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]); // slow settle-in zoom

  return (
    <section className="bg-jkblue-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32 text-center">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR WORLD</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold mx-auto max-w-4xl" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            When a city speaks, <span className="text-grad">it speaks JK.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            From the biggest hoardings to the bus you take home — across Kolkata,
            JK Advertising is impossible to miss.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="mt-14 md:mt-20">
        <Reveal>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              style={{ scale }}
              src={src}
              alt="JK Advertising across Kolkata — hoardings, bus, tram and bus shelters"
              className="w-full h-auto block"
            />
            {/* faint caption tag, bottom-left */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent">
              <div className="mx-auto max-w-7xl px-6 py-5">
                <p className="text-cream/85 text-sm md:text-base font-medium tracking-wide">
                  Kolkata &middot; Every surface, one brand
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
