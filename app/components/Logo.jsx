// Brand logo mark, recreated in CSS (robust — always renders):
//  - "JK" with horizontal stripes (the signature look)
//  - a divider, then "50" (copper 5 / blue 0)
// `tone` = "light" for dark backgrounds, "dark" for cream backgrounds.
export default function Logo({ tone = "light", className = "" }) {
  const jk = tone === "light" ? "#f6efdf" : "#211c84";
  const blue0 = tone === "light" ? "#7b74ff" : "#211c84";

  // Striped text: bands of the JK colour with transparent gaps, clipped to text.
  const striped = {
    backgroundImage: `repeating-linear-gradient(180deg, ${jk} 0 4.5px, transparent 4.5px 7px)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "var(--font-sora), system-ui, sans-serif",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  };
  const copper = {
    backgroundImage: "linear-gradient(135deg,#e0a87a,#9c5a2e)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "var(--font-sora), system-ui, sans-serif",
    fontWeight: 800,
  };

  return (
    <span className={`inline-flex items-end gap-2 leading-none select-none ${className}`}>
      <span style={{ ...striped, fontSize: "1.7rem" }}>JK</span>
      <span
        aria-hidden
        style={{ width: 2, height: "1.15rem", background: jk, opacity: 0.45, marginBottom: 3, borderRadius: 2 }}
      />
      <span className="leading-none" style={{ fontSize: "1.5rem", marginBottom: 1 }}>
        <span style={copper}>5</span>
        <span style={{ color: blue0, fontFamily: "var(--font-sora), system-ui, sans-serif", fontWeight: 800 }}>0</span>
      </span>
    </span>
  );
}
