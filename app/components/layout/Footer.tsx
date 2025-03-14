"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadedElementSVG from "../../../public/images/faded-element.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your newsletter API
    // For example:
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, firstName }),
    //   headers: { 'Content-Type': 'application/json' }
    // });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setEmail("");
    setFirstName("");
    setIsSubmitting(false);

    // Show success message (you could use a toast notification here)
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-white pt-20 pb-10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute right-0 top-0 opacity-40">
        <Image src={FadedElementSVG} alt="background effect" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-candara-bold text-[#003840] mb-4">
              Contacts Us
            </h3>
            <p className="text-[#003840] mb-2">+44 (0) 790 812 22811</p>
            <p className="text-[#003840]">info@aa-aspect.com</p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-candara-bold text-[#003840] mb-4">
              Business hours
            </h3>
            <p className="text-[#003840] mb-2">Monday — Friday</p>
            <p className="text-[#003840]">08:00 - 17:00</p>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-xl font-candara-bold text-[#003840] mb-4">
              REGISTERED OFFICE ADDRESS
            </h3>
            <p className="text-[#003840] mb-2">50 Princess St.</p>
            <p className="text-[#003840] mb-2">Ipswich IP1 1RJ</p>
            <p className="text-[#003840]">United Kingdom</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-candara-bold text-[#003840] mb-4">
              Socials
            </h3>
            <Link
              href="https://twitter.com/aaaspect"
              className="block text-[#003840] mb-2 hover:underline"
            >
              X
            </Link>
            <Link
              href="https://linkedin.com/company/aaaspect"
              className="block text-[#003840] mb-2 hover:underline"
            >
              LINKEDIN
            </Link>
            <Link
              href="https://facebook.com/aaaspect"
              className="block text-[#003840] hover:underline"
            >
              FACEBOOK
            </Link>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-candara-bold text-[#003840] mb-4">
              NEWSLETTER
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 p-4 flex-1"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 p-4 flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#003840] text-white px-8 py-4 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Sign me up
                    <svg
                      className="ml-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-20">
          <Image
            src="/images/footer-logo.svg"
            alt="aa aspect logo"
            width={1400}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
