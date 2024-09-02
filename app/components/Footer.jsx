
import React from 'react';
import Media from './Media';

const Footer = () => {
    return (
        <footer className="p-4 md:p-6 mt-2 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-3/4 self-center">
            <div>
                <p className="text-center md:text-left">&copy; Chloe Nibali 2024</p>
            </div>
            <div className="md:hidden">
                <Media />
            </div>
        </footer>
    );
};

export default Footer;