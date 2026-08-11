"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Opening: JK present → the real "50" FORMS in place, revealed along the infinity
// path (no visible line) → tagline TYPES in → restrained shine → panel lifts.
const FIG = "M735,175 C735,80 885,80 858,175 C831,270 742,270 735,175 C728,80 585,80 612,175 C639,270 735,270 735,175 Z";

function Typer({ text, speed = 62, onDone, className = "" }) {
  const [k, setK] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setK((v) => (v < text.length ? v + 1 : v)), speed);
    return () => clearInterval(id);
  }, [text, speed]);
  useEffect(() => { if (k === text.length && onDone) onDone(); }, [k, text.length, onDone]);
  return (
    <span className={className}>
      {text.slice(0, k)}
      <span className="caret" style={{ height: "1em" }} />
    </span>
  );
}

export default function Intro() {
  const root = useRef(null);
  const jk = useRef(null);
  const reveal = useRef(null);
  const glow = useRef(null);
  const full = useRef(null);
  const gloss = useRef(null);
  const [phase, setPhase] = useState("form");
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const rlen = reveal.current.getTotalLength();
      gsap.set(reveal.current, { strokeDasharray: rlen, strokeDashoffset: rlen });
      gsap.set(glow.current, { opacity: 0, scale: 0.7 });
      gsap.set(full.current, { opacity: 0 });
      gsap.set(gloss.current, { xPercent: -170 });

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" }, onComplete: () => setPhase("type") });
      tl.from(jk.current, { opacity: 0, x: -24, duration: 0.7, ease: "power3.out" })
        .to(glow.current, { opacity: 0.85, scale: 1, duration: 1.0, ease: "power2.out" }, "-=0.2")   // warm glow blooms
        .to(reveal.current, { strokeDashoffset: 0, duration: 1.6, ease: "power1.inOut" }, "<")         // the real 50 forms along ∞
        .to(full.current, { opacity: 1, duration: 0.5 }, "-=0.3")                                       // crispen to exact 50
        .to(glow.current, { opacity: 0.4, scale: 1.08, duration: 0.9, yoyo: true, repeat: 1, ease: "sine.inOut" }, "<")
        .to(gloss.current, { xPercent: 170, duration: 1.1, ease: "power2.inOut" }, "-=0.5");            // restrained shine
    },
    { scope: root }
  );

  const liftOut = () => {
    if (phase === "lifting") return;
    setPhase("lifting");
    gsap.to(root.current, { yPercent: -100, duration: 1.0, ease: "power4.inOut", delay: 0.5, onComplete: () => setGone(true) });
  };

  const skip = () => {
    gsap.killTweensOf("*");
    if (phase === "lifting") return;
    setPhase("lifting");
    gsap.to(root.current, { yPercent: -100, duration: 0.6, ease: "power4.inOut", onComplete: () => setGone(true) });
  };

  if (gone) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream">
      {/* skip for returning visitors — keeps it frictionless */}
      <button onClick={skip} className="absolute top-5 right-6 z-10 text-xs tracking-[0.3em] text-ink/40 hover:text-jkred transition">SKIP ✕</button>
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 50% 46%, rgba(197,138,62,0.14), transparent 72%)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(120% 120% at 50% 50%, transparent 60%, rgba(33,28,132,0.10) 100%)" }} />

      <div className="relative w-[86vw] max-w-[680px]" style={{ aspectRatio: "909 / 365" }}>
        {/* JK half */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={jk} src="/logo-jk.png" alt="JK Advertising" className="absolute inset-0 w-full h-full object-contain select-none" />

        {/* warm copper glow behind the 50 */}
        <div ref={glow} aria-hidden className="pointer-events-none absolute rounded-full blur-3xl" style={{ right: "3%", top: "44%", transform: "translateY(-50%)", width: "44%", height: "128%", background: "radial-gradient(closest-side, rgba(197,138,62,0.5), rgba(225,27,46,0.16), transparent)" }} />

        {/* the real 50 forming in place (revealed along the infinity, no visible line) */}
        <svg viewBox="0 0 909 365" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <mask id="rev50"><path ref={reveal} d={FIG} stroke="#fff" strokeWidth="155" strokeLinecap="round" fill="none" /></mask>
          </defs>
          <image href="/logo-50-notag.png" x="0" y="0" width="909" height="365" mask="url(#rev50)" />
        </svg>

        {/* crisp full 50 finish */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={full} src="/logo-50-notag.png" alt="50" className="absolute inset-0 w-full h-full object-contain select-none" />

        {/* restrained glint masked to the tagless logo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ WebkitMaskImage: `url(/logo-notag.png)`, maskImage: `url(/logo-notag.png)`, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskPosition: "center", maskPosition: "center" }}>
          <div ref={gloss} className="absolute inset-y-0 w-1/2" style={{ background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.85), transparent)" }} />
        </div>

        {/* typed tagline under the 50 */}
        {phase !== "form" && (
          <div className="absolute flex flex-col items-center" style={{ left: "60%", right: "1%", top: "72%", color: "#4a4a6a" }}>
            <span className="tracking-[0.35em] font-semibold" style={{ fontSize: "clamp(0.55rem,1.5vw,0.85rem)", opacity: 0.9 }}>YEARS +</span>
            <Typer text="FORGING AHEAD" onDone={liftOut} className="mt-1 tracking-[0.28em] font-bold text-[clamp(0.7rem,1.9vw,1.05rem)]" />
          </div>
        )}
      </div>
    </div>
  );
}
