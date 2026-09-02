"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

const CONIC = "conic-gradient(from 0deg, #b5713f, #e11b2e, #5b52ff, #00a8d6, #b5713f)";

// Bright-style leadership: a large framed portrait beside a rich, well-written
// bio (no bullet points). The two leaders alternate sides for rhythm.
const LEADERS = [
  {
    name: "Jogesh Kumar Shah",
    role: "Founder & Proprietor",
    photo: "/founder-jogesh.jpg",
    objPos: "50% 22%",
    bio: [
      "JK Advertising is the vision of Jogesh Kumar Shah — a self-made pioneer of out-of-home advertising in Eastern India. From a single-minded belief in honesty, service and value, he built JK from the ground up into the region's largest and most trusted outdoor media network.",
      "Every landmark hoarding, every decades-long client relationship and every net-discounted, no-brokering deal carries his founding principles. His journey is one of patience, integrity and an unwavering standard of quality — the foundation on which JK still stands today.",
    ],
  },
  {
    name: "Nimesh Shah",
    role: "Chief Executive Officer",
    photo: "/ceo-nimesh.jpg",
    objPos: "50% 24%",
    bio: [
      "As Chief Executive Officer, Nimesh Shah is writing JK Advertising's next chapter. Building on a fifty-year legacy, he pairs the firm's deep roots with a forward-looking vision — expanding into digital OOH and championing first-of-their-kind ideas, like a live radio studio built inside a billboard.",
      "His approach stays relentlessly value-first: transparent rates, in-house execution and campaigns engineered to keep clients ahead of the curve. Under his leadership, JK holds true to its founding trust while continually redefining what outdoor media can do in the East.",
    ],
  },
];

function LeaderRow({ l, i }) {
  const flip = i % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* portrait */}
      <Reveal dir={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-5 rounded-[2.2rem] opacity-30 blur-3xl" style={{ background: CONIC }} />
          <div className="relative rounded-[1.7rem] p-[3px]" style={{ background: CONIC }}>
            <div className="overflow-hidden rounded-[1.55rem] bg-jkblue-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.photo}
                alt={l.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                style={{ objectPosition: l.objPos }}
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* bio */}
      <Reveal dir={flip ? "left" : "right"} delay={0.08} className={flip ? "lg:order-1" : ""}>
        <div>
          <div className="mb-5 h-1 w-12 rounded-full" style={{ background: CONIC }} />
          <p className="mb-3 text-xs tracking-[0.35em] text-copper">{l.role.toUpperCase()}</p>
          <h3 className="font-display font-extrabold leading-[1.02]" style={{ fontSize: "clamp(2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
            {l.name}
          </h3>
          {l.bio.map((p, k) => (
            <p key={k} className="mt-5 max-w-xl leading-relaxed text-cream/70 text-justify">{p}</p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-jkblue-deep text-cream">
      <div className="absolute inset-x-0 top-0 h-40 -translate-y-px bg-gradient-to-b from-cream to-jkblue-deep" />
      <Bokeh tone="dark" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mb-20 text-center md:mb-28">
          <Reveal><p className="mb-5 text-xs tracking-[0.4em] text-copper sm:text-sm">THE LEADERSHIP</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display h-xl font-extrabold">
              The people <span className="text-grad">behind the legacy.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-36">
          {LEADERS.map((l, i) => (
            <LeaderRow key={l.name} l={l} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
