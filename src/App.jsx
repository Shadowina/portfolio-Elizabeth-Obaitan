import React, { useState, useEffect } from 'react';
import Header from './pages/Header.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage === 'en' || savedLanguage === 'fr') return savedLanguage

    const browserLanguage = navigator.language?.toLowerCase() || ''
    return browserLanguage.startsWith('fr') ? 'fr' : 'en'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header 
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  )
}

export default App
