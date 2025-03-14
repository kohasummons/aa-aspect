"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export function InfiniteScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const calculateWidth = () => {
      if (!containerRef.current) return 0;
      return containerRef.current.scrollWidth / 2;
    };
    
    const width = calculateWidth();
    
    const startAnimation = async () => {
      controls.set({ x: 0 });
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    
    startAnimation();
    
    window.addEventListener("resize", startAnimation);
    return () => window.removeEventListener("resize", startAnimation);
  }, [controls]);

  const StarIcon = () => (
    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-8">
      <path d="M24.9338 50.1603L21.7338 37.4883L12.6458 46.8323L16.1018 34.2883L3.55775 37.7443L12.9018 28.6563L0.35775 25.4563L12.9018 22.1283L3.55775 13.0403L16.1018 16.4963L12.6458 4.08027L21.7338 13.2963L24.9338 0.752266L28.2618 13.2963L37.3498 4.08027L33.8938 16.4963L46.4378 13.0403L37.0938 22.1283L49.6378 25.4563L37.0938 28.6563L46.4378 37.7443L33.8938 34.2883L37.3498 46.8323L28.2618 37.4883L24.9338 50.1603Z" fill="white"/>
    </svg>
  );

  const scrollItem = (
    <div className="flex items-center flex-nowrap">
      <span className="text-[56px] font-candara-light text-white whitespace-nowrap">
        Kickstart your Masterpiece!
      </span>
      <StarIcon />
    </div>
  );

  return (
    <div className="w-full bg-[#003840] overflow-hidden py-4">
      <div className="relative">
        <motion.div 
          ref={containerRef}
          className="flex items-center"
          animate={controls}
        >
          {/* First set of items */}
          {Array(6).fill(scrollItem).map((item, index) => (
            <div key={`first-${index}`}>{item}</div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {Array(6).fill(scrollItem).map((item, index) => (
            <div key={`second-${index}`}>{item}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
