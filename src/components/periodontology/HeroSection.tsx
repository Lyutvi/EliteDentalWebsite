import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const yOffset = -100; // Offset to account for fixed header
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-dental-light/20 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-dental-tertiary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-dental/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1 reveal" data-direction="left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-6 bg-dental"></div>
              <span className="text-dental uppercase tracking-wider font-medium text-sm">Gum Health Specialists</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gradient-primary">
              Advanced Periodontology <br/> For Healthy Gums
            </h1>
            
            <p className="text-lg text-dental-dark/70 mb-8 max-w-lg">
              Our specialized periodontal treatments address gum disease and promote oral health with advanced, minimally invasive techniques.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-dental to-dental-tertiary hover:opacity-90 transition-opacity rounded-full shadow-dental-glow btn-shine"
                onClick={handleContactClick}
              >
                Book Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg" 
                variant="outline"
                className="border-dental text-dental hover:bg-dental/10 rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-2 lg:order-2 reveal" data-direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-dental/30 to-dental-coral/30 rounded-2xl -rotate-6 scale-95 blur-sm"></div>
              <div className="bg-white p-2 rounded-2xl shadow-blue-glow overflow-hidden">
                <img 
                  src="/images/GumHealth.jpg" 
                  alt="Advanced Periodontal Treatment" 
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dental rounded-xl shadow-lg px-6 py-4 flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold">98%</span>
                <span className="text-sm text-center">Success Rate</span>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-12 bg-white rounded-xl shadow-lg p-4 max-w-[180px] reveal" data-direction="up">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-dental-mint/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-mint"/>
                  </svg>
                </div>
                <span className="font-medium text-dental-dark">Gum Restoration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
