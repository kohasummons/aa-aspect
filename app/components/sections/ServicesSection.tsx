"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "../ui/SectionCards";
import React from "react";
import projectImage from "@/public/images/project.png";
import qualityImage from "@/public/images/quality.png";
import processImage from "@/public/images/process.png";
import FmeaImage from "@/public/images/fmea.png";
import Image from "next/image";


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
          priority
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
          We provide expert quality guidance that transforms challenges into opportunities and aligns every decision with measurable success.
          </p>
        </motion.div>

        <div
          className="flex flex-col xl:flex-row items-center justify-center gap-7 md:gap-20"
        >
          <div className="flex flex-col gap-7 md:gap-20">
          <Link
              href="/services/quality-engineering"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840] relative">
                <ServiceCard
                  title="QUALITY ENGINEERING"
                  description="Accuracy that defines performance. We provide expert quality guidance that transforms challenges into opportunities and aligns every decision with measurable success."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={qualityImage}
                    alt="Quality Engineering"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                    sizes="(max-width: 768px) 80px, 160px"
                    quality={75}
                  />
                </div>
              </div>
            </Link>
            {/* Process Engineering */}

            <Link
              href="/services/process-engineering"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840]">
                <ServiceCard
                  title="PROCESS ENGINEERING"
                  description="Driving continuous improvement and innovation. We manage every stage with discipline and clarity ensuring on-time delivery, optimized resources, and superior outcomes."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={processImage}
                    alt="Process Engineering"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                    sizes="(max-width: 768px) 80px, 160px"
                    quality={75}
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-7 md:gap-20 mt-0">
          <Link
              href="/services/project-engineering"
              className="service-card group"
            >
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840] relative">
                <ServiceCard
                  title="PROJECT ENGINEERING"
                  description="Excellence without compromise. Through rigorous standards and precision checks, we ensure every project meets the highest benchmarks of quality and compliance."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={projectImage}
                    alt="Project Engineering"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                    sizes="(max-width: 768px) 80px, 160px"
                    quality={75}
                  />
                </div>
              </div>
            </Link>

            <Link href="/services/technical-documentation" className="service-card group">
              <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840]">
                <ServiceCard
                  title="TECHNICAL DOCUMENTATION"
                  description="Delivering precision from start to finish. Our detailed documentation captures every technical aspect, ensuring transparency, reliability, and full process traceability."
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <Image 
                    src={FmeaImage}
                    alt="Technical Documentation"
                    width={40}
                    height={40}
                    className="w-20 h-20 object-contain"
                    sizes="(max-width: 768px) 80px, 160px"
                    quality={75}
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
