"use client";

import { useState, useEffect } from "react";

// "Get here" — one tap to directions, or into a ride app with JK's office
// pre-set as the drop. Ride apps only appear on mobile (that's where they open
// the real app); Maps + copy show everywhere. Deep links can pre-fill the
// destination but can't book on the visitor's behalf — they confirm in-app.
const ADDR = "12C Sarat Bose Road, Kolkata – 700020";
const Q = encodeURIComponent("12C Sarat Bose Road, Kolkata 700020");
const NICK = encodeURIComponent("JK Advertising");

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
      /* clipboard blocked — ignore */
    }
  };

  const links = [
    { show: true, label: "Google Maps", sub: "Directions", emoji: "🗺️", href: `https://www.google.com/maps/dir/?api=1&destination=${Q}` },
    { show: mobile, label: "Apple Maps", sub: "Directions", emoji: "🍎", href: `https://maps.apple.com/?daddr=${Q}` },
    { show: mobile, label: "Uber", sub: "Book a ride", emoji: "🚗", href: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${Q}&dropoff[nickname]=${NICK}` },
    { show: mobile, label: "Ola", sub: "Book a ride", emoji: "🛺", href: `https://book.olacabs.com/?serviceType=p2p&drop_name=${NICK}&drop_address=${Q}` },
    { show: mobile, label: "Rapido", sub: "Open app", emoji: "🏍️", href: "https://rapido.bike/" },
  ].filter((l) => l.show);

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1 text-sm font-semibold text-jkred hover:underline"
      >
        {open ? "Hide options" : "Get directions & rides →"}
      </button>

      {open && (
        <>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-jkred/40 hover:shadow-md"
              >
                <span className="text-lg leading-none">{l.emoji}</span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-ink">{l.label}</span>
                  <span className="text-[10px] text-ink/50">{l.sub}</span>
                </span>
              </a>
            ))}

            <button
              type="button"
              onClick={copy}
              className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-jkred/40 hover:shadow-md"
            >
              <span className="text-lg leading-none">📋</span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">{copied ? "Copied!" : "Copy address"}</span>
                <span className="text-[10px] text-ink/50">Paste anywhere</span>
              </span>
            </button>
          </div>

          {!mobile && (
            <p className="mt-2 text-[11px] text-ink/40">
              Uber, Ola &amp; Rapido open on a phone — try it from your mobile.
            </p>
          )}
        </>
      )}
    </div>
  );
}
