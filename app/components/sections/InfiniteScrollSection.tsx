"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InfiniteScrollSection() {
  const scrollItem = (
    <div className="flex items-center flex-nowrap gap-20">
      <div className="w-[200px] h-auto">
      <Image src="/images/brands/pureway.png" alt="pureway" width={120} height={120}/>
      </div>
      <div className="w-[200px] h-auto font-bold text-white text-xl md:text-xl font-abadi-regular">TECNODEV LTD</div>
      <div className="w-[200px] h-auto">
      <Image src="/images/brands/seedventures.png" alt="seed ventures" width={120} height={120}/>
      </div>
      <div className="w-[200px] h-auto font-bold text-white text-xl md:text-xl font-abadi-regular">SEALGARD </div>
      <div className="w-[200px] h-auto">
      <Image src="/images/brands/jlr.png" alt="Jlr" width={60} height={60}/>
      </div>

      <div className="w-[200px] h-auto font-bold text-white text-xl md:text-xl font-abadi-regular">TWINFORDS</div>

    </div>
  );

  return (
    <div className="w-full bg-[#000000] overflow-hidden py-4">
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