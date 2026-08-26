import Link from "next/link";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HomeAbout from "./components/HomeAbout";
import HomeSolutions from "./components/HomeSolutions";
import HomeWorkStrip from "./components/HomeWorkStrip";
import Clients from "./components/Clients";
import Reveal from "./components/Reveal";

// Rich, Bright-style landing: hero + stats + about + solutions + work + partners
// + contact CTA — each teasing a full page.
export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Stats />
      <HomeAbout />
      <HomeSolutions />
      <HomeWorkStrip />
      <Clients />

      {/* Contact CTA */}
      <section className="relative bg-cream text-ink overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jkblue-deep to-cream -translate-y-px" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold" style={{ fontSize: "clamp(2.25rem,6vw,4.5rem)", letterSpacing: "-0.02em" }}>
              Ready to <span className="text-grad">be seen?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl mx-auto text-ink/60 leading-relaxed">
              Fifty years of turning streets into conversations. Let&rsquo;s start yours.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-jkred px-8 py-4 font-semibold text-white shadow-lg shadow-jkred/30 transition hover:bg-red-600">
              Let&rsquo;s connect →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
