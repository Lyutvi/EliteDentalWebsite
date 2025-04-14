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
      question: "How long does orthodontic treatment typically take?",
      answer: "Treatment duration varies based on individual needs, but typically ranges from 12 to 36 months. Factors affecting treatment time include the severity of alignment issues, patient age, and treatment compliance."
    },
    {
      question: "What types of braces and orthodontic options do you offer?",
      answer: "We offer a comprehensive range of options including traditional metal braces, ceramic (clear) braces, self-ligating braces, and clear aligners like Invisalign. During your consultation, we'll recommend the best option for your specific case."
    },
    {
      question: "Are orthodontic treatments painful?",
      answer: "You may experience mild discomfort or pressure after adjustments, but modern orthodontic techniques are designed to minimize pain. Any discomfort typically subsides within a few days and can be managed with over-the-counter pain relievers."
    },
    {
      question: "How often will I need to visit for adjustments?",
      answer: "Most patients need adjustments every 4-8 weeks, depending on the treatment type and individual progression. We'll create a schedule tailored to your specific treatment plan."
    },
    {
      question: "What happens after my braces are removed?",
      answer: "After active treatment, you'll enter the retention phase. You'll be fitted with retainers to maintain your new smile. Initially, you'll wear them full-time, then gradually transition to nighttime wear only. Regular check-ups will monitor your results."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dental-light/10 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Find answers to common questions about our orthodontic treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" data-direction="up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg font-medium text-dental-dark hover:text-dental transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dental-dark/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-dental-dark/80 mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="/"
              className="btn-primary inline-flex items-center justify-center"
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
