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
    glow: "radial-gradient(50% 46% at 50% 42%, rgba(229,150,60,0.30) 0%, rgba(229,150,60,0) 70%)",
    medal: "🥇",
    tier: "Gold",
    cat: "Traditional Billboards",
    body: "OAA Outdoor Advertising Awards 2014",
    note: "For the Red FM 93.5 live-radio billboard — “Ab Suno Mat, Dekho Bhi.”",
  },
  {
    img: "/awards/bronze.png",
    glow: "radial-gradient(50% 46% at 50% 42%, rgba(201,120,80,0.28) 0%, rgba(201,120,80,0) 70%)",
    medal: "🥉",
    tier: "Bronze",
    cat: "Activation",
    body: "OAA Outdoor Advertising Awards 2014",
    note: "Won for the very same landmark Red FM campaign.",
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
                {/* trophy floats on the gradient, spinning, with a soft spotlight */}
                <div className="relative flex h-[26rem] items-center justify-center" style={{ perspective: "1100px" }}>
                  <div className="pointer-events-none absolute inset-0" style={{ background: a.glow }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={`${a.tier} — ${a.cat}`}
                    className="award-turn relative h-full w-auto object-contain drop-shadow-2xl"
                    style={{ animationDelay: `${i * 1.6}s` }}
                  />
                </div>

                {/* description */}
                <div className="mt-8">
                  <div className="flex items-center justify-center gap-2">
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
