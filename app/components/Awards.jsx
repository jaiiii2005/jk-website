"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// "Awards & Recognition" — three real trophies in framed display cards that
// slowly turn in 3D on their own (see .award-turn in globals.css). Each card's
// inner background matches its image so the trophy sits seamlessly.
// Gold + Bronze were both won for the Red FM billboard (OAA 2014); the Bengal
// Business Honour (2025) is a company-level recognition.
const AWARDS = [
  {
    img: "/awards/gold.png",
    back: "/awards/gold_back.png",
    glow: "radial-gradient(50% 46% at 50% 42%, rgba(229,150,60,0.30) 0%, rgba(229,150,60,0) 70%)",
    medal: "🥇",
    tier: "Gold",
    cat: "Traditional Billboards",
    body: "Outdoor Advertising Awards, India",
    note: "Red FM 93.5 Live Radio Billboard\nAb Suno Mat, Dekho Bhi",
  },
  {
    img: "/awards/bronze.png",
    back: "/awards/bronze_back.png",
    glow: "radial-gradient(50% 46% at 50% 42%, rgba(201,120,80,0.28) 0%, rgba(201,120,80,0) 70%)",
    medal: "🥉",
    tier: "Bronze",
    cat: "Activation",
    body: "Outdoor Advertising Awards, India",
    note: "Red FM 93.5 Live Radio Billboard\nAb Suno Mat, Dekho Bhi",
  },
  {
    img: "/awards/bengal.png",
    glow: "radial-gradient(52% 50% at 50% 45%, rgba(214,220,244,0.26) 0%, rgba(214,220,244,0) 68%)",
    medal: "🌟",
    tier: "Bengal Business Honour",
    cat: "Award 2025",
    body: "Presented by Priyanka Ghosh Entertainment",
    note: "Recognising JK Advertising’s leadership in Eastern India.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="cv-auto relative bg-jkblue-deep text-cream overflow-hidden">
      {/* ambient depth: drifting aurora + floating orbs + giant watermark */}
      <div className="award-aurora pointer-events-none absolute inset-0" />
      <Bokeh tone="dark" />
      <span
        aria-hidden
        className="award-drift pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display font-extrabold leading-none text-white/[0.035] whitespace-nowrap"
        style={{ fontSize: "18vw" }}
      >
        RECOGNISED
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">AWARDS &amp; RECOGNITION</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[1.02]" style={{ fontSize: "clamp(2rem,5.5vw,4rem)", letterSpacing: "-0.02em" }}>
              Recognised on the <span className="text-grad">national stage.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-cream/70 leading-relaxed">
              Two national OAA awards for a single landmark campaign — and a 2025 honour
              for five decades of the work.
            </p>
          </Reveal>
        </div>

        {/* trophy cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((a, i) => (
            <Reveal key={a.tier} delay={i * 0.1}>
              <div className="group flex h-full flex-col text-center">
                {/* trophy on a lit stage — spins 360, scales up on hover to inspect */}
                <div className="relative flex h-[26rem] items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.06]" style={{ perspective: "1100px" }}>
                  {/* rotating spotlight rays */}
                  <div className="award-rays pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: `${i * -3}s` }} />
                  {/* soft coloured spotlight (brightens on hover) */}
                  <div className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100" style={{ background: a.glow }} />
                  {/* gentle half-turn — stays solid, never edge-on (trophy sizes differ) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={`${a.tier} — ${a.cat}`}
                    className="award-sway relative h-full w-auto object-contain drop-shadow-2xl"
                    style={{ animationDelay: `${i * 1.4}s` }}
                  />
                  {/* glowing floor pool */}
                  <div className="pointer-events-none absolute bottom-3 left-1/2 h-6 w-44 -translate-x-1/2 rounded-[100%] bg-white/20 blur-2xl transition-all duration-500 group-hover:w-52 group-hover:bg-white/30" />
                </div>

                {/* description */}
                <div className="mt-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xl leading-none">{a.medal}</span>
                    <h3 className="font-display text-xl font-bold">{a.tier}</h3>
                  </div>
                  <p className="mt-1 text-copper text-sm font-semibold tracking-wide">{a.cat}</p>
                  <p className="mt-2 text-cream/75">{a.body}</p>
                  <p className="mt-1 text-sm text-cream/50 leading-relaxed whitespace-pre-line">{a.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
