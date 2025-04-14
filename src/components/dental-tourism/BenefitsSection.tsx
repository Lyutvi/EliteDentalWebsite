import React from 'react';
import { CreditCard, Award, ThumbsUp, Clock, Globe, Smile } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CreditCard className="w-12 h-12 text-dental-purple" />,
      title: 'Cost Savings',
      description: 'Save up to 70% on dental procedures compared to Western European and North American prices without compromising on quality.',
    },
    {
      icon: <Award className="w-12 h-12 text-ocean-blue" />,
      title: 'Quality Care',
      description: 'Our dentists are highly qualified with international training and use the latest dental technology and materials.',
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-bright-blue" />,
      title: 'All-Inclusive Packages',
      description: 'Comprehensive packages include dental treatment, accommodation, airport transfers, and optional tourism activities.',
    },
    {
      icon: <Clock className="w-12 h-12 text-vivid-purple" />,
      title: 'Time Efficiency',
      description: 'Complex treatments that might take months elsewhere can be completed in a single visit with our efficient scheduling.',
    },
    {
      icon: <Globe className="w-12 h-12 text-dental-gold" />,
      title: 'Cultural Experience',
      description: 'Combine your dental treatment with an enriching travel experience exploring Bulgaria\'s rich history and natural beauty.',
    },
    {
      icon: <Smile className="w-12 h-12 text-dental-coral" />,
      title: 'Personalized Care',
      description: 'Receive individualized attention with dedicated English-speaking staff to guide you through every step of your journey.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-dental-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-ocean-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Experience the perfect blend of affordable, high-quality dental care and memorable travel experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center reveal"
              data-direction="up"
              data-delay={index * 100}
            >
              <div className="mb-4 p-4 bg-white rounded-2xl shadow-lg shadow-dental-dark/5 border border-dental-light/20">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-dental-dark">{benefit.title}</h3>
              <p className="text-dental-dark/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
