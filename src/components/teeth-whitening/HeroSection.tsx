import React from 'react';
import { cn } from '@/lib/utils';
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
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dental-light/30 to-white pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-1 lg:order-1 reveal" data-direction="left">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient-primary">
              Professional Teeth Whitening
            </h1>
            <p className="text-lg md:text-xl text-dental-dark/80 mb-8">
              Transform your smile with our advanced teeth whitening procedures. Our professional treatments can lighten your teeth by several shades in just one session, removing years of stains and discoloration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/"
                onClick={handleContactClick}
                className={cn(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  "bg-dental text-white shadow-lg shadow-dental/20 hover:shadow-dental/40 hover:translate-y-[-2px]"
                )}
              >
                Book Consultation
              </a>
              <a 
                href="#process" 
                className={cn(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  "bg-white text-dental-dark border border-dental-light/50 hover:bg-dental-light/10"
                )}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 order-2 lg:order-2 reveal" data-direction="right">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-dental-dark/5 relative">
              <img 
                src="/images/Whitening.avif" 
                alt="Teeth Whitening Treatment" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-dental/10 p-3 rounded-full">
                    <div className="w-10 h-10 flex items-center justify-center text-dental-coral">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-dental-dark">Quick Treatments</h4>
                    <p className="text-dental-dark/70 text-sm">Most procedures take only 60-90 minutes</p>
                  </div>
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
