"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Enquiry form — TEST MODE: on submit it just shows a thank-you and resets.
// Nothing is sent anywhere yet (no email / no backend). When ready to capture
// real leads, wire handleSubmit to an email service (e.g. Web3Forms).
const FIELD = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder-ink/40 outline-none transition focus:border-jkred focus:ring-2 focus:ring-jkred/15";
const LABEL = "mb-1.5 block text-xs font-semibold tracking-wide text-ink/60";
const GRAD = "linear-gradient(100deg,#c8763f,#e11b2e 34%,#ff2d6b 56%,#7b2ff7 78%,#211c84)";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function EnquiryForm() {
  const [f, setF] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // TEST MODE — no data leaves the browser.
    setF({ name: "", company: "", email: "", phone: "", message: "" });
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-xl shadow-jkblue/5"
      >
        <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: GRAD }} />
        <motion.span
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-jkred/10"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#e11b2e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </motion.span>
        <h3 className="font-display text-2xl font-extrabold">Thank you!</h3>
        <p className="mt-3 max-w-sm text-ink/60 leading-relaxed">Your enquiry has been received — our team will get back to you shortly.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-7 rounded-full border-2 border-jkred px-7 py-3 font-semibold text-jkred transition hover:bg-jkred hover:text-white">
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 shadow-xl shadow-jkblue/5 sm:p-8">
      {/* premium gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: GRAD }} />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        <div className="grid gap-5 sm:grid-cols-2">
          <motion.div variants={item}>
            <label className={LABEL} htmlFor="name">Full Name</label>
            <input id="name" required value={f.name} onChange={set("name")} placeholder="Your name" className={FIELD} />
          </motion.div>
          <motion.div variants={item}>
            <label className={LABEL} htmlFor="company">Company</label>
            <input id="company" value={f.company} onChange={set("company")} placeholder="Brand / company" className={FIELD} />
          </motion.div>
          <motion.div variants={item}>
            <label className={LABEL} htmlFor="email">Email Address</label>
            <input id="email" type="email" required value={f.email} onChange={set("email")} placeholder="you@company.com" className={FIELD} />
          </motion.div>
          <motion.div variants={item}>
            <label className={LABEL} htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" required value={f.phone} onChange={set("phone")} placeholder="+91 " className={FIELD} />
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-5">
          <label className={LABEL} htmlFor="message">Your Message</label>
          <textarea id="message" required rows={5} value={f.message} onChange={set("message")} placeholder="What would you like to advertise?" className={`${FIELD} resize-y`} />
        </motion.div>

        <motion.button variants={item} type="submit" className="mt-6 w-full rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600 sm:w-auto">
          Send enquiry →
        </motion.button>
      </motion.div>
    </form>
  );
}
