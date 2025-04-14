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
      question: "How long does dental bonding last?",
      answer: "Dental bonding typically lasts between 3 to 10 years, depending on the location of the bonding, your oral habits, and how well you care for your teeth. Regular dental check-ups and good oral hygiene can help extend the life of dental bonding."
    },
    {
      question: "Is the dental bonding procedure painful?",
      answer: "No, dental bonding is typically a painless procedure. In most cases, anesthesia isn't even necessary unless the bonding is being used to fill a decayed tooth, the tooth needs to be drilled to change its shape, or the chip is near the nerve."
    },
    {
      question: "How much does dental bonding cost?",
      answer: "The cost of dental bonding varies depending on the extent of the procedure, the number of teeth being treated, and your location. Generally, it is one of the most affordable cosmetic dental procedures available. We provide detailed cost estimates during your consultation."
    },
    {
      question: "How long does the bonding procedure take?",
      answer: "Dental bonding usually takes between 30 to 60 minutes per tooth. The entire process can often be completed in a single office visit, making it a convenient option for busy patients."
    },
    {
      question: "How do I care for bonded teeth?",
      answer: "Care for bonded teeth as you would your natural teeth with regular brushing and flossing. Avoid biting hard objects like ice, pens, or fingernails, and limit consumption of staining substances like coffee, tea, and tobacco. Regular dental check-ups are essential for maintaining your bonded teeth."
    },
    {
      question: "Can dental bonding fix all types of dental problems?",
      answer: "Dental bonding is versatile but not suitable for all dental issues. It works well for minor cosmetic improvements, small chips, gaps, and discoloration. For more extensive damage or for teeth that experience heavy biting forces, other treatments like veneers or crowns might be more appropriate."
    },
    {
      question: "Is dental bonding reversible?",
      answer: "Yes, dental bonding is generally reversible since it doesn't require removing much, if any, of the original tooth enamel. If you decide to try a different cosmetic treatment in the future, the bonding material can be removed without permanent damage to your natural tooth."
    }
  ];

  return (
    <section className="py-20 bg-dental-light/10 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-dental/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative reveal" data-direction="up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Everything you need to know about dental bonding
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="reveal" data-direction="up" data-delay={0.05 * index}>
                <AccordionTrigger className="text-left font-display font-medium text-dental-dark hover:text-dental transition-colors duration-300">
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
          <p className="text-dental-dark/80 mb-4">Still have questions about dental bonding?</p>
          <a 
            href="/"
            className="btn-primary inline-flex items-center justify-center"
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
