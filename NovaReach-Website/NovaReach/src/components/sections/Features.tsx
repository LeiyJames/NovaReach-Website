import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, BarChart3, BrainCircuit, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Leverage advanced machine learning to uncover patterns and opportunities in your marketing data.',
      icon: BrainCircuit,
      color: 'primary',
    },
    {
      title: 'Audience Targeting',
      description: 'Create highly specific segments to target your ideal customers with personalized messaging.',
      icon: Target,
      color: 'secondary',
    },
    {
      title: 'Performance Analytics',
      description: 'Track campaign performance with comprehensive dashboards and customizable reports.',
      icon: BarChart3,
      color: 'accent',
    },
    {
      title: 'Community Building',
      description: 'Tools to nurture and engage your community through multiple touchpoints.',
      icon: Users,
      color: 'primary',
    },
    {
      title: 'Conversion Optimization',
      description: 'Intelligent A/B testing and funnel analysis to boost your conversion rates.',
      icon: TrendingUp,
      color: 'secondary',
    },
    {
      title: 'Privacy Compliance',
      description: 'Stay compliant with global privacy regulations while still maximizing marketing effectiveness.',
      icon: Shield,
      color: 'accent',
    },
  ];

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
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features for Modern Marketers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our platform combines cutting-edge technology with user-friendly tools to revolutionize your marketing strategy.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div 
                className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-${feature.color}-100 dark:bg-${feature.color}-900/30 text-${feature.color}-600 dark:text-${feature.color}-400`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}