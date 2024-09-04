import React, { useState, useEffect } from 'react';
import Media from './Media';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const checkIfFixed = () => {
            setIsFixed(window.innerWidth >= 768); // 768px is the typical breakpoint for md in Tailwind
        };

        checkIfFixed(); // Check on initial render
        window.addEventListener('resize', checkIfFixed);

        return () => window.removeEventListener('resize', checkIfFixed);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className={`p-4 md:p-6 flex justify-center items-center w-full select-none
        ${isFixed ? 'fixed top-0' : ''} 
        bg-slate-900 opacity-95 rounded-md mt-2 z-50`}>
            <div className='flex justify-between items-center w-full md:w-3/4 self-center'>
                <h1 className="text-2xl md:text-4xl font-semibold text-fuchsia-200 cursor-pointer"
                onClick={scrollToTop}>Chloe Nibali</h1>
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-pink-300 transition-colors text-xl">About</a></li>
                        <li><a href="#projects" className="hover:text-pink-300 transition-colors text-xl">Projects</a></li>
                        <li><a href="#contact" className="hover:text-pink-300 transition-colors text-xl">Contact</a></li>
                    </ul>
                </nav>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <nav className="absolute top-full left-0 right-0 bg-slate-900 opacity-95 md:hidden">
                        <ul className="flex flex-col items-center py-4">
                            <li className="my-2"><a href="#about" className="hover:text-pink-300 transition-colors text-xl" onClick={() => setIsMenuOpen(false)}>About</a></li>
                            <li className="my-2"><a href="#projects" className="hover:text-pink-300 transition-colors text-xl" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                            <li className="my-2"><a href="#contact" className="hover:text-pink-300 transition-colors text-xl" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                )}

                <div className="hidden md:block">
                    <Media />
                </div>
            </div>
            
        </header>
    );
};

export default Header;