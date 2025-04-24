import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Community', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Cookies', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold text-xl mb-4">
              <Sparkles className="h-6 w-6" />
              <span>NovaReach</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              NovaReach helps creators and small businesses harness the power of AI to transform their marketing strategies and reach their ideal audience.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Stay updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
                <motion.button
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-r-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} NovaReach. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Designed with ❤️ by an amazing team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}