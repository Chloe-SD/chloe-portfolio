"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CsharpOriginal from "react-devicons/csharp/original";
import PythonOriginal from "react-devicons/python/original";
import TailwindcssOriginalWordmark from "react-devicons/tailwindcss/original-wordmark";
import JavaOriginal from "react-devicons/java/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import FirebasePlain from "react-devicons/firebase/plain";
import ReactOriginal from "react-devicons/react/original";
import NodejsOriginal from "react-devicons/nodejs/original";
import Css3Original from "react-devicons/css3/original";
import Html5Original from "react-devicons/html5/original";
import MysqlOriginal from "react-devicons/mysql/original";
import SqliteOriginal from "react-devicons/sqlite/original";
import IconPostgresql from "react-devicons/postgresql/original";
import AzureOriginal from "react-devicons/azure/original";
import DockerOriginal from "react-devicons/docker/original";
import VercelOriginal from "react-devicons/vercel/original";

// Skills array (unchanged)
const skills = [
    //languages
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'C Sharp', category: 'Languages' },
    { name: 'HTML 5', category: 'Languages' },
    
    
    //Frameworks
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'React', category: 'Frameworks' },
    { name: '.NET MAUI', category: 'Frameworks' },
    { name: 'TailWind', category: 'Frameworks' },
    

    //Database
    { name: 'SQLite', category: 'Database'},
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'FireStore', category: 'Database' },
   

    //Platforms
    { name: 'Azure', category: 'Platforms' },
    { name: 'AWS', category: 'Platforms' },
    { name: 'Firebase', category: 'Platforms' },
    { name: 'Docker', category: 'Platforms' },
    { name: 'Vercel', category: 'Platforms' },
   
  
];



// Skill icons (unchanged)
const skillIcons = {
    'C Sharp': <CsharpOriginal/>,
    'Python': <PythonOriginal/>,
    'TailWind': <TailwindcssOriginalWordmark />,
    'Java': <JavaOriginal />,
    "TypeScript": <TypescriptOriginal />,
    "JavaScript": <JavascriptOriginal />,
    "Firebase": <FirebasePlain />,
    "FireStore": <FirebasePlain />,
    "React": <ReactOriginal />,
    "Node.js": <NodejsOriginal />,
    "CSS 3": <Css3Original />,
    "HTML 5": <Html5Original />,
    "MySQL": <MysqlOriginal />,
    "SQLite": <SqliteOriginal />,
    "PostgreSQL": <IconPostgresql />,
    "Azure": <AzureOriginal />,
    "Docker": <DockerOriginal />,
    "Vercel": <VercelOriginal />,
    
}

// Extract unique categories (unchanged)
const categories = [...new Set(skills.map(skill => skill.category))];

