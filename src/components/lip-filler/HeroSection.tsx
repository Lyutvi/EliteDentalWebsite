import React from 'react';
import { Button } from '@/components/ui/button';
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
    <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-dental-coral/20 rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-dental-mint/10 rounded-tr-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 reveal" data-direction="left">
              Premium <span className="text-gradient-primary">Lip Filler</span> Treatments
            </h1>
            <p className="text-xl text-dental-dark/80 mb-8 max-w-xl reveal" data-direction="left" data-delay="0.1">
              Enhance your natural beauty with our safe and effective lip augmentation treatments, designed to give you the perfect, full lips you've always wanted.
            </p>
            <div className="flex flex-wrap gap-4 reveal" data-direction="left" data-delay="0.2">
              <a href="/" onClick={handleContactClick}>
                <Button size="lg" className="bg-dental-coral hover:bg-dental-coral/90 text-white">
                  Book Consultation
                </Button>
              </a>
              <a href="#process">
                <Button variant="outline" size="lg" className="border-dental-coral text-dental-coral hover:bg-dental-coral/10">
                  Learn About Process
                </Button>
              </a>
            </div>
          </div>
          <div className="order-2 lg:order-2 reveal" data-direction="right">
            <div className="relative">
              <img 
                src="/images/Lips.jpg" 
                alt="Woman with full, natural-looking lips after filler treatment" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-dental-coral mr-2"></div>
                  <span className="text-sm font-medium text-dental-dark">Natural-Looking Results</span>
                </div>
                <p className="text-sm text-dental-dark/70">
                  Our lip fillers enhance your natural beauty without an overdone appearance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
