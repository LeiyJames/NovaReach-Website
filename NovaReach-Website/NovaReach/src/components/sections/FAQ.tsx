import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 dark:border-gray-700 py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-gray-500 dark:text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How does NovaReach use AI to improve marketing?',
      answer: 'NovaReach uses machine learning algorithms to analyze customer data, identify patterns, and generate insights. Our AI tools can predict customer behavior, recommend optimal content strategies, automate campaign optimization, and continuously learn from results to improve future marketing efforts.',
    },
    {
      question: 'Is NovaReach suitable for small businesses?',
      answer: 'Absolutely! NovaReach is designed to be scalable and accessible for businesses of all sizes. Our Starter plan is specifically tailored for small businesses and individual creators who want to leverage AI marketing without a large investment.',
    },
    {
      question: 'Do I need technical expertise to use NovaReach?',
      answer: 'No technical expertise is required. NovaReach features an intuitive, user-friendly interface designed for marketers, not engineers. Our platform handles the complex AI operations behind the scenes, allowing you to focus on strategy and results.',
    },
    {
      question: 'Can I integrate NovaReach with my existing marketing tools?',
      answer: 'Yes, NovaReach offers seamless integration with popular marketing platforms including social media channels, email marketing services, CRM systems, and analytics tools. Our Professional and Enterprise plans include additional integration options.',
    },
    {
      question: 'How long does it take to see results with NovaReach?',
      answer: 'Many customers see initial insights and improvements within the first week of use. However, as our AI systems learn from your specific audience and campaigns over time, results typically become more impactful after 1-3 months of consistent use.',
    },
    {
      question: 'What kind of support does NovaReach provide?',
      answer: 'All plans include access to our comprehensive knowledge base and community forum. The Professional plan adds priority email support, while Enterprise customers receive dedicated account management and personalized onboarding.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about NovaReach. Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Contact our support team <ChevronDown className="ml-2 rotate-270" size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}