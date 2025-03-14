"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "../ui/SectionCards";

const ServicesSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl text-center font-candara-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-white text-2xl text-center mx-auto font-abadi-extralight max-w-3xl">
            We specialize in traditional methodologies while also having
            comprehensive expertise in agile methodologies. We ensure full
            compliance with industry standards.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex flex-col gap-3">
            <ServiceCard
              title="Project Management"
              description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
              number="01"
              image="/images/process-management.svg"
              link="/services/project-management"
            />

            <ServiceCard
              title="Quality Management"
              description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
              number="02"
              image="/images/product-management.svg"
              link="/services/quality-management"
            />
          </div>

          <div className="flex flex-col gap-3 mt-40">
            <ServiceCard
              title="Process Management"
              description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
              number="03"
              image="/images/project-management.svg"
              link="/services/process-management"
            />

            <ServiceCard
              title="Product Management"
              description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management."
              number="04"
              image="/images/quality-management.svg"
              link="/services/product-management"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
