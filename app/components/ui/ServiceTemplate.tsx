"use client";

import { motion } from "framer-motion";
import Footer from "../layout/Footer";
import Image from "next/image";
import { Header } from "../layout/Header";

interface ServiceTemplateProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  backgroundImage: string;
}

const ServiceTemplate = ({ title, description, image, features, benefits, backgroundImage }: ServiceTemplateProps) => {

  return (
    <>
      <Header />
      <main className="">
        <section 
          className="relative py-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 56, 64, 0.85), rgba(0, 56, 64, 0.85)), url("${backgroundImage}")`
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-candara-bold text-white mb-6">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-abadi-extralight max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white flex mx-auto justify-center items-center">
          <div className="container mx-auto flex items-center justify-center px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h2 className="text-3xl md:text-4xl font-candara-bold text-[#003840] mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700 font-abadi-regular">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-candara-bold text-[#003840] mb-6">
                Benefits
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-gray-700 font-abadi-regular">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceTemplate; 