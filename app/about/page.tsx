"use client";

import Image from 'next/image'
import { Header } from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion';
import { useState } from 'react';
import CtaSection from '../components/sections/CtaSection';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Aspect provide?",
    answer: "Aspect specializes in project management, process management, quality management, and product management services. We offer tailored solutions to help businesses streamline their operations and achieve their goals efficiently."
  },
  {
    question: "How does Aspect ensure project success?",
    answer: "We employ a comprehensive approach combining experienced professionals, proven methodologies, and cutting-edge tools. Our team maintains constant communication and provides regular updates to ensure transparency and timely delivery."
  },
  {
    question: "Can Aspect work with businesses of any size?",
    answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and customized to meet the specific needs and requirements of each client."
  },
  {
    question: "What makes Aspect different from other consulting firms?",
    answer: "Our unique combination of industry expertise, innovative approaches, and commitment to client success sets us apart. We focus on building long-term partnerships and delivering measurable results rather than just short-term solutions."
  }
];

const FAQAccordion = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-candara-bold text-[#003840]">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6 text-[#003840]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 font-abadi-extralight">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function About() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header/>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-[url(/images/blog-image.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-candara-bold text-white sm:text-5xl md:text-6xl"
              >
                About Aspect
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 max-w-2xl mx-auto text-xl text-white/90 sm:mt-4 font-abadi-extralight"
              >
                Transforming the way professionals connect and collaborate
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src="/images/blog-image.jpg"
                      alt="Team collaboration"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      priority
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-candara-bold text-[#003840]">Our Mission</h2>
                  <p className="mt-4 text-lg text-gray-600 font-abadi-extralight">
                    At Aspect, we&apos;re dedicated to revolutionizing the gig economy by creating meaningful connections between talented professionals and innovative projects. Our platform empowers both freelancers and businesses to achieve their goals through seamless collaboration.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="mt-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-candara-bold text-[#003840] text-center"
              >
                Our Values
              </motion.h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    title: 'Trust',
                    description: 'Building reliable connections between professionals and businesses',
                  },
                  {
                    title: 'Innovation',
                    description: 'Constantly evolving to meet the needs of modern work',
                  },
                  {
                    title: 'Community',
                    description: 'Fostering a supportive network of skilled professionals',
                  },
                ].map((value, index) => (
                  <motion.div 
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-[#003840] p-6 rounded-lg text-white hover:shadow-[0_0_40px_rgba(0,56,64,0.15)] transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-candara-bold">{value.title}</h3>
                    <p className="mt-2 font-abadi-extralight">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-candara-bold text-[#003840] text-center mb-12"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                {faqs.map((faq, index) => (
                  <FAQAccordion
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => toggleFAQ(index)}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
      <Footer />
    </>
  )
} 