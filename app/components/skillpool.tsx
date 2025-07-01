"use client";
import React, { useState, useEffect, useRef, RefObject } from 'react';
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

// --- Types ---
type Skill = {
  name: string;
  category: string;
};

type CardState = {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
};

type ContainerSize = { width: number; height: number };

// --- Data ---
const skills: Skill[] = [
  // ...existing skills...
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'C Sharp', category: 'Languages' },
  { name: 'HTML 5', category: 'Languages' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: '.NET MAUI', category: 'Frameworks' },
  { name: 'TailWind', category: 'Frameworks' },
  { name: 'SQLite', category: 'Database'},
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'FireStore', category: 'Database' },
  { name: 'Azure', category: 'Platforms' },
  { name: 'AWS', category: 'Platforms' },
  { name: 'Firebase', category: 'Platforms' },
  { name: 'Docker', category: 'Platforms' },
  { name: 'Vercel', category: 'Platforms' },
];

const skillIcons: Record<string, React.ReactNode> = {
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
};

const categories = Array.from(new Set(skills.map(skill => skill.category)));

// --- SkillCard ---
interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  position: { x: number; y: number };
  index: number;
  gridPos?: { row: number; col: number };
  cardSize: number;
  offset: { x: number; y: number };
  iconSize: string;
  textSize: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill, isSelected, position, index, gridPos, cardSize, offset, iconSize, textSize
}) => (
  <motion.div
    className={`absolute ${cardSize === 112 ? 'w-28 h-28' : cardSize === 144 ? 'w-36 h-36' : 'w-48 h-48'} p-2 rounded-lg shadow-md flex flex-col items-center justify-center ${
      isSelected 
        ? 'bg-slate-700 text-white z-10 border-2 border-fuchsia-200' 
        : 'bg-gray-500 bg-opacity-50 text-white'
    }`}
    initial={isSelected ? { scale: 0.7, opacity: 0 } : { scale: 0.7, x: position.x, y: position.y }}
    animate={isSelected && gridPos
      ? { 
          scale: 1, 
          opacity: 1, 
          x: offset.x + gridPos.col * cardSize * 1.07,
          y: offset.y + gridPos.row * cardSize * 1.07,
        }
      : { scale: 0.7, x: position.x, y: position.y }
    }
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className={`${iconSize} mb-2`}>{skillIcons[skill.name]}</div>
    <h3 className={`${textSize} font-bold text-center`}>{skill.name}</h3>
  </motion.div>
);

// --- FloatingSkills ---
const FloatingSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cardStates, setCardStates] = useState<CardState[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<ContainerSize>({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  // Responsive card size
  const getCardSize = () => {
    if (windowWidth <= 640) return 112;
    if (windowWidth <= 1024) return 144;
    return 192;
  };

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
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(prev => (prev === category ? null : category));
  };

  // Animate floating cards
  useEffect(() => {
    const animateFloatingCards = () => {
      setCardStates(prevStates =>
        prevStates.map(state => {
          const newX = state.position.x + state.velocity.x;
          const newY = state.position.y + state.velocity.y;
          let newVelocityX = state.velocity.x;
          let newVelocityY = state.velocity.y;
          if (newX <= 0 || newX >= containerSize.width - 100) newVelocityX *= -1;
          if (newY <= 0 || newY >= containerSize.height - 100) newVelocityY *= -1;
          return {
            position: { x: newX, y: newY },
            velocity: { x: newVelocityX, y: newVelocityY },
          };
        })
      );
    };
    const intervalId = setInterval(animateFloatingCards, 50);
    return () => clearInterval(intervalId);
  }, [containerSize]);

  // --- Simplified grid math ---
  const cardSize = getCardSize();
  const selectedSkills = selectedCategory === null ? [] : skills.filter(skill => skill.category === selectedCategory);
  const totalSelected = selectedSkills.length;
  // Use Math.ceil(sqrt(n)) for columns, then fill rows
  const gridColumns = totalSelected > 0 ? Math.ceil(Math.sqrt(totalSelected)) : 1;
  const gridRows = totalSelected > 0 ? Math.ceil(totalSelected / gridColumns) : 1;
  const gridWidth = cardSize * gridColumns * 1.07;
  const gridHeight = cardSize * gridRows * 1.07;
  const offset = {
    x: (containerSize.width - gridWidth) / 2,
    y: (containerSize.height - gridHeight) / 2,
  };

  // Responsive icon/text size
  const iconSize = windowWidth <= 640 ? 'text-4xl' : windowWidth <= 1024 ? 'text-5xl' : 'text-7xl';
  const textSize = windowWidth <= 640 ? 'text-xs' : windowWidth <= 1024 ? 'text-sm' : 'text-base';

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
                relative group ${selectedCategory === category ? 'bg-fuchsia-700 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
              aria-pressed={selectedCategory === category}
              type="button"
            >
              {category}
              {/* Pulse animation indicator */}
              {selectedCategory === null && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-fuchsia-500"></span>
                </span>
              )}
            </button>
          ))}
        </div>
        {selectedCategory === null && (
          <p className="text-center text-fuchsia-200 text-sm mt-2 animate-pulse">
            Click a category above to explore my skills
          </p>
        )}
      </div>
      <div
        ref={containerRef}
        className="flex-grow relative overflow-hidden bg-slate-900
          bg-opacity-50 rounded-b-lg border-b-2 border-x-2 border-fuchsia-200"
        style={{ minHeight: '300px' }}
      >
        <AnimatePresence>
          {skills.map((skill, index) => {
            const isSelected = selectedCategory === skill.category;
            // For selected skills, calculate grid position
            let gridPos: { row: number; col: number } | undefined = undefined;
            if (isSelected && selectedCategory) {
              const selectedIndex = selectedSkills.findIndex(s => s.name === skill.name);
              if (selectedIndex !== -1) {
                gridPos = {
                  row: Math.floor(selectedIndex / gridColumns),
                  col: selectedIndex % gridColumns,
                };
              }
            }
            return (
              <SkillCard
                key={skill.name}
                skill={skill}
                isSelected={isSelected}
                position={cardStates[index]?.position || { x: 0, y: 0 }}
                index={index}
                gridPos={gridPos}
                cardSize={cardSize}
                offset={offset}
                iconSize={iconSize}
                textSize={textSize}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingSkills;