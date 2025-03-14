"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-black py-[174px] text-white">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-candara-light mb-4">
            Get more with aa aspect
          </h2>
          
          <p className="text-xl font-candara-light mb-12 max-w-2xl">
            Find out more about beginning the build process with us.
          </p>
          
          <Link href="/contact-us">
            <motion.button 
              className="bg-[#003840] text-white px-8 py-4 font-candara-bold hover:bg-[#004a54] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              GET IN TOUCH
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
