
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/teeth-whitening/HeroSection';
import ProcessSection from '@/components/teeth-whitening/ProcessSection';
import BenefitsSection from '@/components/teeth-whitening/BenefitsSection';
import FAQSection from '@/components/teeth-whitening/FAQSection';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const TeethWhitening = () => {
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
    </div>
  );
};

export default TeethWhitening;
