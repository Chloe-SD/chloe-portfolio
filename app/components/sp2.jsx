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


//===============================================================================
//===============================================================================
/**
 * THINGS TO DO ON THIS COMPONENT
 * - Alphabatize the skills
 * - Add more (MySql etc)
 * - Better differentiate the highlighted skills
 * - Center the selected grid????
 * 
 * -- comments updated 2024-09-02 -CN
 */
//===============================================================================
//===============================================================================


// Define the skills array with name and category
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

// Extract unique categories from the skills array
const categories = [...new Set(skills.map(skill => skill.category))];

// SkillCard component represents each individual skill card
const SkillCard = ({ skill, isSelected, position, index, totalSelected }) => {
    const gridColumns = Math.ceil(Math.sqrt(totalSelected));
    const row = Math.floor(index / gridColumns);
    const col = index % gridColumns;

    // Offset to move the grid away from the edges
    const offsetX = 50;
    const offsetY = 50;

    return (
        <motion.div
            className={`absolute p-6 rounded-lg shadow-md ${
                isSelected 
                    ? 'bg-gray-500 text-white z-10' 
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
            <div className="text-8xl">{skillIcons[skill.name]}</div>
            <h3 className="text-base font-bold mt-2">{skill.name}</h3>
            <p className="text-xs opacity-75">{skill.category}</p>
        </motion.div>
    );
};
  

// FloatingSkills - main component that renders all skill cards
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
                x: Math.random() * (width - 200),
                y: Math.random() * (height - 150),
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

            if (newX <= 0 || newX >= containerRef.current.clientWidth - 200) {
            newVelocityX *= -1;
            }
            if (newY <= 0 || newY >= containerRef.current.clientHeight - 150) {
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
        <div className="flex-none p-4 bg-slate-900 rounded-t-lg border-t-2 border-x-2 border-purple-300">
            
            {/* RADIO BUTTONS FOR SELECTING CATEGORY */}
            <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
                <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded transition-colors
                    ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                {category}
                </button>
            ))}
            </div>
        </div>
        <div 
            ref={containerRef}
            className="flex-grow relative overflow-hidden bg-slate-900 rounded-b-lg border-b-2 border-x-2 border-purple-300"
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