
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnosis & Examination",
      description: "Our specialists will take digital x-rays and perform tests to identify the source of your pain and determine if root canal therapy is necessary."
    },
    {
      number: "02",
      title: "Preparation & Anesthesia",
      description: "We administer local anesthesia to completely numb the area, ensuring you feel no pain during the procedure."
    },
    {
      number: "03",
      title: "Pulp Removal & Cleaning",
      description: "The infected pulp is carefully removed, and the canals are thoroughly cleaned and shaped using specialized instruments."
    },
    {
      number: "04",
      title: "Canal Filling & Sealing",
      description: "The cleaned canals are filled with biocompatible material and sealed to prevent reinfection."
    },
    {
      number: "05",
      title: "Final Restoration",
      description: "A crown or other restoration is placed to protect the tooth and restore its full function and appearance."
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dental-light/10 to-transparent"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            OUR TREATMENT PROCESS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            We follow a precise, methodical approach to ensure the best possible outcomes for our endodontic treatments.
          </p>
        </div>
        
        <div className="relative mt-20">
          {/* Process Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dental to-dental-coral hidden md:block"></div>
          
          {/* Process Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                {/* Step Number */}
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} reveal`} data-direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="relative">
                    <span className="text-6xl md:text-8xl font-display font-bold text-dental-light">{step.number}</span>
                    <div className="absolute -right-2 -top-2 md:hidden">
                      <ArrowDownCircle className="w-8 h-8 text-dental" />
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot - Only visible on desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-dental hidden md:block"></div>
                
                {/* Step Content */}
                <div className={`md:w-1/2 text-center md:text-left ${index % 2 !== 0 && 'md:text-right'} reveal`} data-direction={index % 2 === 0 ? "right" : "left"}>
                  <h3 className="text-2xl font-display font-bold mb-4 text-dental-dark">{step.title}</h3>
                  <p className="text-dental-dark/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
