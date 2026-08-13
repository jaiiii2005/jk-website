"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";

// "Our Reach" — a stylised night-map of Eastern India. Kolkata is the glowing
// hub; JK's markets light up and connect as you scroll in. Answers the first
// question a client asks: "Do you cover my area?"
// NOTE: cities below are JK's known Eastern-India footprint — confirm the exact
// list with management and add/remove as needed.
const HUB = { n: "Kolkata", x: 52, y: 58 };
const CITIES = [
  { n: "Siliguri", x: 53, y: 25 },
  { n: "Gangtok", x: 55, y: 19 },
  { n: "Guwahati", x: 77, y: 30 },
  { n: "Agartala", x: 74, y: 48 },
  { n: "Patna", x: 29, y: 34 },
  { n: "Ranchi", x: 31, y: 52 },
  { n: "Jamshedpur", x: 38, y: 56 },
  { n: "Durgapur", x: 45, y: 49 },
  { n: "Kharagpur", x: 46, y: 60 },
  { n: "Bhubaneswar", x: 35, y: 76 },
];

const REGIONS = ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Assam", "Sikkim", "Tripura", "North-East"];

function Dot({ c, i, hub = false }) {
  const labelRight = c.x < 50;
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
            <animate attributeName="r" values="2.4;6;2.4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx={c.x} cy={c.y} r="2.2" fill="var(--color-jkred)" />
        </>
      )}
      {!hub && (
        <>
          <circle cx={c.x} cy={c.y} r="2.6" fill="var(--color-copper)" opacity="0.18" />
          <circle cx={c.x} cy={c.y} r="1.15" fill="#ffd9a8" />
        </>
      )}
      <text
        x={labelRight ? c.x + 3 : c.x - 3}
        y={hub ? c.y + 6.2 : c.y + 1}
        textAnchor={hub ? "middle" : labelRight ? "start" : "end"}
        fontSize={hub ? "3.4" : "2.5"}
        fontWeight={hub ? "800" : "600"}
        fill={hub ? "#fff" : "rgba(246,239,223,0.72)"}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {c.n}
      </text>
    </motion.g>
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
              <svg viewBox="0 0 100 92" className="w-full h-auto" style={{ filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.4))" }}>
                {/* faint reference grid */}
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M8 0H0V8" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100" height="92" fill="url(#grid)" rx="4" />

                {/* connection lines drawing from Kolkata to each city */}
                {CITIES.map((c, i) => (
                  <motion.line
                    key={c.n}
                    x1={HUB.x} y1={HUB.y} x2={c.x} y2={c.y}
                    stroke="url(#lineGrad)" strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.55 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.09, ease: "easeInOut" }}
                  />
                ))}
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e11b2e" />
                    <stop offset="100%" stopColor="#b5713f" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

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
