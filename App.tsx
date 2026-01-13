
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ArchitectureSection from './components/ArchitectureSection';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-brand selection:text-white">
      <Header isScrolled={scrolled} />
      
      <main>
        <Hero />
        <ArchitectureSection />
        <ServicesSection />
        <LocationSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
