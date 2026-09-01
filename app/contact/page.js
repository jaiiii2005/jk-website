import GetHere from "../components/GetHere";

export const metadata = { title: "Contact — JK Advertising" };

const CONTACT = {
  address: "12C Sarat Bose Road, Kolkata – 700020",
  phone: "+91 98300 25496",
  phoneRaw: "919830025496",
  email: "kolkata@jkad.in",
};

// The big "LET'S Connect" billboard finale comes from the layout (on every page),
// so the Contact page carries the direct details.
export default function ContactPage() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-40 md:pt-48 pb-24 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-jkred font-semibold tracking-wide text-sm mb-5">Get in touch</p>
          <h1 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}>
            Let&rsquo;s <span className="text-grad">talk.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/60 leading-relaxed">
            Tell us your brand, your audience and your goal — our team recommends the right sites
            and sends a plan. Transparent rates, no brokering.
          </p>

          {/* location map */}
          <div className="mt-10">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-3">FIND US</p>
            <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
              <iframe
                title="JK Advertising — 12C Sarat Bose Road, Kolkata"
                src="https://www.google.com/maps?q=12C%20Sarat%20Bose%20Road%2C%20Kolkata%20700020&output=embed"
                className="block h-72 w-full md:h-80"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <GetHere />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">VISIT US</p>
            <p className="text-ink/80 leading-relaxed">{CONTACT.address}</p>
          </div>
          <a href={`tel:+${CONTACT.phoneRaw}`} className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:border-jkred/40 hover:shadow-md">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">CALL US</p>
            <p className="text-ink/80 group-hover:text-jkred transition-colors">{CONTACT.phone}</p>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:border-jkred/40 hover:shadow-md">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-2">EMAIL US</p>
            <p className="text-ink/80 group-hover:text-jkred transition-colors break-all">{CONTACT.email}</p>
          </a>
          <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-jkred px-8 py-4 text-center font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
            WhatsApp us →
          </a>
        </div>
      </div>
    </section>
  );
}
