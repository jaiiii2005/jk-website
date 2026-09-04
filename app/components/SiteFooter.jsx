import Link from "next/link";

const EXPLORE = [["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Contact", "/contact"]];
const COMPANY = [["Our Reach", "/about"], ["Leadership", "/about"], ["Partners", "/"]];

// Real details from Nimesh Shah's card. TODO(Sir): social profile URLs still needed.
const CONTACT = {
  address: "12C Sarat Bose Road, Kolkata – 700020",
  phone: "+91 98300 25496",
  phoneRaw: "919830025496",
  email: "kolkata@jkad.in",
};

const SOCIALS = [
  { name: "LinkedIn", href: "#", icon: <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H18.3v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10z" /> },
  { name: "Instagram", href: "#", icon: (<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.7" r="1.2" /></>) },
  { name: "Facebook", href: "#", icon: <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.7V13h2.74v8z" /> },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-jkblue-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-light.png" alt="JK Advertising — 50 Years" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-cream/55 leading-relaxed">
            The largest OOH media owner in the East — making brands converse for 50+ years.
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-sm tracking-wide mb-4">Explore</p>
          <ul className="space-y-2.5">
            {EXPLORE.map(([label, href]) => (
              <li key={label}><Link href={href} className="text-sm text-cream/60 hover:text-jkred transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-sm tracking-wide mb-4">Company</p>
          <ul className="space-y-2.5">
            {COMPANY.map(([label, href]) => (
              <li key={label}><Link href={href} className="text-sm text-cream/60 hover:text-jkred transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-sm tracking-wide mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-cream/60">
            <li className="leading-relaxed">{CONTACT.address}</li>
            <li><a href={`tel:+${CONTACT.phoneRaw}`} className="hover:text-jkred transition">{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-jkred transition break-all">{CONTACT.email}</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display font-bold text-sm tracking-wide mb-4">Follow</p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition hover:border-jkred hover:bg-jkred hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>© {new Date().getFullYear()} JK Advertising. 50+ Years · Forging Ahead.</p>
          <p>Brands Converse<span className="text-jkred">.</span></p>
        </div>
      </div>
    </footer>
  );
}
