// app/components/Hero.tsx
import { ChevronDown } from 'lucide-react';

export default function Hero() {
 return (
    <section id="welcome" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 select-none">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 text-center">
            Chloe Nibali - Software Developer
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-pink-300 mb-6 md:mb-8 text-center font-display font-semibold">
            Turning complex data into simple, inclusive solutions.
          </p>
          
          <div className="mb-6 md:mb-8 text-center max-w-4xl">
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 font-medium px-2">
              Cross-platform architect with{' '}
              <a 
                href="#projects" 
                className="text-pink-400 font-semibold hover:text-pink-300 transition-colors underline decoration-pink-400 hover:decoration-pink-300 md:no-underline md:hover:no-underline cursor-pointer"
              >
                production applications
              </a>{' '}
              and external client delivery experience
            </p>
            

          </div>

          {/* TECHNICAL HIGHLIGHTS - MOBILE OPTIMIZED */}
           <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 mb-8 md:mb-12 max-w-4xl text-center w-full px-2">
            <div className="bg-slate-800/60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
              <div className="text-lg md:text-xl mb-1 md:mb-2">🗄️</div>
              <h3 className="text-pink-400 font-semibold mb-1 md:mb-2 font-display text-xs md:text-base">APIs & Data</h3>
              <p className="text-xs md:text-sm text-gray-300">PostgreSQL schemas, REST endpoints, real-time sync across web + mobile.</p>
            </div>
            <div className="bg-slate-800 bg-opacity-60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
              <div className="text-lg md:text-xl mb-1 md:mb-2">🔐</div>
              <h3 className="text-pink-400 font-semibold mb-1 md:mb-2 font-display text-xs md:text-base">Security Focus</h3>
              <p className="text-xs md:text-sm text-gray-300">RBAC, JWT authentication, comprehensive audit trails</p>
            </div>
            <div className="bg-slate-800/60 p-3 md:p-4 rounded-lg border border-fuchsia-200">
              <div className="text-lg md:text-xl mb-1 md:mb-2">✨</div>
              <h3 className="text-pink-400 font-semibold mb-1 md:mb-2 font-display text-xs md:text-base">Accessible UI</h3>
              <p className="text-xs md:text-sm text-gray-300">Inclusive interfaces that turn complex data into human centered solutions.</p>
            </div>
          </div>

          <a href="#about" className="mt-4 md:mt-8 animate-bounce">
            <ChevronDown size={20} />
          </a>
        </section>
  );
}