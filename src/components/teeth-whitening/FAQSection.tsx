
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
      question: "How long does professional teeth whitening last?",
      answer: "The results of professional teeth whitening can last anywhere from 6 months to 2 years, depending on your lifestyle habits such as smoking, coffee consumption, and oral hygiene practices. Regular touch-ups can help maintain your bright smile for longer."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, when performed by dental professionals, teeth whitening is considered safe. We use clinically tested products and carefully assess your oral health before recommending any whitening treatment to ensure it's appropriate for you."
    },
    {
      question: "Will teeth whitening cause sensitivity?",
      answer: "Some patients may experience temporary sensitivity after whitening treatments. However, we take precautions to minimize this by using desensitizing agents before and after treatment, and adjusting the concentration of whitening gel based on your specific needs."
    },
    {
      question: "How white will my teeth get?",
      answer: "Results vary from person to person, but most patients see an improvement of 2-8 shades. The final outcome depends on your natural tooth color, the cause of discoloration, and how your teeth respond to the whitening agents."
    },
    {
      question: "What's the difference between professional whitening and over-the-counter products?",
      answer: "Professional whitening uses higher-concentration whitening agents that are not available over the counter, resulting in faster and more dramatic results. Additionally, professional treatments are customized to your specific needs and supervised by dental experts for safety and effectiveness."
    },
    {
      question: "How should I maintain my whitened teeth?",
      answer: "To maintain your results, we recommend good oral hygiene practices, limiting consumption of staining foods and beverages (coffee, red wine, tea), avoiding tobacco products, using a straw when drinking dark liquids, and scheduling periodic touch-up treatments as needed."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dental-light/10">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-dental-mint/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-dental/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-gold after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about our teeth whitening treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-lg shadow-dental-dark/5 border border-dental-light/20 overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left font-display font-medium text-dental-dark hover:text-dental">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-dark/70">
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
