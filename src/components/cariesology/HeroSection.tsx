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
    <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-dental-mint/20 rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-dental/10 rounded-tr-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 reveal" data-direction="left">
              Advanced <span className="text-gradient-primary">Cariesology</span> Services
            </h1>
            <p className="text-xl text-dental-dark/80 mb-8 max-w-xl reveal" data-direction="left" data-delay="0.1">
              Comprehensive decay prevention and targeted treatment using cutting-edge diagnostics and minimally invasive techniques
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 reveal" data-direction="left" data-delay="0.2">
              <a 
                href="/"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
                onClick={handleContactClick}
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#process" 
                className="btn-outline inline-flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 reveal" data-direction="left" data-delay="0.3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-dental font-bold text-xl mb-1">98%</div>
                <p className="text-dental-dark/70 text-sm">Success rate</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-dental-coral font-bold text-xl mb-1">5,000+</div>
                <p className="text-dental-dark/70 text-sm">Treatments</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-dental-mint font-bold text-xl mb-1">Minimal</div>
                <p className="text-dental-dark/70 text-sm">Invasive care</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal" data-direction="right">
            <div className="relative">
              <img 
                src="/images/Caries.jpg" 
                alt="Advanced cariesology treatment" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-dental-mint mr-2"></div>
                  <span className="text-sm font-medium text-dental-dark">Early Detection</span>
                </div>
                <p className="text-sm text-dental-dark/70">
                  Advanced diagnostics for early cavity detection and prevention
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
