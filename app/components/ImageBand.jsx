"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Full-width parallax billboard photo — a cinematic break between sections.
export default function ImageBand({ src = "/work-3.jpg" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[45vh] md:h-[65vh] overflow-hidden bg-jkblue-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img style={{ y }} src={src} alt="" className="absolute inset-0 h-[130%] w-full object-cover" />
      <div className="absolute inset-0 bg-jkblue-deep/20" />
    </section>
  );
}
