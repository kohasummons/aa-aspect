"use client";

import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineBolt,
  HiOutlineCheckBadge,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const principles = [
  {
    title: "Speed",
    description:
      "We can mobilise quickly and begin contributing to your project within days, not weeks.",
    icon: HiOutlineBolt,
  },
  {
    title: "Precision",
    description:
      "Our documentation meets the standards your project requires. Test packs, turnover dossiers, inspection records — all prepared in accordance with your specifications.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Remote Capability",
    description:
      "Many of our services can be delivered off-site, reducing your mobilisation costs while maintaining the same quality of output. This is particularly valuable on multi-site programmes where documentation resources need to scale.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "Integration",
    description:
      "We do not operate as a separate entity on your project. We embed into your team, use your systems, follow your procedures, and deliver to your standards.",
    icon: HiOutlineUserGroup,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero/Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/about-header.jpg)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 py-24 md:py-32">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-candara-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About AA-Aspect
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              AA-Aspect is a piping QA/QC and documentation support company
              based in Ipswich, United Kingdom.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              We work with EPC, MEP, and mechanical contractors to deliver the
              documentation and quality control that construction projects
              demand. Our focus is on piping and mechanical utility systems
              across data centres, life science facilities, and industrial
              projects.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              We are not a consultancy that advises from the outside. We are a
              project support team that integrates into your existing structure,
              works within your systems and procedures, and starts delivering
              from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#0a0a0a] py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-2xl md:text-4xl font-candara-bold text-white text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-lg p-6 md:p-8 hover:border-teal-400/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-lg md:text-xl font-candara-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
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
            Want to talk about how we can support your project?
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
