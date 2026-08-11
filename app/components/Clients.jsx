"use client";

import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// 111 client logos extracted from the creds deck.
const LOGOS = Array.from({ length: 111 }, (_, i) => `/clients/client-${String(i + 1).padStart(2, "0")}.png`);

const rows = [LOGOS.slice(0, 37), LOGOS.slice(37, 74), LOGOS.slice(74, 111)];

function Chip({ src }) {
  return (
    <div className="shine group mx-2.5 flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-white px-5 shadow-md shadow-jkblue/5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-xl hover:shadow-jkblue/15 hover:border-jkred/40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Client" loading="lazy" className="max-h-12 max-w-full object-contain" />
    </div>
  );
}

function Row({ items, reverse, duration }) {
  const doubled = [...items, ...items]; // seamless loop
  return (
    <div className="flex overflow-hidden py-1.5">
      <div className={`marquee ${reverse ? "marquee-rev" : ""}`} style={{ animationDuration: `${duration}s` }}>
        {doubled.map((src, i) => <Chip key={i} src={src} />)}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-cream text-ink">
      {/* deep blue -> cream blend so it flows from Leadership */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
      <Bokeh tone="light" />

      <div className="relative z-10 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 text-center mb-14">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR PARTNERS</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display h-xl font-extrabold">
              Trusted by the <span className="text-grad">biggest brands.</span>
            </h2>
          </Reveal>
          {/* on-brand animated gradient accent line */}
          <Reveal delay={0.1}>
            <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-[linear-gradient(90deg,#b5713f,#e11b2e,#211c84,#00a8d6,#b5713f)] bg-[length:200%_100%]"
                 style={{ animation: "jkslide 3s linear infinite" }} />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl mx-auto text-ink/60">
              Five decades of campaigns for the names that shape the market.
            </p>
          </Reveal>
        </div>

        {/* three flowing rows */}
        <div className="relative flex flex-col gap-4">
          <Row items={rows[0]} reverse={false} duration={70} />
          <Row items={rows[1]} reverse={true} duration={58} />
          <Row items={rows[2]} reverse={false} duration={82} />

          {/* edge fades — brands emerge & vanish */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
