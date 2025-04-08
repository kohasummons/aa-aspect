"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-black py-20 md:py-[100px] text-white px-6 md:px-6">
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
          
          <form onSubmit={handleSubmit} className="w-full md:max-w-6/12">
            <div className="flex flex-col md:flex-row w-full gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border rounded-full border-white/20 focus:outline-none focus:border-white/40"
                required
              />
              <motion.button 
                type="submit"
                className="bg-[#003840] button-85 text-white md:self-center md:w-[200px] px-6 md:px-8 py-3 md:py-4 font-candara-bold transition-all duration-300 whitespace-nowrap cursor-pointer rounded-full after:rounded-full before:rounded-full relative group"
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
