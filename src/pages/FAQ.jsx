import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-(--card-border) rounded-[2px] bg-(--bg-secondary) overflow-hidden transition-all duration-300">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-(--text-primary) text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-(--accent-cyan)" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-(--text-secondary) leading-relaxed border-t border-gray-100 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you will receive a tracking link via email and SMS. You can also track it in 'My Orders' section by logging into your account."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a hassle-free 30-day return policy for most items. If the product is damaged or doesn't meet your expectations, simply initiate a return from your dashboard."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship to over 50 countries worldwide. Shipping costs and delivery times vary based on location and selected shipping method."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard 256-bit SSL encryption to protect your data. We do not store your credit card details on our servers."
    },
    {
      question: "Can I cancel my order after placing it?",
      answer: "Yes, you can cancel your order within 1 hour of placing it. After that, it enters our processing system, but you can still return it after delivery."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-(--bg-primary) min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 text-(--accent-cyan)">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-black text-(--text-primary) mb-4">Frequently Asked Questions</h1>
          <p className="text-(--text-secondary) text-lg">
            Have questions? We're here to help.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-(--nav-bg) rounded-xl p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-blue-100 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="px-8 py-3 bg-white text-(--accent-cyan) font-bold rounded-[2px] hover:bg-gray-100 transition-colors shadow-sm">
            Get in Touch
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;