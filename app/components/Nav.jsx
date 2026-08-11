"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Innovation", "#innovation"],
  ["Leadership", "#leadership"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-jkblue-deep/85 backdrop-blur-md py-3 shadow-lg shadow-black/20" : "py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <a href="#top" aria-label="JK Advertising — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-cream/85 hover:text-white text-sm font-medium tracking-wide relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-jkred transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-jkred px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden text-cream text-2xl leading-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-jkblue-deep/95 backdrop-blur p-4 flex flex-col gap-3">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-cream/90 py-1"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
