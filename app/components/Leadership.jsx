"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

const LEADERS = [
  {
    name: "Jogesh Kumar Shah",
    role: "Founder & Proprietor",
    tagline: "The Legacy",
    photo: "/founder-jogesh.jpg",
    initials: "JKS",
    bio: "The founder of JK Advertising. Over five decades, Jogesh Kumar Shah built the company from the ground up — turning a single-minded belief in honesty, service and value into the East's most trusted out-of-home network.",
    points: ["Founded JK Advertising", "50 years shaping OOH in the East", "Built on trust, service & value"],
  },
  {
    name: "Nimesh Shah",
    role: "Chief Executive Officer",
    tagline: "Forging Ahead",
    photo: "/ceo-nimesh.jpg",
    initials: "NS",
    bio: "As CEO, Nimesh Shah drives JK Advertising's next chapter — pairing the firm's five-decade legacy with digital OOH, first-of-their-kind innovations and a value-first approach that keeps clients ahead of the curve.",
    points: ["Leads strategy & operations", "Champions digital OOH & innovation", "Client-first, value-driven growth"],
  },
];

const CONIC = "conic-gradient(from 0deg, #b5713f, #e11b2e, #5b52ff, #00a8d6, #b5713f)";

function Circle({ photo, initials, size = "h-64 w-64" }) {
  return (
    <div className={`relative ${size} shrink-0`}>
      {/* pulsing glow */}
      <motion.div
        aria-hidden
        className="absolute -inset-5 rounded-full blur-2xl"
        style={{ background: CONIC, opacity: 0.35 }}
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* rotating gradient ring */}
      <div className="absolute inset-0 rounded-full spin-slow" style={{ background: CONIC }} />
      {/* photo */}
      <div className="absolute inset-[6px] rounded-full overflow-hidden bg-jkblue-deep">
        <span className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-cream/25 text-5xl">
          {initials}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          className="relative h-full w-full object-cover object-top saturate-[0.9] transition-all duration-700 hover:scale-105 hover:saturate-100"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}

function LeaderBlock({ l, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className={`flex flex-col items-center text-center ${index === 1 ? "md:mt-16" : ""}`}
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        className="group cursor-pointer"
        onClick={() => onOpen(index)}
      >
        <Circle photo={l.photo} initials={l.initials} />
      </motion.div>

      <p className="text-copper text-xs tracking-[0.35em] mt-8 mb-2">{l.tagline.toUpperCase()}</p>
      <h3 className="font-display text-3xl font-extrabold">{l.name}</h3>
      <p className="text-cream/60 text-sm mt-1">{l.role}</p>
      <button
        onClick={() => onOpen(index)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-jkred hover:gap-3 transition-all"
      >
        Know more <span>→</span>
      </button>
    </motion.div>
  );
}

export default function Leadership() {
  const [open, setOpen] = useState(null);
  const active = open != null ? LEADERS[open] : null;

  return (
    <section id="leadership" className="relative bg-jkblue-deep text-cream overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <Bokeh tone="dark" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 md:py-36">
        <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5 text-center">THE LEADERSHIP</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-xl font-extrabold text-center">
            The people <span className="text-grad">behind the legacy.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 gap-16 sm:gap-10 place-items-center">
          {LEADERS.map((l, i) => (
            <LeaderBlock key={l.name} l={l} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-jkblue-deep border border-white/15 shadow-2xl p-8 text-center sm:text-left sm:flex sm:gap-8"
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-cream/60 hover:text-white text-xl">✕</button>
              <div className="mx-auto sm:mx-0 mb-6 sm:mb-0">
                <Circle photo={active.photo} initials={active.initials} size="h-40 w-40" />
              </div>
              <div className="min-w-0">
                <p className="text-copper text-xs tracking-[0.3em] mb-2">{active.tagline.toUpperCase()}</p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold">{active.name}</h3>
                <p className="text-cream/60 text-sm mt-1">{active.role}</p>
                <p className="mt-4 text-cream/80 leading-relaxed text-sm">{active.bio}</p>
                <ul className="mt-4 space-y-2">
                  {active.points.map((p, k) => (
                    <motion.li key={k}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + k * 0.08 }}
                      className="flex items-start gap-3 text-sm text-cream/75">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-jkred shrink-0" />
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
