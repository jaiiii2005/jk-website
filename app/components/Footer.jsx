"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import ContactForm from "./ContactForm";

// Dark billboard collage behind the CTA (real work photos, replaceable later).
const BG_SHOTS = ["/work/w-audi.jpg", "/work-2.jpg", "/work/w-stylebaazar.jpg", "/work-3.jpg", "/work/w-idee.jpg", "/work-4.jpg"];

const LINKS = [
  ["About", "#about"], ["Services", "#services"], ["Innovation", "#innovation"],
  ["Leadership", "#leadership"], ["Partners", "#clients"], ["Contact", "#contact"],
];

// Real details from Nimesh Shah's card. TODO(Sir): social profile URLs still needed.
const CONTACT = {
  address: "12C Sarat Bose Road, Kolkata – 700020",
  phone: "+91 98300 25496",
  phoneRaw: "919830025496",
  email: "kolkata@jkad.in",
};

// Social links — replace the "#" placeholders with JK's real profile URLs.
const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H18.3v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10z" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.7" r="1.2" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8z" />,
  },
];

export default function Footer() {
  const footRef = useRef(null);
  const ctaRef = useRef(null);
  const inView = useInView(ctaRef, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: footRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);   // slow background parallax
  const show = (d) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer ref={footRef} id="contact" className="relative overflow-hidden bg-jkblue-deep text-cream">
      <div className="absolute top-0 inset-x-0 z-20 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />

      {/* dark billboard collage background (parallax) */}
      <motion.div aria-hidden style={{ y: bgY }} className="pointer-events-none absolute inset-0 grid grid-cols-2 sm:grid-cols-3 scale-125">
        {BG_SHOTS.map((src, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={i} src={src} alt="" className="h-full w-full object-cover" />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-jkblue-deep/82" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jkblue-deep/60 via-jkblue-deep/80 to-jkblue-deep" />

      {/* CTA */}
      <div ref={ctaRef} className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-40 pb-20 text-center">
        <motion.h2 {...show(0)} className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.75rem,9vw,7.5rem)", letterSpacing: "-0.03em" }}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-3">
            <span>LET&rsquo;S</span>
            <motion.a
              href="#enquiry"
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
        <div id="enquiry"><ContactForm /></div>

        {/* direct contact details */}
        <motion.div {...show(0.6)} className="mt-14 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto text-left">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">VISIT US</p>
            <p className="text-sm text-cream/85 leading-relaxed">{CONTACT.address}</p>
          </div>
          <a href={`tel:+${CONTACT.phoneRaw}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-jkred/50 hover:bg-white/10">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">CALL US</p>
            <p className="text-sm text-cream/85 group-hover:text-white">{CONTACT.phone}</p>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-jkred/50 hover:bg-white/10">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">EMAIL US</p>
            <p className="text-sm text-cream/85 group-hover:text-white break-all">{CONTACT.email}</p>
          </a>
        </motion.div>
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
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition hover:border-jkred hover:bg-jkred hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{s.icon}</svg>
                </a>
              ))}
            </div>
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
