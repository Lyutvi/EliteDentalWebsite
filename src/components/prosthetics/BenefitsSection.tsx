
import React from 'react';
import { Clock, Heart, Shield, Smile, Star, Utensils } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Smile className="h-12 w-12 text-dental" />,
      title: "Natural Aesthetics",
      description: "Our prosthetics are designed to look indistinguishable from natural teeth, restoring your confident smile."
    },
    {
      icon: <Utensils className="h-12 w-12 text-dental-coral" />,
      title: "Improved Function",
      description: "Enjoy eating, speaking, and smiling naturally again with properly fitted and functional prosthetic teeth."
    },
    {
      icon: <Heart className="h-12 w-12 text-dental-mint" />,
      title: "Better Oral Health",
      description: "Prosthetics help prevent shifting of remaining teeth and maintain facial structure and bone integrity."
    },
    {
      icon: <Clock className="h-12 w-12 text-dental-purple" />,
      title: "Long-lasting Results",
      description: "Our high-quality materials and expert craftsmanship ensure your prosthetics will provide years of service."
    },
    {
      icon: <Shield className="h-12 w-12 text-dental-gold" />,
      title: "Preventive Protection",
      description: "Dental prosthetics help protect your remaining natural teeth from excessive wear and stress."
    },
    {
      icon: <Star className="h-12 w-12 text-dental-tertiary" />,
      title: "Customized Solutions",
      description: "Every prosthetic is custom-made to your specific needs, ensuring perfect fit and maximum comfort."
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
            Benefits of Dental Prosthetics
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Discover why patients choose our prosthetic solutions for smile restoration
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
            Ready to restore your smile? <a href="#contact" className="text-dental font-semibold hover:underline">Schedule a prosthetic consultation today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
