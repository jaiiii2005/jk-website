"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// Placeholder award data — replace title / body / year with JK's real awards.
const AWARDS = [
  {
    tier: "GOLD",
    face: "linear-gradient(145deg,#f7dc84,#c99a2e)",
    ring: "#c99a2e",
    title: "Award title",
    body: "Awarding body · year",
  },
  {
    tier: "SILVER",
    face: "linear-gradient(145deg,#eef0f6,#9fa3b3)",
    ring: "#9fa3b3",
    title: "Award title",
    body: "Awarding body · year",
  },
  {
    tier: "BRONZE",
    face: "linear-gradient(145deg,#e7ab79,#a5642f)",
    ring: "#a5642f",
    title: "Award title",
    body: "Awarding body · year",
  },
];

function Medallion({ face, ring }) {
  return (
    <div style={{ perspective: "900px" }} className="mx-auto h-32 w-32">
      <div className="coin relative h-full w-full">
        {/* front */}
        <div
          className="face flex items-center justify-center rounded-full shadow-xl"
          style={{ background: face, boxShadow: `0 10px 30px ${ring}55, inset 0 0 0 5px rgba(255,255,255,0.35)` }}
        >
          <span className="text-4xl" style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))" }}>★</span>
        </div>
        {/* back */}
        <div
          className="face back flex flex-col items-center justify-center rounded-full bg-jkblue-deep text-cream"
          style={{ boxShadow: `inset 0 0 0 5px ${ring}` }}
        >
          <span className="font-display font-extrabold text-2xl leading-none">JK</span>
          <span className="text-copper text-[10px] tracking-[0.2em] mt-0.5">50</span>
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="relative bg-cream text-ink overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
      <Bokeh tone="light" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36 text-center">
        <Reveal>
          <p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">RECOGNITION</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-xl font-extrabold">
            Honoured for <span className="text-grad">the work.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl mx-auto text-ink/60">
            Five decades of standout out-of-home has earned its share of industry recognition.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS.map((a, i) => (
            <Reveal key={a.tier} delay={0.1 + i * 0.12}>
              <div className="group rounded-3xl border border-ink/10 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-jkblue/10 hover:border-copper/50">
                <Medallion face={a.face} ring={a.ring} />
                <p className="mt-6 font-display font-extrabold tracking-[0.3em] text-sm" style={{ color: a.ring }}>
                  {a.tier}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