// Updated SkillCard component
const SkillCard = ({ skill, isSelected, position, index, totalSelected, containerSize, windowWidth }) => {
    const isMobile = windowWidth <= 640; // sm breakpoint
    const isTablet = windowWidth > 640 && windowWidth <= 1024; // md to lg breakpoint
    //const isDesktop = windowWidth > 1024; // larger than lg

    const cardSize = isMobile ? 112 : (isTablet ? 144 : 192); // in pixels, matching the Tailwind classes
    const gridColumns = isMobile ? 2 : (isTablet ? 3 : Math.ceil(Math.sqrt(totalSelected)));
    const gridRows = Math.ceil(totalSelected / gridColumns);

    let row, col;
    if (isSelected) {
        row = Math.floor(index / gridColumns);
        col = index % gridColumns;
    }

    const gridWidth = cardSize * gridColumns;
    const gridHeight = cardSize * gridRows;

    const offsetX = isSelected ? (containerSize.width - gridWidth) / 2 : 0;
    const offsetY = isSelected ? (containerSize.height - gridHeight) / 2 : 0;

    const cardSizeClass = isMobile ? 'w-28 h-28' : (isTablet ? 'w-36 h-36' : 'w-48 h-48');
    const iconSize = isMobile ? 'text-4xl' : (isTablet ? 'text-5xl' : 'text-7xl');
    const textSize = isMobile ? 'text-xs' : (isTablet ? 'text-sm' : 'text-base');

    return (
        <motion.div
            className={`absolute ${cardSizeClass} p-2 rounded-lg shadow-md flex flex-col items-center justify-center ${
                isSelected 
                    ? 'bg-slate-700 text-white z-10 border-2 border-fuchsia-200' 
                    : 'bg-gray-500 bg-opacity-50 text-white'
            }`}
            initial={isSelected ? { scale: 0.7, opacity: 0 } : { scale: 0.7, x: position.x, y: position.y }}
            animate={isSelected 
                ? { 
                    scale: 1, 
                    opacity: 1, 
                    x: offsetX + (col * 1.07) * cardSize,
                    y: offsetY + (row * 1.07) * cardSize,
                }
                : { scale: 0.7, x: position.x, y: position.y }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className={`${iconSize} mb-2`}>{skillIcons[skill.name]}</div>
            <h3 className={`${textSize} font-bold text-center`}>{skill.name}</h3>
            {/* <p className={`${textSize} opacity-75 text-center`}>{skill.category}</p> */}
        </motion.div>
    );
};



// Updated FloatingSkills component
const FloatingSkills = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cardStates, setCardStates] = useState([]);
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [windowWidth, setWindowWidth] = useState(0); // Initialize to 0 to avoid SSR issues

    useEffect(() => {
        const updateSize = () => {
            setWindowWidth(window.innerWidth);
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setContainerSize({ width, height });
                setCardStates(skills.map(() => ({
                    position: {
                        x: Math.random() * (width - 100),
                        y: Math.random() * (height - 100),
                    },
                    velocity: {
                        x: (Math.random() - 0.5) * 4,
                        y: (Math.random() - 0.5) * 4,
                    },
                })));
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
    };

    const animateFloatingCards = () => {
        setCardStates(prevStates => 
            prevStates.map(state => {
                const newX = state.position.x + state.velocity.x;
                const newY = state.position.y + state.velocity.y;
                
                let newVelocityX = state.velocity.x;
                let newVelocityY = state.velocity.y;

                if (newX <= 0 || newX >= containerSize.width - 100) {
                    newVelocityX *= -1;
                }
                if (newY <= 0 || newY >= containerSize.height - 100) {
                    newVelocityY *= -1;
                }

                return {
                    position: { x: newX, y: newY },
                    velocity: { x: newVelocityX, y: newVelocityY },
                };
            })
        );
    };

    useEffect(() => {
        const intervalId = setInterval(animateFloatingCards, 50);
        return () => clearInterval(intervalId);
    }, [containerSize]);
    
    const selectedSkills = selectedCategory === null ? [] : skills.filter(skill => skill.category === selectedCategory);
    
    
    return (
        <div className="flex flex-col h-full w-full select-none">
            <div className="flex-none p-4 bg-slate-900 bg-opacity-50 rounded-t-lg border-t-2 border-x-2 border-fuchsia-200">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-md
                                border-2 border-fuchsia-200 shadow-md shadow-purple-800 transition-colors
                                ${selectedCategory === category ? 'bg-fuchsia-700 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div 
                ref={containerRef}
                className="flex-grow relative overflow-hidden bg-slate-900
                bg-opacity-50 rounded-b-lg border-b-2 border-x-2 border-fuchsia-200"
                style={{ minHeight: '300px' }}
            >
                <AnimatePresence>
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            isSelected={selectedCategory === skill.category}
                            position={cardStates[index]?.position || { x: 0, y: 0 }}
                            index={selectedSkills.findIndex(s => s.name === skill.name)}
                            totalSelected={selectedSkills.length}
                            containerSize={containerSize}
                            windowWidth={windowWidth}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FloatingSkills;