'use client';
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
      
      <main className="flex-grow flex flex-col pt-16 md:pt-20"> {/* Added padding-top to account for fixed header */}
          {/* First Section / WELCOME */}
          <section id="welcome" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 select-none">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-center">Welcome, I&apos;m Chloe!</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 text-center max-w-2xl px-4">
            
              I bring innovative ideas to life with precision and creativity across web, mobile, and beyond.
              <br/><br/>
              I have a strong foundation in coding, and a track record of success. Lets make something great together!
            </p>
            {/* <a href="#about" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md 
            transition-colors text-sm md:text-base border-2 border-fuchsia-200
            shadow-md shadow-purple-800">
              See My Skills
            </a> */}
            <a href="#about" className="mt-8 animate-bounce">
              <ChevronDown size={24} />
            </a>
          </section>


        {/* About Section / TECH STACK */}
        <section id="about" className="h-screen flex items-center justify-center p-4 md:p-6 select-none">
          <div className='h-5/6 w-full md:h-3/4 md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl">Tech Stack</p>
            <FloatingSkills/>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex items-center justify-center p-4 md:p-6 select-none">
        <div className='flex flex-col items-center justify-center h-full w-full md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl">My Projects</p>
            <ProjectsSection/>
          </div>
        </section>


        {/* Contact form section */}
        <section id='contact' className='h-screen flex items-center justify-center p-4 md:p-6'>
          <div className='w-full md:w-3/4'>
          <p className="text-center mb-4 text-xl md:text-2xl">Contact Me</p>
            <ContactForm/>
          </div>
        </section>

      </main>

      <Footer/>
      </div>
    </div>
  );
}