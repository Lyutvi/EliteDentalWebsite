
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We conduct a thorough examination of your teeth and discuss your whitening goals to create a personalized treatment plan.',
    },
    {
      number: '02',
      title: 'Teeth Preparation',
      description: 'Your teeth are professionally cleaned to remove any surface stains and plaque before the whitening procedure.',
    },
    {
      number: '03',
      title: 'Whitening Application',
      description: 'A professional-grade whitening gel is carefully applied to your teeth using custom-fitted trays for maximum effectiveness.',
    },
    {
      number: '04',
      title: 'Light Activation',
      description: 'In some treatments, a special light is used to accelerate the whitening process by activating the ingredients in the gel.',
    },
    {
      number: '05',
      title: 'Final Results',
      description: "After the procedure, you'll see immediate results with teeth that are noticeably whiter and brighter.",
    },
    {
      number: '06',
      title: 'Aftercare Instructions',
      description: 'We provide guidance on maintaining your new smile, including dietary recommendations and home care products.',
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden bg-dental-light/10">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-dental/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-dental-coral/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-mint after:rounded-full reveal" data-direction="up">
            THE WHITENING PROCESS
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Our teeth whitening process is designed to be safe, effective, and comfortable, providing outstanding results with minimal sensitivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg shadow-dental-dark/5 border border-dental-light/20 hover:shadow-xl transition-all duration-300 hover:border-dental-light/40 reveal"
              data-direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <div className="text-4xl font-display font-bold text-dental-mint/30 mb-4">{step.number}</div>
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
