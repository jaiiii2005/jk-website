"use client";

import { motion } from "framer-motion";

// Compact "why JK" credibility band — the last nudge before the enquiry form.
const POINTS = [
  {
    title: "50 years of trust",
    desc: "Half a century building brands across Eastern India — relationships that last.",
    icon: (
      <>
        <path d="M12 3l7 3.5v5c0 4.2-3 7.5-7 9.5-4-2-7-5.3-7-9.5v-5z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Largest OOH in the East",
    desc: "3800+ media sites — the widest outdoor network in the region, by far.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="11" rx="1.5" />
        <path d="M8 15v6M16 15v6M6 21h4M14 21h4" />
      </>
    ),
  },
  {
    title: "In-house production",
    desc: "Our own printing & fabrication — faster turnarounds, tighter quality control.",
    icon: (
      <>
        <path d="M6 9V3.5h12V9" />
        <rect x="3.5" y="9" width="17" height="7" rx="1.5" />
        <path d="M6 14h12v6.5H6z" />
      </>
    ),
  },
  {
    title: "Ethical & transparent",
    desc: "Clear rates, honest availability, no surprises — the way business should be done.",
    icon: (
      <>
        <path d="M12 3v18M5 7h14" />
        <path d="M5 7l-2.5 5a3 3 0 0 0 5 0zM19 7l-2.5 5a3 3 0 0 0 5 0z" />
      </>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-cream text-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-copper tracking-[0.4em] text-xs sm:text-sm mb-4"
        >
          WHY BRANDS CHOOSE JK
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-center font-display h-lg font-extrabold max-w-3xl mx-auto mb-14"
        >
          Fifty years of being the name brands <span className="text-grad">count on</span>.
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-ink/10 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-jkred/50 hover:bg-white hover:shadow-xl hover:shadow-jkblue/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jkblue/5 text-jkblue transition-all duration-300 group-hover:bg-jkred/10 group-hover:text-jkred">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-ink group-hover:text-jkblue">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/55 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
