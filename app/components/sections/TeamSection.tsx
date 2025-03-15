"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section className="relative bg-white md:py-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main content container with reduced height and width */}
          <div className="relative h-[350px] md:h-[600px] max-w-[1250px] mx-auto rounded-[50px] overflow-hidden">
            {/* Background Image with Overlay - adjusted position */}
            <div className="absolute inset-0 bg-[url('/images/team-section-image.png')] bg-cover bg-[center_20%]">
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-6 md:px-12">
              <h2 className="text-3xl md:text-5xl font-candara-bold text-white mb-4">
                A Strong Team
              </h2>
              <div className="max-w-xl text-center">
                <p className="text-lg md:text-2xl text-white font-abadi-extralight mb-3">
                  Are you looking for professionals to deliver your projects?
                </p>
                <p className="text-lg md:text-2xl text-white font-abadi-extralight mb-6">
                  Then we&apos;re the place to go!
                </p>
              </div>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#003840] hover:bg-[#004850] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
