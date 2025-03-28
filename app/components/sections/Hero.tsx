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

      <div className="container mx-auto relative flex-1 flex-col items-center px-4 md:px-6">
        <motion.div
          ref={textRef1}
          style={{ y: y1, opacity }}
          className="text-center text-4xl md:text-7xl lg:text-8xl mb-2 md:mb-2 pt-[10vh] md:pt-[25vh] font-candara-bold"
        >
         DEVELOPING COLLABORATIVE 
          <br />
          INNOVATION
        </motion.div>
        <motion.div className="text-center text-base md:text-lg text-white/70 mx-auto w-8/12">
        We deliver exceptional projects to outstanding clients, ensuring every aspect is flawlessly executed.
         </motion.div>
        <div className="flex justify-center mt-5">
          <Link href="/contact-us" className=" lg:block px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full relative group transition-all duration-300 scale-105 hover:scale-110">
            GET IN TOUCH
            <span className="absolute inset-0 rounded-full -m-[2px] transition-all duration-300" />
            <span className="absolute inset-0 rounded-full bg-[#003840] opacity-30 transform origin-center transition-all duration-300 scale-105 shadow-[0_0_30px_8px_rgba(20,184,166,0.95)] group-hover:opacity-40 group-hover:shadow-[0_0_40px_12px_rgba(20,184,166,0.5)]" />
          </Link>
        </div>
      </div>
     
    </section>
  );
}
