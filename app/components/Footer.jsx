"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Bokeh from "./Bokeh";
import RotatingWord from "./RotatingWord";
import MagneticButton from "./MagneticButton";
import ContactForm from "./ContactForm";

const LINKS = [
  ["About", "#about"], ["Services", "#services"], ["Innovation", "#innovation"],
  ["Leadership", "#leadership"], ["Partners", "#clients"], ["Contact", "#contact"],
];

export default function Footer() {
  const ctaRef = useRef(null);
  const inView = useInView(ctaRef, { once: true, amount: 0.25 });
  const show = (d) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer id="contact" className="relative overflow-hidden bg-jkblue-deep text-cream">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
      <Bokeh tone="dark" />

      {/* CTA */}
      <div ref={ctaRef} className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-40 pb-20 text-center">
        <motion.p {...show(0)} className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">
          LET&rsquo;S TALK
        </motion.p>

        <motion.h2 {...show(0.1)} className="font-display h-mega font-extrabold leading-[1.05]">
          Let&rsquo;s make<br className="sm:hidden" /> brands{" "}
          <RotatingWord
            words={["converse.", "connect.", "convert.", "be seen."]}
            className="grad-flow"
          />
        </motion.h2>

        <motion.p {...show(0.25)} className="mt-8 max-w-xl mx-auto text-lg text-cream/70">
          Fifty years of turning streets into conversations. Let&rsquo;s start yours.
        </motion.p>

        <motion.div {...show(0.35)} className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton
            href="tel:+919830025496"
            className="relative rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/40 hover:bg-red-600 inline-block"
          >
            <span className="absolute inset-0 rounded-full bg-jkred/60 blur-md animate-pulse -z-10" />
            📞 Call 98300 25496
          </MagneticButton>
          <MagneticButton
            href="https://wa.me/919830025496"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream hover:bg-cream/10 inline-block"
          >
            💬 WhatsApp us
          </MagneticButton>
        </motion.div>

        <motion.p {...show(0.5)} className="mt-6 text-sm text-cream/50">
          Nimesh Shah · Chief Executive Officer · Kolkata, India
        </motion.p>

        {/* quick enquiry — sends straight to WhatsApp */}
        <ContactForm />
      </div>

      {/* footer bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream/55 leading-relaxed">
              The largest OOH media owner in the East. We make brands converse — for 50 years and counting.
            </p>
          </div>

          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Explore</p>
            <ul className="space-y-2">
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-cream/60 hover:text-jkred transition">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Our events arm</p>
            <div className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lets-eventuate.png" alt="Lets Eventuate" className="h-8 w-auto" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
            <p>© {new Date().getFullYear()} JK Advertising. 50 Years · Forging Ahead.</p>
            <p>Brands Converse<span className="text-jkred">.</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
