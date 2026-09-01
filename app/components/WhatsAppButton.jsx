"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "919830025496"; // JK — Nimesh Shah
const TEL = "+919830025496";
const MSG = encodeURIComponent("Hi JK Advertising! I'd like to know more about your OOH media.");

const WhatsAppGlyph = ({ className }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden>
    <path fill="#ffffff" d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.115.552 4.174 1.6 5.995L4 29l8.2-1.55a11.94 11.94 0 0 0 3.804.62h.001C22.62 28.07 28 22.688 28 16.067 28 9.446 22.62 4.064 16.004 3zm0 21.93h-.001a9.9 9.9 0 0 1-3.85-.77l-.276-.11-4.868.92.98-4.746-.18-.29a9.87 9.87 0 0 1-1.51-5.244c0-5.47 4.454-9.92 9.93-9.92 2.653 0 5.145 1.035 7.02 2.912a9.86 9.86 0 0 1 2.906 7.016c0 5.47-4.453 9.922-9.92 9.922zm5.44-7.428c-.297-.15-1.758-.868-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.15-.669-1.611-.916-2.207-.242-.58-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.874 1.213 3.072.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

const option = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.06, duration: 0.25, ease: [0.22, 1, 0.36, 1] } }),
  exit: (i) => ({ opacity: 0, y: 12, scale: 0.9, transition: { delay: i * 0.04, duration: 0.15 } }),
};

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* click-away backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[79]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              {/* Voice call */}
              <motion.a
                key="call"
                custom={1} variants={option} initial="hidden" animate="show" exit="exit"
                href={`tel:${TEL}`}
                className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 shadow-xl"
              >
                <span className="text-sm font-semibold text-jkblue-deep">Voice call</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "#25D366" }}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
              </motion.a>

              {/* Message */}
              <motion.a
                key="msg"
                custom={0} variants={option} initial="hidden" animate="show" exit="exit"
                href={`https://wa.me/${PHONE}?text=${MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 shadow-xl"
              >
                <span className="text-sm font-semibold text-jkblue-deep">Message</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "#25D366" }}>
                  <WhatsAppGlyph className="h-6 w-6" />
                </span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* main toggle button */}
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close WhatsApp options" : "Contact us on WhatsApp"}
          aria-expanded={open}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
          style={{ background: "#25D366" }}
        >
          {!open && (
            <span className="absolute inset-0 -z-10 rounded-full opacity-50 animate-ping" style={{ background: "#25D366" }} />
          )}
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.svg
                key="x" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </motion.svg>
            ) : (
              <motion.span key="wa" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <WhatsAppGlyph className="h-7 w-7" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
