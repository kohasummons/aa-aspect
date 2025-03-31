"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  forceBackground?: boolean;
}

export function Header() {
  const { scrollY } = useScroll();
  const [shouldShowBackground, setShouldShowBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        backgroundColor: shouldShowBackground || isMenuOpen
          ? "rgba(0, 0, 0, 1)"
          : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center w-full justify-between lg:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="aa-aspect logo"
              width={100}
              height={40}
              className="mr-2"
            />
          </Link>

          <button 
            className="lg:hidden z-50 p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={`lg:hidden fixed inset-0 bg-[rgb(0,56,64)] pt-20 px-6 ${isMenuOpen ? "flex" : "hidden"}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" }
          }}
        >
          <div className="flex flex-col space-y-6 w-full">
            <Link href="/" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/about" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-white text-xl w-full flex items-center justify-between"
              >
                SERVICES
                <MdKeyboardArrowDown 
                  className={`ml-2 w-6 h-6 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isMobileServicesOpen ? "auto" : 0,
                  opacity: isMobileServicesOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pl-4 space-y-4">
                  <Link
                    href="/services/project-management"
                    className="block text-white text-lg hover:text-teal-400 transition-colors"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Project Management
                  </Link>
                  <Link
                    href="/services/process-management"
                    className="block text-white text-lg hover:text-teal-400 transition-colors"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Process Management
                  </Link>
                  <Link
                    href="/services/quality-management"
                    className="block text-white text-lg hover:text-teal-400 transition-colors"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Quality Management
                  </Link>
                  <Link
                    href="/services/fmea-coaching"
                    className="block text-white text-lg hover:text-teal-400 transition-colors"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    FMEA Coaching
                  </Link>
                </div>
              </motion.div>
            </div>

            <Link href="/contact-us" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>
              CONTACT US
            </Link>
            <Link href="/news" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>
              NEWS
            </Link>
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
              <button className="px-4 py-2 bg-[#003840] text-white cursor-pointer w-full">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </motion.nav>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <Link 
            href="/" 
            className={`text-white relative group transition-all duration-300 hover:scale-105 px-4 py-2 ${
              isActivePath('/') ? 'glow-active' : ''
            }`}
          >
            <span className="relative inline-block">
              HOME
              <span className={`absolute inset-0 rounded-sm -m-[2px] ${
                isActivePath('/') ? 'border-white/100' : ''
              } group-hover:border-white/100 transition-all duration-300`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
                ${isActivePath('/') ? 'scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]' : 'scale-x-0'} 
                group-hover:scale-x-100 group-hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]`} />
            </span>
          </Link>
          <Link 
            href="/about" 
            className={`text-white relative group transition-all duration-300 hover:scale-105 px-4 py-2 ${
              isActivePath('/about') ? 'glow-active' : ''
            }`}
          >
            <span className="relative inline-block">
              ABOUT
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
                ${isActivePath('/about') ? 'scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]' : 'scale-x-0'} 
                group-hover:scale-x-100 group-hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]`} />
            </span>
          </Link>
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`text-white relative group transition-all duration-300 hover:scale-105 px-4 py-2 ${
                isActivePath('/services') ? 'glow-active' : ''
              }`}
            >
              <span className="relative flex flex-row items-center cursor-pointer">
                SERVICES
                <MdKeyboardArrowDown 
                  className={`ml-1 w-6 h-6 cursor-pointer transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
                <span className={`absolute inset-0 rounded-sm -m-[2px] ${
                  isActivePath('/services') ? 'border-white/100' : ''
                } group-hover:border-white/100 transition-all duration-300`} />
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
                  ${isActivePath('/services') ? 'scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]' : 'scale-x-0'} 
                  group-hover:scale-x-100 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.9)]`} />
              </span>
            </button>
            
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-[#003840] rounded-md shadow-lg py-2"
              >
                  <Link
                  href="/services/quality-management"
                  className="block px-4 py-2 text-white hover:bg-teal-700 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Quality
                </Link>
                <Link
                  href="/services/project-management"
                  className="block px-4 py-2 text-white hover:bg-teal-700 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Project & Product
                </Link>
                <Link
                  href="/services/process-management"
                  className="block px-4 py-2 text-white hover:bg-teal-700 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Process Management
                </Link>
                <Link
                  href="/services/fmea-coaching"
                  className="block px-4 py-2 text-white hover:bg-teal-700 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  FMEA Coaching
                </Link>
              </motion.div>
            )}
          </div>
          <Link 
            href="/news"
            className={`text-white relative group transition-all duration-300 hover:scale-105 px-4 py-2 ${
              isActivePath('/news') ? 'glow-active' : ''
            }`}
          >
            <span className="relative inline-block">
              NEWS
              <span className={`absolute inset-0 rounded-sm -m-[2px] ${
                isActivePath('/news') ? 'border-white/100' : ''
              } group-hover:border-white/100 transition-all duration-300`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
                  ${isActivePath('/news') ? 'scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]' : 'scale-x-0'} 
                  group-hover:scale-x-100 group-hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]`} />
            </span>
          </Link>
          <Link
            href="/contact-us"
            className={`text-white relative group transition-all duration-300 hover:scale-105 px-4 py-2 ${
              isActivePath('/contact-us') ? 'glow-active' : ''
            }`}
          >
            <span className="relative inline-block">
              CONTACT US
              <span className={`absolute inset-0 rounded-sm -m-[2px] ${
                isActivePath('/contact-us') ? 'border-white/100' : ''
              } group-hover:border-white/100 transition-all duration-300`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 f4
                  ${isActivePath('/contact-us') ? 'scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]' : 'scale-x-0'} 
                  group-hover:scale-x-100 group-hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]`} />
            </span>
          </Link>
         
        </nav>

        {/* Desktop CTA Button - updated to show only on desktop */}
        <Link href="/contact-us" className="hidden lg:block button-85 px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 scale-105 hover:scale-110">
            GET IN TOUCH
          </Link>
      </div>
    </motion.header>
  );
}