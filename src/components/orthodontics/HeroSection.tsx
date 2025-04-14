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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dental-light/30 -z-10"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 reveal" data-direction="left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-dental-dark">
              Advanced <span className="text-gradient-primary">Orthodontics</span> For A Perfect Smile
            </h1>
            <p className="text-xl text-dental-dark/80 mb-8 max-w-2xl">
              Achieve perfect alignment and a beautiful smile with our cutting-edge orthodontic treatments. Our expert team uses the latest technology to provide comfortable, effective solutions for all ages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/"
                className="btn-primary flex items-center justify-center sm:justify-start"
                onClick={handleContactClick}
              >
                Book a Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#process" 
                className="btn-secondary flex items-center justify-center sm:justify-start"
              >
                Explore Our Process
              </a>
            </div>
            
            <div className="flex items-center mt-12 space-x-4">
              <div className="flex -space-x-4">
                <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="Happy Patient" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="Happy Patient" />
                <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="Happy Patient" />
                <img src="https://randomuser.me/api/portraits/men/67.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="Happy Patient" />
              </div>
              <div>
                <div className="text-dental-dark font-semibold">1000+ Happy Patients</div>
                <div className="text-dental-dark/70 text-sm">Rated 4.9 out of 5</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 reveal" data-direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-dental to-dental-tertiary rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-8 border-white">
                <div className="bg-white p-2 rounded-2xl shadow-blue-glow overflow-hidden">
                  <img 
                    src="/images/Ortho.jpg" 
                    alt="Advanced Orthodontic Treatment" 
                    className="w-full h-[500px] object-cover rounded-xl"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg flex gap-3 items-center border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dental/10 text-dental">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-dental-dark font-semibold">Modern Techniques</div>
                  <div className="text-dental-dark/60 text-sm">Safe & Comfortable</div>
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
