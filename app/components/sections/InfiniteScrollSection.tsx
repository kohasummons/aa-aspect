"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function InfiniteScrollSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const scrollSpeed = isMobile ? 10 : 12; // Twice as fast on mobile
  
  const scrollItem = (
    <div className="flex items-center flex-nowrap md:gap-20 gap-8">
      <div className="w-[120px] md:w-[200px] h-auto">
      <Image src="/images/brands/pureway.png" alt="pureway" width={120} height={120}/>
      </div>
      <div className="w-[150px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">TECNODEV LTD</div>
      <div className="w-[120px] md:w-[200px] h-auto">
      <Image src="/images/brands/seedventures.png" alt="seed ventures" width={120} height={120}/>
      </div>
      <div className="w-[120px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">SEALGARD </div>
      <div className="w-[120px] md:w-[200px] h-auto">
      <Image src="/images/brands/jlr.png" alt="Jlr" width={60} height={60}/>
      </div>
      <div className="w-[150px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">TWINFORDS</div>
    </div>
  );

  return (
    <div className="w-full bg-[#000000] overflow-hidden md:py-4">
      <div className="relative">
        <motion.div
          className="flex items-center gap-8"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              duration: scrollSpeed,
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