import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Circle, CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and creators just getting started.',
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        'AI Content Suggestions',
        'Basic Analytics',
        'Email Campaign Tools',
        '1 User Account',
        '10k Audience Reach',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with established audiences.',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'All Starter Features',
        'Advanced AI Analysis',
        'Custom Audience Targeting',
        'A/B Testing Tools',
        '3 User Accounts',
        '50k Audience Reach',
        'Priority Support',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex marketing needs.',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'All Professional Features',
        'AI Strategy Development',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Unlimited User Accounts',
        'Unlimited Audience Reach',
        'White-labeled Reports',
        'API Access',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that best fits your business needs. All plans come with a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
            <motion.button
              onClick={toggleBillingCycle}
              className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full"
              aria-label={`Switch to ${billingCycle === 'monthly' ? 'annual' : 'monthly'} billing`}
            >
              <motion.div
                className="absolute w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full top-1"
                initial={false}
                animate={{ 
                  x: billingCycle === 'monthly' ? '0.5rem' : '2rem',
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`ml-3 ${billingCycle === 'annual' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual <span className="text-accent-500 text-sm font-medium">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-primary-500 dark:border-primary-400 relative shadow-xl' 
                  : 'border border-gray-200 dark:border-gray-700 shadow-sm'
              }`}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary-500 text-white text-xs font-bold py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                  {billingCycle === 'annual' && (
                    <div className="text-accent-500 text-sm font-medium mt-1">
                      Billed annually
                    </div>
                  )}
                </div>
                <motion.button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-gradient-primary text-white hover:shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary-500 dark:text-primary-400 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}