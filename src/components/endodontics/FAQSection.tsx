
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is a root canal painful?",
      answer: "With modern techniques and anesthesia, a root canal procedure feels similar to getting a filling. Most patients report being comfortable during the procedure and experiencing only mild discomfort afterward that can be managed with over-the-counter pain medications."
    },
    {
      question: "How long does a root canal procedure take?",
      answer: "Most root canals can be completed in a single appointment lasting 60-90 minutes. More complex cases might require two visits. Our use of advanced technology helps ensure efficiency without compromising quality."
    },
    {
      question: "How long will a treated tooth last?",
      answer: "With proper care, a tooth that has had a root canal can last a lifetime. The success rate of root canal treatment is very high, and many teeth fixed with root canals can last as long as other natural teeth."
    },
    {
      question: "What happens if I don't get a root canal?",
      answer: "If you need a root canal but don't get one, the infection will continue to spread, potentially leading to abscess formation, bone loss, and eventually tooth loss. The infection can also spread to other parts of your body, posing serious health risks."
    },
    {
      question: "Do I need a crown after a root canal?",
      answer: "In most cases, yes. A crown helps protect the treated tooth from fracturing and restores full functionality. Back teeth (molars and premolars) almost always need crowns, while front teeth might not if they're still structurally sound."
    },
    {
      question: "How do I care for my tooth after a root canal?",
      answer: "After your final restoration is placed, you should care for your treated tooth just like your natural teeth: brush twice daily, floss daily, use antimicrobial mouthwash, and visit your dentist regularly for check-ups and cleanings."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dental-light/10 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute top-40 left-20 w-60 h-60 bg-dental-coral/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-dental/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Find answers to common questions about endodontic treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" data-direction="up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-dental-light/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-display font-semibold text-dental-dark hover:text-dental transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-dental-dark/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
