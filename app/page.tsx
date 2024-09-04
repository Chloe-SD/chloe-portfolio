'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSkills from './components/sp2';
import ContactForm from "./Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col bg-fixed-image">
      <div className='bg-slate-950 bg-opacity-70 min-h-screen text-gray-100 flex flex-col'>
      <Header/>
      
      <main className="flex-grow flex flex-col pt-16 md:pt-20"> {/* Added padding-top to account for fixed header */}
          {/* First Section / WELCOME */}
          <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-center">Welcome, I&apos;m Chloe!</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 text-center max-w-2xl px-4">
            
              I bring innovative ideas to life with precision and creativity across web, mobile, and beyond.
              <br/><br/>
              I have a strong foundation in coding, and a track record of success. Lets make something great together!
            </p>
            <a href="#skills" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm md:text-base">
              See My Skills
            </a>
            <a href="#skills" className="mt-8 animate-bounce">
              <ChevronDown size={24} />
            </a>
          </section>


        {/* Skills Section / TECH STACK */}
        <section id="skills" className="h-screen flex items-center justify-center p-4 md:p-6">
          <div className='h-5/6 w-full md:h-3/4 md:w-3/4'>
            <p className="text-center mb-4 text-xl md:text-2xl">My Skills</p>
            <FloatingSkills/>
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