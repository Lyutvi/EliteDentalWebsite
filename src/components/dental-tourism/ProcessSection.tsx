
import React from 'react';
import { PlaneTakeoff, Phone, Calendar, Stethoscope, Map, Home } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Phone className="w-10 h-10 text-dental-purple" />,
      number: '01',
      title: 'Initial Consultation',
      description: 'Contact us for a free online consultation to discuss your dental needs, treatment options, and approximate costs.',
    },
    {
      icon: <Calendar className="w-10 h-10 text-ocean-blue" />,
      number: '02',
      title: 'Treatment Plan',
      description: 'We provide a detailed treatment plan with cost estimate and schedule options for your visit to Bulgaria.',
    },
    {
      icon: <PlaneTakeoff className="w-10 h-10 text-bright-blue" />,
      number: '03',
      title: 'Travel Arrangements',
      description: 'Our coordinators help with flight bookings, accommodation options, and transportation from the airport to your hotel.',
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-vivid-purple" />,
      number: '04',
      title: 'Dental Treatment',
      description: 'Receive high-quality dental care from our experienced specialists in our modern facility in Bulgaria.',
    },
    {
      icon: <Map className="w-10 h-10 text-dental-coral" />,
      number: '05',
      title: 'Tourism Activities',
      description: 'Between appointments, explore Bulgaria with our guided tours and experience local culture, cuisine, and attractions.',
    },
    {
      icon: <Home className="w-10 h-10 text-dental-gold" />,
      number: '06',
      title: 'Follow-up Care',
      description: 'Return home with your new smile and receive remote follow-up care to ensure your complete satisfaction.',
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden bg-dental-light/10">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-dental-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-ocean-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-purple inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-vivid-purple after:rounded-full reveal" data-direction="up">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Our streamlined dental tourism process makes it easy to receive quality dental care while enjoying a memorable trip to Bulgaria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg shadow-dental-dark/5 border border-dental-light/20 hover:shadow-xl transition-all duration-300 hover:border-dental-light/40 reveal"
              data-direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <div className="mb-4">{step.icon}</div>
              <div className="text-3xl font-display font-bold text-dental-purple/30 mb-2">{step.number}</div>
              <h3 className="text-xl font-display font-bold mb-3 text-dental-dark">{step.title}</h3>
              <p className="text-dental-dark/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
