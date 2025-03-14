import { Header } from "@app/components/layout/Header";
import { Hero } from "@app/components/sections/Hero";
import { InfiniteScrollSection } from "@app/components/sections/InfiniteScrollSection";
import PurposeSection from "@app/components/sections/PurposeSection";
import CtaSection from "./components/sections/CtaSection";
import ServicesSection from "./components/sections/ServicesSection";
import BlogSection from "./components/sections/BlogSection";
import Footer from "./components/layout/Footer";
// import TeamSection from "@app/components/sections/TeamSection"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfiniteScrollSection />
      <PurposeSection />
      <ServicesSection />
      {/* <TeamSection /> */}
      <BlogSection/>
      <CtaSection />
      <Footer />
    </>
  );
}
