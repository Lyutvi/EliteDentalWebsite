
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';
import HeroSection from '@/components/endodontics/HeroSection';
import BenefitsSection from '@/components/endodontics/BenefitsSection';
import ProcessSection from '@/components/endodontics/ProcessSection';
import FAQSection from '@/components/endodontics/FAQSection';

const Endodontics = () => {
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
        <BenefitsSection />
        <ProcessSection />
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Endodontics;
