'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import FloatingSkills from "./components/sp2";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  const [showTechStack, setShowTechStack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTechStack(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header/>


      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Versatile Developer</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Turning ideas into reality through code. Specializing in web, mobile, and beyond.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors">
              View My Projects
            </a>
            <button 
              onClick={() => setShowTechStack(!showTechStack)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center md:hidden"
            >
              View My Skills
              <ChevronDown className="ml-2" size={20} />
            </button>
          </div>
        </div>

        <div className={`w-full md:w-1/2 p-6 transition-all duration-500 ease-in-out ${showTechStack ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 md:opacity-100 md:translate-y-0'}`}>
          {/* Placeholder for your tech stack component */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full flex items-center justify-center w-full">
            <FloatingSkills/>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );

}
