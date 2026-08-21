"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Services as PHOTO cards (the pattern all top OOH sites use) — each service is a
// real billboard image with the name laid over it. Hover = zoom. Image-led, clean.
const SERVICES = [
  ["Outdoor Advertising", "/work/w-audi.jpg"],
  ["Digital OOH", "/work-2.jpg"],
  ["Unipoles", "/work/w-stylebaazar.jpg"],
  ["Branding", "/work/w-idee.jpg"],
  ["In-shop Branding", "/work-3.jpg"],
  ["Corporate Events", "/hero-1.jpg"],
  ["Rural Promotions", "/work-4.jpg"],
  ["Printing", "/work/w-joi-clean.jpg"],
  ["Digital Wall Painting", "/work-1.jpg"],
  ["Innovations", "/work/w-idee.jpg"],
];

export default function Services() {
  return (
    <section id="services" className="cv-auto relative bg-cream text-ink overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">OUR COMPETENCIES</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.5rem,7vw,6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              A <span className="text-grad">360°</span> partner.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map(([name, img], i) => (
            <motion.div
              key={name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent transition-opacity duration-300 group-hover:from-jkblue-deep/90" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="font-display text-xs font-bold text-copper tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-base sm:text-lg font-bold leading-tight text-cream">
                  {name}
                </h3>
              </div>
              {/* hover corner arrow */}
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-jkred text-white text-sm opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
