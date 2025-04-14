
import React from 'react';
import { ShieldCheck, Heart, Clock, Smile } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Smile className="w-10 h-10 text-dental" />,
      title: "Perfect Alignment",
      description: "Achieve perfectly aligned teeth for a beautiful smile and improved bite functionality."
    },
    {
      icon: <Heart className="w-10 h-10 text-dental-coral" />,
      title: "Better Oral Health",
      description: "Straighter teeth are easier to clean, reducing the risk of tooth decay and gum disease."
    },
    {
      icon: <Clock className="w-10 h-10 text-dental-mint" />,
      title: "Advanced Technology",
      description: "Benefit from shorter treatment times with our modern orthodontic technologies."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-dental-purple" />,
      title: "Customized Treatment",
      description: "Personalized treatment plans tailored to your specific dental needs and goals."
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE OUR ORTHODONTIC CARE
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Experience comprehensive orthodontic treatments with a focus on comfort, aesthetics, and long-term results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 reveal"
              data-direction={index % 2 === 0 ? "left" : "right"}
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
