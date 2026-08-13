"use client";

import { motion } from "framer-motion";
import Bokeh from "./components/Bokeh";

// On-brand 404: instead of a dead error page, it's an "empty billboard" — which
// is literally JK's business. One screen, two clear ways out. Frictionless.
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-jkblue-deep text-cream px-6">
      <Bokeh tone="dark" />
      {/* soft key light */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(197,138,62,0.18), transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* floating empty billboard */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 220 170" className="w-56 sm:w-72 h-auto">
              {/* panel */}
              <rect x="15" y="12" width="190" height="96" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
              {/* "404" on the empty panel */}
              <text x="110" y="76" textAnchor="middle" fontSize="52" fontWeight="800"
                fill="url(#g404)" style={{ fontFamily: "var(--font-sora), sans-serif" }}>404</text>
              {/* shine sweeping across the panel */}
              <defs>
                <linearGradient id="g404" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b5713f" />
                  <stop offset="55%" stopColor="#e11b2e" />
                  <stop offset="100%" stopColor="#5b52ff" />
                </linearGradient>
                <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <clipPath id="panelClip"><rect x="15" y="12" width="190" height="96" rx="5" /></clipPath>
              </defs>
              <g clipPath="url(#panelClip)">
                <rect x="15" y="12" width="60" height="96" fill="url(#sheen)">
                  <animate attributeName="x" values="-60;220" dur="3.2s" repeatCount="indefinite" />
                </rect>
              </g>
              {/* legs + base */}
              <path d="M70 108 L64 160 M150 108 L156 160" stroke="rgba(255,255,255,0.35)" strokeWidth="4" strokeLinecap="round" />
              <path d="M55 160 h30 M135 160 h30" stroke="rgba(255,255,255,0.25)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4"
        >
          PAGE NOT FOUND
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="font-display font-extrabold h-xl"
        >
          This billboard&rsquo;s <span className="text-grad">empty.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-md text-cream/70"
        >
          The page you&rsquo;re looking for isn&rsquo;t here — but 3,800+ of ours are up
          across the East. Let&rsquo;s get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <a href="/" className="rounded-full bg-jkred px-7 py-3.5 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
            ← Back home
          </a>
          <a href="/#contact" className="rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:bg-cream/10">
            Talk to us
          </a>
        </motion.div>
      </div>
    </main>
  );
}
