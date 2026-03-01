"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-candara-bold text-white mb-4">
            Need project support?
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-xl">
            Tell us what you are working on. We will get back to you within 24
            hours.
          </p>
          <Link
            href="/request-support"
            className="button-85 px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 hover:scale-105"
          >
            Request Project Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
