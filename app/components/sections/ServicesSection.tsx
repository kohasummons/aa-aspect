"use client";

import {useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "../ui/SectionCards";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={sectionRef} className="bg-black py-10 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-center font-candara-bold text-white mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-white text-xl md:text-2xl text-center mx-auto font-abadi-extralight max-w-3xl px-4">
            We specialize in traditional methodologies while also having
            comprehensive expertise in agile methodologies. We ensure full
            compliance with industry standards.
          </p>
        </motion.div>

        <div ref={cardsRef} className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="flex flex-col gap-3">
            <Link href="/services/project-management" className="service-card group">
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Project Management"
                  description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
                  number="01"
                  image="/images/process-management.svg"
                />
              </div>
            </Link>

            <Link href="/services/quality-management" className="service-card group">
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Quality Management"
                  description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
                  number="02"
                  image="/images/product-management.svg"
                />
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-3 mt-40">
            <Link href="/services/process-management" className="service-card group">
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Process Management"
                  description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
                  number="03"
                  image="/images/project-management.svg"
                />
              </div>
            </Link>

            <Link href="/services/product-management" className="service-card group">
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Product Management"
                  description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
                  number="04"
                  image="/images/quality-management.svg"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
