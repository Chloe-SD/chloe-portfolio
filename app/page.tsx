'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSkills from './components/sp2';
import cmore1 from '../public/cmore1.jpg';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 flex flex-col bg-fixed-image">
      <div className='bg-slate-950 bg-opacity-80 min-h-screen text-gray-100 flex flex-col'>
      <Header/>
      
      <main className="flex-grow flex flex-col">


        {/* First Section / WELCOME */}
        <section className="h-screen flex flex-col items-center justify-center p-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Versatile Developer</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 text-center max-w-2xl">
            Turning ideas into reality through code. Specializing in web, mobile, and beyond.
          </p>
          <a href="#skills" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors">
            See My Skills
          </a>
          <a href="#skills" className="mt-8 animate-bounce">
            <ChevronDown size={24} />
          </a>
        </section>


        {/* Skills Section / TECH STACK */}
        <section id="skills" className="h-screen flex items-center justify-center p-6">
          <div className='h-3/4 w-3/4'>
            <p>My Skills</p>
            <FloatingSkills/>
          </div>
        </section>
      </main>

      <Footer/>
      </div>
    </div>
  );
}