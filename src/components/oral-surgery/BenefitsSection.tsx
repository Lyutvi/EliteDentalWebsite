
import React from 'react';
import { Scissors, Smile, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Scissors className="w-10 h-10 text-dental" />,
      title: "Precision Treatments",
      description: "Our surgeons utilize advanced imaging and microsurgical techniques for the highest level of precision in every procedure."
    },
    {
      icon: <Smile className="w-10 h-10 text-dental-coral" />,
      title: "Minimized Discomfort",
      description: "Modern anesthesia options and minimally invasive techniques ensure your comfort before, during, and after surgical procedures."
    },
    {
      icon: <Shield className="w-10 h-10 text-dental-mint" />,
      title: "Faster Recovery",
      description: "Our advanced approaches lead to reduced healing times, less swelling, and quicker return to normal activities."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE OUR ORAL SURGERY
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Experience state-of-the-art surgical procedures with optimal results and comfort.
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
