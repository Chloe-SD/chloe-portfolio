'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSkills from './components/skillpool';
import ContactForm from "./Contact";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col bg-fixed-image">
      <div className='bg-slate-950 bg-opacity-70 min-h-screen text-gray-100 flex flex-col'>
      <Header/>
      
      <main className="flex-grow flex flex-col pt-16 md:pt-20">
          {/* HERO SECTION - UPDATED WITH SPACE GROTESK */}
          <section id="welcome" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 select-none">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-center">
              Chloe Nibali
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-pink-300 mb-8 text-center font-display font-semibold">
              Full-Stack Developer
            </h2>
            
            <div className="mb-8 text-center max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-medium">
                Security-focused developer with{' '}
                <a 
                  href="#projects" 
                  className="text-pink-400 font-semibold hover:text-pink-300 transition-colors underline decoration-pink-400 hover:decoration-pink-300 md:no-underline md:hover:no-underline cursor-pointer"
                >
                  three live applications
                </a>{' '}
                serving real users
              </p>
              
              {/* LIVE LINKS - DESKTOP ONLY */}
              <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
                <a 
                  href="https://meetmoment-webapp.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white 
                          px-4 py-2 rounded-md transition-colors border-2 border-fuchsia-200 
                          shadow-md shadow-purple-800 font-medium"
                >
                  📆 MeetMoment
                </a>
                <a 
                  href="https://quantum-dice-simulator.streamlit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white 
                          px-4 py-2 rounded-md transition-colors border-2 border-fuchsia-200 
                          shadow-md shadow-purple-800 font-medium"
                >
                  🎲 Quantum Dice Simulator
                </a>
                <a 
                  href="https://astute-accounting.vercel.app/About" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white 
                          px-4 py-2 rounded-md transition-colors border-2 border-fuchsia-200 
                          shadow-md shadow-purple-800 font-medium"
                >
                  📒 Astute Accounting
                </a>
              </div>
            </div>

            {/* KEY DIFFERENTIATORS - RESPONSIVE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-4xl text-center w-full px-2">
              <div className="bg-slate-800 bg-opacity-60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
                <h3 className="text-pink-400 font-semibold mb-2 font-display text-sm md:text-base">Cross-Platform Architecture</h3>
                <p className="text-xs md:text-sm text-gray-300">Web & mobile apps sharing unified backends</p>
              </div>
              <div className="bg-slate-800 bg-opacity-60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
                <h3 className="text-pink-400 font-semibold mb-2 font-display text-sm md:text-base">Enterprise Security</h3>
                <p className="text-xs md:text-sm text-gray-300">RBAC, JWT authentication, audit trails</p>
              </div>
              <div className="bg-slate-800 bg-opacity-60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
                <h3 className="text-pink-400 font-semibold mb-2 font-display text-sm md:text-base">Client Experience</h3>
                <p className="text-xs md:text-sm text-gray-300">8-month external project delivering production software</p>
              </div>
            </div>

            <a href="#about" className="mt-8 animate-bounce">
              <ChevronDown size={24} />
            </a>
          </section>

        {/* Tech Stack Section */}
        <section id="about" className="h-screen flex items-center justify-center p-4 md:p-6 select-none">
          <div className='h-5/6 w-full md:h-3/4 md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl font-display font-semibold">Tech Stack</p>
            <FloatingSkills/>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex items-center justify-center p-4 md:p-6 select-none">
        <div className='flex flex-col items-center justify-center h-full w-full md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl font-display font-semibold">Projects</p>
            <ProjectsSection/>
          </div>
        </section>

        {/* Contact form section */}
        <section id='contact' className='h-screen flex items-center justify-center p-4 md:p-6'>
          <div className='w-full md:w-3/4'>
          <p className="text-center mb-4 text-xl md:text-2xl font-display font-semibold">Contact Me</p>
            <ContactForm/>
          </div>
        </section>

      </main>

      <Footer/>
      </div>
    </div>
  );
}