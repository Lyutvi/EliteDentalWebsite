import React from 'react';
import { Scissors } from 'lucide-react';
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
    <section className="relative pb-20 pt-32 md:pt-40 lg:pt-48 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-dental-light/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(101,163,182,0.1),transparent_70%)]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="md:w-1/2 reveal" data-direction="left">
            <div className="inline-flex items-center bg-dental-light/30 px-4 py-2 rounded-full mb-6">
              <img 
                src="/images/Oral Surgery.png"
                alt="Oral Surgery Icon"
                className="w-8 h-8 mr-2"
              />
              <span className="text-dental-dark/80 text-sm font-medium">Precision Oral Procedures</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gradient-primary">
              Advanced Oral <br />Surgery Solutions
            </h1>
            
            <p className="text-lg text-dental-dark/80 mb-8 max-w-xl">
              Our expert oral surgeons provide precision treatments for extractions, 
              jaw issues, and oral pathologies using state-of-the-art techniques for 
              faster healing and optimal outcomes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/"
                className="btn-primary"
                onClick={handleContactClick}
              >
                Schedule Consultation
              </a>
              <a href="#process" className="btn-outline">
                Learn About the Process
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 reveal" data-direction="right">
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-blue-glow overflow-hidden">
                <img 
                  src="/images/Surgery.jpg" 
                  alt="Advanced Oral Surgery" 
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-lg p-4 md:p-6 reveal" data-direction="up" data-delay="300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-dental-dark/60 text-sm">Success Rate</p>
                    <p className="text-2xl font-bold text-dental-purple">97%+</p>
                  </div>
                  <div>
                    <p className="text-dental-dark/60 text-sm">Recovery</p>
                    <p className="text-2xl font-bold text-dental-coral">Faster</p>
                  </div>
                </div>
              </div>
              
              {/* Experience Card */}
              <div className="absolute -top-6 -right-6 bg-dental gradient-card rounded-xl shadow-lg p-4 text-white reveal" data-direction="down" data-delay="300">
                <p className="text-sm font-medium">Surgical Excellence</p>
                <p className="text-xl font-semibold">12+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
