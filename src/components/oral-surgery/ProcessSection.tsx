
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Comprehensive Evaluation",
      description: "We begin with a thorough assessment of your oral health, medical history, and imaging to develop your customized treatment plan."
    },
    {
      step: "02",
      title: "Pre-Surgical Preparation",
      description: "We discuss anesthesia options, provide detailed pre-operative instructions, and answer all your questions to ensure you're fully prepared."
    },
    {
      step: "03",
      title: "Precise Surgical Procedure",
      description: "Using advanced techniques and technology, our surgeons perform your procedure with exceptional precision and care."
    },
    {
      step: "04",
      title: "Post-Operative Care",
      description: "We provide comprehensive aftercare instructions and follow-up to ensure optimal healing and results."
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            THE SURGICAL PROCESS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Our streamlined approach ensures exceptional care and outcomes.
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
