
import React from 'react';
import Media from './Media';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {

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
        md:space-x-4 w-full md:w-3/4 self-center select-none">
            <div className='flex items-center justify-center space-x-2 w-full'>
                <p className="text-center md:self-start">&copy; Chloe Nibali 2024</p>
                
                <ChevronUp size={24} 
                className='animate-bounce cursor-pointer self-center'
                onClick={scrollToTop}/>
                
            </div>
            <div className="md:hidden">
                <Media />
            </div>
        </footer>
    );
};

export default Footer;