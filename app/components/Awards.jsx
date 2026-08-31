"use client";

import Reveal from "./Reveal";

// "Awards & Recognition" — three real trophies in framed display cards that
// slowly turn in 3D on their own (see .award-turn in globals.css). Each card's
// inner background matches its image so the trophy sits seamlessly.
// Gold + Bronze were both won for the Red FM billboard (OAA 2014); the Bengal
// Business Honour (2025) is a company-level recognition.
const AWARDS = [
  {
    img: "/awards/gold.png",
    dark: true,
    medal: "🥇",
    tier: "Gold",
    cat: "Traditional Billboards",
    body: "OAA Outdoor Advertising Awards 2014",
    note: "For the Red FM 93.5 live-radio billboard — “Ab Suno Mat, Dekho Bhi.”",
  },
  {
    img: "/awards/bronze.png",
    dark: true,
    medal: "🥉",
    tier: "Bronze",
    cat: "Activation",
    body: "OAA Outdoor Advertising Awards 2014",
    note: "Won for the very same landmark Red FM campaign.",
  },
  {
    img: "/awards/bengal.png",
    dark: false,
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
              <div className="group flex h-full flex-col">
                {/* display case with 3D auto-turn */}
                <div
                  className="relative overflow-hidden rounded-3xl border border-white/12 shadow-2xl shadow-black/40"
                  style={{ perspective: "1000px", background: a.dark ? "radial-gradient(120% 100% at 50% 0%, #14122f 0%, #050510 100%)" : "linear-gradient(180deg, #f5f5f7 0%, #e3e3e8 100%)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={`${a.tier} — ${a.cat}`}
                    className="award-turn mx-auto h-[24rem] w-auto object-contain py-6"
                    style={{ animationDelay: `${i * 1.1}s` }}
                  />
                  {/* soft floor glow */}
                  <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-full bg-jkred/10 blur-2xl" />
                </div>

                {/* description */}
                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl leading-none">{a.medal}</span>
                    <h3 className="font-display text-xl font-bold">{a.tier}</h3>
                  </div>
                  <p className="mt-1 text-copper text-sm font-semibold tracking-wide">{a.cat}</p>
                  <p className="mt-2 text-cream/75">{a.body}</p>
                  <p className="mt-1 text-sm text-cream/50 leading-relaxed">{a.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
