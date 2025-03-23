"use client";

import Image from "next/image";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import CtaSection from "../components/sections/CtaSection";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Aspect provide?",
    answer:
      "Aspect specializes in project management, process management, quality management, and FMEA coaching services. We offer tailored solutions to help businesses streamline their operations and achieve their goals efficiently.",
  },
  {
    question: "How does Aspect ensure project success?",
    answer:
      "We employ a comprehensive approach combining experienced professionals, proven methodologies, and cutting-edge tools. Our team maintains constant communication and provides regular updates to ensure transparency and timely delivery.",
  },
  {
    question: "Can Aspect work with businesses of any size?",
    answer:
      "Yes, we work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and customized to meet the specific needs and requirements of each client.",
  },
  {
    question: "What makes Aspect different from other consulting firms?",
    answer:
      "Our unique combination of industry expertise, innovative approaches, and commitment to client success sets us apart. We focus on building long-term partnerships and delivering measurable results rather than just short-term solutions.",
  },
];

const FAQAccordion = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-candara-bold text-[#003840]">
          {question}
        </span>
        <span
          className={`ml-6 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="h-6 w-6 text-[#003840]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 font-abadi-extralight">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function About() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  // const bgRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-[url(/images/news-image.jpg)] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" />

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
                      src="/images/news-image.jpg"
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
                  <h2 className="text-3xl font-candara-bold text-[#003840]">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 font-abadi-extralight">
                    At Aspect, we&apos;re dedicated to revolutionizing the gig
                    economy by creating meaningful connections between talented
                    professionals and innovative projects. Our platform empowers
                    both freelancers and businesses to achieve their goals
                    through seamless collaboration.
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
                    title: "Trust",
                    description:
                      "Building reliable connections between professionals and businesses",
                  },
                  {
                    title: "Innovation",
                    description:
                      "Constantly evolving to meet the needs of modern work",
                  },
                  {
                    title: "Community",
                    description:
                      "Fostering a supportive network of skilled professionals",
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
                    <p className="mt-2 font-abadi-extralight">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                
                <div ref={bgRef} className="absolute right-0 bottom-4/12 z-0">
                  <svg
                    width="192"
                    height="139"
                    viewBox="0 0 192 139"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[646px] h-full"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58.0422 0.584595C63.1166 0.584595 68.8752 0.869688 72.2962 1.38283C75.4321 1.89597 79.9363 2.80821 82.274 3.43539C84.6116 4.06256 89.2299 5.88708 92.5368 7.54054C97.3261 9.87819 99.3217 11.3036 102.572 14.4965C105.251 17.1192 107.304 19.799 108.501 22.1936C109.528 24.2462 110.725 27.5531 111.124 29.6057C111.58 31.6583 111.922 36.7897 111.922 48.9911L106.335 50.7586C103.313 51.7278 98.7515 53.4384 96.2429 54.6357C93.7342 55.776 90.0281 57.8856 88.0325 59.254C86.037 60.6794 83.0151 63.4731 81.2476 65.5257C79.5372 67.5783 77.4276 69.7449 76.6294 70.3721C75.8311 70.9992 73.0944 72.1395 70.5857 72.9948C68.077 73.85 61.8053 75.4465 56.6168 76.6438C51.4284 77.7841 45.6698 79.3806 43.7882 80.1218C41.9067 80.863 39.2839 82.2314 37.9156 83.2006C36.2621 84.398 35.0648 85.9374 33.9815 88.161C32.8982 90.4986 32.385 92.7223 32.157 95.7441C31.9289 99.5072 32.1 100.419 33.4114 103.27C34.4947 105.551 35.6919 107.09 37.3454 108.288C38.7138 109.257 41.0515 110.454 42.6479 110.967C44.3584 111.48 47.3802 111.88 50.3451 111.823C53.0248 111.823 56.8449 111.366 58.8974 110.853C60.95 110.34 64.0289 109.2 65.6824 108.402C67.3928 107.546 70.0725 105.665 71.5549 104.125C73.0944 102.643 75.033 99.8492 75.9452 97.8537C76.8575 95.9151 78.4539 91.1258 79.3662 87.1917C80.3354 83.2577 81.7608 78.7534 82.502 77.214C83.3003 75.6175 84.8397 73.2229 86.037 71.7975C87.1773 70.3721 89.686 67.9774 91.6246 66.438C93.5061 64.8985 97.1551 62.6749 99.6638 61.4776C102.173 60.2803 106.677 58.6838 109.642 57.8856C112.606 57.0873 121.216 55.3769 128.742 54.0655C136.268 52.8112 144.364 51.1577 146.702 50.4165C149.04 49.6753 152.232 48.1929 153.829 47.1666C155.881 45.7982 156.965 44.6009 157.706 42.7194C158.618 40.5527 158.675 39.7545 158.162 37.702C157.82 36.3906 156.908 34.6231 156.224 33.7108C155.482 32.8556 153.715 31.6012 152.346 30.9171C150.978 30.2899 147.671 29.2636 144.991 28.7505C141.456 28.0093 138.492 27.8382 134.158 28.0093C129.312 28.2373 127.431 28.5794 124.466 29.8338C122.413 30.689 120.475 31.5442 120.19 31.6583C119.904 31.8293 119.391 30.689 119.106 29.2066C118.878 27.7242 118.137 25.0444 117.51 23.3339C116.94 21.6235 115.685 18.8867 114.773 17.3473C113.861 15.7508 111.58 12.786 109.699 10.6194C107.76 8.50982 106.221 6.6283 106.221 6.34322C106.221 6.11516 107.418 5.37394 108.9 4.68975C110.44 3.94854 113.291 2.97928 115.343 2.52315C117.396 2.06702 123.04 1.38282 127.887 0.983713C134.672 0.47057 138.606 0.47057 145.277 0.983713C149.952 1.32581 155.995 2.18105 158.675 2.80823C161.355 3.4354 164.947 4.51869 166.657 5.14587C168.368 5.77304 171.618 7.25546 173.784 8.39578C176.236 9.65013 179.258 11.9308 181.482 14.2114C183.819 16.5491 185.872 19.2858 187.012 21.6235C187.981 23.676 189.179 26.8689 189.692 28.7505C190.148 30.632 190.832 34.338 191.174 37.0178C191.573 40.1536 191.63 49.2762 191.459 62.6749C191.231 74.1351 190.889 86.5646 190.604 90.3276C190.262 94.0907 189.521 99.3361 188.894 102.016C188.209 104.696 186.727 108.915 185.473 111.424C184.275 113.932 181.881 117.638 180.227 119.634C178.574 121.686 175.666 124.594 173.784 126.077C171.903 127.559 168.539 129.669 166.372 130.752C164.206 131.835 159.816 133.489 156.68 134.458C153.544 135.427 147.899 136.739 144.136 137.423C139.062 138.278 134.729 138.62 127.602 138.677C122.071 138.677 116.312 138.392 114.203 137.993C112.15 137.651 109.185 136.91 107.646 136.396C106.05 135.883 103.37 135.028 98.5235 133.261L102.515 129.498C104.795 127.331 108.159 123.226 110.326 119.976C112.378 116.84 114.545 113.02 115.115 111.538C115.913 109.542 116.426 108.915 117.054 109.2C117.51 109.371 119.334 110.055 121.045 110.739C123.325 111.538 125.606 111.88 129.312 111.88C132.562 111.88 135.698 111.538 137.864 110.91C139.746 110.34 142.711 109.143 144.421 108.231C146.132 107.318 148.926 105.266 150.579 103.612C152.232 101.959 154.399 99.051 155.311 97.1695C156.224 95.288 157.364 91.9241 157.82 89.7575C158.333 87.3628 158.675 82.6304 158.675 77.8981C158.675 71.3413 158.561 70.087 157.82 70.087C157.364 70.087 154.969 70.8852 152.518 71.7975C150.123 72.7667 142.882 74.8193 136.439 76.4157C129.996 78.0122 123.439 79.8367 121.9 80.5209C120.304 81.1481 118.137 82.2884 117.054 83.0296C115.97 83.7137 114.488 85.1391 113.747 86.1654C112.891 87.4198 111.922 90.8978 110.725 96.5994C109.756 101.275 108.387 106.691 107.703 108.573C106.962 110.454 105.422 113.533 104.225 115.415C103.028 117.296 100.747 120.204 99.1507 121.914C97.5542 123.568 94.7034 126.077 92.8219 127.445C90.9404 128.756 87.4624 130.752 85.1247 131.892C82.7871 132.976 78.91 134.401 76.5724 135.028C74.2347 135.712 70.0155 136.625 67.1647 137.138C64.3139 137.651 57.187 138.164 51.2003 138.335C44.3584 138.563 38.7138 138.449 35.806 137.993C33.2973 137.651 29.3062 136.739 26.9685 135.94C24.6309 135.142 20.6398 133.375 18.1311 132.063C15.4513 130.638 12.2014 128.3 10.1489 126.248C7.69717 123.91 5.98667 121.515 4.56127 118.55C3.36394 116.213 1.88158 112.222 1.19739 109.713C0.228119 105.95 0 103.555 0 96.3143C0 88.6171 0.171062 86.9067 1.3684 82.9156C2.1096 80.4069 3.64904 76.8719 4.73235 74.9903C5.81565 73.1658 8.1533 70.372 9.86378 68.8326C11.5743 67.2362 14.6531 64.9556 16.7057 63.7582C18.7583 62.5609 22.3503 60.7364 24.6879 59.7671C27.0256 58.8549 31.4158 57.4295 34.3806 56.6882C37.3454 55.89 43.9023 54.7497 48.9197 54.1225C53.9371 53.4954 60.0948 52.4691 62.6035 51.8419C65.1122 51.2717 68.5901 50.2454 70.3006 49.5613C72.0111 48.8771 74.2917 47.7368 75.261 46.9385C76.2873 46.1973 77.6557 44.7149 78.2828 43.6886C78.91 42.7194 79.4232 41.0089 79.4232 39.9826C79.4232 39.0133 79.081 37.3028 78.6819 36.2766C78.2258 35.3073 76.9145 33.6538 75.6601 32.6275C74.4628 31.6012 71.783 30.2329 69.7305 29.5487C67.1077 28.6935 64.0289 28.2373 59.1825 28.0663C53.88 27.8382 51.4854 27.9522 48.6346 28.6935C46.582 29.2066 43.8452 30.2899 42.4768 31.0311C41.1655 31.8293 39.227 33.5968 36.3762 37.5879H3.59203V36.1625C3.59203 35.3643 4.2192 32.7416 5.01743 30.2899C5.75863 27.8952 7.35505 24.3032 8.55238 22.3077C9.74972 20.3691 11.8593 17.4613 13.2847 15.8078C14.7101 14.2114 17.675 11.6457 19.8416 10.1063C22.0082 8.56683 25.6572 6.57128 27.8238 5.65902C29.9904 4.74677 33.9815 3.49241 36.6612 2.86523C39.341 2.23806 43.3321 1.43983 45.4987 1.15475C47.6653 0.92669 53.3099 0.641611 58.0422 0.584595Z"
                      fill="#E8E8E8"
                    />
                  </svg>
                </div>
              </motion.div> */}
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
  );
}
