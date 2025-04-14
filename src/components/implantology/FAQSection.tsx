import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQSection = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const yOffset = -100; // Offset to account for fixed header
        const y = contactForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const faqs = [
    {
      question: "Are dental implants painful?",
      answer: "Most patients report that the procedure is less painful than they expected. We use modern anesthesia and sedation options to ensure your comfort throughout the process. Post-procedure discomfort is typically mild and can be managed with over-the-counter pain medications."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear and tear, but the implant itself can remain integrated with your jawbone indefinitely."
    },
    {
      question: "Am I a good candidate for dental implants?",
      answer: "Most adults with good general health are candidates for dental implants. Important factors include having adequate bone density to support the implant and healthy gums. During your consultation, we'll evaluate your specific situation and discuss all available options."
    },
    {
      question: "How do I care for my dental implants?",
      answer: "Dental implants require the same care as natural teeth: regular brushing, flossing, and dental check-ups. While they cannot develop cavities, the surrounding gum tissue can become infected without proper oral hygiene, so maintaining good oral health practices is essential."
    }
  ];

  return (
    <section className="py-20 bg-dental-light/10 relative">
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-dental-mint/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about dental implants
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 reveal"
              data-direction="up"
              data-delay={index * 100}
            >
              <h3 className="text-lg font-display font-bold mb-3 text-dental-dark">
                {faq.question}
              </h3>
              <p className="text-dental-dark/70">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal" data-direction="up">
          <a 
            href="/"
            className="inline-flex items-center btn-primary"
            onClick={handleContactClick}
          >
            Schedule Your Consultation <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
