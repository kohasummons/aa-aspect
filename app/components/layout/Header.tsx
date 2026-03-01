"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Piping QA/QC Support", href: "/services#piping-qaqc" },
      { label: "Test Pack Management", href: "/services#test-pack" },
      { label: "MC & Commissioning", href: "/services#mc-commissioning" },
      { label: "Turnover Documentation", href: "/services#turnover" },
      { label: "Remote Document Control", href: "/services#remote-doc" },
      { label: "As-Built Verification", href: "/services#as-built" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Data Centres", href: "/industries#data-centres" },
      { label: "Life Sciences", href: "/industries#life-sciences" },
      { label: "Industrial Utilities", href: "/industries#industrial-utilities" },
    ],
  },
  { label: "Project Experience", href: "/project-experience" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [shouldShowBackground, setShouldShowBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathname = usePathname();

  useEffect(() => {
    const updateBackground = () => {
      setShouldShowBackground(scrollY.get() > 50);
    };
    const unsubscribe = scrollY.on("change", updateBackground);
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedInsideAny = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      if (!clickedInsideAny) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActivePath = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname?.startsWith(path);
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const hasDropdown = !!item.dropdown;
    const isOpen = openDropdown === item.label;

    if (!hasDropdown) {
      return (
        <Link
          href={item.href}
          className={`text-white relative group transition-all duration-300 hover:scale-105 px-3 py-2 text-sm ${
            isActivePath(item.href) ? "glow-active" : ""
          }`}
        >
          <span className="relative inline-block">
            {item.label.toUpperCase()}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
              ${isActivePath(item.href) ? "scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]" : "scale-x-0"} 
              group-hover:scale-x-100 group-hover:shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]`}
            />
          </span>
        </Link>
      );
    }

    return (
      <div
        className="relative"
        ref={(el) => { dropdownRefs.current[item.label] = el; }}
      >
        <button
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
          className={`text-white relative group transition-all duration-300 hover:scale-105 px-3 py-2 text-sm ${
            isActivePath(item.href) ? "glow-active" : ""
          }`}
        >
          <span className="relative flex items-center cursor-pointer">
            {item.label.toUpperCase()}
            <MdKeyboardArrowDown
              className={`ml-1 w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#14b8a6] transform origin-left transition-all duration-300 
              ${isActivePath(item.href) ? "scale-x-100 shadow-[0_0_20px_4px_rgba(20,184,166,0.9)]" : "scale-x-0"} 
              group-hover:scale-x-100 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.9)]`}
            />
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 bg-[#003840] rounded-md shadow-lg py-2 z-50"
            >
              <Link
                href={item.href}
                className="block px-4 py-2 text-teal-300 text-sm font-candara-bold hover:bg-teal-700/30 transition-colors border-b border-white/10 mb-1"
                onClick={() => setOpenDropdown(null)}
              >
                VIEW ALL {item.label.toUpperCase()}
              </Link>
              {item.dropdown!.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block px-4 py-2 text-white text-sm hover:bg-teal-700/30 transition-colors"
                  onClick={() => setOpenDropdown(null)}
                >
                  {sub.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        backgroundColor:
          shouldShowBackground || isMenuOpen
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
              alt="AA-Aspect logo"
              width={100}
              height={40}
              className="mr-2"
            />
          </Link>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/request-support"
              className="button-85 px-4 py-2 bg-[#003840] text-white text-xs rounded-full after:rounded-full before:rounded-full relative"
            >
              Request Support
            </Link>
            <button
              className="z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={`lg:hidden fixed inset-0 bg-[rgb(0,56,64)] pt-20 px-6 ${isMenuOpen ? "flex" : "hidden"}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, x: 0 },
            closed: { opacity: 0, x: "100%" },
          }}
        >
          <div className="flex flex-col space-y-6 w-full">
            {navItems.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white text-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                );
              }

              const isMobileOpen = openMobileDropdown === item.label;
              return (
                <div key={item.href} className="relative">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(isMobileOpen ? null : item.label)
                    }
                    className="text-white text-xl w-full flex items-center justify-between"
                  >
                    {item.label.toUpperCase()}
                    <MdKeyboardArrowDown
                      className={`ml-2 w-6 h-6 transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isMobileOpen ? "auto" : 0,
                      opacity: isMobileOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 pl-4 space-y-3">
                      <Link
                        href={item.href}
                        className="block text-teal-300 text-base hover:text-teal-200 transition-colors"
                        onClick={() => {
                          setOpenMobileDropdown(null);
                          setIsMenuOpen(false);
                        }}
                      >
                        View All {item.label}
                      </Link>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block text-white text-lg hover:text-teal-400 transition-colors"
                          onClick={() => {
                            setOpenMobileDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
            <Link
              href="/request-support"
              onClick={() => setIsMenuOpen(false)}
              className="button-85 px-6 py-3 bg-[#003840] text-white text-center rounded-full after:rounded-full before:rounded-full relative mt-4"
            >
              REQUEST PROJECT SUPPORT
            </Link>
          </div>
        </motion.nav>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/request-support"
          className="hidden lg:block button-85 px-6 py-3 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 hover:scale-105 text-sm"
        >
          Request Project Support
        </Link>
      </div>
    </motion.header>
  );
}
