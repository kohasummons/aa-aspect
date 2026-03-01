"use client";

import { useState } from "react";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
} from "react-icons/hi2";

const projectTypes = [
  "Data Centre",
  "Life Science",
  "Industrial",
  "Other",
];

const supportOptions = [
  "QA/QC Support",
  "Test Pack Management",
  "Document Control",
  "Commissioning Support",
  "Turnover Documentation",
  "Other",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  supportRequired: string[];
  timeline: string;
  description: string;
}

export default function RequestSupportPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectLocation: "",
    projectType: "",
    supportRequired: [],
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      supportRequired: prev.supportRequired.includes(option)
        ? prev.supportRequired.filter((item) => item !== option)
        : [...prev.supportRequired, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectLocation: "",
          projectType: "",
          supportRequired: [],
          timeline: "",
          description: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/20 transition-colors";
  const labelClasses = "block text-sm font-candara-bold text-white/90 mb-2";

  return (
    <>
      <Header />

      {/* Hero/Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/request-support-header.jpg)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 py-24 md:py-32">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-candara-bold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Request Project Support
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tell us about your project. We will get back to you within 24
            hours.
          </motion.p>
        </div>
      </section>

      {/* Direct Contact + Form */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Direct Contact */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-14 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="tel:+447349351041"
              className="flex items-center gap-4 border border-white/10 rounded-lg p-5 hover:border-teal-400/30 transition-colors"
            >
              <HiOutlinePhone className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-white text-sm">+44 7349 351041</p>
              </div>
            </a>
            <a
              href="mailto:office@aa-aspect.com"
              className="flex items-center gap-4 border border-white/10 rounded-lg p-5 hover:border-teal-400/30 transition-colors"
            >
              <HiOutlineEnvelope className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-white text-sm">office@aa-aspect.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 border border-white/10 rounded-lg p-5">
              <HiOutlineClock className="w-6 h-6 text-teal-400 shrink-0" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Hours
                </p>
                <p className="text-white text-sm">Mon–Fri, 08:00–17:00 GMT</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Row: Name + Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row: Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row: Project Location + Project Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectLocation" className={labelClasses}>
                  Project Location
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  placeholder='e.g. "Dublin, Ireland" or "Netherlands"'
                  value={formData.projectLocation}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="projectType" className={labelClasses}>
                  Project Type <span className="text-teal-400">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Support Required Checkboxes */}
            <div>
              <p className={labelClasses}>
                Support Required <span className="text-teal-400">*</span>
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {supportOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 border border-white/10 rounded-lg px-4 py-3 cursor-pointer hover:border-teal-400/30 transition-colors has-[:checked]:border-teal-400/50 has-[:checked]:bg-teal-400/5"
                  >
                    <input
                      type="checkbox"
                      checked={formData.supportRequired.includes(option)}
                      onChange={() => handleCheckbox(option)}
                      className="accent-teal-400 w-4 h-4"
                    />
                    <span className="text-white/80 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className={labelClasses}>
                Timeline or Urgency
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                placeholder='e.g. "Needed within 2 weeks" or "Q2 2026"'
                value={formData.timeline}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className={labelClasses}>
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Brief description of the project and what support you need."
                value={formData.description}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-85 px-10 py-4 bg-[#003840] text-white cursor-pointer rounded-full after:rounded-full before:rounded-full relative group transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>

            {/* Status messages */}
            {submitStatus === "success" && (
              <motion.p
                className="text-teal-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you. Your request has been submitted. We will be in touch
                within 24 hours.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                className="text-red-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Something went wrong. Please try again or contact us directly
                at office@aa-aspect.com.
              </motion.p>
            )}
          </motion.form>

          {/* Registered Office */}
          <p className="text-white/30 text-xs text-center mt-14">
            Registered Office: 50 Princess St, Ipswich IP1 1RJ, United Kingdom
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
