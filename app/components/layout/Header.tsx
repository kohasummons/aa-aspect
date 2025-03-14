"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const { scrollY } = useScroll();
  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  useEffect(() => {
    const updateBackground = () => {

      if (scrollY.get() > 50) {
        setShouldShowBackground(true);
      } else {
        setShouldShowBackground(false);
      }
    };

    const unsubscribe = scrollY.onChange(updateBackground);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ backgroundColor: "rgba(0, 56, 64, 0)" }}
      animate={{
        backgroundColor: shouldShowBackground
          ? "rgba(0, 56, 64, 1)"
          : "rgba(0, 56, 64, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="aa-aspect logo"
              width={100}
              height={40}
              className="mr-2"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white transition-colors">
            HOME
          </Link>
          <Link href="/about" className="text-white transition-colors">
            ABOUT
          </Link>
          <Link
            href="/services"
            className="text-white transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/contact-us"
            className="text-white transition-colors"
          >
            CONTACT US
          </Link>
          <Link href="/blogs" className="text-white transition-colors">
            BLOGS
          </Link>
        </nav>

        <button className="px-4 py-2 bg-teal-700 text-white border-teal-600 hover:bg-teal-600">
          GET IN TOUCH
        </button>
      </div>
    </motion.header>
  );
}
