"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="text-white min-h-[100dvh] relative flex flex-col justify-center pt-[5rem] sm:pt-[6rem] md:pt-[7rem] lg:pt-[8rem] pb-8 sm:pb-12"
    >
      <div className="absolute bg-[url(/images/hero-industrial-piping.jpg)] bg-cover bg-center inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-70" />

      <div className="container mx-auto relative z-10 flex flex-col items-center px-4 md:px-6">
        <motion.span
          style={{ opacity }}
          className="text-[#0D7377] text-xs sm:text-sm font-semibold uppercase tracking-[3px] mb-4"
        >
          Specialist Piping QA/QC Services
        </motion.span>

        <motion.h1
          style={{ y: y1, opacity }}
          className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] mb-4 md:mb-6 font-extrabold font-candara-bold max-w-5xl leading-tight"
        >
          QA/QC &amp; Documentation Support for Piping &amp; Mechanical Utility
          Systems
        </motion.h1>

        <motion.p
          style={{ opacity }}
          className="text-center text-sm sm:text-base md:text-lg text-white/80 mx-auto max-w-2xl leading-relaxed"
        >
          Specialist QA/QC and documentation support for EPC, MEP, and
          mechanical contractors. We integrate into your project team and deliver
          through construction, mechanical completion, and commissioning. On-site
          or remote.
        </motion.p>

        <div className="flex flex-col items-center mt-8 md:mt-12">
          <Link
            href="/request-support"
            className="button-85 px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Request Project Support
          </Link>
          <p className="text-white/50 text-[13px] mt-3">
            Available to support active projects. We can mobilise within days.
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 mt-16 md:mt-24 text-xs sm:text-sm text-white/60 tracking-wide uppercase">
          <span>Data Centres</span>
          <span className="w-px h-4 bg-white/30" />
          <span>Life Sciences</span>
          <span className="w-px h-4 bg-white/30" />
          <span>Industrial Utilities</span>
        </div>
      </div>
    </section>
  );
}
