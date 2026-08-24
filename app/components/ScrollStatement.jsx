"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pinned, scroll-scrubbed kinetic typography (Pic 1 style): each word slides in
// from the right; the word being revealed glows brand-cyan, words already passed
// turn cream, upcoming words sit faded grey. Scroll drives everything.
const WORDS = ["Great", "outdoor", "makes", "brands", "truly", "unforgettable."];
const SPREAD = 0.82; // reveal happens across this much of the scroll

function Word({ progress, i, total, text }) {
  const step = SPREAD / total;
  const start = i * step;
  const end = start + step * 1.25;
  const x = useTransform(progress, [start, end], [110, 0]);
  const opacity = useTransform(progress, [start, end], [0.08, 1]);
  // grey (future) -> cyan (revealing) -> cream (past)
  const color = useTransform(
    progress,
    [start, start + step * 0.55, end + step * 0.4],
    ["#33334d", "#00a8d6", "#f6efdf"]
  );
  return (
    <motion.span style={{ x, opacity, color }} className="mr-[0.3em] inline-block will-change-transform">
      {text}
    </motion.span>
  );
}

export default function ScrollStatement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative" style={{ height: "300vh", background: "#0a0912" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* chapter label */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="absolute left-6 top-[16%] text-cyan tracking-[0.5em] text-xs font-bold sm:left-12"
          style={{ color: "#00a8d6" }}
        >
          THE JK WAY
        </motion.p>

        {/* the statement */}
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-12">
          <h2 className="font-display font-extrabold leading-[1.05]" style={{ fontSize: "clamp(2.5rem,9vw,8rem)", letterSpacing: "-0.03em" }}>
            {WORDS.map((w, i) => (
              <Word key={i} progress={scrollYProgress} i={i} total={WORDS.length} text={w} />
            ))}
          </h2>
        </div>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="absolute bottom-[14%] left-6 max-w-md text-cream/45 text-sm sm:left-12"
        >
          Fifty years of putting brands exactly where the whole city looks — and can&rsquo;t look away.
        </motion.p>

        {/* scroll progress bar (right) */}
        <div className="absolute right-6 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-white/15 sm:block">
          <motion.div className="absolute inset-x-0 top-0 origin-top bg-cyan" style={{ height: "100%", scaleY: barScale, background: "#00a8d6" }} />
        </div>
      </div>
    </section>
  );
}
