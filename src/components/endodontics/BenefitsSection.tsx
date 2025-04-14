
import React from 'react';
import { HeartPulse, Microscope, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Microscope className="w-10 h-10 text-dental" />,
      title: "Save Your Natural Teeth",
      description: "Endodontic treatment helps you maintain your natural smile, continue enjoying your favorite foods, and limits the need for ongoing dental work."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-dental-coral" />,
      title: "Virtually Pain-Free",
      description: "With modern techniques and anesthesia, patients report that root canal treatment is as comfortable as having a filling placed."
    },
    {
      icon: <Check className="w-10 h-10 text-dental-mint" />,
      title: "Efficient & Effective",
      description: "Our endodontic procedures are completed in just 1-2 appointments, providing quick relief from pain with excellent long-term outcomes."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE ENDODONTIC THERAPY
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Modern root canal therapy preserves your natural teeth with comfort and precision.
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
