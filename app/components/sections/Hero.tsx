"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  // const textRef2 = useRef(null);
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={sectionRef} className="text-white h-[60dvh] md:h-[100dvh] relative flex flex-col">
      <div className="absolute bg-[url(/images/hero-image-2.jpg)] bg-cover bg-center top-0 bottom-0 inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-70" />

      <div className="container mx-auto relative flex-1 flex-col items-center px-4 md:px-6">
        <motion.div
          ref={textRef1}
          style={{ y: y1, opacity }}
          className="text-center text-4xl  md:text-7xl lg:text-8xl mb-2 md:mb-2 pt-[150px] md:pt-[380px] font-candara-bold"
        >
          MAKING INNOVATION
          <br />
          COLLABORATIVE
        </motion.div>
        <motion.div className="text-center text-base md:text-lg text-white/70 mx-auto md:w-1/4">
          We deliver exception projects to outstanding clients with not crumbs left untouched.
        </motion.div>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-teal-700 text-white hover:bg-teal-600 cursor-pointer mt-8">
            GET IN TOUCH
          </button>
        </div>
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
