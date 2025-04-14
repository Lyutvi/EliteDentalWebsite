
import React from 'react';
import { CalendarDays, ClipboardCheck, Crown, Search, Shapes, Stethoscope } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Stethoscope className="h-10 w-10 text-dental" />,
      title: "Initial Consultation",
      description: "Our specialist will evaluate your dental condition, discuss your needs, and explain available prosthetic options."
    },
    {
      icon: <Search className="h-10 w-10 text-dental-coral" />,
      title: "Comprehensive Examination",
      description: "We'll conduct a thorough assessment including digital scans and X-rays to create a precise treatment plan."
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-dental-mint" />,
      title: "Treatment Planning",
      description: "Based on your examination, we'll develop a customized prosthetic solution tailored to your specific needs."
    },
    {
      icon: <Shapes className="h-10 w-10 text-dental-purple" />,
      title: "Impressions & Design",
      description: "We take detailed impressions to ensure your prosthetics will fit perfectly and match your natural teeth."
    },
    {
      icon: <Crown className="h-10 w-10 text-dental-gold" />,
      title: "Fabrication & Fitting",
      description: "Your custom prosthetics are crafted in our laboratory and then precisely fitted for comfort and function."
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-dental-tertiary" />,
      title: "Follow-up & Maintenance",
      description: "We provide ongoing care instructions and schedule regular check-ups to ensure long-lasting results."
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative reveal" data-direction="up">
            Our Prosthetic Treatment Process
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            A step-by-step approach to restore your smile with precision and care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative reveal" 
              data-direction="up" 
              data-delay={0.1 * index}
            >
              {/* Step Number */}
              <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-dental-light flex items-center justify-center font-bold text-dental">
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="border border-dental/10 rounded-xl p-6 bg-white shadow-sm hover:shadow-md hover:border-dental/30 transition-all duration-300">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-dental-dark">
                  {step.title}
                </h3>
                <p className="text-dental-dark/70">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line (except for last item in row) */}
              {(index + 1) % 3 !== 0 && index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-dental-light/50">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-dental"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
