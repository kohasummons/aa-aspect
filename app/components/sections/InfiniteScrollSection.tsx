"use client";

import { motion } from "framer-motion";

export function InfiniteScrollSection() {
  const scrollItem = (
    <div className="flex items-center flex-nowrap gap-8">
      <div className="flex">
        <span className="text-[14px] md:text-[24px] font-candara-light text-white/70 whitespace-nowrap">
          AirBnb
        </span>
        {/* <AirBnbIcon /> */}
      </div>
      <div className="flex">
        <span className="text-[14px] md:text-[24px] font-candara-light text-white/70 whitespace-nowrap">
          Ollama
        </span>
        {/* <OllamaIcon /> */}
      </div>
      <div className="flex">
        <span className="text-[14px] md:text-[24px] font-candara-light text-white/70 whitespace-nowrap">
          Tekton
        </span>
        {/* <TektonIcon /> */}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#003840] overflow-hidden py-4">
      <div className="relative">
        <motion.div
          className="flex items-center gap-8"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
        >
          {/* Only need one set of items - the animation will create the infinite effect */}
          {Array(6)
            .fill(scrollItem)
            .map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          {/* Duplicate set for seamless loop */}
          {Array(6)
            .fill(scrollItem)
            .map((item, index) => (
              <div key={`dup-${index}`}>{item}</div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
