"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCard } from "../ui/SectionCards";
import Image from "next/image";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineWrenchScrewdriver,
  HiOutlineArchiveBox,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

const services = [
  {
    title: "PIPING QA/QC SUPPORT",
    description:
      "Inspection tracking, ITR management, non-conformance reporting, and weld log oversight for piping and mechanical systems.",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "TEST PACK MANAGEMENT",
    description:
      "Compilation, review, and management of hydrostatic and pneumatic test packs, from P&ID verification to test certification.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "MC & COMMISSIONING",
    description:
      "Punch list management, system walk-downs, and handover package preparation to get your systems signed off.",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    title: "TURNOVER DOCUMENTATION",
    description:
      "Complete turnover packages including as-built verification, redline incorporation, test records, and final documentation compilation.",
    icon: HiOutlineArchiveBox,
  },
  {
    title: "REMOTE DOCUMENT CONTROL",
    description:
      "Off-site document management, revision tracking, transmittal coordination, and register maintenance. No site mobilisation required.",
    icon: HiOutlineComputerDesktop,
  },
];

const CardWrapper = ({ service }: { service: (typeof services)[0] }) => {
  const Icon = service.icon;
  return (
    <Link href="/services" className="service-card group">
      <div className="transform transition-all duration-300 shadow-[0_0_20px_2px_rgba(0,56,64,0.6),0_0_30px_5px_rgba(0,112,128,0.3)] group-hover:shadow-[0_0_25px_4px_rgba(0,56,64,0.6),0_0_40px_8px_rgba(0,112,128,0.5)] group-hover:scale-[1.02] bg-[#003840] relative">
        <ServiceCard title={service.title} description={service.description} />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <Icon className="w-16 h-16 text-teal-400/60" />
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-black py-10 md:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <Image
          src="/images/swirl_bg.svg"
          width={100}
          height={100}
          alt=""
          className="object-contain w-[80%] h-auto"
          priority
        />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-center font-candara-bold text-white mb-4 md:mb-6">
            What We Do
          </h2>
          <p className="text-white text-sm md:text-xl text-center mx-auto font-abadi-extralight max-w-3xl px-4">
            QA/QC and documentation support for piping and mechanical utility
            systems — on-site or remote.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10 mb-7 md:mb-10">
          {services.slice(0, 3).map((service) => (
            <CardWrapper key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10">
          {services.slice(3).map((service) => (
            <CardWrapper key={service.title} service={service} />
          ))}
        </div>

        <motion.div
          className="text-center mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="text-teal-400 hover:text-teal-300 transition-colors text-sm md:text-base"
          >
            View all services &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
