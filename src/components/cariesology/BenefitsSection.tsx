
import React from 'react';
import { ShieldCheck, Zap, HeartPulse, Clock, Award } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-dental mb-4" />,
      title: "Early Detection",
      description: "Our advanced diagnostic tools identify decay at its earliest stages, often before it's visible to the naked eye."
    },
    {
      icon: <Zap className="w-12 h-12 text-dental-coral mb-4" />,
      title: "Minimally Invasive",
      description: "Preserve more of your natural tooth structure with our conservative treatment approaches."
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-dental-mint mb-4" />,
      title: "Preventive Focus",
      description: "We emphasize prevention strategies to help you maintain optimal oral health and avoid future decay."
    },
    {
      icon: <Clock className="w-12 h-12 text-dental-purple mb-4" />,
      title: "Time-Efficient",
      description: "Early intervention means less time in the dental chair and more efficient treatment processes."
    },
    {
      icon: <Award className="w-12 h-12 text-dental-gold mb-4" />,
      title: "Long-Term Results",
      description: "Our comprehensive approach leads to better long-term outcomes and healthier teeth for life."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-dental/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-dental-mint/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Benefits of Our <span className="text-dental">Cariesology</span> Services
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Experience the advantages of our specialized approach to decay prevention and treatment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 reveal"
              data-delay={0.1 * index}
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-dental-dark/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
