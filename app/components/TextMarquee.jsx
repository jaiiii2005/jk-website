"use client";

// Big scrolling TEXT ribbon — a signature modern-agency move. Bold statements
// slide across in giant type, alternating filled / outlined for rhythm.
// Pauses on hover so it stays readable. Thin band = frictionless, pure motion.
const ITEMS = [
  "We make brands converse",
  "50 years · forging ahead",
  "Largest OOH in the East",
  "Making brands unmissable",
];

export default function TextMarquee() {
  const row = [...ITEMS, ...ITEMS]; // doubled for a seamless -50% loop

  return (
    <div aria-hidden className="relative overflow-hidden bg-jkred py-4 sm:py-6">
      <div className="marquee" style={{ animationDuration: "26s" }}>
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-4 inline-flex items-center gap-8 font-display font-extrabold uppercase whitespace-nowrap"
            style={{
              fontSize: "clamp(1.5rem,4vw,3rem)",
              letterSpacing: "-0.01em",
              color: i % 2 ? "transparent" : "#fff",
              WebkitTextStroke: i % 2 ? "1.4px rgba(255,255,255,0.9)" : "0",
            }}
          >
            {t}
            <span className="text-white/70" style={{ WebkitTextStroke: "0", color: "rgba(255,255,255,0.7)" }}>★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
