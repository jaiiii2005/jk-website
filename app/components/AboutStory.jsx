"use client";

import Reveal from "./Reveal";

export default function AboutStory() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <Reveal delay={0.05}>
            <h2 className="font-display font-extrabold leading-[0.98]" style={{ fontSize: "clamp(2.25rem,5vw,4.25rem)", letterSpacing: "-0.02em" }}>
              We don&rsquo;t put up displays. We make <span className="text-grad">brands converse.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:pt-4 space-y-6 text-lg text-ink/65 leading-relaxed text-justify">
          <Reveal delay={0.1}>
            <p>
              JK Advertising stands for vision, service and value in Eastern India&rsquo;s
              out-of-home industry. For five decades we&rsquo;ve grown from a single-minded belief
              in honesty and impeccable service into the region&rsquo;s <strong className="text-ink">largest outdoor
              media network</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              From landmark hoardings to transit media, corporate events, festival branding
              and more — with printing and fabrication all handled
              <strong className="text-ink"> in-house</strong>. One partner, the whole spread,
              putting brands exactly where the East looks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
