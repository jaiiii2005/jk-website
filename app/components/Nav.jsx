"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["About", "#about"],
  ["Reach", "#reach"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Innovation", "#innovation"],
  ["Leadership", "#leadership"],
  ["Partners", "#clients"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = LINKS.map(([, h]) => h.slice(1));
    const onScroll = () => {
      setSolid(window.scrollY > 40);
      setShowTop(window.scrollY > 700);
      const line = window.scrollY + window.innerHeight * 0.35;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solid ? "bg-jkblue-deep/95 md:bg-jkblue-deep/85 md:backdrop-blur-md py-3 shadow-lg shadow-black/20" : "py-5"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between">
          <a href="#top" aria-label="JK Advertising — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-9 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {LINKS.map(([label, href]) => {
              const isActive = active === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${isActive ? "text-white" : "text-cream/80 hover:text-white"}`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-jkred transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </a>
              );
            })}
            <a href="#contact" className="rounded-full bg-jkred px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition">
              Enquire
            </a>
          </div>

          <button className="md:hidden text-cream text-2xl leading-none" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-3 mx-4 rounded-2xl bg-jkblue-deep p-4 flex flex-col gap-1">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-2 px-2 rounded-lg ${active === href.slice(1) ? "text-white bg-white/5" : "text-cream/85"}`}
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-jkred px-5 py-2.5 text-center text-sm font-semibold text-white">
              Enquire
            </a>
          </div>
        )}
      </header>

      {/* back to top */}
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-5 left-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-jkblue-deep/90 md:backdrop-blur text-cream transition-all duration-300 hover:bg-jkred ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        ↑
      </a>
    </>
  );
}
