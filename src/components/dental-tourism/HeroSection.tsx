import React from 'react';
import { ArrowRight } from 'lucide-react';
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
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dental-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-ocean-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 reveal" data-direction="left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gradient-purple leading-tight">
              DENTAL TOURISM <span className="text-gradient-blue">IN BULGARIA</span>
            </h1>
            <p className="text-xl text-dental-dark/80 mb-8 max-w-xl">
              Experience world-class dental care at a fraction of Western prices. Our comprehensive dental tourism packages combine excellent dental treatments with a memorable travel experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/"
                className="btn-primary group"
                onClick={handleContactClick}
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#process" 
                className="btn-outline group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 reveal" data-direction="right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-dental-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean-blue/20 rounded-full blur-xl"></div>
              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl shadow-dental-dark/5 border border-dental-light/20">
                <img 
                  src="/images/Airplane Landing.jpg" 
                  alt="Dental Tourism in Bulgaria - Airplane Landing" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
