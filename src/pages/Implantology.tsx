import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initScrollReveal } from '@/utils/scrollReveal';
import HeroSection from '@/components/implantology/HeroSection';
import BenefitsSection from '@/components/implantology/BenefitsSection';
import ProcessSection from '@/components/implantology/ProcessSection';
import FAQSection from '@/components/implantology/FAQSection';

const Implantology = () => {
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
    </div>
  );
};

export default Implantology;
