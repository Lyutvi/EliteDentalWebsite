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
      question: "What types of dental prosthetics do you offer?",
      answer: "We offer a comprehensive range of dental prosthetics including fixed prosthetics (crowns, bridges, and implant-supported restorations) and removable prosthetics (complete and partial dentures). Our specialists will help determine which option is best suited for your specific needs and preferences."
    },
    {
      question: "How long do dental prosthetics last?",
      answer: "The lifespan of dental prosthetics varies depending on the type and materials used. With proper care and maintenance, crowns and bridges can last 10-15 years, while high-quality dentures typically last 5-7 years. Implant-supported prosthetics can last 15+ years or even a lifetime with excellent oral hygiene practices."
    },
    {
      question: "Will my dental prosthetic look natural?",
      answer: "Absolutely! We pride ourselves on creating prosthetics that are virtually indistinguishable from natural teeth. Our advanced digital imaging technology and high-quality materials allow us to match the color, shape, and translucency of your natural teeth, ensuring a seamless and natural appearance."
    },
    {
      question: "Is it difficult to adapt to wearing dental prosthetics?",
      answer: "There is typically an adjustment period when first receiving dental prosthetics. Most patients adapt within a few weeks as they become accustomed to speaking and eating with their new teeth. Our team provides comprehensive guidance and support throughout this transition period to ensure maximum comfort."
    },
    {
      question: "How do I care for my dental prosthetics?",
      answer: "Care instructions vary depending on the type of prosthetic. Generally, fixed prosthetics require regular brushing, flossing, and professional cleanings. Removable prosthetics should be cleaned daily with specialized solutions and brushes, and stored properly when not in use. We provide detailed care instructions tailored to your specific prosthetic."
    },
    {
      question: "Are dental prosthetics covered by insurance?",
      answer: "Many dental insurance plans provide partial coverage for prosthetic treatments, typically categorized as major restorative procedures. Coverage percentages vary by provider and plan. Our administrative team can help verify your insurance benefits and discuss financing options to make your treatment affordable."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-dental-light/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-dental/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-dental-mint/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative reveal" data-direction="up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about dental prosthetics
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="reveal" data-direction="up">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display font-medium text-lg text-dental-dark hover:text-dental">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dental-dark/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center reveal" data-direction="up">
          <p className="text-dental-dark/80 mb-4">
            Still have questions about our prosthetic solutions?
          </p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center h-11 px-6 font-medium text-white bg-dental rounded-md hover:bg-dental/90 transition-colors"
            onClick={handleContactClick}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
