"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const ServiceCard = ({
  title,
  description,
  image,
}: CardProps) => {
  
  return (
    <motion.div
      className="relative bg-[#003840] text-white p-6 md:p-10 w-full md:w-[400px] min-h-[300px] md:h-[365px] flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="text-4xl md:text-3xl font-candara-bold">{title}</h3>
          <p className="font-candara-light text-base opacity-80">{description}</p>
        </div>
      </div>
      <div className="">
        <Image 
          src={image || ''} 
          alt="background" 
          width={250} 
          height={250}
          className="w-[120px] h-[120px] light" 
        />
      </div>
    </motion.div>
  );
};
