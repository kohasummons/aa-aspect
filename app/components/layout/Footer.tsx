"use client";

import Image from "next/image";
import Link from "next/link";
import FadedElementSVG from "../../../public/images/faded-element.svg";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 md:pt-20 pb-6 md:pb-10 relative overflow-hidden px-4 md:px-6">
      {/* Background pattern */}
      <div className="absolute right-0 top-0 opacity-40">
        <Image src={FadedElementSVG} alt="background effect" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-candara-bold text-[#003840] mb-3 md:mb-4">
              Contacts Us
            </h3>
            <p className="text-[#003840] mb-2">+44 (0) 790 812 22811</p>
            <p className="text-[#003840]">info@aa-aspect.com</p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg md:text-xl font-candara-bold text-[#003840] mb-3 md:mb-4">
              Business hours
            </h3>
            <p className="text-[#003840] mb-2">Monday — Friday</p>
            <p className="text-[#003840]">08:00 - 17:00</p>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg md:text-xl font-candara-bold text-[#003840] mb-3 md:mb-4">
              REGISTERED OFFICE ADDRESS
            </h3>
            <p className="text-[#003840] mb-2">50 Princess St.</p>
            <p className="text-[#003840] mb-2">Ipswich IP1 1RJ</p>
            <p className="text-[#003840]">United Kingdom</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg md:text-xl font-candara-bold text-[#003840] mb-3 md:mb-4">
              Socials
            </h3>
            <Link
              href="https://linkedin.com/company/aaaspect"
              className="block text-[#003840] mb-2 hover:underline"
            >
              LINKEDIN
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-10 md:mt-20">
          <Image
            src="/images/footer-logo.svg"
            alt="aa aspect logo"
            width={1400}
            height={200}
            className="w-full opacity-5 -mb-60"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
