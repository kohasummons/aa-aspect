"use client";

import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Data Centre Cooling Infrastructure, Northern Europe",
    scope:
      "QA/QC documentation support for the mechanical cooling and chilled water systems across a multi-building data centre campus.",
    work: "Prepared and managed hydrostatic test packs for chilled water and condenser water piping. Provided ITR tracking, inspection scheduling coordination, and punch list management through to mechanical completion.",
    delivery: "Combination of on-site and remote support.",
    image: "/images/project-data-centre.jpg",
  },
  {
    title: "Pharmaceutical Facility, United Kingdom",
    scope:
      "Documentation and QA/QC support for clean utility piping systems in a GMP manufacturing environment.",
    work: "Managed turnover documentation packages for clean utility systems including WFI, purified water, and clean steam. Coordinated as-built verification and redline incorporation. Supported the commissioning team with documentation readiness reviews.",
    delivery: "On-site support.",
    image: "/images/project-pharma.jpg",
  },
  {
    title: "Industrial Process Plant, United Kingdom",
    scope:
      "Piping QA/QC and document control for a process utility upgrade project.",
    work: "Provided remote document control services including revision tracking, transmittal management, and document register maintenance. Managed test pack preparation for process piping systems and supported mechanical completion documentation.",
    delivery: "Fully remote.",
    image: "/images/project-industrial.jpg",
  },
  {
    title: "Automotive Manufacturing Facility, United Kingdom",
    scope:
      "Quality engineering and documentation support for mechanical systems during a facility expansion.",
    work: "Delivered inspection tracking, non-conformance reporting, and QA/QC oversight for mechanical piping systems. Prepared handover documentation packages for turnover to the operations team.",
    delivery: "On-site support.",
    image: "/images/project-automotive.jpg",
  },
];

export default function ProjectExperiencePage() {
  return (
    <>
      <Header />

      {/* Hero/Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/projects-header.jpg)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 py-24 md:py-32">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-candara-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Project Experience
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of projects where we have provided QA/QC and
            documentation support.
          </motion.p>
        </div>
      </section>

      {/* Project Cards */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-24 md:gap-36">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                  index % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg md:[direction:ltr]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="md:[direction:ltr]">
                  <h2 className="text-xl md:text-2xl font-candara-bold text-white mb-4">
                    {project.title}
                  </h2>

                  <div className="space-y-3">
                    <div>
                      <span className="text-teal-400 text-sm font-candara-bold">
                        Scope
                      </span>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mt-1">
                        {project.scope}
                      </p>
                    </div>

                    <div>
                      <span className="text-teal-400 text-sm font-candara-bold">
                        What we did
                      </span>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mt-1">
                        {project.work}
                      </p>
                    </div>

                    <div>
                      <span className="text-teal-400 text-sm font-candara-bold">
                        Delivery
                      </span>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mt-1">
                        {project.delivery}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
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
            Have a project that needs support?
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
