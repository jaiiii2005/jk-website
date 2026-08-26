import Link from "next/link";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Reveal from "./components/Reveal";

// Lean landing (multi-page): hero + stats + teasers that link to the full pages.
export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Stats />

      {/* Services teaser */}
      <section className="relative bg-cream text-ink overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">WHAT WE DO</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,5.5vw,3.75rem)", letterSpacing: "-0.02em" }}>
              A <span className="text-grad">360°</span> outdoor partner.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl mx-auto text-ink/60 leading-relaxed">
              Hoardings, digital OOH, unipoles, transit &amp; airport, rural and events — the full spread across Eastern India.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/services" className="mt-8 inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              Explore our services →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Work teaser */}
      <section className="relative bg-jkblue-deep text-cream overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cream to-jkblue-deep -translate-y-px" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <Reveal><p className="text-copper tracking-[0.4em] text-xs sm:text-sm mb-4">OUR WORK</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2rem,5.5vw,3.75rem)", letterSpacing: "-0.02em" }}>
              Campaigns that <span className="text-grad">turned heads.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl mx-auto text-cream/60 leading-relaxed">
              Audi, Style Baazar, JOI, IDEE, Red FM and more — the billboards that made the East look up.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/work" className="mt-8 inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              See our work →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <Clients />

      {/* Contact teaser */}
      <section className="relative bg-cream text-ink overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.25rem,6vw,4.5rem)", letterSpacing: "-0.02em" }}>
              Ready to <span className="text-grad">be seen?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              Let&rsquo;s connect →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
