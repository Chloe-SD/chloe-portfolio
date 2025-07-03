import React, { useState, useEffect } from 'react';
import Media from './Media';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['welcome', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
            setIsCompact(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const NavLink = ({ href, children }) => (
        <li>
            <a
                href={href}
                className={`transition-colors text-lg md:text-xl px-2 py-1 rounded font-medium
                ${activeSection === href.slice(1) ? 'text-fuchsia-400' : 'text-white hover:text-pink-300'}`}
                onClick={() => setIsMenuOpen(false)}
            >
                {children}
            </a>
        </li>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900 bg-opacity-95
            ${isCompact ? 'py-2' : 'py-4 md:py-6'}`}>
            <div className='container mx-auto px-4 flex justify-between items-center md:w-3/4'>
                <h1 
                    className={`font-display font-bold text-fuchsia-200 cursor-pointer transition-all duration-300
                    ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}
                    onClick={scrollToTop}
                >
                    Code by Chloe
                </h1>
                
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} 
                    absolute md:relative top-full left-0 right-0 md:top-auto bg-slate-900 md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row items-center md:space-x-4 py-4 md:py-0">
                        <NavLink href="#about">Skills</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
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