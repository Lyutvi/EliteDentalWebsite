
import React from 'react';
import { Smile, Sparkles, Clock, ThumbsUp, ShieldCheck, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Smile className="w-10 h-10 text-dental" />,
      title: 'Enhanced Confidence',
      description: 'A brighter smile can significantly boost your self-esteem and make you more confident in social and professional settings.'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-dental-coral" />,
      title: 'Dramatic Results',
      description: 'Our professional whitening treatments can lighten your teeth by several shades in just one session, providing immediate results.'
    },
    {
      icon: <Clock className="w-10 h-10 text-dental-mint" />,
      title: 'Quick Treatment',
      description: 'Unlike home remedies that take weeks to show results, our in-office whitening procedures typically take only 60-90 minutes.'
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-dental-purple" />,
      title: 'Customized Solutions',
      description: 'We tailor our whitening treatments to your unique needs and sensitivity level for optimal comfort and results.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-dental-gold" />,
      title: 'Safe & Professional',
      description: 'Our treatments are performed by trained dental professionals using high-quality, clinically proven whitening agents.'
    },
    {
      icon: <Zap className="w-10 h-10 text-dental-tertiary" />,
      title: 'Youthful Appearance',
      description: 'A bright, white smile can take years off your appearance, helping you look and feel younger and more vibrant.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-coral after:rounded-full reveal" data-direction="up">
            BENEFITS OF TEETH WHITENING
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Experience the many advantages of our professional teeth whitening services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg shadow-dental-dark/5 border border-dental-light/20 hover:shadow-xl transition-all duration-300 hover:border-dental-light/40 reveal"
              data-direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-dental-dark">{benefit.title}</h3>
              <p className="text-dental-dark/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
