
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Natural Enhancement",
      description: "Our fillers enhance your natural lip shape rather than creating an obviously artificial look.",
      color: "bg-dental-coral"
    },
    {
      title: "Immediate Results",
      description: "See visible improvements right after your treatment with minimal downtime.",
      color: "bg-dental"
    },
    {
      title: "Customizable Volume",
      description: "We can add as much or as little volume as you desire to achieve your perfect look.",
      color: "bg-dental-mint"
    },
    {
      title: "Improved Lip Shape",
      description: "Correct asymmetry and define the borders of your lips for a more balanced appearance.",
      color: "bg-dental-purple"
    },
    {
      title: "Reduced Fine Lines",
      description: "Smooth out vertical lip lines and wrinkles around the mouth area.",
      color: "bg-dental-coral"
    },
    {
      title: "Temporary Results",
      description: "Enjoy the flexibility of a non-permanent solution that typically lasts 6-12 months.",
      color: "bg-dental"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Benefits of <span className="text-dental-coral">Lip Fillers</span>
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Discover how our premium lip fillers can enhance your facial aesthetics and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 reveal"
              data-delay={index * 0.1}
            >
              <div className={`w-12 h-1 ${benefit.color} mb-6 rounded-full`}></div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-dental-dark/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
