import React from 'react';
import { Check, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <Clock className="text-dental w-10 h-10" />,
      value: '10+',
      title: 'Years of Experience',
      description: 'Over a decade of exceptional dental care'
    },
    { 
      icon: <Users className="text-dental w-10 h-10" />,
      value: '5000+',
      title: 'Smiling Patients',
      description: 'Satisfied patients from around the world'
    },
    { 
      icon: <Award className="text-dental w-10 h-10" />,
      value: '20+',
      title: 'Master Certifications',
      description: 'Highly qualified dental professionals'
    },
    { 
      icon: <Users className="text-dental w-10 h-10" />,
      value: '12+',
      title: 'Happy Staff',
      description: 'Dedicated team of dental experts'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dental-light/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-dental-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            ABOUT US
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Dedicated to providing exceptional dental care with a gentle touch
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative reveal" data-direction="left">
            <img 
              src="/images/x-ray.jpeg" 
              alt="Elite Dental Solutions x-ray technology" 
              className="rounded-3xl shadow-card object-cover w-full h-[400px] md:h-[500px]"
            />
            
            {/* Floating Badges */}
            <div className="absolute -right-5 top-10 glass-card p-3 shadow-blue-glow animate-float">
              <span className="text-dental font-semibold">Advanced Technology</span>
            </div>
            
            <div className="absolute -left-5 bottom-10 glass-card p-3 shadow-blue-glow animate-float animation-delay-200">
              <span className="text-dental font-semibold">Expert Team</span>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 reveal" data-direction="right">
            <p className="text-lg text-dental-dark/80">
              Welcome to Elite Dental Solutions, a premier dental clinic based in Sofia, Bulgaria. 
              Our team of highly experienced and skilled dentists and dental technicians, with 
              over 10 years of expertise, is dedicated to delivering exceptional dental care to 
              both local and international patients.
            </p>
            
            <p className="text-lg text-dental-dark/80">
              We take pride in utilizing the latest advancements in dental technology to provide 
              the best possible care for our patients. With over 50 certifications and extensive 
              experience working with international patients, we offer a comprehensive range of 
              dental services to meet your needs and help you achieve a beautiful smile.
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-start">
                <div className="rounded-full bg-dental/10 p-1 mr-3 mt-1">
                  <Check size={16} className="text-dental" />
                </div>
                <span className="text-dental-dark">State-of-the-art dental equipment and technology</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-dental/10 p-1 mr-3 mt-1">
                  <Check size={16} className="text-dental" />
                </div>
                <span className="text-dental-dark">Multilingual staff for international patients</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-dental/10 p-1 mr-3 mt-1">
                  <Check size={16} className="text-dental" />
                </div>
                <span className="text-dental-dark">Personalized treatment plans for every patient</span>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-dental/10 p-1 mr-3 mt-1">
                  <Check size={16} className="text-dental" />
                </div>
                <span className="text-dental-dark">Comprehensive dental tourism services</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn-shine mt-6 inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card border border-dental-light/20 text-center transition-transform duration-300 hover:shadow-blue-glow hover:-translate-y-2 reveal"
              data-direction="up"
            >
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-dental-light/20 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-dental-dark mb-1">{stat.value}</h3>
              <p className="text-lg font-medium text-dental-dark mb-2">{stat.title}</p>
              <p className="text-sm text-dental-dark/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
