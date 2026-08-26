"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Replaceable billboard slots. To use your own photos, just OVERWRITE these 4
// files in public/images/billboards/ (same names) — no code change needed.
const SLOTS = [
  "/images/billboards/bb-01.jpg",
  "/images/billboards/bb-02.jpg",
  "/images/billboards/bb-03.jpg",
  "/images/billboards/bb-04.jpg",
];

// Each billboard is an INDEPENDENT layer. TWO levels of scroll motion:
//   • the FRAME drifts through the page (fy/fx/frot)
//   • the IMAGE also moves inside its clipped frame (iy/iscale) — a reveal
// Every layer has its own speed/direction (parallax depth). Values are large on
// purpose so the movement is clearly visible while scrolling.
const LAYERS = [
  // frame drifts with scroll (fy/fx/frot) + image floats continuously (fdur/rev)
  { src: SLOTS[0], pos: "left-[2%] top-[5%] w-[32%] h-[40%]",     fy: [150, -200], fx: [-22, 14], frot: [-3, 1], fdur: 12, fdelay: 0,   rev: false },
  { src: SLOTS[1], pos: "right-[2%] top-[3%] w-[30%] h-[38%]",    fy: [-140, 190], fx: [22, -22], frot: [3, -1], fdur: 15, fdelay: 1.4, rev: true, hideSm: true },
  { src: SLOTS[2], pos: "left-[3%] bottom-[6%] w-[30%] h-[38%]",  fy: [120, -180], fx: [-16, 32], frot: [-2, 2], fdur: 11, fdelay: 0.8, rev: false },
  { src: SLOTS[3], pos: "right-[3%] bottom-[5%] w-[32%] h-[40%]", fy: [-160, 140], fx: [26, -18], frot: [2, -2], fdur: 14, fdelay: 2.2, rev: true, hideSm: true },
];

// One billboard layer — the FRAME drifts with scroll (parallax) AND the IMAGE
// floats continuously inside its clipped frame (keeps moving when scroll stops).
function BillboardLayer({ progress, src, pos, fy, fx, frot, fdur, fdelay, rev, hideSm }) {
  const frameY = useTransform(progress, [0, 1], fy);
  const frameX = useTransform(progress, [0, 1], fx);
  const frameR = useTransform(progress, [0, 1], frot);
  return (
    <motion.div
      className={`absolute overflow-hidden rounded-xl shadow-2xl shadow-black/50 ${pos} ${hideSm ? "hidden md:block" : ""}`}
      style={{ y: frameY, x: frameX, rotate: frameR }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      {/* oversized image floats continuously inside the clipped frame */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="bbfloat absolute left-[-10%] top-[-18%] h-[136%] w-[120%] object-cover will-change-transform"
        style={{ animationDuration: `${fdur}s`, animationDelay: `${fdelay}s`, animationDirection: rev ? "reverse" : "normal" }}
      />
    </motion.div>
  );
}

const EXPLORE = [["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Innovation", "#innovation"]];
const COMPANY = [["Our Reach", "#reach"], ["Leadership", "#leadership"], ["Partners", "#clients"]];

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
  // Footer is the LAST section, so it can never scroll fully past the top —
  // map progress from "footer enters" to "footer fully in view" so the parallax
  // actually completes as you reach the bottom of the page.
  const { scrollYProgress } = useScroll({ target: footRef, offset: ["start end", "end end"] });
  const show = (d) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer ref={footRef} id="contact" className="relative overflow-hidden bg-jkblue-deep text-cream">
      <div className="absolute top-0 inset-x-0 z-20 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />

      {/* individually-animated billboard layers (parallax, not a flat collage) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {LAYERS.map((l, i) => (
          <BillboardLayer key={i} progress={scrollYProgress} {...l} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-jkblue-deep/58" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-jkblue-deep/40 via-jkblue-deep/70 to-jkblue-deep" />

      {/* CTA */}
      <div ref={ctaRef} className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-40 pb-20 text-center">
        <motion.h2 {...show(0)} className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.75rem,9vw,7.5rem)", letterSpacing: "-0.03em" }}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-3">
            <span>LET&rsquo;S</span>
            <motion.a
              href="https://wa.me/919830025496"
              target="_blank"
              rel="noopener noreferrer"
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
      </div>

      {/* footer bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream/55 leading-relaxed">
              The largest OOH media owner in the East — making brands converse for 50 years.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Explore</p>
            <ul className="space-y-2.5">
              {EXPLORE.map(([label, href]) => (
                <li key={href}><a href={href} className="text-sm text-cream/60 hover:text-jkred transition">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Company</p>
            <ul className="space-y-2.5">
              {COMPANY.map(([label, href]) => (
                <li key={href}><a href={href} className="text-sm text-cream/60 hover:text-jkred transition">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li><a href={`tel:+${CONTACT.phoneRaw}`} className="hover:text-jkred transition">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-jkred transition break-all">{CONTACT.email}</a></li>
            </ul>
          </div>

          {/* Follow + events */}
          <div>
            <p className="font-display font-bold text-sm tracking-wide mb-4">Follow</p>
            <div className="flex gap-3">
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
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.2em] text-cream/40 mb-2">EVENTS ARM</p>
              <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/lets-eventuate.png" alt="Lets Eventuate" className="h-7 w-auto" />
              </div>
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
