'use client';
import Image from "next/image";
import SkillPool from "./components/skillpool";
import FloatingSkills from "./components/skillpool";

export default function Home() {
  return (
    <main>
      Chloe Nibali - Developer
      <div className="flex justify-center max-h-2/3">
        <FloatingSkills/>
      </div>

      

      
    </main>
  );
}
