"use client";

import { useRef } from "react";

// A button/link that gently drifts toward the cursor and springs back — the
// "premium interactive" touch. Disabled for touch (no hover) via pointer events.
export default function MagneticButton({ href, className = "", children, strength = 0.3, ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
      {...rest}
    >
      {children}
    </a>
  );
}
