"use client";

import { motion } from "framer-motion";
import { HiOutlineMapPin, HiOutlineComputerDesktop } from "react-icons/hi2";

const areas = [
  "Ipswich & Suffolk",
  "Norfolk",
  "Essex",
  "Cambridge & Cambridgeshire",
  "London & the South East",
];

const AreasSection = () => {
  return (
    <section className="bg-[#002a30] py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <motion.h2
              className="text-3xl md:text-5xl font-candara-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Based in Ipswich, Working Across the East and London
            </motion.h2>
            <motion.p
              className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            >
              AA-Aspect is based in Ipswich, Suffolk. We provide on-site piping
              QA/QC and documentation support for projects across East Anglia,
              Cambridge and London, and further afield on request.
            </motion.p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {areas.map((area, index) => (
                <motion.span
                  key={area}
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-white text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <HiOutlineMapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  {area}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <HiOutlineComputerDesktop className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">
                Document control, test pack reviews and turnover documentation
                can also be delivered remotely for projects anywhere in the UK.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
