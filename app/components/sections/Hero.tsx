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

      <div className="container mx-auto relative flex-1 flex-col items-center px-4 pt-[164px] md:pt-[264px] md:px-6">
        <motion.div
          ref={textRef1}
          style={{ y: y1, opacity }}
          className="text-center text-2xl md:text-3xl lg:text-8xl mb-2 font-candara-bold"
        >
         DEVELOPING COLLABORATIVE INNOVATION
        </motion.div>
        <motion.div className="text-center text-base md:text-lg text-white/70 mx-auto w-10/12 md:w-5/12">
        We deliver exceptional projects to outstanding clients, ensuring every aspect is flawlessly executed.
         </motion.div>
        <div className="flex justify-center mt-9 md:mt-20">
          <Link href="/contact-us" className="button-85 px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 scale-105 hover:scale-110">
            GET IN TOUCH
          </Link>
        </div>
      </div>
     
    </section>
  );
}
