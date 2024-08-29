'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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

// Define the skills array with name and category
const skills = [
  { name: 'React', category: 'Web' },
  { name: 'Python', category: 'Backend' },
  { name: 'TailWind', category: 'Web' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'CSS 3', category: 'Web' },
  { name: 'HTML 5', category: 'Web' },
  { name: 'Java', category: 'Backend' },
  { name: 'C Sharp', category: 'Backend' },
  { name: 'TypeScript', category: 'Backend' },
  { name: 'JavaScript', category: 'Backend' },
  { name: 'Firebase', category: 'database' },
  { name: 'MySQL', category: 'database' },
  // Add more skills as needed
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
const SkillCard = ({ skill, isSelected, position, velocity }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let pos = { ...position };
    let vel = { ...velocity };
    let animationFrameId;

    const animate = () => {
      if (!card || !card.parentElement) return;

      const rect = card.getBoundingClientRect();
      const parentRect = card.parentElement.getBoundingClientRect();

      // Bounce off the edges of the container
      if (rect.right >= parentRect.right || rect.left <= parentRect.left) {
        vel.x *= -1;
      }
      if (rect.bottom >= parentRect.bottom || rect.top <= parentRect.top) {
        vel.y *= -1;
      }

      // Update position according to velocity
      pos.x += vel.x;
      pos.y += vel.y;

      // Apply the new position and scale (if selected)
      card.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${isSelected ? 1.2 : 0.7})`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, velocity, isSelected]);

  return (
    <motion.div
      ref={cardRef}
      className={`absolute p-6 rounded-lg shadow-md ${
        isSelected 
          ? 'bg-gray-500 text-white z-10' 
          : 'bg-gray-500 bg-opacity-50 text-white'
      }`}
      initial={{ scale: 1 }}
    >
      <div className="text-8xl">{skillIcons[skill.name]}</div>
      <h3 className="text-lg font-bold">{skill.name}</h3>
      <p className="text-sm opacity-75">{skill.category}</p>
    </motion.div>
  );
};




// FloatingSkills - main component that renders all skill cards
const FloatingSkills = () => {
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [cardStates, setCardStates] = useState([]);
  const containerRef = useRef(null);

  // Initialize card positions and velocities
  useEffect(() => {
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
  }, []);

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <div ref={containerRef} className="relative w-5/6 h-screen overflow-hidden bg-slate-900
      rounded-lg border-2 border-purple-300">
      {/* Category selection buttons */}
      <div className="absolute top-4 left-4 space-x-2 z-20">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded transition-colors ${
              selectedCategories.has(category)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Render all skill cards */}
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          isSelected={selectedCategories.has(skill.category)}
          position={cardStates[index]?.position || { x: 0, y: 0 }}
          velocity={cardStates[index]?.velocity || { x: 1, y: 1 }}
        />
      ))}
    </div>
  );
};

export default FloatingSkills;