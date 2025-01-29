import React from 'react';
import { Menu, Home, Book, Briefcase, Code, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20 bg-white">
          <About />
        </section>

        <section id="education" className="min-h-screen py-20">
          <Education />
        </section>

        <section id="projects" className="min-h-screen py-20 bg-white">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
      </main>
    </div>
  );
}

export default App;