"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pinned, scroll-scrubbed kinetic typography: a big statement whose words light
// up one-by-one as you scroll (key words burst into the brand gradient). The
// section stays put (sticky) while your scroll drives the reveal.
const WORDS = [
  "We", "turn", "streets", "into", "stages,",
  "and", "brands", "into", "landmarks.",
];
const ACCENT = new Set([2, 4, 6, 8]); // streets / stages / brands / landmarks

function Word({ progress, i, total, text, accent }) {
  const start = (i / total) * 0.8;
  const opacity = useTransform(progress, [start, start + 0.12], [0.12, 1]);
  const y = useTransform(progress, [start, start + 0.12], [14, 0]);
  return (
    <motion.span style={{ opacity, y }} className={`mr-[0.28em] inline-block ${accent ? "text-grad" : "text-cream"}`}>
      {text}
    </motion.span>
  );
}

export default function ScrollStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative bg-jkblue-deep" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-copper tracking-[0.4em] text-xs sm:text-sm"
          >
            THE JK WAY
          </motion.p>
          <h2
            className="font-display font-extrabold leading-[1.02]"
            style={{ fontSize: "clamp(2.25rem,7vw,6rem)", letterSpacing: "-0.02em" }}
          >
            {WORDS.map((w, i) => (
              <Word key={i} progress={scrollYProgress} i={i} total={WORDS.length} text={w} accent={ACCENT.has(i)} />
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
