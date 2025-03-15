import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { InfiniteScrollSection } from "./components/sections/InfiniteScrollSection";
import PurposeSection from "./components/sections/PurposeSection";
import CtaSection from "./components/sections/CtaSection";
import ServicesSection from "./components/sections/ServicesSection";
import BlogSection from "./components/sections/BlogSection";
import Footer from "./components/layout/Footer";
import TeamSection from "./components/sections/TeamSection";
import TrustedBySection from "./components/sections/TrustedBySection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfiniteScrollSection />
      <PurposeSection />
      <ServicesSection />
      <TeamSection />
      <TrustedBySection />
      <BlogSection/>
      <CtaSection />
      <Footer />
    </>
  );
}
