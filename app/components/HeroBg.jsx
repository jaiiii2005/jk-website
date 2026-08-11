"use client";

import { useState, useEffect } from "react";

// Cinematic photo montage of real JK billboards — Ken-Burns zoom + crossfade,
// with a dark gradient + vignette so the headline stays crisp. Smooth (only
// transform + opacity animate).
const IMAGES = [
  { src: "/work/w-audi.jpg", kb: "kb0" },
  { src: "/work/w-stylebaazar.jpg", kb: "kb1" },
  { src: "/work/w-joi-clean.jpg", kb: "kb2" },
];

export default function HeroBg() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-jkblue-deep">
      {IMAGES.map((im, k) => (
        <div key={k} className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out" style={{ opacity: k === i ? 1 : 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={im.src} alt="" className={`kenburns ${im.kb} h-full w-full object-cover`} />
        </div>
      ))}

      {/* dark gradient for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(18,16,63,0.92) 0%, rgba(18,16,63,0.6) 45%, rgba(18,16,63,0.55) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(18,16,63,0.85) 0%, transparent 40%, rgba(18,16,63,0.35) 100%)" }} />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(10,8,30,0.55) 100%)" }} />
    </div>
  );
}
