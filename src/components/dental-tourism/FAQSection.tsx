import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      question: "How much can I save with dental tourism in Bulgaria?",
      answer: "Patients typically save between 50-70% on dental procedures compared to Western European and North American prices. For example, a dental implant that might cost €3,000 in Western Europe could cost around €900-1,200 in Bulgaria."
    },
    {
      question: "Are your dentists qualified and experienced?",
      answer: "Yes, all our dentists are highly qualified with degrees from prestigious dental schools. Many have international training and certifications, and all stay current with the latest dental techniques and technologies."
    },
    {
      question: "What languages do your staff speak?",
      answer: "Our clinic has English-speaking dentists and staff. We also have translators available for several other languages including German, French, and Russian upon request."
    },
    {
      question: "How long will I need to stay in Bulgaria for my treatment?",
      answer: "The length of stay depends on your specific treatment plan. Simple procedures may require just 2-3 days, while more complex treatments like full mouth rehabilitation might need 7-14 days, often with breaks between appointments."
    },
    {
      question: "Do you provide accommodation and transportation services?",
      answer: "Yes, we offer comprehensive packages that include accommodation recommendations, airport transfers, and transportation to and from the clinic. We can arrange everything according to your preferences and budget."
    },
    {
      question: "What happens if I need follow-up care after returning home?",
      answer: "We provide detailed aftercare instructions before you leave. In case you need assistance, we offer remote consultations via video call. For treatments with warranties, we work with partner clinics in various countries for follow-up care if needed."
    },
    {
      question: "Is Bulgaria a safe country to visit?",
      answer: "Yes, Bulgaria is a safe country with a relatively low crime rate compared to many Western countries. It's a member of the European Union and follows EU standards for healthcare and safety."
    },
    {
      question: "What tourist attractions can I visit between dental appointments?",
      answer: "Bulgaria offers diverse attractions including beautiful Black Sea beaches, mountain resorts, historic towns, ancient Roman ruins, and renowned mineral springs. We can arrange guided tours or provide recommendations based on your interests."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-dental-light/10">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-ocean-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about our dental tourism services in Bulgaria
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-dental-light/20 rounded-lg overflow-hidden bg-white shadow-sm reveal"
                data-direction="up"
                data-delay={index * 50}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-dental-purple/5 hover:text-dental-purple transition-colors duration-300 text-left font-display font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-dental-dark/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center reveal" data-direction="up">
            <p className="text-dental-dark/80 mb-4">Still have questions about our dental tourism services?</p>
            <a 
              href="/"
              className="btn-secondary"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
