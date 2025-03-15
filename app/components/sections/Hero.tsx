"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={sectionRef} className="text-white h-[40dvh] sm:h-[50dvh] md:h-[80dvh] lg:h-[111dvh] relative">
      <div className="absolute bg-[url(/images/hero-image.jpg)] bg-cover bg-center top-0 bottom-0 inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60 light" />
      
      <div className="container mx-auto relative flex flex-col gap-20 md:gap-80 px-4 md:px-6">
        <motion.div
          ref={textRef1}
          style={{ y: y1, opacity }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-4 md:mb-8 pt-[150px] md:pt-[200px] font-candara-bold"
        >
          MAKING INNOVATION
          <br />
          COLLABORATIVE
        </motion.div>

        <motion.div
          ref={textRef2}
          style={{ y: y2, opacity }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl  text-right font-candara-bold"
        >
          DELIVERING
          <br />
          SOLUTIONS & GROWTH
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        ref={footerRef}
        className="border-t border-t-white relative mt-10 md:mt-20 hidden md:block"
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between text-white py-5 px-4 space-y-4 sm:space-y-0">
          <p className="text-white font-abadi-extralight text-lg md:text-xl uppercase">Innovation</p>
          <p className="text-white font-abadi-extralight text-lg md:text-xl uppercase">Technology</p>
          <p className="text-white font-abadi-extralight text-lg md:text-xl uppercase">Project Lifecycle</p>
        </div>
      </motion.div>
    </section>
  );
}
