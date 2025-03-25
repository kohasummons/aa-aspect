"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "../ui/SectionCards";
import React from "react";
import Image from "next/image";
const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-10 md:py-20 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <Image
          src="/images/swirl_bg.svg"
          width={100}
          height={100}
          alt="Background Pattern"
          className="object-contain w-[80%] h-auto"
        />
      </div>
      <div className="container mx-auto relative z-10">
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
          <p className="text-white text-sm md:text-xl text-center mx-auto font-abadi-extralight max-w-3xl px-4">
            We specialize in traditional methodologies while also having
            comprehensive expertise in agile methodologies.
          </p>
        </motion.div>

        <div
          ref={cardsRef}
          className="flex flex-col xl:flex-row items-center justify-center gap-7 md:gap-20"
        >
          <div className="flex flex-col gap-7 md:gap-20">
            <Link
              href="/services/project-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Project & Product Management"
                  description="We recognize that every project and client is unique."
                  imageURL="https://cdn.lordicon.com/lvrgueqb.json"
                />
              </div>
            </Link>

            <Link
              href="/services/quality-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Quality Management"
                  description="We recognize that every project and client is unique."
                  imageURL="https://cdn.lordicon.com/dbfctubp.json"
                />
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-7 md:gap-20 mt-0">
            <Link
              href="/services/process-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="Process Management"
                  description="We recognize that every project and client is unique."
                  imageURL="https://cdn.lordicon.com/cpbmxdpb.json"
                />
              </div>
            </Link>

            <Link href="/services/fmea-coaching" className="service-card group">
              <div className="transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] bg-[#003840]">
                <ServiceCard
                  title="FMEA Coaching"
                  description="We recognize that every project and client is unique."
                  imageURL="https://cdn.lordicon.com/mafzktoy.json"
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
