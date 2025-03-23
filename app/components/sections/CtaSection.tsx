"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // TODO: Implement newsletter signup API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus("success");
      setEmail("");
      setFirstName("");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <section className="bg-black py-20 md:py-[174px] text-white px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-candara-light mb-4">
            Stay in the loop
          </h2>
          
          <p className="text-lg md:text-xl font-candara-light mb-8 md:mb-12 max-w-2xl px-4">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white/40"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white/40"
                required
              />
              <motion.button 
                type="submit"
                className="bg-[#003840] text-white md:self-center md:w-[300px] px-6 md:px-8 py-3 md:py-4 font-candara-bold hover:bg-[#004a54] transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </div>
            {status === "success" && (
              <p className="mt-4 text-green-400">Successfully subscribed!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
