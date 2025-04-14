
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/bonding/HeroSection';
import ProcessSection from '@/components/bonding/ProcessSection';
import BenefitsSection from '@/components/bonding/BenefitsSection';
import FAQSection from '@/components/bonding/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const Bonding = () => {
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

export default Bonding;
