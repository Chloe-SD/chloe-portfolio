import React from "react";
import Media from "./Media";

const Header = () => {
    return (
        <header className="p-6 flex justify-between items-center w-3/4 self-center fixed
        bg-slate-900 opacity-95 rounded-md mt-2">
        <h1 className="text-4xl font-bold text-fuchsia-200">Chloe Nibali</h1>
        <Media/>
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