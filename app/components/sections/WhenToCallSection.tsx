"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const painPoints = [
  {
    icon: HiOutlineDocumentText,
    title: "Documentation falling behind",
    description:
      "Your documentation is falling behind the construction schedule.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Remote QA/QC needed",
    description:
      "You need QA/QC support without mobilising a full on-site team.",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Test packs not ready",
    description:
      "Mechanical completion is approaching and your test packs are not ready.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Immediate integration",
    description:
      "You need someone who can integrate into your project team and start delivering within days.",
  },
];

const WhenToCallSection = () => {
  return (
    <section className="bg-[#003840] py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <motion.h2
              className="text-3xl md:text-5xl font-candara-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              When to Call Us
            </motion.h2>
            <motion.p
              className="text-white/60 text-sm md:text-base mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            >
              If any of these sound familiar, we can help.
            </motion.p>

            <div className="space-y-8">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-white font-candara-bold text-base mb-1">
                        {point.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/request-support"
                className="inline-block px-8 py-3 text-white text-sm rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                Tell us about your project
              </Link>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            className="relative rounded-lg overflow-hidden hidden lg:block min-h-[460px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/when-to-call-us.jpg"
              alt="Industrial piping infrastructure — valves, flanges and steel pipe systems"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhenToCallSection;
