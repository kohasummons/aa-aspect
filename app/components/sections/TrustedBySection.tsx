"use client";

import Image from "next/image";

const TrustedBySection = () => {


  return (
    <section className="relative pt-20 pb-30">
      <div className="container mx-auto px-4 md:px-6 flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-center font-candara-exralight text-[#191919] md:mb-4">
            The Companies we empower
          </h2>
        </div>

        <div className="w-full mx-auto">
          <div className="flex flex-col items-center space-y-4 md:space-y-10">
            <div className="flex space-x-4 md:space-x-20">
              <Image 
                src="/images/brands/pureway.png" 
                alt="pureway" 
                width={200} 
                height={200} 
                loading="lazy"
                className="w-[150px] md:w-[200px] h-auto"
                sizes="(max-width: 768px) 150px, 200px"
                quality={75}
              />
              <Image 
                src="/images/brands/seedv.png" 
                alt="seed ventures" 
                width={200} 
                height={200} 
                loading="lazy"
                className="w-[150px] md:w-[200px] h-auto"
                sizes="(max-width: 768px) 150px, 200px"
                quality={75}
              />
              <Image 
                src="/images/brands/jlr.png" 
                alt="Jlr" 
                width={60} 
                height={60} 
                loading="lazy"
                className="w-[45px] md:w-[60px] h-auto"
                sizes="(max-width: 768px) 45px, 60px"
                quality={75}
              />
          </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
              <p className="text-black text-xl md:text-2xl font-abadi-regular">TECNODEV LTD</p>
              <p className="text-black text-xl md:text-2xl font-abadi-regular">SEALGARD </p>
              <p className="text-black text-xl md:text-2xl font-abadi-regular">TWINFORDS</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
