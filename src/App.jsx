import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#020C1B] font-['Inter',sans-serif] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#020C1B] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Dhairya Soni. Crafted with care.
      </footer>
    </div>
  );
}

export default App;
