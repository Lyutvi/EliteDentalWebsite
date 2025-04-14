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
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-dental-light/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-60 left-10 w-60 h-60 bg-dental-coral/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="relative mb-6">
              <div className="inline-block px-4 py-2 bg-dental-light rounded-full text-dental font-semibold text-sm mb-4">
                Cosmetic Dentistry
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-gradient-primary reveal" data-direction="up">
              Dental Bonding
            </h1>
            
            <p className="text-lg text-dental-dark/80 mb-8 max-w-lg reveal" data-direction="up" data-delay="0.1">
              Transform your smile with our expert dental bonding services. We use state-of-the-art techniques and tooth-colored resin to repair damaged, discolored, or misshapen teeth, providing a seamless, natural-looking result that enhances your smile and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 reveal" data-direction="up" data-delay="0.2">
              <a 
                href="/"
                className="btn-primary inline-flex items-center justify-center"
                onClick={handleContactClick}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#process" 
                className="btn-outline inline-flex items-center justify-center"
              >
                Learn About The Process
              </a>
            </div>
            
            <div className="flex items-center space-x-6 reveal" data-direction="up" data-delay="0.3">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-dental flex items-center justify-center text-white text-sm font-bold">97%</div>
                <div className="w-12 h-12 rounded-full bg-dental-coral flex items-center justify-center text-white text-sm font-bold">4.9</div>
              </div>
              <div className="text-sm">
                <p className="text-dental-dark font-medium">97% Patient Satisfaction</p>
                <p className="text-dental-dark/60">Based on patient reviews</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 reveal" data-direction="right">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-blue-glow">
                <img 
                  src="/images/DentBonding.jpg" 
                  alt="Dental bonding procedure" 
                  className="w-full h-[500px] object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dental rounded-full z-0 animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-dental-coral rounded-full z-0 animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
