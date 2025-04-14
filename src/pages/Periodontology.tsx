
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';
import HeroSection from '@/components/periodontology/HeroSection';
import BenefitsSection from '@/components/periodontology/BenefitsSection';
import ProcessSection from '@/components/periodontology/ProcessSection';
import FAQSection from '@/components/periodontology/FAQSection';

const Periodontology = () => {
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

export default Periodontology;
