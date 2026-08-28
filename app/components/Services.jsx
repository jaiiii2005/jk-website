"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const svg = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {children}
  </svg>
);

// ── Flagship services: shown as big alternating image + text feature rows ──────
const FLAGSHIP = [
  {
    name: "Outdoor Hoardings",
    tag: "Flagship",
    img: "/work-2.jpg",
    desc: "Landmark hoardings and billboards at the East's highest-footfall sites — the formats that own a skyline.",
    points: ["Prime arterial, flyover & market locations", "Long-term sites and campaign buys", "Post-buy photo proof on every site"],
  },
  {
    name: "Digital OOH",
    tag: "High-impact",
    img: "/work-1.jpg",
    desc: "LED and programmatic screens at the junctions that never sleep — dynamic creative, changed in real time.",
    points: ["Premium LED screens at prime junctions", "Dayparted, dynamic creative", "Update campaigns on the fly"],
  },
  {
    name: "Transit & Airport",
    tag: "On the move",
    img: "/work-4.jpg",
    desc: "Media that travels with your audience — airport terminals, metro, buses and transit hubs with captive dwell time.",
    points: ["Airport terminals & lounges", "Metro, bus & transit media", "High-dwell, captive audiences"],
  },
  {
    name: "Innovations",
    tag: "First-of-its-kind",
    img: "/work-3.jpg",
    desc: "OOH that gets talked about — custom-built spectaculars and experiential ideas, like a live radio studio inside a billboard.",
    points: ["Custom spectaculars & special builds", "Experiential & interactive formats", "Ideas that earn free press"],
  },
];

// ── The rest: a clean card grid ───────────────────────────────────────────────
const MORE = [
  { name: "Unipoles", desc: "High-rise landmark unipoles that own key crossings.", icon: svg(<><rect x="5" y="3" width="14" height="7.5" rx="1" /><path d="M12 10.5V21M8.5 21h7M8 6.5h8" /></>) },
  { name: "In-shop Branding", desc: "Point-of-sale visibility, right where the buying happens.", icon: svg(<><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5 5 4.5h14l2 5" /><path d="M3 9.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0" /><path d="M10 20v-5h4v5" /></>) },
  { name: "Corporate Events", desc: "Launches & activations that make noise, end to end.", icon: svg(<><rect x="9" y="3" width="6" height="10" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" /></>) },
  { name: "Rural Promotions", desc: "Reaching audiences far beyond the metros.", icon: svg(<><path d="M2.5 7h10v7.5h-10z" /><path d="M12.5 9.5h4l3 3v2h-7z" /><circle cx="7" cy="17" r="1.8" /><circle cx="16.5" cy="17" r="1.8" /></>) },
  { name: "Printing", desc: "High-quality large-format production — all in-house.", icon: svg(<><path d="M7 8.5V3.5h10v5" /><rect x="4" y="8.5" width="16" height="7.5" rx="1.5" /><path d="M7 13.5h10V21H7z" /></>) },
  { name: "Digital Wall Painting", desc: "Hand-crafted wall media, delivered at scale.", icon: svg(<><rect x="3" y="5" width="12" height="5" rx="1.5" /><path d="M15 7.5h3.5A1.5 1.5 0 0 1 20 9v1a1.5 1.5 0 0 1-1.5 1.5H12" /><path d="M10.5 12.5h3v3a1.5 1.5 0 0 1-3 0z" /><path d="M12 18.5V21" /></>) },
];

const STATS = [
  { n: "3,800+", l: "media sites" },
  { n: "8", l: "states covered" },
  { n: "100%", l: "in-house" },
  { n: "50", l: "years" },
];

function FeatureImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl shadow-jkblue/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img style={{ y }} src={src} alt={alt} className="absolute inset-0 h-[116%] w-full object-cover" />
    </div>
  );
}

function FeatureRow({ s, i }) {
  const reverse = i % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
      <Reveal dir={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
        <FeatureImage src={s.img} alt={`JK Advertising — ${s.name}`} />
      </Reveal>

      <Reveal dir={reverse ? "left" : "right"} delay={0.08} className={reverse ? "lg:order-1" : ""}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-sm font-bold text-jkred">{String(i + 1).padStart(2, "0")}</span>
            <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium tracking-wide text-ink/55">{s.tag}</span>
          </div>
          <h3 className="font-display font-extrabold leading-[1.02]" style={{ fontSize: "clamp(1.9rem,3.6vw,3rem)", letterSpacing: "-0.02em" }}>
            {s.name}
          </h3>
          <p className="mt-5 text-lg text-ink/60 leading-relaxed max-w-lg">{s.desc}</p>
          <ul className="mt-6 space-y-2.5">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jkred" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-jkblue-deep text-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work-1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-jkblue-deep via-jkblue-deep/70 to-jkblue-deep/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">
            OUR SERVICES
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)", letterSpacing: "-0.03em" }}>
            Outdoor media,<br /><span className="text-grad">end to end.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
            From a single landmark hoarding to a multi-city campaign across the East —
            with printing, fabrication and monitoring all handled in-house. One partner, the whole spread.
          </motion.p>
        </div>
      </section>

      {/* ── Flagship feature rows ── */}
      <section className="bg-white text-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 space-y-24 md:space-y-36">
          {FLAGSHIP.map((s, i) => <FeatureRow key={s.name} s={s} i={i} />)}
        </div>
      </section>

      {/* ── Stat band ── */}
      <section className="bg-jkblue-deep text-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((st) => (
              <Reveal key={st.l}>
                <div>
                  <div className="font-display font-extrabold text-grad leading-none" style={{ fontSize: "clamp(2.25rem,4vw,3.5rem)" }}>{st.n}</div>
                  <div className="mt-2 text-sm tracking-wide text-cream/60">{st.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── More ways we help (card grid) ── */}
      <section className="bg-white text-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl mb-14">
            <Reveal><p className="text-jkred font-semibold tracking-wide text-sm mb-4">More ways we help</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-extrabold leading-[1.02]" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.02em" }}>
                The whole spread, <span className="text-grad">under one roof.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MORE.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-jkred/40 hover:shadow-xl hover:shadow-jkblue/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jkred/5 text-jkblue transition-colors duration-300 group-hover:bg-jkred/10 group-hover:text-jkred">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:text-jkblue transition-colors">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-jkblue-deep text-cream px-8 py-10 sm:px-12">
              <p className="font-display text-2xl sm:text-3xl font-bold text-center sm:text-left">Not sure which format fits? <span className="text-grad">Let&rsquo;s plan it.</span></p>
              <Link href="/contact" className="shrink-0 rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
                Talk to us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
