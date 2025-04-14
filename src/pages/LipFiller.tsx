
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/lip-filler/HeroSection';
import ProcessSection from '@/components/lip-filler/ProcessSection';
import BenefitsSection from '@/components/lip-filler/BenefitsSection';
import FAQSection from '@/components/lip-filler/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const LipFiller = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LipFiller;
