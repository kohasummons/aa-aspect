"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    title: "Data Centres",
    description:
      "Cooling systems, chilled water piping, condenser water, and mechanical utility infrastructure.",
    href: "/industries#data-centres",
    image: "/images/industry-data-centres.jpg",
  },
  {
    title: "Life Sciences",
    description:
      "Clean utilities, GMP piping, WFI, clean steam, and pharmaceutical process systems.",
    href: "/industries#life-sciences",
    image: "/images/industry-life-sciences.jpg",
  },
  {
    title: "Industrial Utilities",
    description:
      "Process piping, black utilities, HVAC mechanical systems, and general industrial infrastructure.",
    href: "/industries#industrial-utilities",
    image: "/images/industry-industrial-utilities.jpg",
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-5xl text-center font-candara-bold text-white mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Industries We Support
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={industry.href}
                className="group block relative h-full min-h-[280px] overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors duration-300" />
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-candara-bold text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
