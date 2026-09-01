"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// "Get here" — a slide-up sheet (styled like the phone's share menu) with app
// tiles that open each app with JK's office as the destination. Ride apps show
// on mobile (where they open the real app). All free deep links — no API/cost.
// Deep links pre-set the destination; the visitor confirms/books in the app.
const ADDR = "12C Sarat Bose Road, Kolkata – 700020";
const Q = encodeURIComponent("12C Sarat Bose Road, Kolkata 700020");
const NICK = encodeURIComponent("JK Advertising");
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${Q}`;

const PinIcon = (color) => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
    <path fill={color} d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" />
    <circle cx="12" cy="9" r="2.6" fill="#fff" />
  </svg>
);
const BikeIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="5.5" cy="17" r="3" /><circle cx="18.5" cy="17" r="3" />
    <path d="M5.5 17l3.5-6h5l2 3M9 11l-1-3H6M14 11l3-.5" />
  </svg>
);

export default function GetHere() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMobile(
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ADDR);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  };

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "JK Advertising", text: `JK Advertising — ${ADDR}`, url: MAPS_URL });
        return;
      } catch {
        /* dismissed */
      }
    }
    window.open(MAPS_URL, "_blank", "noopener");
  };

  const tiles = [
    { show: true, label: "Share", onClick: share, box: "bg-jkblue-deep text-cream",
      icon: (<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>) },
    { show: true, label: "Maps", href: `https://www.google.com/maps/dir/?api=1&destination=${Q}`, box: "bg-white ring-1 ring-black/10", icon: PinIcon("#EA4335") },
    { show: mobile, label: "Apple Maps", href: `https://maps.apple.com/?daddr=${Q}`, box: "bg-white ring-1 ring-black/10", icon: PinIcon("#1a73e8") },
    { show: mobile, label: "Uber", href: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${Q}&dropoff[nickname]=${NICK}`, box: "bg-black text-white",
      icon: (<span className="text-sm font-bold tracking-tight">Uber</span>) },
    { show: mobile, label: "Ola", href: `https://book.olacabs.com/?serviceType=p2p&drop_name=${NICK}&drop_address=${Q}`, box: "text-white", style: { background: "#4CB050" },
      icon: (<span className="text-base font-extrabold lowercase">ola</span>) },
    { show: mobile, label: "Rapido", href: "https://rapido.bike/", box: "", style: { background: "#FFD200" }, icon: BikeIcon },
    { show: true, label: copied ? "Copied!" : "Copy", onClick: copy, box: "bg-ink/5 text-ink ring-1 ring-black/10",
      icon: (<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>) },
  ].filter((t) => t.show);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-jkred hover:underline"
      >
        Get directions &amp; rides →
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-x-0 bottom-0 z-[91] mx-auto w-full max-w-md rounded-t-3xl bg-white p-5 pb-8 shadow-2xl"
            >
              <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-ink/15" />
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-ink">Get here</h3>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-1 text-ink/50 hover:bg-ink/5">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <p className="mb-5 text-sm text-ink/55">{ADDR}</p>

              <div className="grid grid-cols-4 gap-x-2 gap-y-5">
                {tiles.map((t) => {
                  const inner = (
                    <>
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${t.box}`} style={t.style}>
                        {t.icon}
                      </span>
                      <span className="text-[11px] font-medium text-ink/70">{t.label}</span>
                    </>
                  );
                  const cls = "flex flex-col items-center gap-1.5 transition-transform active:scale-95 hover:-translate-y-0.5";
                  return t.href ? (
                    <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={cls}>{inner}</a>
                  ) : (
                    <button key={t.label} type="button" onClick={t.onClick} className={cls}>{inner}</button>
                  );
                })}
              </div>

              {!mobile && (
                <p className="mt-5 text-[11px] text-ink/40">Uber, Ola &amp; Rapido open on a phone — try from your mobile.</p>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
