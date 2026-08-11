// Bokeh "city-lights" — soft glowing orbs drifting, like lit billboards at night.
// tone="dark" glows (screen blend); tone="light" is a faint tint (multiply).
const ORBS = [
  { s: 340, x: "6%",  y: "14%", c: "#b5713f", d: 22, dl: 0 },
  { s: 300, x: "72%", y: "6%",  c: "#5b52ff", d: 27, dl: -5 },
  { s: 320, x: "84%", y: "58%", c: "#e11b2e", d: 24, dl: -9 },
  { s: 240, x: "28%", y: "72%", c: "#00a8d6", d: 29, dl: -3 },
  { s: 200, x: "48%", y: "34%", c: "#b5713f", d: 20, dl: -12 },
  { s: 220, x: "14%", y: "82%", c: "#5b52ff", d: 31, dl: -7 },
  { s: 180, x: "60%", y: "80%", c: "#00a8d6", d: 26, dl: -15 },
  { s: 260, x: "40%", y: "4%",  c: "#e11b2e", d: 23, dl: -2 },
];

export default function Bokeh({ tone = "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ORBS.map((o, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: o.x,
            top: o.y,
            width: o.s,
            height: o.s,
            background: o.c,
            borderRadius: "9999px",
            filter: `blur(${dark ? 70 : 55}px)`,
            opacity: dark ? 0.4 : 0.14,
            mixBlendMode: dark ? "screen" : "multiply",
            animation: `drift ${o.d}s ease-in-out ${o.dl}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
