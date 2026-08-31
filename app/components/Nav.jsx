"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
      setShowTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // sub-pages always get the solid bar (readable over light sections); home is
  // transparent at the top then goes solid on scroll.
  const solidBar = solid || pathname !== "/";
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solidBar ? "bg-jkblue-deep/95 md:bg-jkblue-deep/85 md:backdrop-blur-md py-3 shadow-lg shadow-black/20" : "py-5"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between">
          <Link href="/" aria-label="JK Advertising — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-12 md:h-14 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map(([label, href]) => {
              const on = isActive(href);
              return (
                <Link key={href} href={href} className={`relative text-sm font-medium tracking-wide transition-colors ${on ? "text-white" : "text-cream/80 hover:text-white"}`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-jkred transition-all duration-300 ${on ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
            <Link href="/contact" className="rounded-full bg-jkred px-5 py-2 text-sm font-semibold text-white hover:bg-red-600 transition">
              Enquire
            </Link>
          </div>

          <button className="lg:hidden text-cream text-2xl leading-none" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 mx-4 rounded-2xl bg-jkblue-deep p-4 flex flex-col gap-1">
            {LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-2 px-2 rounded-lg ${isActive(href) ? "text-white bg-white/5" : "text-cream/85"}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-jkred px-5 py-2.5 text-center text-sm font-semibold text-white">
              Enquire
            </Link>
          </div>
        )}
      </header>

      {/* back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 left-5 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-jkblue-deep/90 md:backdrop-blur text-cream transition-all duration-300 hover:bg-jkred ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        ↑
      </button>
    </>
  );
}
