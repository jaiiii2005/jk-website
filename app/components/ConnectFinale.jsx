"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Replaceable billboard slots. To use your own photos, just OVERWRITE these 4
// files in public/images/billboards/ (same names) — no code change needed.
const SLOTS = [
  "/images/billboards/bb-01.jpg",
  "/images/billboards/bb-02.jpg",
  "/images/billboards/bb-03.jpg",
  "/images/billboards/bb-04.jpg",
];

const LAYERS = [
  { src: SLOTS[0], pos: "left-[2%] top-[5%] w-[32%] h-[40%]",     fy: [150, -200], fx: [-22, 14], frot: [-3, 1], fdur: 12, fdelay: 0,   rev: false },
  { src: SLOTS[1], pos: "right-[2%] top-[3%] w-[30%] h-[38%]",    fy: [-140, 190], fx: [22, -22], frot: [3, -1], fdur: 15, fdelay: 1.4, rev: true, hideSm: true },
  { src: SLOTS[2], pos: "left-[3%] bottom-[6%] w-[30%] h-[38%]",  fy: [120, -180], fx: [-16, 32], frot: [-2, 2], fdur: 11, fdelay: 0.8, rev: false },
  { src: SLOTS[3], pos: "right-[3%] bottom-[5%] w-[32%] h-[40%]", fy: [-160, 140], fx: [26, -18], frot: [2, -2], fdur: 14, fdelay: 2.2, rev: true, hideSm: true },
];

function BillboardLayer({ progress, src, pos, fy, fx, frot, fdur, fdelay, rev, hideSm }) {
  const frameY = useTransform(progress, [0, 1], fy);
  const frameX = useTransform(progress, [0, 1], fx);
  const frameR = useTransform(progress, [0, 1], frot);
  return (
    <motion.div
      className={`absolute ${pos} ${hideSm ? "hidden md:block" : ""}`}
      style={{ y: frameY, x: frameX, rotate: frameR }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="ffloat relative h-full w-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 will-change-transform"
        style={{ animationDuration: `${fdur * 1.35}s`, animationDelay: `${fdelay}s`, animationDirection: rev ? "reverse" : "normal" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="bbfloat absolute left-[-10%] top-[-18%] h-[136%] w-[120%] object-cover will-change-transform"
          style={{ animationDuration: `${fdur}s`, animationDelay: `${fdelay}s`, animationDirection: rev ? "normal" : "reverse" }}
        />
      </div>
    </motion.div>
  );
}

export default function ConnectFinale() {
  const secRef = useRef(null);
  const ctaRef = useRef(null);
  const inView = useInView(ctaRef, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: secRef, offset: ["start end", "end start"] });
  const show = (d) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={secRef} id="contact" className="relative flex min-h-[92vh] items-center overflow-hidden bg-jkblue-deep text-cream">
      {/* individually-animated billboard layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {LAYERS.map((l, i) => (
          <BillboardLayer key={i} progress={scrollYProgress} {...l} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-jkblue-deep/58" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jkblue-deep/40 via-jkblue-deep/70 to-jkblue-deep" />

      <div ref={ctaRef} className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 text-center">
        <motion.h2 {...show(0)} className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.75rem,9vw,7.5rem)", letterSpacing: "-0.03em" }}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-3">
            <span>LET&rsquo;S</span>
            <motion.a
              href="https://wa.me/919830025496"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center rounded-full bg-jkred px-[0.5em] py-[0.08em] text-white shadow-xl shadow-jkred/40 transition-colors hover:bg-red-600"
            >
              Connect
            </motion.a>
            <span>WITH</span>
          </span>
          <span className="block text-grad">JK ADVERTISING</span>
        </motion.h2>

        <motion.p {...show(0.4)} className="mt-8 max-w-xl mx-auto text-lg sm:text-2xl font-semibold uppercase tracking-wide text-cream/80">
          Become our next success story.
        </motion.p>

        <motion.div {...show(0.55)} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919830025496" target="_blank" rel="noopener noreferrer" className="rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">WhatsApp us</a>
          <a href="tel:+919830025496" className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:bg-cream/10">Call 98300 25496</a>
        </motion.div>
      </div>
    </section>
  );
}
