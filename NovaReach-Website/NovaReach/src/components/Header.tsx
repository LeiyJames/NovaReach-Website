import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { AlignRight, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position to update header styling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="h-6 w-6" />
          <span>NovaReach</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="#"
            className="bg-gradient-primary text-white px-4 py-2 rounded-full font-medium hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <AlignRight size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 ${isOpen ? 'flex' : 'hidden'} flex-col pt-24 px-6`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-800 dark:text-gray-200 text-lg font-medium py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#"
            className="bg-gradient-primary text-white py-3 px-6 rounded-full font-medium text-center shadow-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}