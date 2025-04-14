
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
      question: "What types of oral surgery do you perform?",
      answer: "We provide a comprehensive range of oral surgical procedures including wisdom teeth removal, dental implants, bone grafting, jaw surgery, biopsies, and treatment for facial trauma and infections."
    },
    {
      question: "How do I prepare for oral surgery?",
      answer: "Preparation depends on your specific procedure. Generally, you should follow any fasting instructions if you're receiving sedation, arrange for transportation home, wear comfortable clothing, and follow all pre-operative instructions provided by our team."
    },
    {
      question: "How long is the recovery process?",
      answer: "Recovery time varies depending on the procedure and individual healing factors. Simple extractions may only require a few days, while more complex surgeries might need 1-2 weeks for initial recovery. We'll provide specific timeline expectations for your procedure."
    },
    {
      question: "Will my procedure be painful?",
      answer: "Your comfort is our priority. We use modern anesthesia techniques to ensure you don't feel pain during the procedure. Post-operative discomfort is managed with appropriate pain medication and detailed aftercare instructions."
    },
    {
      question: "What are the risks associated with oral surgery?",
      answer: "While oral surgery is generally safe, all surgical procedures carry some risks, which might include infection, bleeding, nerve damage, or reactions to anesthesia. We thoroughly discuss all potential risks and take extensive precautions to minimize them."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dental-light/10 relative">
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-dental-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient-primary inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-1/4 after:right-1/4 after:h-1 after:bg-dental-tertiary after:rounded-full reveal" data-direction="up">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-dental-dark/80 max-w-3xl mx-auto reveal" data-direction="up">
            Get answers to common questions about our oral surgery procedures.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" data-direction="up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
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
