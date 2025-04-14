
import React from 'react';
import { ShieldCheck, Heart, AlertCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-dental" />,
      title: "Gum Disease Prevention",
      description: "Our treatments help prevent and manage periodontitis, protecting your teeth from loss and preserving your smile."
    },
    {
      icon: <Heart className="w-10 h-10 text-dental-coral" />,
      title: "Improved Overall Health",
      description: "Healthy gums contribute to better overall health by reducing inflammation and bacterial infection risks."
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-dental-mint" />,
      title: "Early Detection",
      description: "We identify and address periodontal issues early, preventing progression to more severe conditions."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE OUR PERIODONTAL CARE
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Experience comprehensive periodontal treatments with a focus on prevention and long-term gum health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 reveal"
              data-direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-dental-dark">
                {benefit.title}
              </h3>
              <p className="text-dental-dark/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
