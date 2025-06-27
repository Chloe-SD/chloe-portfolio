import React, { useState, useEffect, ReactNode } from 'react';
import Media from './Media';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isActive }) => (
  <li>
    <a
      href={href}
      className={`transition-colors text-lg md:text-xl px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-400
      ${isActive ? 'text-fuchsia-400' : 'text-white hover:text-pink-300'}`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // for closing menu on mobile
    const [activeSection, setActiveSection] = useState(''); // for highlighting current sections link
    const [isCompact, setIsCompact] = useState(false); // for scaling down header outside of welcome section

    // hook sets header values on mount, and listens for scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['welcome', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100; // 100 to account for header height
            for (const section of sections) { // iterate through each section ID
                const element = document.getElementById(section);
                // Check if scroll position is within the section
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    // set the active selection to the section currently displayed
                    setActiveSection(section);
                    break;
                }
            }
            setIsCompact(window.scrollY > 400); // Change to compact after scrolling 100px
        };
        // listener for scroll actions.
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // for returning to welcome section when title is clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900 bg-opacity-95
        ${isCompact ? 'py-2' : 'py-4 md:py-6'}`}>
        <div className='container mx-auto px-4 flex justify-between items-center md:w-3/4'>
            <h1
            className={`font-semibold text-fuchsia-200 cursor-pointer transition-all duration-300
            ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}
            onClick={scrollToTop}
            tabIndex={0}
            aria-label="Scroll to top"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToTop(); }}
            >
            Code by Chloe
            </h1>

            <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav
            id="main-navigation"
            className={`md:block ${isMenuOpen ? 'block' : 'hidden'} 
                absolute md:relative top-full left-0 right-0 md:top-auto bg-slate-900 md:bg-transparent`}
            aria-label="Main navigation"
            role="navigation"
            >
            <ul className="flex flex-col md:flex-row items-center md:space-x-4 py-4 md:py-0">
                <NavLink href="#about" isActive={activeSection === 'about'} onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
                <NavLink href="#projects" isActive={activeSection === 'projects'} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink href="#contact" isActive={activeSection === 'contact'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </ul>
            </nav>

            <div className="hidden md:block">
            <Media />
            </div>
        </div>
        </header>
    );
};

export default Header;