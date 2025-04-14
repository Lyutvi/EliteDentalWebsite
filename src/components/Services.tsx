import React, { useState } from 'react';
import { Stethoscope, Smile, HeartPulse, Microscope, Scissors, Syringe, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <div className="pl-0">
              <img 
                src="/images/Implantology3.png" 
                alt="Implantology" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'IMPLANTOLOGY',
      description: 'Our dental office provides high-quality, long-term tooth replacements that guarantee a natural appearance and feel, blending in perfectly with your natural teeth and greatly enhancing your oral health overall.',
      url: '/implantology'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/ENDODONTICS.png" 
                alt="Endodontics" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'ENDODONTICS',
      description: 'We use a root canal therapy procedure that is patient-friendly in our full practice. As a result, we minimize patient discomfort and maintain the natural beauty of your smile while repairing damaged or infected teeth and restoring their function and health.',
      url: '/endodontics'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/Oral Surgery.png" 
                alt="Oral Surgery" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'ORAL SURGERY',
      description: 'Our clinic offers minimally invasive extractions as well as comprehensive therapy for a range of face and dental issues with an emphasis on oral health restoration, patient comfort, and aesthetics.',
      url: '/oral-surgery'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/PERIODONTOLOGY.png" 
                alt="Periodontology" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'PERIODONTOLOGY',
      description: 'Our clinic offers specialized gum treatments and care, focusing on preventing, diagnosing, and treating periodontal disease for improved oral health and overall wellbeing.',
      url: '/periodontology'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/ORTHODONTICS.png" 
                alt="Orthodontics" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'ORTHODONTICS',
      description: 'Expert treatments for misaligned teeth are available at our clinic. We employ cutting-edge methods, and every treatment plan is customized to guarantee the greatest possible result for our patients—improving their general appearance as well as their oral health.',
      url: '/orthodontics'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/BONDING.png" 
                alt="Bonding" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'BONDING',
      description: 'We expertly apply tooth-colored resin to teeth at our office in an effort to improve their appearance. For a seamless, visually beautiful finish that boosts your confidence and smile, we match the resin to the color of your natural teeth.',
      url: '/bonding'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/PROSTHETICS.png" 
                alt="Prosthetics" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'PROSTHETICS',
      description: 'Our dental health center excels in supplying substitute answers for lacking tooth the usage of custom designed bridges or dentures. These prosthetic gadgets are meticulously designed now no longer best to repair function, however additionally to decorate the aesthetics of your smile.',
      url: '/prosthetics'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/LIP FILLER.png" 
                alt="Lip Filler" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'LIP FILLER',
      description: 'Enhance the natural beauty of your smile with our expert dermal filler treatments. Each procedure is carefully customized to provide exceptional contouring and refinement, resulting in a truly radiant and captivating smile.',
      url: '/lip-filler'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/CARIESOLOGY.png" 
                alt="Cariesology" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'CARIESOLOGY',
      description: 'We offer complete prevention and focused treatment for tooth decay, integrating patient education, routine check-ups, and advanced diagnostics to ensure effective care and long-term oral health.',
      url: '/cariesology'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/TEETH WHITENING.png" 
                alt="Teeth Whitening" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'TEETH WHITENING',
      description: 'Attain a brighter, more youthful smile as we skillfully remove stains and discoloration from your teeth. Our treatments are crafted to enhance your dental aesthetics, delivering a radiant smile that makes a lasting impression.',
      url: '/teeth-whitening'
    },
    {
      icon: <div className="pl-0">
              <img 
                src="/images/ENTAL TOURISM.png" 
                alt="Dental Tourism" 
                className="w-14 h-14 object-contain -ml-3" 
              />
            </div>,
      title: 'DENTAL TOURISM',
      description: 'Translators, transportation, and accommodation assistance—just book with us, and our dedicated team will take care of every detail, providing a seamless experience tailored to your needs.',
      url: '/dental-tourism'
    }
  ];

  const handleServiceHover = (index: number) => {
    setActiveService(index);
  };

  const handleServiceLeave = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dental-light/5 to-white"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-dental-mint/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            OUR SERVICES
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Comprehensive dental care with a gentle touch and personalized approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={handleServiceLeave}
              onFocus={() => handleServiceHover(index)}
              onBlur={handleServiceLeave}
            >
              <div className="relative z-10">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-dental-dark group-hover:text-dental transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-dental-dark/70 mb-4">
                  {service.description}
                </p>
                {service.url ? (
                  <Link 
                    to={service.url} 
                    className="inline-flex items-center text-dental font-medium hover:text-dental-dark transition-colors duration-300"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-dental font-medium hover:text-dental-dark transition-colors duration-300"
                  >
                    Learn more 
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
              
              {/* Animated highlight for active service */}
              {activeService === index && (
                <div className="absolute inset-0 border-2 border-dental rounded-2xl animate-pulse-gentle pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
