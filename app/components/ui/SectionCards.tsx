"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  number: string;
  image?: string;
  link?: string;
}

export const ServiceCard = ({
  title,
  description,
  number,
  image,
}: CardProps) => {
  return (
    <motion.div
      className="relative bg-[#003840] text-white p-6 md:p-10 w-full md:w-[622px] min-h-[400px] md:h-[525px] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="mb-6 md:mb-8">
          <h3 className="text-4xl md:text-6xl font-candara-bold mb-4 md:mb-6 w-full md:w-1/2">{title}</h3>
          <p className="font-candara-light text-xl md:text-2xl">{description}</p>
        </div>

        <div className="rounded-full border border-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl">
          {number}
        </div>
      </div>
      <div className="absolute right-0 -bottom-6">
        <Image 
          src={image || ''} 
          alt="background" 
          width={250} 
          height={250}
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]" 
        />
      </div>
    </motion.div>
  );
};
