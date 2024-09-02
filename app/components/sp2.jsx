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

// Skills array (unchanged)
const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'TailWind', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'CSS 3', category: 'Frontend' },
  { name: 'HTML 5', category: 'Frontend' },
  { name: 'Java', category: 'Backend' },
  { name: 'C Sharp', category: 'Backend' },
  { name: 'TypeScript', category: 'Backend' },
  { name: 'JavaScript', category: 'Backend' },
  { name: 'Firebase', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
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
  "React": <ReactOriginal />,
  "Node.js": <NodejsOriginal />,
  "CSS 3": <Css3Original />,
  "HTML 5": <Html5Original />,
  "MySQL": <MysqlOriginal />,
}

// Extract unique categories (unchanged)
const categories = [...new Set(skills.map(skill => skill.category))];

// Updated SkillCard component
const SkillCard = ({ skill, isSelected, position, index, totalSelected }) => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;
    const gridColumns = isMobile ? 2 : Math.ceil(Math.sqrt(totalSelected));
    const row = Math.floor(index / gridColumns);
    const col = index % gridColumns;

    const offsetX = isMobile ? 20 : 50;
    const offsetY = isMobile ? 20 : 50;

    const cardSize = isMobile ? 'w-24 h-24' : 'w-36 h-40';
    const iconSize = isMobile ? 'text-4xl' : 'text-8xl';
    const textSize = isMobile ? 'text-xs' : 'text-lg';

    return (
        <motion.div
            className={`absolute ${cardSize} p-2 rounded-lg shadow-md flex flex-col items-center justify-center ${
                isSelected 
                    ? 'bg-slate-700 text-white z-10 border-2 border-fuchsia-200' 
                    : 'bg-gray-500 bg-opacity-50 text-white'
            }`}
            initial={isSelected ? { scale: 0.7, opacity: 0 } : { scale: 0.7, x: position.x, y: position.y }}
            animate={isSelected 
                ? { 
                    scale: 1, 
                    opacity: 1, 
                    x: `calc(${col * 110}% + ${offsetX}px)`,
                    y: `calc(${row * 110}% + ${offsetY}px)`,
                }
                : { scale: 0.7, x: position.x, y: position.y }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className={`${iconSize} mb-1`}>{skillIcons[skill.name]}</div>
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

    useEffect(() => {
        const updateCardStates = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setCardStates(skills.map(() => ({
                    position: {
                        x: Math.random() * (width - 100),
                        y: Math.random() * (height - 100),
                    },
                    velocity: {
                        x: (Math.random() - 0.5) * 2,
                        y: (Math.random() - 0.5) * 2,
                    },
                })));
            }
        };

        updateCardStates();
        window.addEventListener('resize', updateCardStates);

        return () => {
            window.removeEventListener('resize', updateCardStates);
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

                if (newX <= 0 || newX >= containerRef.current.clientWidth - 100) {
                    newVelocityX *= -1;
                }
                if (newY <= 0 || newY >= containerRef.current.clientHeight - 100) {
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
    }, []);
    
    const selectedSkills = selectedCategory === null ? [] : skills.filter(skill => skill.category === selectedCategory);
    
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-none p-4 bg-slate-900 bg-opacity-50 rounded-t-lg border-t-2 border-x-2 border-fuchsia-200">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className={`px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded transition-colors
                                ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
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
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FloatingSkills;