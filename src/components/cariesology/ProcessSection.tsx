
import React from 'react';
import { Microscope, Search, ClipboardList, Stethoscope, Smile } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Comprehensive Assessment",
      description: "Our specialists conduct a thorough examination of your oral health, including detailed imaging to identify any signs of decay.",
      icon: <Search className="text-dental w-12 h-12" />
    },
    {
      title: "Risk Analysis",
      description: "We evaluate your individual risk factors for tooth decay, including diet, oral hygiene habits, and genetic predispositions.",
      icon: <ClipboardList className="text-dental w-12 h-12" />
    },
    {
      title: "Advanced Diagnostics",
      description: "Using cutting-edge technology to detect even the earliest signs of decay that might be invisible to the naked eye.",
      icon: <Microscope className="text-dental w-12 h-12" />
    },
    {
      title: "Personalized Treatment",
      description: "Based on your assessment, we create a tailored treatment plan that may include remineralization, sealants, or minimally invasive restorations.",
      icon: <Stethoscope className="text-dental w-12 h-12" />
    },
    {
      title: "Prevention Program",
      description: "We establish a comprehensive prevention program to maintain your oral health and prevent future decay.",
      icon: <Smile className="text-dental w-12 h-12" />
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Our <span className="text-dental">Cariesology</span> Approach
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Our comprehensive approach to caries management combines prevention, early detection, and minimally invasive treatment strategies.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-dental/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
                } reveal`}
                data-delay={index * 0.1}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative">
                    {step.icon}
                    <div className="absolute inset-0 bg-dental/10 rounded-full transform scale-[1.6] -z-10"></div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-dental-dark/80">{step.description}</p>
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
