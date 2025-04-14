
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
      question: "What exactly is cariesology?",
      answer: "Cariesology is the specialized study and treatment of dental caries (tooth decay). It encompasses prevention, early detection, risk assessment, and minimally invasive treatment approaches to manage and prevent tooth decay."
    },
    {
      question: "How is your approach to caries treatment different?",
      answer: "Our approach focuses on prevention and early intervention, using advanced diagnostic tools to detect decay at its earliest stages. We emphasize minimally invasive treatments that preserve as much healthy tooth structure as possible, rather than the traditional 'drill and fill' approach."
    },
    {
      question: "Does early caries detection hurt?",
      answer: "No, our early detection methods are completely painless. We use non-invasive tools such as specialized imaging and laser detection systems that can identify decay before it becomes visible or symptomatic."
    },
    {
      question: "Can tooth decay really be reversed?",
      answer: "Yes, in its earliest stages (demineralization), tooth decay can be reversed through remineralization treatments, proper oral hygiene, dietary changes, and professional interventions like fluoride application or dental sealants. This is why early detection is so crucial."
    },
    {
      question: "What preventive measures do you recommend?",
      answer: "Our preventive recommendations are personalized based on your individual risk assessment, but typically include proper brushing and flossing techniques, specific oral care products, dietary recommendations, regular professional cleanings, and preventive treatments like sealants or fluoride applications."
    },
    {
      question: "How often should I have a caries risk assessment?",
      answer: "We recommend a comprehensive caries risk assessment annually for most patients. However, for patients with higher risk factors, more frequent assessments every 3-6 months may be beneficial to monitor and adjust prevention strategies."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Frequently Asked <span className="text-dental">Questions</span>
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Find answers to common questions about our cariesology services and treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" data-delay="0.2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-dental-dark hover:text-dental">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dental-dark/80">
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
