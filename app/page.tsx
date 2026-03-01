import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { InfiniteScrollSection } from "./components/sections/InfiniteScrollSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhenToCallSection from "./components/sections/WhenToCallSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfiniteScrollSection />
      <ServicesSection />
      <WhenToCallSection />
      <IndustriesSection />
      <CtaSection />
      <Footer />
    </>
  );
}
