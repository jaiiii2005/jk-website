"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const CREDS = [
  "Largest OOH network in the East",
  "Most trusted — for five decades",
  "Value-first: net rates, no brokering",
  "Impeccable service, lowest churn",
];

export default function HomeAbout() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* text */}
        <div>
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-6">WHO WE ARE</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[1.02]" style={{ fontSize: "clamp(2.25rem,4.5vw,4rem)", letterSpacing: "-0.02em" }}>
              We don&rsquo;t put up displays.<br />We make <span className="text-grad">brands converse.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-lg text-ink/60 leading-relaxed">
              For fifty years JK Advertising has turned the East&rsquo;s streets, stations and skylines
              into the stage where brands and people meet.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {CREDS.map((c) => (
                <li key={c} className="flex items-center gap-3 text-ink/75">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jkred text-white text-[10px]">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/about" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-jkred hover:gap-4 transition-all">
              More about us <span>→</span>
            </Link>
          </Reveal>
        </div>

        {/* image + floating badge */}
        <Reveal delay={0.1} dir="left">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/work/w-audi.jpg" alt="JK Advertising billboard" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-jkblue/15" />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-jkblue-deep text-cream px-6 py-5 shadow-xl">
              <div className="font-display font-extrabold text-grad leading-none" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>50</div>
              <p className="mt-1 text-xs tracking-wide text-cream/70">Years, forging ahead</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
