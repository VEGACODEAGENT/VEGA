'use client';

import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import WhyVegaai from '@/components/sections/WhyVegaai';
import ProcessSection from '@/components/sections/ProcessSection';
import CaseStudies from '@/components/sections/CaseStudies';
import AboutSection from '@/components/sections/AboutSection';
import FinalCTA from '@/components/sections/FinalCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <IndustriesSection />
      <WhyVegaai />
      <ProcessSection />
      <CaseStudies />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
