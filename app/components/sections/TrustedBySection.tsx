"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaBuilding, FaIndustry, FaHospital, FaFlask } from "react-icons/fa";
import { MdBiotech, MdScience, MdEngineering } from "react-icons/md";
import { GiChemicalTank, GiMedicines } from "react-icons/gi";

const customers = [
  {
    name: "Exyte",
    url: "https://www.exyte.com",
    icon: FaIndustry
  },
  {
    name: "Fluor",
    url: "https://www.fluor.com",
    icon: FaBuilding
  },
  {
    name: "Jacobs",
    url: "https://www.jacobs.com",
    icon: MdEngineering
  },
  {
    name: "Lonza",
    url: "https://www.lonza.com",
    icon: MdBiotech
  },
  {
    name: "Roche",
    url: "https://www.roche.com",
    icon: GiMedicines
  },
  {
    name: "UCB",
    url: "https://www.ucb.com",
    icon: FaFlask
  },
  {
    name: "Sempa",
    url: "https://www.sempa.com",
    icon: MdScience
  },
  {
    name: "PharmaPlan",
    url: "https://www.pharmaplan.com",
    icon: FaHospital
  },
  {
    name: "Zallner",
    url: "https://www.zallner.com",
    icon: GiChemicalTank
  },
];

const TrustedBySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.defaults({ markers: false });

  //   // Title animation
  //   gsap.from(titleRef.current, {
  //     scrollTrigger: {
  //       trigger: titleRef.current,
  //       start: "top bottom-=100",
  //       end: "top center",
  //       scrub: 1
  //     },
  //     y: 50,
  //     opacity: 0,
  //     duration: 1
  //   });

  //   // Logos animation
  //   const logos = gsap.utils.toArray<HTMLElement>('.company-logo');
  //   logos.forEach((logo, i) => {
  //     gsap.from(logo, {
  //       scrollTrigger: {
  //         trigger: logo,
  //         start: "top bottom-=50",
  //         end: "top center",
  //         scrub: 1
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       delay: i * 0.1
  //     });
  //   });

  // }, []);

  return (
    <section ref={sectionRef} className="relative  pt-20 pb-40">
      <div className="container mx-auto px-4 md:px-6 flex flex-col">
        <div ref={titleRef} className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl text-center font-candara-exralight text-black mb-4 md:mb-4">
            The Companies we empower
          </h2>
        </div>

        <div ref={logosRef} className="md:w-9/12 w-full mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {customers.slice(0, 5).map((customer) => {
              const IconComponent = customer.icon;
              return (
                <Link 
                  key={customer.name}
                  href={customer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-logo flex items-center justify-center group hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-10 h-10 text-black" />
                    <span className="text-black text-2xl font-abadi-regular">
                      {customer.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 