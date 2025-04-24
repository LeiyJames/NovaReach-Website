import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;