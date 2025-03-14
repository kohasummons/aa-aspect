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
      className="relative bg-[#003840] text-white p-10 w-[622px] h-[525px] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="mb-8">
          <h3 className="text-6xl font-candara-bold mb-6 w-1/2">{title}</h3>
          <p className="font-candara-light text-2xl">{description}</p>
        </div>

        <div className="rounded-full border border-white w-16 h-16 flex items-center justify-center text-2xl">
          {number}
        </div>
      </div>
      <div className="absolute right-0 -bottom-6">
        <Image src={image || ''} alt="background" width={250} height={250} />
      </div>
    </motion.div>
  );
};
