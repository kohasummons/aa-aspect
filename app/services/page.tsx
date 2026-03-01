"use client";

import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Piping QA/QC Support",
    image: "/images/service-qaqc-support.jpg",
    intro:
      "On-site or remote quality assurance and quality control for piping and mechanical systems.",
    body: "We provide inspection tracking, ITR (Inspection and Test Record) management, non-conformance reporting, and weld log oversight. Our team integrates into your existing project structure and works within your systems and procedures.",
    applicable: "Construction and mechanical completion phases.",
    systems:
      "Chilled water, condenser water, cooling systems, process piping, clean utilities, GMP piping.",
    systemsLabel: "Systems covered",
  },
  {
    title: "Test Pack Preparation & Management",
    image: "/images/service-test-pack.jpg",
    intro:
      "Compilation, review, and management of hydrostatic and pneumatic test packs.",
    body: "We handle P&ID verification, isometric cross-referencing, valve and instrument schedule checks, and test certification documentation. Test packs are prepared in accordance with your project specifications and contractor requirements.",
    applicable: "Construction through to mechanical completion.",
    systems:
      "All piping systems including utility, process, and high-purity lines.",
    systemsLabel: "Systems covered",
  },
  {
    title: "Mechanical Completion & Commissioning Support",
    image: "/images/service-mechanical-completion.jpg",
    intro:
      "Documentation and verification support during the MC and commissioning phases.",
    body: "We manage punch lists, coordinate system walk-downs, and prepare handover packages to ensure your systems are ready for commissioning sign-off. We work to your MC procedures and completion database requirements.",
    applicable: "Mechanical completion and commissioning phases.",
    systems:
      "Punch lists, system handover packages, commissioning readiness documentation.",
    systemsLabel: "Deliverables",
  },
  {
    title: "Turnover Documentation",
    image: "/images/service-turnover-docs.jpg",
    intro:
      "Preparation of complete turnover packages for handover to the client or operations team.",
    body: "This includes as-built verification, redline incorporation, test records, material certificates, and final documentation compilation. All documentation is prepared in accordance with project-specific turnover requirements and formatting standards.",
    applicable: "Late construction through to project handover.",
    systems: "Turnover dossiers, as-built documentation packages, final records.",
    systemsLabel: "Deliverables",
  },
  {
    title: "Remote Document Control",
    image: "/images/service-remote-doc-control.jpg",
    intro:
      "Off-site document management and control services that reduce your site overhead.",
    body: "We handle revision tracking, transmittal management, document register maintenance, and coordination across multiple platforms and systems. Remote delivery means no site mobilisation costs and no delays waiting for personnel to arrive.",
    extra:
      "This is one of our key differentiators. We can support your project from day one without adding to your site headcount.",
    applicable: "All project phases.",
    systems:
      "We work within your existing systems including Aconex, Procore, Autodesk Construction Cloud, SharePoint, and bespoke project platforms.",
    systemsLabel: "Platforms",
  },
  {
    title: "As-Built Verification & Inspection Tracking",
    image: "/images/service-as-built.jpg",
    intro:
      "Verification that installed systems match approved design documents.",
    body: "We review redline mark-ups, coordinate as-built drawing updates, and systematically track inspection status across all disciplines. Our tracking ensures nothing falls through the gaps between construction and handover.",
    applicable: "Construction through to handover.",
    systems:
      "Inspection status registers, as-built verification reports, redline coordination logs.",
    systemsLabel: "Deliverables",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero/Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/services-header.jpg)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 py-24 md:py-32">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-candara-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We support EPC, MEP, and mechanical contractors with QA/QC and
            documentation throughout construction, mechanical completion, and
            commissioning.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="bg-black">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.title}
              className="border-b border-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20 flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12">
                  <h2 className="text-2xl md:text-3xl font-candara-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
                    {service.intro}
                  </p>
                  <p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">
                    {service.body}
                  </p>
                  {service.extra && (
                    <p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">
                      {service.extra}
                    </p>
                  )}
                  <div className="flex flex-col gap-2 mt-6 text-sm">
                    <p className="text-teal-400">
                      <span className="font-candara-bold">
                        Applicable during:{" "}
                      </span>
                      <span className="text-white/70">{service.applicable}</span>
                    </p>
                    <p className="text-teal-400">
                      <span className="font-candara-bold">
                        {service.systemsLabel}:{" "}
                      </span>
                      <span className="text-white/70">{service.systems}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
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
            Need support on your current project?
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
