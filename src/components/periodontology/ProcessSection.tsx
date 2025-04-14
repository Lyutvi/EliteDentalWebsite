
import React from 'react';
import { ClipboardCheck, Microscope, HeartPulse, CalendarClock } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-dental" />,
      title: "Comprehensive Assessment",
      description: "Thorough examination of your gums, measuring pocket depths and checking for inflammation and bleeding."
    },
    {
      icon: <Microscope className="w-12 h-12 text-dental-coral" />,
      title: "Diagnosis & Planning",
      description: "Detailed diagnosis of your periodontal condition and creation of a personalized treatment plan."
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-dental-mint" />,
      title: "Specialized Treatment",
      description: "Advanced periodontal therapies including scaling, root planing, and laser treatments when needed."
    },
    {
      icon: <CalendarClock className="w-12 h-12 text-dental-tertiary" />,
      title: "Maintenance & Follow-up",
      description: "Regular check-ups and maintenance to ensure long-term health of your gums and prevent recurrence."
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-dental/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-dental-coral/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            OUR PERIODONTAL TREATMENT PROCESS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            A systematic approach to diagnosing and treating periodontal conditions for optimal gum health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-6 reveal"
              data-direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-dental-light to-white flex items-center justify-center shadow-sm z-10 relative">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-20 bottom-0 left-1/2 border-l-2 border-dashed border-dental/20 -translate-x-1/2"></div>
                )}
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-dental/10 text-dental rounded-full text-sm font-medium mb-3">
                  Step {index + 1}
                </span>
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
