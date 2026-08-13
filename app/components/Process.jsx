"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// "How We Work" — JK's real client process as an animated 4-step flow.
// Honest reassurance (no testimonials needed): here's what working with us is like.
const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
    {children}
  </svg>
);

const STEPS = [
  {
    t: "Brief",
    d: "Tell us your brand, your audience and your goal. We listen first.",
    icon: svg(<><rect x="6" y="3.5" width="12" height="17" rx="2" /><path d="M9.5 3.5h5v2.2h-5z" /><path d="M9 11h6M9 14.5h4" /></>),
  },
  {
    t: "Plan & Recommend",
    d: "We map the right sites across the East — best reach, best value, no brokering.",
    icon: svg(<><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" /></>),
  },
  {
    t: "Execute",
    d: "Printing, mounting and going live — handled end-to-end, in-house.",
    icon: svg(<><rect x="3" y="4" width="18" height="10.5" rx="1.5" /><path d="M8 14.5v6M16 14.5v6M6 8h12" /></>),
  },
  {
    t: "Monitor & Report",
    d: "Photos, tracking and post-buy analysis on every site — you always know it's working.",
    icon: svg(<><path d="M4 4v16h16" /><rect x="8" y="12" width="3" height="5" /><rect x="13.5" y="8" width="3" height="9" /></>),
  },
];

export default function Process() {
  return (
    <section id="process" className="cv-auto relative bg-cream text-ink overflow-hidden">
      {/* deep blue -> cream blend so it flows from Work */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
      <Bokeh tone="light" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="text-center mb-16">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">HOW WE WORK</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display h-xl font-extrabold">
              Four steps, <span className="text-grad">zero friction.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl mx-auto text-ink/60">
              Working with a 50-year partner should feel effortless. Here&rsquo;s how it goes.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* connecting progress line (desktop) — draws across as you scroll in */}
          <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-8 h-0.5 overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="h-full bg-[linear-gradient(90deg,#b5713f,#e11b2e,#211c84)]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                {/* badge sits on the line; cream ring "cuts" the line behind it */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-jkblue text-cream shadow-lg shadow-jkblue/25 ring-8 ring-cream transition-colors duration-300 group-hover:bg-jkred"
                >
                  {s.icon}
                </motion.div>
                <p className="font-display text-xs font-bold tracking-[0.25em] text-jkred/70 mb-2">
                  STEP {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-bold text-ink group-hover:text-jkblue transition-colors">{s.t}</h3>
                <p className="mt-2 mx-auto max-w-[15rem] text-sm text-ink/55 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
