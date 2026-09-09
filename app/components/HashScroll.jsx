"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Makes footer/nav deep-links like /about#reach land ON the exact section —
// waits for the page to render, then glides via Lenis (or native scroll).
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;

      let tries = 0;
      const go = () => {
        let el = null;
        try { el = document.querySelector(hash); } catch { el = null; }
        if (el) {
          const doScroll = () => {
            if (window.__lenis) {
              window.__lenis.scrollTo(el, { offset: -80 });
            } else {
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          };
          doScroll();
          // correct for late layout shift (images loading)
          setTimeout(doScroll, 500);
          return;
        }
        if (tries++ < 25) setTimeout(go, 100); // wait for content to mount
      };
      setTimeout(go, 120);
    };

    scrollToHash();                         // on page load / route change
    window.addEventListener("hashchange", scrollToHash); // same-page hash clicks
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
