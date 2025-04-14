
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/cariesology/HeroSection';
import ProcessSection from '@/components/cariesology/ProcessSection';
import BenefitsSection from '@/components/cariesology/BenefitsSection';
import FAQSection from '@/components/cariesology/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const Cariesology = () => {
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

export default Cariesology;
