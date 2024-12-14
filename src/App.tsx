import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="text-center py-4 text-gray-400">
        <p>© {new Date().getFullYear()} Liwa Mokni. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;