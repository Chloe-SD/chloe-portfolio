
import React from 'react';
import Media from './Media';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/80 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm">© Chloe Nibali 2025</p>
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 text-slate-400 hover:text-rose-300 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;