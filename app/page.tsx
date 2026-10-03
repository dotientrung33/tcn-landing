import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

import FinalCTASection from "@/components/sections/FinalCTASection";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import AboutSection from "@/components/sections/AboutSection";
import BodyMindWisdomSection from "@/components/sections/BodyMindWisdomSection";
import CompanionPathsSection from "@/components/sections/CompanionPathsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SupportToolsSection from "@/components/sections/SupportToolsSection";
import TransformationJourneySection from "@/components/sections/TransformationJourneySection";
import FeaturedProgramsSection from "@/components/sections/FeaturedProgramsSection";
import ExpertsSection from "@/components/sections/ExpertsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ActivitySection from "@/components/sections/ActivitySection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <JourneySection />
        <AboutSection />
        <BodyMindWisdomSection />
        <CompanionPathsSection />

        <ServicesSection />

        {/* Công cụ hỗ trợ quá trình đồng hành */}
        <SupportToolsSection />

        <TransformationJourneySection />
        <FeaturedProgramsSection />
        <ExpertsSection />
        <PartnersSection />
        <CommunitySection />
        <ActivitySection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}