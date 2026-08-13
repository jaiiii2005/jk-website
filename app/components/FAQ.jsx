"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Honest, client-oriented FAQ. Removes doubts before the enquiry = frictionless.
// Pricing kept general on purpose — sharpen exact figures with management later.
const FAQS = [
  {
    q: "Which areas do you cover?",
    a: "Headquartered in Kolkata, we operate right across Eastern India — West Bengal, Odisha, Bihar, Jharkhand, Assam, Sikkim, Tripura and the North-East — from the metros to the smaller towns others don't reach.",
  },
  {
    q: "What kinds of advertising media do you offer?",
    a: "A full 360° out-of-home offering: hoardings & billboards, digital OOH (LED) screens, landmark unipoles, in-shop branding, digital wall painting, rural promotions, airport & transit media — plus corporate events through our events arm.",
  },
  {
    q: "How do I get rates or a quote?",
    a: "Just share your brand, your target audience and a rough budget. Our team recommends the right sites and sends you a plan — with transparent, net-discounted rates and no brokering in between.",
  },
  {
    q: "Do you handle printing and mounting?",
    a: "Yes — printing, fabrication and mounting are all done in-house. That means faster turnarounds, tighter quality control, and one team accountable end-to-end.",
  },
  {
    q: "How do I know my ad is actually up and working?",
    a: "Every site comes with monitoring — mounting photographs, tracking and post-buy analysis — so you always have proof your campaign is live and performing.",
  },
  {
    q: "How big a campaign can you take on?",
    a: "From a single landmark hoarding to a multi-city campaign spanning the East. As the largest OOH network in the region, we scale to whatever your goal needs.",
  },
];

function Item({ q, a, open, onToggle, i }) {
  return (
    <Reveal delay={i * 0.05}>
      <div className="border-b border-ink/10">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className={`font-display text-lg sm:text-xl font-bold transition-colors ${open ? "text-jkred" : "text-ink"}`}>
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className={`shrink-0 text-2xl leading-none transition-colors ${open ? "text-jkred" : "text-jkblue"}`}
          >
            +
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-5 pr-8 text-ink/60 leading-relaxed">{a}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // first one open by default

  return (
    <section id="faq" className="cv-auto relative bg-cream text-ink overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">FREQUENTLY ASKED</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display h-xl font-extrabold">
              Questions? <span className="text-grad">Answered.</span>
            </h2>
          </Reveal>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              i={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        {/* bridge to contact */}
        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-ink/60">
            Still have a question?{" "}
            <a href="#contact" className="font-semibold text-jkred hover:underline">Talk to us →</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
