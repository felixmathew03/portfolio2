
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-indigo-500/30">
      {/* Dynamic Background */}
      <div className="mesh-gradient"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob top-[-20%] left-[-10%] bg-indigo-500/30" style={{ animationDelay: '0s' }}></div>
        <div className="blob bottom-[-20%] right-[-10%] bg-emerald-500/20" style={{ animationDelay: '-8s' }}></div>
        <div className="blob top-[30%] left-[60%] bg-purple-500/10" style={{ animationDelay: '-15s' }}></div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-40 py-16">
        <section id="home" className="reveal">
          <Hero />
        </section>

        <section id="about" className="reveal">
          <About />
        </section>

        <section id="tech" className="reveal">
          <TechStack />
        </section>

        <section id="projects" className="reveal overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <Projects />
        </section>

        <section id="experience" className="reveal">
          <div className="grid md:grid-cols-2 gap-20">
            <ExperienceTimeline />
          </div>
        </section>

        <section id="contact" className="reveal">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
