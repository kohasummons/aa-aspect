"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "../ui/SectionCards";
import React from "react";
import Image from "next/image";
import projectImage from "@/public/images/project.png";
import qualityImage from "@/public/images/quality.png";
import processImage from "@/public/images/process.png";
import FmeaImage from "@/public/images/fmea.png";


const ServicesSection = () => {

  return (
    <section
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
          Balancing traditional methodologies with comprehensive agile expertise, we guarantee full compliance with industry standards.
          </p>
        </motion.div>

        <div
          className="flex flex-col xl:flex-row items-center justify-center gap-7 md:gap-20"
        >
          <div className="flex flex-col gap-7 md:gap-20">
          <Link
              href="/services/quality-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840] relative">
                <ServiceCard
                  title="Quality"
                  description="Trust us to be your ally in achieving unparalleled quality and dedication to customer satisfaction."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={qualityImage}
                    alt="Quality Management"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/services/process-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840]">
                <ServiceCard
                  title="Process Management"
                  description="Our seasoned team specializes in guiding businesses through the intricate transformations that accompany growth."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={processImage}
                    alt="Process Management"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-7 md:gap-20 mt-0">
          <Link
              href="/services/project-management"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840] relative">
                <ServiceCard
                  title="Project & Product"
                  description="AA Aspect comprehensive project management services cover every stage of the project lifecycle, from initiation to delivery."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={projectImage}
                    alt="Project Management"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>

            <Link href="/services/fmea-coaching" className="service-card group">
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840]">
                <ServiceCard
                  title="FMEA Coaching"
                  description="We empower your teams to proactively enhance quality, safety, and efficiency through tailored coaching programs. "
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={FmeaImage}
                    alt="FMEA Coaching"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
