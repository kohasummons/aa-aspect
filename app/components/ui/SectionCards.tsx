"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageURL?: string;
  link?: string;
}

export const ServiceCard = ({ title, description, imageURL }: CardProps) => {
  return (
    <motion.div
      className="relative bg-[#003840] text-white p-4 md:p-6 w-full md:w-[320px] min-h-[240px] md:h-[280px] flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="mb-4 md:mb-6 text-center">
          <h3 className="text-3xl md:text-2xl font-candara-bold">{title}</h3>
          <p className="font-candara-light text-sm opacity-80">{description}</p>
        </div>
      </div>
      <div className="">
        {React.createElement("lord-icon" as any, {
          src: imageURL as string,
          trigger: "loop",
          colors: "primary:#ffffff,secondary:#ffffff",
          style: { width: "100px", height: "100px" },
        })}
      </div>
    </motion.div>
  );
};
