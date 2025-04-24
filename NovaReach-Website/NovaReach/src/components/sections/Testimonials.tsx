import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'The Digital Canvas',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'NovaReach transformed my marketing strategy. The AI recommendations have helped me create content that truly resonates with my audience.',
      stars: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'As a tech startup, we needed an efficient way to reach our ideal customers. NovaReach\'s targeting capabilities exceeded our expectations.',
      stars: 5,
    },
    {
      name: 'Olivia Martinez',
      role: 'Marketing Director',
      company: 'Bloom Boutique',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote: 'The insights provided by NovaReach helped us increase our conversion rate by 32% in just two months. The platform is a game-changer.',
      stars: 4,
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
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Loved by Marketers Everywhere
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our customers have to say about NovaReach.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-1 mb-4 text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.stars ? 'currentColor' : 'none'}
                    className={i < testimonial.stars ? 'text-accent-500' : 'text-gray-300 dark:text-gray-600'}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}