"use client";

import { motion } from "framer-motion";

const PHONE = "919830025496"; // JK — Nimesh Shah
const MSG = encodeURIComponent("Hi JK Advertising! I'd like to know more about your OOH media.");

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${PHONE}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      className="group fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
      style={{ background: "#25D366" }}
    >
      {/* pulsing ring (behind the icon) */}
      <span className="absolute inset-0 -z-10 rounded-full opacity-50 animate-ping" style={{ background: "#25D366" }} />
      {/* tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-jkblue-deep px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
      {/* WhatsApp glyph */}
      <svg viewBox="0 0 32 32" className="relative z-10 h-7 w-7" aria-hidden>
        <path fill="#ffffff" d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.115.552 4.174 1.6 5.995L4 29l8.2-1.55a11.94 11.94 0 0 0 3.804.62h.001C22.62 28.07 28 22.688 28 16.067 28 9.446 22.62 4.064 16.004 3zm0 21.93h-.001a9.9 9.9 0 0 1-3.85-.77l-.276-.11-4.868.92.98-4.746-.18-.29a9.87 9.87 0 0 1-1.51-5.244c0-5.47 4.454-9.92 9.93-9.92 2.653 0 5.145 1.035 7.02 2.912a9.86 9.86 0 0 1 2.906 7.016c0 5.47-4.453 9.922-9.92 9.922zm5.44-7.428c-.297-.15-1.758-.868-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.15-.669-1.611-.916-2.207-.242-.58-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.874 1.213 3.072.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
      </svg>
    </motion.a>
  );
}
