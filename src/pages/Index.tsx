
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  useEffect(() => {
    document.title = "Milorad Smiljanic | Frontend Developer";
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#121620] to-[#1A1F2C] text-white relative">
      <BackgroundElements />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
