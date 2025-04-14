
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Assessment",
      description: "Our dentist will examine your teeth, discuss your goals, and determine if dental bonding is right for you."
    },
    {
      number: "02",
      title: "Treatment Planning",
      description: "We'll select the ideal resin shade to match your natural teeth and plan the bonding procedure for optimal results."
    },
    {
      number: "03",
      title: "Tooth Preparation",
      description: "The tooth surface is gently roughened and a conditioning liquid is applied to help the bonding material adhere."
    },
    {
      number: "04",
      title: "Bonding Application",
      description: "The tooth-colored resin is applied, molded to the desired shape, and hardened with a special light."
    },
    {
      number: "05",
      title: "Finishing Touches",
      description: "The bonded material is trimmed, shaped, and polished to match your natural teeth and ensure a comfortable bite."
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-20 bg-dental-light/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative reveal" data-direction="up">
            The Bonding Process
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Our detailed approach ensures beautiful, natural-looking results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative reveal" 
              data-direction="up" 
              data-delay={0.1 * index}
            >
              <span className="text-5xl font-bold text-dental-light absolute -top-6 right-4">{step.number}</span>
              <h3 className="text-xl font-display font-bold mb-4 text-dental-dark">{step.title}</h3>
              <p className="text-dental-dark/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md reveal" data-direction="up">
          <h3 className="text-2xl font-display font-bold mb-6 text-dental-dark">Expected Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Natural-looking repair of chipped, cracked, or discolored teeth</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Closing of small gaps between teeth</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Improved appearance of misshapen teeth</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Protection of exposed tooth roots due to receding gums</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Immediate results in just one appointment</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-coral mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-dental-dark/80">Enhanced smile appearance and confidence</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
