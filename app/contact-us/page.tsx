"use client";

import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import CtaSection from '../components/sections/CtaSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 bg-[url(/images/news-image.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-candara-bold text-white sm:text-5xl md:text-6xl"
              >
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 max-w-2xl mx-auto text-xl text-white/90 sm:mt-4 font-abadi-extralight"
              >
                Get in touch with our team
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-candara-bold text-[#003840]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-candara-bold text-[#003840]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-candara-bold text-[#003840]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-candara-bold text-[#003840]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#003840] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300 font-candara-bold"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-candara-bold text-[#003840] mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MdPhone className="text-2xl text-[#003840]" />
                      <span className="font-abadi-extralight">+44 (0) 790 812 22811</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MdEmail className="text-2xl text-[#003840]" />
                      <span className="font-abadi-extralight">info@aa-aspect.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MdLocationOn className="text-2xl text-[#003840]" />
                      <span className="font-abadi-extralight">50 Princess St. Ipswich IP1 1RJ, United Kingdom</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-candara-bold text-[#003840] mb-6">Business Hours</h2>
                  <div className="space-y-2 font-abadi-extralight">
                    <p>Monday — Friday</p>
                    <p>08:00 - 17:00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <CtaSection />
      <Footer />
    </>
  );
} 