import React from 'react';
import { ClipboardCheck, FilePlus2, Stethoscope, CalendarClock } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-10 h-10 text-white" />,
      title: "Initial Consultation",
      description: "A thorough examination of your dental structure to assess your needs and discuss treatment options.",
      color: "bg-dental"
    },
    {
      icon: <FilePlus2 className="w-10 h-10 text-white" />,
      title: "Custom Treatment Plan",
      description: "Creating a personalized orthodontic plan tailored to your specific dental alignment needs.",
      color: "bg-dental-coral"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-white" />,
      title: "Active Treatment",
      description: "Regular adjustment appointments to ensure your treatment progresses as planned.",
      color: "bg-dental-mint"
    },
    {
      icon: <CalendarClock className="w-10 h-10 text-white" />,
      title: "Retention Phase",
      description: "Maintenance of your new smile with custom retainers after active treatment is complete.",
      color: "bg-dental-purple"
    }
  ];

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            OUR ORTHODONTIC PROCESS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            A streamlined, comfortable journey to your perfect smile with our expert orthodontic team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
          <div className="order-2 lg:order-1 reveal" data-direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-dental-mint to-dental rounded-2xl transform -rotate-3 scale-105 opacity-20 blur-sm"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-8 border-white">
                <div className="bg-white p-2 rounded-2xl shadow-blue-glow overflow-hidden">
                  <img 
                    src="/images/IMG_3967.jpeg" 
                    alt="Orthodontic Treatment Process" 
                    className="w-full h-[500px] object-cover rounded-xl"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg flex gap-3 items-center border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dental/10 text-dental">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <div>
                  <div className="text-dental-dark font-semibold">Expert Care</div>
                  <div className="text-dental-dark/60 text-sm">Experienced Specialists</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 reveal" data-direction="right">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${step.color} flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-dental-dark">
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
      </div>
    </section>
  );
};

export default ProcessSection;
