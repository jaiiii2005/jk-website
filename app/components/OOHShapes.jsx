// Faint floating out-of-home silhouettes (hoarding, unipole, bus shelter, gantry)
// — quietly says "this is an outdoor-advertising company". Very low opacity so
// it never competes with the content. tone sets the colour.
function Hoarding(props) {
  return (
    <svg viewBox="0 0 100 95" {...props}>
      <rect x="8" y="4" width="84" height="46" rx="2" fill="currentColor" />
      <rect x="24" y="50" width="6" height="42" fill="currentColor" />
      <rect x="70" y="50" width="6" height="42" fill="currentColor" />
      <rect x="20" y="60" width="60" height="4" fill="currentColor" />
    </svg>
  );
}
function Unipole(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <rect x="16" y="4" width="68" height="38" rx="2" fill="currentColor" />
      <rect x="46" y="42" width="8" height="54" fill="currentColor" />
    </svg>
  );
}
function BusShelter(props) {
  return (
    <svg viewBox="0 0 120 70" {...props}>
      <rect x="4" y="10" width="112" height="9" rx="3" fill="currentColor" />
      <rect x="8" y="19" width="5" height="46" fill="currentColor" />
      <rect x="107" y="19" width="5" height="46" fill="currentColor" />
      <rect x="20" y="26" width="34" height="34" rx="2" fill="currentColor" />
      <rect x="20" y="58" width="80" height="6" fill="currentColor" />
    </svg>
  );
}

const ITEMS = [
  { C: Hoarding,   x: "3%",  y: "18%", w: 150, dl: "0s" },
  { C: Unipole,    x: "86%", y: "22%", w: 90,  dl: "-3s" },
  { C: BusShelter, x: "78%", y: "70%", w: 170, dl: "-6s" },
  { C: Hoarding,   x: "20%", y: "74%", w: 110, dl: "-4.5s" },
];

export default function OOHShapes({ tone = "dark" }) {
  const color = tone === "dark" ? "text-white" : "text-jkblue";
  const op = tone === "dark" ? "opacity-[0.05]" : "opacity-[0.06]";
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${color} ${op}`}>
      {ITEMS.map(({ C, x, y, w, dl }, i) => (
        <div key={i} className="floaty absolute" style={{ left: x, top: y, width: w, animationDelay: dl }}>
          <C className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
