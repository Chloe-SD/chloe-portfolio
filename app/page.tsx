'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSkills from './components/skillpool';
import ContactForm from "./Contact";
import ProjectsSection from "./components/ProjectsSection";
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col bg-fixed-image">
      <div className='bg-slate-950 bg-opacity-70 min-h-screen text-gray-100 flex flex-col'>
      <Header/>
      
      <main className="flex-grow flex flex-col pt-16 md:pt-20">
        {/* HERO SECTION */}
        <Hero/>

        {/* Tech Stack Section */}
        <section id="about" className="h-screen flex items-center justify-center p-4 md:p-6 select-none">
          <div className='h-5/6 w-full md:h-3/4 md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl font-display font-semibold">Tech Stack</p>
            <FloatingSkills/>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-12 md:py-16 flex items-center justify-center p-4 md:p-6 select-none">
          <div className='flex flex-col items-center justify-center h-full w-full md:w-3/4'>
            <p className="text-center mb-8 text-xl md:text-2xl font-display font-semibold">Projects</p>
            <ProjectsSection/>
          </div>
        </section>

        {/* Contact form section */}
        <section id='contact' className='min-h-screen lg:h-screen flex items-center justify-center p-4 md:p-6'>
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