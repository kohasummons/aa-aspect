"use client";

import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    id: "data-centres",
    title: "Data Centres",
    image: "/images/industry-data-centres.jpg",
    paragraphs: [
      "Data centre construction is expanding rapidly across Europe and globally. These projects demand rigorous QA/QC and documentation for their cooling and mechanical utility systems, often under aggressive timelines.",
      "We support mechanical and EPC contractors on data centre builds with documentation and quality control for cooling systems, chilled water piping, condenser water systems, and mechanical utility infrastructure.",
      "Our remote capability is particularly valuable on data centre programmes where multiple sites are being delivered simultaneously and documentation resources need to scale without proportional site mobilisation.",
    ],
    systems:
      "Chilled water, condenser water, cooling tower piping, building management system interfaces, mechanical utility distribution.",
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    image: "/images/industry-life-sciences.jpg",
    paragraphs: [
      "Pharmaceutical and biotech facilities require piping systems built and documented to the highest compliance standards. GMP environments leave no room for documentation gaps.",
      "We provide QA/QC and documentation support for clean utility systems, purified water (PW), water for injection (WFI), clean steam, and process piping in GMP-regulated environments. Our documentation meets the traceability and compliance requirements that life science projects demand.",
    ],
    systems:
      "Clean utilities, WFI, purified water, clean steam, GMP process piping, black and white utility systems.",
  },
  {
    id: "industrial-utilities",
    title: "Industrial Utilities",
    image: "/images/industry-industrial-utilities.jpg",
    paragraphs: [
      "Industrial and infrastructure projects generate large volumes of piping documentation across multiple disciplines and systems. Keeping on top of it requires dedicated resource.",
      "We support contractors on industrial projects with QA/QC and documentation for process piping, HVAC mechanical systems, black utilities, and general mechanical infrastructure.",
    ],
    systems:
      "Process piping, HVAC, black utilities (compressed air, nitrogen, steam, condensate), general mechanical infrastructure.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />

      {/* Hero/Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/industries-header.jpg)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 py-24 md:py-32">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-candara-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Industries We Support
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We specialise in piping and mechanical utility systems across three
            core sectors.
          </motion.p>
        </div>
      </section>

      {/* Sector Blocks */}
      <section className="bg-black">
        {sectors.map((sector, index) => (
          <motion.div
            key={sector.id}
            id={sector.id}
            className="border-b border-white/5 scroll-mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Full-width sector image */}
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="container mx-auto max-w-4xl">
                  <h2 className="text-3xl md:text-4xl font-candara-bold text-white">
                    {sector.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Sector content */}
            <div className="container mx-auto max-w-4xl px-4 md:px-6 py-10 md:py-14">
              {sector.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-white/80 text-base md:text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
              <p className="text-teal-400 text-sm mt-6">
                <span className="font-candara-bold">Systems we cover: </span>
                <span className="text-white/70">{sector.systems}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#003840] py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-4xl font-candara-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Working on a project in one of these sectors?
          </motion.h2>
          <Link
            href="/request-support"
            className="button-85 px-8 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 hover:scale-105"
          >
            Request Project Support
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
