
import React from 'react';
import { Check, Clock, Smile, Sparkles, Zap, Feather } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-dental" />,
      title: "Single Visit Procedure",
      description: "Complete your dental bonding in just one appointment, saving you time without compromising on quality."
    },
    {
      icon: <Feather className="h-12 w-12 text-dental-coral" />,
      title: "Minimally Invasive",
      description: "Preserve more of your natural tooth structure with this conservative cosmetic treatment option."
    },
    {
      icon: <Smile className="h-12 w-12 text-dental-mint" />,
      title: "Improved Appearance",
      description: "Enhance your smile by repairing chipped teeth, filling gaps, and matching your natural tooth color."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-dental-purple" />,
      title: "Natural-Looking Results",
      description: "Our expert matching of resin to your tooth color ensures seamless, undetectable repairs."
    },
    {
      icon: <Zap className="h-12 w-12 text-dental-gold" />,
      title: "Instant Confidence",
      description: "Walk out with an immediately improved smile that boosts your self-esteem and confidence."
    },
    {
      icon: <Check className="h-12 w-12 text-dental-tertiary" />,
      title: "Versatile Solution",
      description: "Address multiple cosmetic concerns with one versatile treatment that can be customized to your needs."
    }
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative reveal" data-direction="up">
            Benefits of Dental Bonding
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Discover why patients choose dental bonding for their smile transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card group reveal" 
              data-direction="up" 
              data-delay={0.1 * index}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-dental-dark group-hover:text-dental transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-dental-dark/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-dental-light/30 rounded-full text-dental-dark/80 font-medium text-lg reveal" data-direction="up">
            Want to learn if dental bonding is right for you? <a href="#contact" className="text-dental font-semibold hover:underline">Schedule a consultation today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
