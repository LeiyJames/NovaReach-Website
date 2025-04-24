import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero-pattern">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-secondary-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Hero Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div variants={item}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 text-sm font-medium mb-6">
                AI-Powered Marketing Platform
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
              variants={item}
            >
              Elevate Your Brand with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Intelligent Marketing</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
              variants={item}
            >
              NovaReach combines AI technology with proven marketing strategies to help creators and small businesses reach their audience more effectively.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={item}>
              <motion.a
                href="#"
                className="bg-gradient-primary text-white px-8 py-3 rounded-full font-medium text-center hover:shadow-lg transition flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              <motion.a
                href="#features"
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-3 rounded-full font-medium text-center border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="flex-1 w-full max-w-lg"
            variants={item}
          >
            <div className="relative">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="NovaReach Dashboard" 
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-24 bg-primary-100 dark:bg-primary-900/50 rounded-full"></div>
                    <div className="h-3 w-12 bg-secondary-100 dark:bg-secondary-900/50 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-3/4"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-accent-50 dark:bg-accent-900/30 p-4 rounded-lg shadow-lg border border-accent-100 dark:border-accent-800/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration:.5, repeatType: "reverse" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white">
                    <span>+</span>
                  </div>
                  <div>
                    <p className="text-accent-900 dark:text-accent-100 font-medium text-sm">Engagement</p>
                    <p className="text-accent-600 dark:text-accent-300 text-xs">+27% this week</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg shadow-lg border border-primary-100 dark:border-primary-800/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <span>↑</span>
                  </div>
                  <div>
                    <p className="text-primary-900 dark:text-primary-100 font-medium text-sm">Conversion</p>
                    <p className="text-primary-600 dark:text-primary-300 text-xs">+42% increase</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}