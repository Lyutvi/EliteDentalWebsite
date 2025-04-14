
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
      question: "What is periodontal disease?",
      answer: "Periodontal disease, commonly known as gum disease, is an infection of the tissues that hold your teeth in place. It's typically caused by poor brushing and flossing habits that allow plaque—a sticky film of bacteria—to build up on the teeth and harden."
    },
    {
      question: "What are the signs of gum disease?",
      answer: "Common signs include red, swollen, or tender gums, bleeding while brushing or flossing, receding gums, persistent bad breath, loose teeth, and changes in how your teeth fit together when you bite."
    },
    {
      question: "Is periodontal treatment painful?",
      answer: "Most periodontal treatments are performed with local anesthesia, ensuring your comfort. For more extensive procedures, sedation options are available. Post-treatment discomfort is usually minimal and can be managed with over-the-counter pain relievers."
    },
    {
      question: "How long does periodontal treatment take?",
      answer: "The duration depends on the severity of your condition. Initial treatments might require 1-2 appointments, while more advanced cases may need several visits over weeks or months. Maintenance visits are typically scheduled every 3-4 months."
    },
    {
      question: "Can gum disease be reversed?",
      answer: "Early gum disease (gingivitis) can be reversed with professional treatment and good oral hygiene. Advanced periodontal disease cannot be completely reversed, but it can be effectively managed to prevent progression and save affected teeth."
    },
    {
      question: "Is periodontal disease linked to other health conditions?",
      answer: "Yes, research has shown connections between periodontal disease and several systemic conditions including heart disease, diabetes, respiratory diseases, and certain pregnancy complications. Maintaining healthy gums contributes to your overall well-being."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dental-dark relative text-white">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-dental/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-dental-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about periodontal health and treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" data-direction="up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left hover:text-dental-tertiary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80">
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
