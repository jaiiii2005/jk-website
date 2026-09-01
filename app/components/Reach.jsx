"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// "Our Reach" — a stylised night-map of Eastern India. Kolkata is the glowing
// hub; JK's markets light up, connect, and pulse with live signals as you scroll
// in. Answers the first question a client asks: "Do you cover my area?"
// NOTE: cities below are JK's known Eastern-India footprint — confirm the exact
// list with management and add/remove as needed. `pos` places the label cleanly
// so nothing collides: l = left, r = right, t = top, b = bottom.
const HUB = { n: "Kolkata", x: 50, y: 60 };
const CITIES = [
  { n: "Gangtok", x: 48, y: 14, pos: "t" },
  { n: "Siliguri", x: 42, y: 22, pos: "l" },
  // North-East
  { n: "Itanagar", x: 86, y: 16, pos: "t" },
  { n: "Guwahati", x: 76, y: 27, pos: "l" },
  { n: "Kohima", x: 94, y: 30, pos: "r" },
  { n: "Shillong", x: 80, y: 35, pos: "l" },
  { n: "Imphal", x: 96, y: 43, pos: "r" },
  { n: "Agartala", x: 82, y: 47, pos: "l" },
  { n: "Aizawl", x: 92, y: 52, pos: "r" },
  // East & central
  { n: "Patna", x: 19, y: 35, pos: "l" },
  { n: "Ranchi", x: 21, y: 53, pos: "l" },
  { n: "Jamshedpur", x: 29, y: 64, pos: "l" },
  { n: "Durgapur", x: 39, y: 50, pos: "t" },
  { n: "Kharagpur", x: 41, y: 73, pos: "b" },
  { n: "Bhubaneswar", x: 30, y: 83, pos: "b" },
];

const REGIONS = ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Sikkim", "Assam", "Meghalaya", "Tripura", "Manipur", "Mizoram", "Nagaland", "Arunachal"];

function labelPos(c, hub) {
  if (hub) return { x: c.x, y: c.y + 6.4, anchor: "middle" };
  switch (c.pos) {
    case "l":
      return { x: c.x - 3.3, y: c.y + 1, anchor: "end" };
    case "t":
      return { x: c.x, y: c.y - 3.2, anchor: "middle" };
    case "b":
      return { x: c.x, y: c.y + 5, anchor: "middle" };
    default:
      return { x: c.x + 3.3, y: c.y + 1, anchor: "start" };
  }
}

function Dot({ c, i, hub = false }) {
  const lp = labelPos(c, hub);
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + i * 0.09, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ transformOrigin: `${c.x}px ${c.y}px` }}
    >
      {hub && (
        <>
          <circle cx={c.x} cy={c.y} r="2.4" fill="var(--color-jkred)" opacity="0.5">
            <animate attributeName="r" values="2.4;7;2.4" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.55;0;0.55" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={c.x} cy={c.y} r="2.3" fill="var(--color-jkred)" />
          <circle cx={c.x} cy={c.y} r="0.9" fill="#fff" opacity="0.9" />
        </>
      )}
      {!hub && (
        <>
          <circle cx={c.x} cy={c.y} r="2.6" fill="var(--color-copper)" opacity="0.16" />
          <circle cx={c.x} cy={c.y} r="1.15" fill="#ffd9a8" />
        </>
      )}
      <text
        x={lp.x}
        y={lp.y}
        textAnchor={lp.anchor}
        fontSize={hub ? "3.4" : "2.5"}
        fontWeight={hub ? "800" : "600"}
        fill={hub ? "#fff" : "rgba(246,239,223,0.75)"}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {c.n}
      </text>
    </motion.g>
  );
}

// A signal travelling from Kolkata out to a city, on a continuous loop.
function Pulse({ c, i }) {
  const dur = 2.6;
  const begin = `${0.9 + i * 0.22}s`;
  return (
    <circle r="0.75" fill="#ffe6c2">
      <animate attributeName="cx" values={`${HUB.x};${c.x}`} dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
      <animate attributeName="cy" values={`${HUB.y};${c.y}`} dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
    </circle>
  );
}

export default function Reach() {
  return (
    <section id="reach" className="cv-auto relative bg-jkblue-deep text-cream overflow-hidden">
      <Bokeh tone="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* text side */}
          <div>
            <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-5">OUR REACH</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display h-xl font-extrabold">
                One network,<br /><span className="text-grad">across the East.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-cream/75">
                Headquartered in Kolkata, JK Advertising puts your brand in front of
                audiences right across Eastern India — from the metros to the towns
                the others don&rsquo;t reach.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-grad leading-none">15+</div>
                  <div className="mt-1 text-xs tracking-wide text-cream/55">cities &amp; growing</div>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div>
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-grad leading-none">12</div>
                  <div className="mt-1 text-xs tracking-wide text-cream/55">states covered</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {REGIONS.map((r) => (
                  <span key={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-cream/80">
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* map side */}
          <Reveal delay={0.1} dir="left">
            <div className="relative">
              <svg viewBox="0 0 112 92" className="w-full h-auto" style={{ filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.4))" }}>
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M8 0H0V8" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
                  </pattern>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e11b2e" />
                    <stop offset="100%" stopColor="#b5713f" stopOpacity="0.3" />
                  </linearGradient>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e11b2e" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#e11b2e" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* faint reference grid */}
                <rect x="0" y="0" width="112" height="92" fill="url(#grid)" rx="4" />

                {/* soft glow behind the Kolkata hub */}
                <circle cx={HUB.x} cy={HUB.y} r="16" fill="url(#hubGlow)" />

                {/* connection lines drawing from Kolkata to each city */}
                {CITIES.map((c, i) => (
                  <motion.line
                    key={c.n}
                    x1={HUB.x} y1={HUB.y} x2={c.x} y2={c.y}
                    stroke="url(#lineGrad)" strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.09, ease: "easeInOut" }}
                  />
                ))}

                {/* live signals radiating out from Kolkata */}
                {CITIES.map((c, i) => <Pulse key={`p-${c.n}`} c={c} i={i} />)}

                {/* city dots */}
                {CITIES.map((c, i) => <Dot key={c.n} c={c} i={i} />)}
                <Dot c={HUB} i={0} hub />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
