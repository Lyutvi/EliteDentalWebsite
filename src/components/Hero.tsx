import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white via-dental-light/5 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-dental/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="space-y-8 pt-10 lg:pt-20">
            <div className="space-y-6">
              <span className="pill-badge animate-fade-in-fast">Premier Dental Clinic in Bulgaria</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-dental-dark animate-fade-in">
                Transforming Smiles, <span className="text-dental">Transforming Lives</span>
              </h1>
              <p className="text-lg text-dental-dark/80 max-w-lg animate-fade-in-slow">
                Experience world-class dental care with our team of highly skilled professionals. 
                We combine advanced technology with personalized treatment plans to give you the 
                perfect smile you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow">
              <a 
                href="#contact" 
                className="btn-shine group"
              >
                Book an Appointment 
                <ArrowRight size={18} className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-full border-2 border-dental text-dental hover:bg-dental hover:text-white transition-colors duration-300"
              >
                Explore Services
              </a>
            </div>
            
            {/* Special Offer */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-card max-w-md border border-dental-light/20 animate-fade-in-slow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-dental-tertiary/10 flex items-center justify-center">
                  <span className="text-dental-tertiary font-bold">10</span>
                </div>
                <h3 className="font-display font-bold text-xl text-dental-dark">
                  YEAR GUARANTEE
                </h3>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-dental-tertiary">1990 £</span>
                <span className="text-xl font-medium text-dental-dark">All on 4</span>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-dental" />
                  <span className="text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-dental" />
                  <span className="text-sm">Complete Solution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-dental" />
                  <span className="text-sm">Expert Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check size={16} className="text-dental" />
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 animate-float">
              <video 
                ref={videoRef}
                src="/videos/Elitedentalvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-3xl shadow-blue-glow object-cover w-full h-[500px] md:h-[600px]"
              />
              
              {/* Floating Elements */}
              <div className="absolute -right-10 bottom-32 bg-white rounded-xl p-4 shadow-card animate-float w-44">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-dental-light flex items-center justify-center text-dental-dark font-bold">
                    10+
                  </div>
                  <div>
                    <p className="text-xs text-dental-dark/60">Years of</p>
                    <p className="text-sm font-semibold text-dental-dark">Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-6 -bottom-6 bg-white rounded-xl p-4 shadow-card animate-float w-44 animation-delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-dental-tertiary/20 flex items-center justify-center text-dental-tertiary font-bold">
                    5000+
                  </div>
                  <div>
                    <p className="text-xs text-dental-dark/60">Happy</p>
                    <p className="text-sm font-semibold text-dental-dark">Patients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Shapes */}
            <div className="absolute top-10 -right-14 w-40 h-40 bg-dental-accent/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 left-10 w-60 h-60 bg-dental-tertiary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
