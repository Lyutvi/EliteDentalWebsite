
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We begin with a comprehensive examination using advanced 3D imaging to assess your oral health and create a personalized treatment plan."
    },
    {
      step: "02",
      title: "Implant Placement",
      description: "Using state-of-the-art technology, we carefully place the titanium implant into the jawbone, which will serve as the root for your new tooth."
    },
    {
      step: "03",
      title: "Healing & Integration",
      description: "Over a period of 3-6 months, the implant fuses with your jawbone in a process called osseointegration, creating a stable foundation."
    },
    {
      step: "04",
      title: "Final Restoration",
      description: "Once healing is complete, we attach a custom-made crown that matches your natural teeth in color, shape, and size."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            THE IMPLANT PROCESS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Our streamlined process ensures minimal discomfort and maximum results.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start gap-6 reveal"
              data-direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-dental-light/50 flex items-center justify-center text-2xl font-bold text-dental">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2 text-dental-dark">
                  {step.title}
                </h3>
                <p className="text-dental-dark/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
