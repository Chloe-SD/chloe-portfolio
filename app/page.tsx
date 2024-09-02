'use client';
import Image from "next/image";
import SkillPool from "./components/skillpool";
import FloatingSkills from "./components/sp2";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      Chloe Nibali - Developer
      <div className="flex-grow h-3/4 w-3/4">
        <FloatingSkills/>

      </div>

      

      
    </main>
  );
}
