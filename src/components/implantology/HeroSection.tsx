import React from 'react';
import { Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useServiceTracking } from '@/hooks/useServiceTracking';

const HeroSection = () => {
  const navigate = useNavigate();
  const { handleAppointmentClick } = useServiceTracking('Implantology');

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAppointmentClick(); // Track appointment request
    
    // Navigate to home page and scroll to contact form
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          const yOffset = -100; // Offset to account for fixed header
          const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 200); // Increased delay to ensure navigation completes
    } else {
      // If already on home page, just scroll
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const yOffset = -100;
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal" data-direction="left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gradient-primary">
              IMPLANTOLOGY
            </h1>
            <p className="text-xl text-dental-dark/80 mb-8">
              Our dental office provides high-quality, long-term tooth replacements that guarantee a natural appearance and feel, blending in perfectly with your natural teeth and greatly enhancing your oral health overall.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/"
                className="btn-primary"
                onClick={handleContactClick}
              >
                Book Consultation
              </a>
              <a 
                href="#benefits" 
                className="btn-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative reveal" data-direction="right">
            <div className="rounded-2xl overflow-hidden shadow-blue-glow relative">
              <img 
                src="/images/Implant.jpg" 
                alt="Advanced dental implants" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs reveal" data-direction="up">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-dental-light rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dental-dark">98% Success Rate</h3>
                  <p className="text-dental-dark/70">with our advanced implants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
