
import React from 'react';
import { Stethoscope, HeartPulse, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Stethoscope className="w-10 h-10 text-dental" />,
      title: "Natural Look & Feel",
      description: "Implants provide the same stability and appearance as natural teeth, allowing you to smile, speak, and eat with confidence."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-dental-coral" />,
      title: "Bone Health Preservation",
      description: "Unlike traditional dentures, implants stimulate bone growth and prevent bone loss that occurs when teeth are missing."
    },
    {
      icon: <Check className="w-10 h-10 text-dental-mint" />,
      title: "Long-lasting Solution",
      description: "With proper care, dental implants can last a lifetime, making them a cost-effective solution in the long run."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE DENTAL IMPLANTS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Dental implants offer a permanent solution to missing teeth with benefits that go beyond aesthetics.
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
