import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Media from './Media';

// Constants used for navigation and sections
const sections = ['home', 'projects', 'services', 'about', 'contact'];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isCompact, setIsCompact] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  // Scroll detection for active section and compact mode
  useEffect(() => {
    const handleScroll = () => {
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock and focus trap when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first link when menu opens
      setTimeout(() => firstFocusableRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Focus trap - keep focus inside menu when open
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
      // Escape key
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        buttonRef.current?.focus(); // Return focus to button
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isFirst?: boolean;
  }

  // Desktop Navigation Link
  const DesktopNavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a
      href={href}
      className={`transition-colors text-lg md:text-xl px-2 py-1 rounded font-medium
        ${activeSection === href.slice(1) ? 'text-fuchsia-400' : 'text-white hover:text-pink-300'}`}
    >
      {children}
    </a>
  );

  // Mobile Navigation Link with ref for first item
  const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, isFirst }) => (
    <a
      ref={isFirst ? firstFocusableRef : null}
      href={href}
      className={`block w-full text-left px-6 py-4 text-xl font-medium transition-colors
        ${activeSection === href.slice(1) 
          ? 'text-fuchsia-400 bg-slate-800' 
          : 'text-white hover:text-pink-300 hover:bg-slate-800'
        }`}
      onClick={() => setIsMenuOpen(false)}
      tabIndex={isMenuOpen ? 0 : -1}
    >
      {children}
    </a>
  );

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-[100] bg-fuchsia-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-400
          sr-only focus:not-sr-only"
        tabIndex={0}
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900 bg-opacity-95
          ${isCompact ? 'py-2' : 'py-4 md:py-6'}`}
      >
        <div className='container mx-auto px-4 flex justify-between items-center max-w-6xl'>
          {/* Logo */}
          <p 
            className={`font-display font-bold text-fuchsia-200 cursor-pointer transition-all duration-300
              ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            aria-label='Homepage - Scroll to top'
          >
            <span className="bg-gradient-to-r from-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
              Code by Chloe
            </span>
          </p>
          
          {/* Mobile Menu Button */}
          <button 
            ref={buttonRef}
            className="md:hidden text-white p-2 hover:text-fuchsia-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-4">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <DesktopNavLink href={link.href}>{link.label}</DesktopNavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Social Media */}
          <div className="hidden md:block">
            <Media />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate component for better performance */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        id="mobile-menu"
        className={`fixed top-[55px] left-0 right-0 bg-slate-900 z-40 md:hidden transition-transform duration-300 ease-in-out transform shadow-lg
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="py-2 mt-5"> 
          <ul>
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <MobileNavLink href={link.href}>{link.label}</MobileNavLink>
              </li>
            ))}
          </ul>
          
          {/* Mobile Social Media */}
          <div className="px-6 py-4 border-t border-slate-800 mt-2">
            <Media />
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Header;