"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Bokeh from "./Bokeh";
import { VIEW, SHAPES, CITYXY } from "./reachGeo";

// EXPERIMENT: "Our Reach" on a real-geography map of Eastern + NE India.
// State shapes are projected from real GeoJSON; cities sit at true lat/long.
// Kolkata is the glowing hub with animated links + travelling signal pulses.
const REGIONS = ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Assam", "Sikkim", "Tripura"];
const HOME = "West Bengal";
const HUB = "Kolkata";
const POS = {
  Siliguri: "l", Gangtok: "t", Itanagar: "t", Guwahati: "t", Kohima: "r",
  Shillong: "r", Imphal: "r", Agartala: "l", Aizawl: "r", Patna: "l",
  Ranchi: "l", Jamshedpur: "l", Durgapur: "l", Kharagpur: "b", Bhubaneswar: "b",
};
const OTHERS = Object.keys(CITYXY).filter((n) => n !== HUB);
const [HX, HY] = CITYXY[HUB];
const OFF = 15;

function labelPos(n) {
  const [x, y] = CITYXY[n];
  const p = POS[n] || "r";
  if (p === "l") return { x: x - OFF, y: y + 7, a: "end" };
  if (p === "t") return { x, y: y - OFF, a: "middle" };
  if (p === "b") return { x, y: y + OFF + 12, a: "middle" };
  return { x: x + OFF, y: y + 7, a: "start" };
}

function Pulse({ to, i }) {
  const [x, y] = CITYXY[to];
  const dur = 2.6, begin = `${0.9 + i * 0.18}s`;
  return (
    <circle r="4" fill="#ffe6c2">
      <animate attributeName="cx" values={`${HX};${x}`} dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
      <animate attributeName="cy" values={`${HY};${y}`} dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur={`${dur}s`} begin={begin} repeatCount="indefinite" />
    </circle>
  );
}

export default function ReachMap() {
  return (
    <section id="reach" className="cv-auto relative bg-jkblue-deep text-cream overflow-hidden">
      <Bokeh tone="dark" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* text */}
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
                audiences right across Eastern India and the North-East — from the metros
                to the towns the others don&rsquo;t reach.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {REGIONS.map((r) => (
                  <span key={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-cream/80">{r}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* real-geography map */}
          <Reveal delay={0.1} dir="left">
            <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className="w-full h-auto" style={{ filter: "drop-shadow(0 18px 50px rgba(0,0,0,0.5))" }}>
              <defs>
                <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#26215c" />
                  <stop offset="100%" stopColor="#171340" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e11b2e" />
                  <stop offset="100%" stopColor="#b5713f" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="hubGlow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e11b2e" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e11b2e" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* state landmass */}
              {SHAPES.map((s) => (
                <path
                  key={s.s}
                  d={s.d}
                  fill={s.s === HOME ? "#3a2f86" : "url(#landGrad)"}
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              ))}

              {/* hub glow */}
              <circle cx={HX} cy={HY} r="120" fill="url(#hubGlow2)" />

              {/* links */}
              {OTHERS.map((n, i) => {
                const [x, y] = CITYXY[n];
                return (
                  <motion.line
                    key={n} x1={HX} y1={HY} x2={x} y2={y}
                    stroke="url(#lineGrad)" strokeWidth="2.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.55 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: "easeInOut" }}
                  />
                );
              })}

              {/* signal pulses */}
              {OTHERS.map((n, i) => <Pulse key={`p-${n}`} to={n} i={i} />)}

              {/* city nodes */}
              {OTHERS.map((n, i) => {
                const [x, y] = CITYXY[n];
                const lp = labelPos(n);
                return (
                  <motion.g key={n}
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ transformOrigin: `${x}px ${y}px` }}>
                    <circle cx={x} cy={y} r="10" fill="var(--color-copper)" opacity="0.18" />
                    <circle cx={x} cy={y} r="4.5" fill="#ffd9a8" />
                    <text x={lp.x} y={lp.y} textAnchor={lp.a} fontSize="21" fontWeight="600"
                      fill="rgba(246,239,223,0.85)" style={{ fontFamily: "var(--font-sora), sans-serif" }}>{n}</text>
                  </motion.g>
                );
              })}

              {/* Kolkata hub */}
              <g>
                <circle cx={HX} cy={HY} r="9" fill="var(--color-jkred)" opacity="0.5">
                  <animate attributeName="r" values="9;24;9" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0;0.55" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle cx={HX} cy={HY} r="8" fill="var(--color-jkred)" />
                <circle cx={HX} cy={HY} r="3" fill="#fff" />
                <text x={HX} y={HY + 26} textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" style={{ fontFamily: "var(--font-sora), sans-serif" }}>Kolkata</text>
              </g>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
