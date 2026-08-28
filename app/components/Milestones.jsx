"use client";

import Reveal from "./Reveal";

const ITEMS = [
  { t: "Largest in the East", d: "3,800+ media sites — the widest OOH network in Eastern India, by far." },
  { t: "Everything in-house", d: "Printing, fabrication, mounting and monitoring — faster, tighter, accountable." },
  { t: "Ethical & transparent", d: "Net-discounted rates, no brokering, and post-buy proof on every site." },
];

export default function Milestones() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal><p className="text-jkred font-semibold tracking-wide text-sm mb-4">Why brands choose JK</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", letterSpacing: "-0.02em" }}>
              Five decades of being the name brands <span className="text-grad">count on</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="relative pl-6 md:pl-0 md:pt-8 md:border-t border-l md:border-l-0 border-ink/15">
                <span className="absolute left-0 top-0 md:top-8 h-2.5 w-2.5 -translate-x-[5px] md:translate-x-0 md:-translate-y-[5px] rounded-full bg-jkred" />
                <h3 className="font-display text-2xl font-bold">{it.t}</h3>
                <p className="mt-3 text-ink/60 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
