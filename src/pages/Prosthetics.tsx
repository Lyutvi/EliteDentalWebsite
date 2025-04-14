
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/prosthetics/HeroSection';
import ProcessSection from '@/components/prosthetics/ProcessSection';
import BenefitsSection from '@/components/prosthetics/BenefitsSection';
import FAQSection from '@/components/prosthetics/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const Prosthetics = () => {
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

export default Prosthetics;
