"use client";

import { useState } from "react";

// Enquiry form — TEST MODE: on submit it just shows a thank-you and resets.
// Nothing is sent anywhere yet (no email / no backend). When ready to capture
// real leads, wire the handleSubmit to an email service (e.g. Web3Forms).
const FIELD = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder-ink/40 outline-none transition focus:border-jkred focus:ring-2 focus:ring-jkred/15";
const LABEL = "mb-1.5 block text-xs font-semibold tracking-wide text-ink/60";

export default function EnquiryForm() {
  const [f, setF] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TEST MODE — no data leaves the browser.
    setSent(true);
    setF({ name: "", company: "", email: "", phone: "", message: "" });
  };

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-sm">
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-jkred/10">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#e11b2e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <h3 className="font-display text-2xl font-extrabold">Thank you!</h3>
        <p className="mt-3 max-w-sm text-ink/60 leading-relaxed">
          Your enquiry has been received — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border-2 border-jkred px-7 py-3 font-semibold text-jkred transition hover:bg-jkred hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">Full Name</label>
          <input id="name" required value={f.name} onChange={set("name")} placeholder="Your name" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="company">Company</label>
          <input id="company" value={f.company} onChange={set("company")} placeholder="Brand / company" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="email">Email Address</label>
          <input id="email" type="email" required value={f.email} onChange={set("email")} placeholder="you@company.com" className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" required value={f.phone} onChange={set("phone")} placeholder="+91 " className={FIELD} />
        </div>
      </div>

      <div className="mt-5">
        <label className={LABEL} htmlFor="message">Your Message</label>
        <textarea id="message" required rows={5} value={f.message} onChange={set("message")} placeholder="What would you like to advertise?" className={`${FIELD} resize-y`} />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600 sm:w-auto"
      >
        Send enquiry →
      </button>
    </form>
  );
}
