import React, { useEffect, useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero/Hero.jsx';
import { AboutMe } from './components/sections/AboutMe/AboutMe';
import { Projects } from './components/sections/Projects/Projects';
import { Skills } from './components/sections/Skills/Skills';
import { Certifications } from './components/sections/Certifications/Certifications';
import { Contact } from './components/sections/Conntact/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#161618] text-[#F2F2E9] font-['Inter',sans-serif]">
      <Header scrolled={scrolled} />
      <main className="w-full">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}