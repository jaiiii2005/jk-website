"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";
import OOHShapes from "./OOHShapes";

// "What sets us apart" — the Brands Converse philosophy + JK's credentials
// as animated highlight cards (from "JK Advertising today" in the deck).
const CARDS = [
  ["Largest in the East", "The biggest OOH media-owner network in Eastern India."],
  ["Most trusted", "The name brands have relied on for five decades running."],
  ["Value-oriented", "Net-discounted rates, committed savings — and no brokering."],
  ["Impeccable service", "Dedicated teams and the lowest churn in the industry."],
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ghostX = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <section id="about" ref={ref} className="relative bg-jkblue-deep text-cream overflow-hidden">
      {/* cream -> deep blue blend at the top */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <Bokeh tone="dark" />
      {/* drifting OOH silhouettes */}
      <motion.div style={{ x: ghostX }} className="absolute inset-0">
        <OOHShapes tone="dark" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">WHAT SETS US APART</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display h-xl font-extrabold max-w-4xl">
            We don&rsquo;t put up displays. <br className="hidden sm:block" />
            We make <span className="text-grad">brands converse.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/75">
            Out-of-home isn&rsquo;t about a hoarding on a wall — it&rsquo;s about starting a
            conversation with the right audience, in the right place, at the right moment. For
            50 years we&rsquo;ve turned Kolkata&rsquo;s streets, stations and skylines into a
            stage where brands and people meet.
          </p>
        </Reveal>

        {/* credential cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(([title, body], i) => (
            <Reveal key={title} delay={0.1 + i * 0.08}>
              <div className="shine group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-jkred/50 hover:bg-white/[0.07]">
                <div className="mb-4 h-9 w-9 rounded-lg bg-jkred/90 flex items-center justify-center font-display font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-bold text-cream group-hover:text-white">{title}</h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
