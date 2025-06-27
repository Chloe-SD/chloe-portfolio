
import React from 'react';
import Media from './Media';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      className="p-4 md:p-6 mt-2 flex flex-col md:flex-row 
      justify-between items-center space-y-4 md:space-y-0 
      md:space-x-4 w-full md:w-3/4 self-center select-none"
      role="contentinfo"
    >
      <div className='flex items-center justify-center space-x-2 w-full'>
        <p className="text-center md:self-start" aria-label="Copyright">
          &copy; Chloe Nibali 2025
        </p>
        <button
          aria-label="Scroll to top"
          className='animate-bounce cursor-pointer self-center bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-2 focus:ring-pink-400'
          onClick={scrollToTop}
        >
          <ChevronUp size={24} />
        </button>
      </div>
      <div className="md:hidden">
        <Media />
      </div>
    </footer>
  );
};

export default Footer;