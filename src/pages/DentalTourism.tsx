import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/dental-tourism/HeroSection';
import ProcessSection from '@/components/dental-tourism/ProcessSection';
import BenefitsSection from '@/components/dental-tourism/BenefitsSection';
import FAQSection from '@/components/dental-tourism/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingConsultButton from '@/components/dental-tourism/FloatingConsultButton';
import { initScrollReveal } from '@/utils/scrollReveal';

const DentalTourism = () => {
  useEffect(() => {
    // Initialize scroll reveal
    const cleanup = initScrollReveal();
    
    // Return cleanup function
    return cleanup;
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* Floating Consultation Button */}
      <FloatingConsultButton />
    </div>
  );
};

export default DentalTourism;
