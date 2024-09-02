import React from "react";

const Header = () => {
    return (
        <header className="p-6 flex justify-between items-center w-3/4 self-center">
        <h1 className="text-4xl font-bold text-pink-300">Chloe Nibali</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" 
                className="hover:text-pink-300 transition-colors text-xl">About</a></li>
            <li><a href="#projects" className="hover:text-pink-300 transition-colors text-xl">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-300 transition-colors text-xl">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;