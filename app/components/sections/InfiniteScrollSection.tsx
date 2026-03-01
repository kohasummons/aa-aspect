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
  const scrollSpeed = isMobile ? 10 : 12;

  const scrollItem = (
    <div className="flex items-center flex-nowrap md:gap-20 gap-8">
      <div className="w-[120px] md:w-[200px] h-auto">
        <Image
          src="/images/brands/pureway.png"
          alt="Pureways"
          width={120}
          height={120}
        />
      </div>
      <div className="w-[150px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">
        TECNODEV LTD
      </div>
      <div className="w-[120px] md:w-[200px] h-auto">
        <Image
          src="/images/brands/seedventures.png"
          alt="Seedventures"
          width={120}
          height={120}
        />
      </div>
      <div className="w-[120px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">
        SEALGARD
      </div>
      <div className="w-[120px] md:w-[200px] h-auto">
        <Image
          src="/images/brands/jlr.png"
          alt="JLR"
          width={60}
          height={60}
        />
      </div>
      <div className="w-[150px] md:w-[200px] h-auto font-bold text-white text-lg md:text-xl font-abadi-regular">
        TWINFORDS
      </div>
    </div>
  );

  return (
    <section className="w-full bg-black overflow-hidden py-6 md:py-8">
      <p className="text-center text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-4 md:mb-6">
        Trusted by engineering teams across the UK and Europe
      </p>
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
          {Array(6)
            .fill(scrollItem)
            .map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          {Array(6)
            .fill(scrollItem)
            .map((item, index) => (
              <div key={`dup-${index}`}>{item}</div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
