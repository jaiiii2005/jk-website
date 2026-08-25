"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Cinematic finale CTA (Bright-style): oversized "LET'S [Connect] WITH JK" with
// the red pill baked into the headline, over a dark billboard collage that drifts
// on scroll (parallax). Staggered, transform-based entrance — premium, not fade-y.
const BG = ["/work/w-audi.jpg", "/work-2.jpg", "/work/w-stylebaazar.jpg"];

const rise = {
  hidden: { opacity: 0, y: 60 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function ConnectCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);   // slow background parallax
  const fgY = useTransform(scrollYProgress, [0, 1], ["18%", "-12%"]);   // foreground drifts faster

  return (
    <section ref={ref} id="connect" className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-jkblue-deep text-cream">
      {/* dark billboard collage (parallax) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-0 grid grid-cols-3 scale-110">
        {BG.map((src, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={i} src={src} alt="" className="h-full w-full object-cover" />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-jkblue-deep/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/60 to-jkblue-deep/85" />

      {/* foreground */}
      <motion.div style={{ y: fgY }} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display font-extrabold leading-[0.92]" style={{ fontSize: "clamp(3rem,11vw,9rem)", letterSpacing: "-0.03em" }}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.25em]">
            <motion.span variants={rise} custom={0.05} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-block">
              LET&rsquo;S
            </motion.span>
            <motion.a
              href="#contact"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] } } }}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center rounded-full bg-jkred px-[0.55em] py-[0.12em] text-white shadow-xl shadow-jkred/40 transition-colors hover:bg-red-600"
            >
              Connect
            </motion.a>
            <motion.span variants={rise} custom={0.15} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-block">
              WITH
            </motion.span>
          </span>
          <motion.span variants={rise} custom={0.25} initial="hidden" whileInView="show" viewport={{ once: true }} className="block text-grad">
            JK ADVERTISING
          </motion.span>
        </h2>

        <motion.p
          variants={rise} custom={0.55} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mx-auto mt-8 max-w-xl text-lg sm:text-2xl font-semibold tracking-wide text-cream/85 uppercase"
        >
          Become our next success story.
        </motion.p>

        <motion.div
          variants={rise} custom={0.7} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#contact" className="rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">Start your campaign →</a>
          <a href="https://wa.me/919830025496" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:bg-cream/10">WhatsApp us</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
