"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section 
      ref={sectionRef} 
      className="text-white min-h-[300px] h-[calc(85dvh-80px)] md:h-[calc(100dvh-80px)] max-h-[1500px] relative flex flex-col"
    >
      <div className="absolute bg-[url(/images/hero-image-2.jpg)] bg-cover bg-center top-0 bottom-0 inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-70" />

      <div className="container mx-auto relative flex-1 flex flex-col items-center px-4 pt-[10vh] sm:pt-[15vh] md:pt-[20vh] md:px-6">
        <motion.div
          ref={textRef1}
          style={{ y: y1, opacity }}
          className="text-center text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 font-candara-bold max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
        >
         DEVELOPING COLLABORATIVE INNOVATION
        </motion.div>
        <motion.div className="text-center text-sm sm:text-base md:text-lg text-white/70 mx-auto w-[95%] sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] leading-relaxed">
        We deliver exceptional projects to outstanding clients, ensuring every aspect is flawlessly executed.
         </motion.div>
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <Link href="/contact-us" className="button-85 px-6 sm:px-8 py-3 sm:py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 scale-100 hover:scale-105 text-sm sm:text-base">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}
