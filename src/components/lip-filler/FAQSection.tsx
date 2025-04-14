
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
      question: "How long do lip fillers last?",
      answer: "Lip fillers typically last between 6-12 months, depending on the type of filler used and your individual metabolism. Over time, the body naturally breaks down the filler, requiring periodic touch-ups to maintain your desired look."
    },
    {
      question: "Is the lip filler procedure painful?",
      answer: "We apply a topical numbing cream before treatment to minimize discomfort. Most patients report only mild pressure or a slight pinch during injections. Many lip fillers also contain lidocaine, a local anesthetic, to further enhance comfort during the procedure."
    },
    {
      question: "How soon will I see results after lip fillers?",
      answer: "You'll see immediate volume enhancement after your treatment, though there may be some initial swelling. The final results become visible once any swelling subsides, typically within 1-2 weeks after the procedure."
    },
    {
      question: "What is the recovery time for lip fillers?",
      answer: "Most patients can return to their normal activities immediately after treatment. You may experience some swelling, bruising, or tenderness for 2-3 days. We recommend avoiding intense physical activity for 24-48 hours after the procedure."
    },
    {
      question: "Are lip fillers reversible if I don't like the results?",
      answer: "Yes, hyaluronic acid-based fillers (which we use) can be dissolved with an enzyme called hyaluronidase if you're unhappy with the results. This is one of the reasons why these fillers are so popular—they offer the flexibility of reversal."
    },
    {
      question: "Who is not a good candidate for lip fillers?",
      answer: "Individuals who are pregnant, breastfeeding, have certain autoimmune disorders, active cold sores, or allergies to filler ingredients should avoid lip augmentation. During your consultation, we'll review your medical history to ensure lip fillers are safe for you."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            Frequently Asked <span className="text-dental-coral">Questions</span>
          </h2>
          <p className="text-lg text-dental-dark/80 reveal" data-delay="0.1">
            Get answers to common questions about our lip filler treatments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal" data-delay="0.2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
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
