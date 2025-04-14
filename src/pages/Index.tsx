
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
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
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
