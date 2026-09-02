"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function HomeAbout() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-44 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* big statement */}
        <div>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(2.75rem,6vw,5.5rem)", letterSpacing: "-0.03em" }}>
              We make<br /><span className="text-grad">brands converse.</span>
            </h2>
          </Reveal>
        </div>

        {/* supporting */}
        <div className="lg:pt-6">
          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug">
              Trust, service and value — for fifty+ years.
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-ink/60 leading-relaxed max-w-lg text-justify">
              JK Advertising turns the East&rsquo;s streets, stations and skylines into the stage
              where brands and people meet. From landmark hoardings to transit media — the largest
              outdoor network in the region, built on honesty and impeccable service.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/about" className="mt-9 inline-flex items-center rounded-full border-2 border-jkred px-8 py-3.5 font-semibold text-jkred transition hover:bg-jkred hover:text-white">
              About JK
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
