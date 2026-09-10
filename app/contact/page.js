import GetHere from "../components/GetHere";
import EnquiryForm from "../components/EnquiryForm";

export const metadata = { title: "Contact — JK Advertising" };

const CONTACT = {
  address: "12C Sarat Bose Road, Kolkata – 700020",
  phone: "+91 98300 25496",
  phoneRaw: "919830025496",
  email: "kolkata@jkad.in",
};

export default function ContactPage() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 pt-40 md:pt-48 pb-24 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* left — invitation + details + map */}
        <div>
          <p className="text-jkred font-semibold tracking-wide text-sm mb-5">Get in touch</p>
          <h1 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}>
            Let&rsquo;s put your brand<br /><span className="text-grad">where the East looks.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/60 leading-relaxed">
            Tell us your brand, your audience and your goal — our team recommends the right sites
            and sends a plan. Transparent rates, no brokering.
          </p>

          {/* contact details */}
          <div className="mt-9 space-y-5">
            <div>
              <p className="text-copper text-[11px] tracking-[0.25em] mb-1">VISIT US</p>
              <p className="text-ink/80 leading-relaxed">{CONTACT.address}</p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <p className="text-copper text-[11px] tracking-[0.25em] mb-1">CALL US</p>
                <a href={`tel:+${CONTACT.phoneRaw}`} className="text-ink/80 hover:text-jkred transition-colors">{CONTACT.phone}</a>
              </div>
              <div>
                <p className="text-copper text-[11px] tracking-[0.25em] mb-1">EMAIL US</p>
                <a href={`mailto:${CONTACT.email}`} className="text-ink/80 hover:text-jkred transition-colors break-all">{CONTACT.email}</a>
              </div>
            </div>
            <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-jkred px-6 py-3 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              WhatsApp us →
            </a>
          </div>

          {/* map */}
          <div className="mt-10">
            <p className="text-copper text-[11px] tracking-[0.25em] mb-3">FIND US</p>
            <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
              <iframe
                title="JK Advertising — 12C Sarat Bose Road, Kolkata"
                src="https://www.google.com/maps?q=12C%20Sarat%20Bose%20Road%2C%20Kolkata%20700020&output=embed"
                className="block h-64 w-full md:h-72"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <GetHere />
          </div>
        </div>

        {/* right — the enquiry form */}
        <div className="lg:pt-4">
          <p className="text-jkred font-semibold tracking-wide text-sm mb-5">Send an enquiry</p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
