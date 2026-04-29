import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn jewelry in its original condition and packaging. Custom or engraved items are considered final sale and cannot be returned."
    },
    {
      question: "Do your diamonds come with certification?",
      answer: "Yes, all diamonds over 0.5 carats are accompanied by a GIA (Gemological Institute of America) certificate, verifying their cut, color, clarity, and carat weight."
    },
    {
      question: "How should I care for my Lumière jewelry?",
      answer: "We recommend cleaning your jewelry regularly with a soft bristle brush, mild soap, and warm water. Avoid exposing your pieces to harsh chemicals, perfumes, or extreme temperatures. We offer complimentary professional cleaning for all Lumière pieces at our boutiques."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. All shipments are fully insured, securely packaged, and require a signature upon delivery."
    },
    {
      question: "Can I customize a piece of jewelry?",
      answer: "Absolutely. Our bespoke design service allows you to work directly with our master jewelers to create a one-of-a-kind piece. Please contact our client care team to schedule a consultation."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F8F5F0]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 border border-[#0F0F0F]/10">
              <h3 className="font-serif text-xl mb-4 text-[#0F0F0F]">{faq.question}</h3>
              <p className="text-[#0F0F0F]/70 font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center border-t border-[#0F0F0F]/10 pt-16">
          <p className="text-[#0F0F0F]/70 mb-6">Still have questions?</p>
          <a href="/contact" className="inline-block border border-[#0F0F0F] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#0F0F0F] hover:text-[#F8F5F0] transition-colors">
            Contact Client Care
          </a>
        </div>
      </div>
    </div>
  );
}
