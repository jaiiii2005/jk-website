"use client";

import { useState } from "react";

const PHONE = "919830025496";

// Captures an enquiry and sends it straight to JK's WhatsApp (no backend needed).
// Later this can also POST to an email service — the fields are ready.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", brand: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      "New enquiry — JK Advertising",
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      ...(f.brand ? [`Brand / Company: ${f.brand}`] : []),
      `Message: ${f.message}`,
    ];
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder-cream/40 outline-none transition focus:border-jkred focus:bg-white/10";

  return (
    <form onSubmit={submit} className="mx-auto mt-12 grid max-w-xl gap-3 text-left">
      <div className="grid sm:grid-cols-2 gap-3">
        <input required value={f.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
        <input required value={f.phone} onChange={set("phone")} placeholder="Phone number" className={inputCls} />
      </div>
      <input value={f.brand} onChange={set("brand")} placeholder="Brand / company (optional)" className={inputCls} />
      <textarea required value={f.message} onChange={set("message")} rows={3} placeholder="What would you like to advertise?" className={inputCls} />
      <button type="submit" className="mt-1 rounded-full bg-jkred px-7 py-3.5 font-semibold text-white transition hover:bg-red-600 shadow-lg shadow-jkred/30">
        Send enquiry →
      </button>
      <p className="text-center text-xs text-cream/45">Opens WhatsApp to send us your enquiry instantly.</p>
    </form>
  );
}
