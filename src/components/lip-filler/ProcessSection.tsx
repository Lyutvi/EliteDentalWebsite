
import React from 'react';
import { Circle, CircleDot, Droplet, Syringe, Smile } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Consultation",
      description: "Meet with our specialist to discuss your goals and expectations for your lip enhancement.",
      icon: <Circle className="text-dental-coral w-12 h-12" />
    },
    {
      title: "Treatment Planning",
      description: "We'll create a personalized treatment plan tailored to your facial features and desired outcome.",
      icon: <CircleDot className="text-dental-coral w-12 h-12" />
    },
    {
      title: "Preparation",
      description: "A topical numbing cream is applied to ensure your comfort during the procedure.",
      icon: <Droplet className="text-dental-coral w-12 h-12" />
    },
    {
      title: "Injection",
      description: "Our specialist will carefully inject the dermal filler to achieve natural-looking volume and definition.",
      icon: <Syringe className="text-dental-coral w-12 h-12" />
    },
    {
      title: "Results",
      description: "Enjoy immediate results that will continue to settle beautifully over the next few days.",
      icon: <Smile className="text-dental-coral w-12 h-12" />
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Our <span className="text-dental-coral">Lip Filler</span> Process
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Our premium lip filler treatments follow a meticulous process to ensure safety, comfort, and beautiful, natural-looking results.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-dental-coral/20 -translate-x-1/2 hidden md:block"></div>
          
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
                    <div className="absolute inset-0 bg-dental-coral/10 rounded-full transform scale-[1.6] -z-10"></div>
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
