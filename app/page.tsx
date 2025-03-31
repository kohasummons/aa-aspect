import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import PurposeSection from "./components/sections/PurposeSection";
import CtaSection from "./components/sections/CtaSection";
import ServicesSection from "./components/sections/ServicesSection";
import BlogSection from "./components/sections/NewsSection";
import Footer from "./components/layout/Footer";
import TrustedBySection from "./components/sections/TrustedBySection";
import { InfiniteScrollSection } from "./components/sections/InfiniteScrollSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfiniteScrollSection />
      {/* <TrustedBySection /> */}
      <PurposeSection />
      <ServicesSection />
      <BlogSection/>
      <CtaSection />
      <Footer />
    </>
  );
}
