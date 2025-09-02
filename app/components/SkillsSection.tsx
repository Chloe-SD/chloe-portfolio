"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

import CsharpOriginal from "react-devicons/csharp/original";
import PythonOriginal from "react-devicons/python/original";
import TailwindcssOriginalWordmark from "react-devicons/tailwindcss/original-wordmark";
import JavaOriginal from "react-devicons/java/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import FirebasePlain from "react-devicons/firebase/plain";
import ReactOriginal from "react-devicons/react/original";
import NodejsOriginal from "react-devicons/nodejs/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import Css3Original from "react-devicons/css3/original";
import Html5Original from "react-devicons/html5/original";
import MysqlOriginal from "react-devicons/mysql/original";
import SqliteOriginal from "react-devicons/sqlite/original";
import IconPostgresql from "react-devicons/postgresql/original";
import AzureOriginal from "react-devicons/azure/original";
import DockerOriginal from "react-devicons/docker/original";
import { RiVercelLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";

type Category = "Frontend" | "Backend" | "Databases" | "Security" | "Cloud/DevOps";
type Skill = { name: string; category: Category };

const SKILL_GROUPS: Record<Category, string[]> = {
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "TypeScript", "JavaScript", "Python", "Java", "C#"],
  Databases: ["PostgreSQL", "MySQL", "SQLite", "Firestore"],
  Security: [], // kept for future use
  "Cloud/DevOps": ["Azure", "AWS", "Docker", "Vercel", "Firebase"],
};

const ALL_CATEGORIES = (Object.keys(SKILL_GROUPS) as Category[]).filter(
  (c) => SKILL_GROUPS[c].length > 0
);

const SKILLS_FOR_POOL: Skill[] = ALL_CATEGORIES.flatMap((cat) =>
  SKILL_GROUPS[cat].map((name) => ({ name, category: cat }))
);

const skillIcons: Record<string, React.ReactNode | null> = {
  JavaScript: <JavascriptOriginal />,
  TypeScript: <TypescriptOriginal />,
  Python: <PythonOriginal />,
  Java: <JavaOriginal />,
  "C#": <CsharpOriginal />,
  React: <ReactOriginal />,
  "React Native": <ReactOriginal />,
  "Next.js": <NextjsOriginal />,
  "Tailwind CSS": <TailwindcssOriginalWordmark />,
  HTML5: <Html5Original />,
  CSS3: <Css3Original />,
  "Node.js": <NodejsOriginal />,
  PostgreSQL: <IconPostgresql />,
  MySQL: <MysqlOriginal />,
  SQLite: <SqliteOriginal />,
  Firestore: <FirebasePlain />,
  Azure: <AzureOriginal />,
  AWS: <FaAws className="text-black" />,
  Docker: <DockerOriginal />,
  Vercel: <RiVercelLine />,
  Firebase: <FirebasePlain />,
};

const SectionHeader = () => (
  <header className="mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
  </header>
);

const CategoryCard: React.FC<{ title: Category; items: string[] }> = ({ title, items }) => (
  <div className="rounded-3xl border border-fuchsia-400 p-5 bg-slate-800/50 backdrop-blur-sm">
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="flex flex-wrap gap-2">
      {items.map((label) => (
        <li
          key={`${title}-${label}`}
          className="rounded-full border border-rose-200 px-3 py-1 text-sm inline-flex items-center gap-2"
        >
          {skillIcons[label] && <span className="text-base" aria-hidden>{skillIcons[label]}</span>}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PingDot: React.FC = () => (
  <span className="relative inline-flex mr-2">
    <span className="absolute inline-flex h-2 w-2 rounded-full bg-fuchsia-400 opacity-75 animate-ping" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
  </span>
);

type CardState = { position: { x: number; y: number }; velocity: { x: number; y: number } };
type ContainerSize = { width: number; height: number };

const FloatingPool: React.FC<{ paused: boolean }> = ({ paused }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [cardStates, setCardStates] = useState<CardState[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<ContainerSize>({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  const getCardSize = () => (windowWidth <= 640 ? 112 : windowWidth <= 1024 ? 144 : 192);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setContainerSize({ width, height });
    });

    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("resize", handleResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const size = getCardSize();
    const initial = SKILLS_FOR_POOL.map(() => ({
      position: {
        x: Math.random() * Math.max(1, containerSize.width - size),
        y: Math.random() * Math.max(1, containerSize.height - size),
      },
      velocity: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
    }));
    setCardStates(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize.width, containerSize.height, windowWidth]);

  useEffect(() => {
    if (paused) return;
    const tick = () => {
      setCardStates((prev) =>
        prev.map((s) => {
          const size = getCardSize();
          const nx = s.position.x + s.velocity.x;
          const ny = s.position.y + s.velocity.y;
          let vx = s.velocity.x;
          let vy = s.velocity.y;

          if (nx <= 0 || nx >= containerSize.width - size) vx *= -1;
          if (ny <= 0 || ny >= containerSize.height - size) vy *= -1;

          return {
            position: {
              x: Math.max(0, Math.min(nx, containerSize.width - size)),
              y: Math.max(0, Math.min(ny, containerSize.height - size)),
            },
            velocity: { x: vx, y: vy },
          };
        })
      );
    };
    const id = setInterval(tick, 50);
    return () => clearInterval(id);
  }, [containerSize, windowWidth, paused]);

  const cardSize = getCardSize();
  const selectedSkills = selectedCategory
    ? SKILLS_FOR_POOL.filter((s) => s.category === selectedCategory)
    : [];
  const totalSelected = selectedSkills.length;

  const gridColumns = windowWidth <= 640 ? 2 : totalSelected > 0 ? Math.ceil(Math.sqrt(totalSelected)) : 1;
  const gridRows = totalSelected > 0 ? Math.ceil(totalSelected / gridColumns) : 1;
  const gridWidth = cardSize * gridColumns * 1.07;
  const gridHeight = cardSize * gridRows * 1.07;
  const offset = { x: (containerSize.width - gridWidth) / 2, y: (containerSize.height - gridHeight) / 2 };

  const iconSize = windowWidth <= 640 ? "text-4xl" : windowWidth <= 1024 ? "text-5xl" : "text-7xl";
  const textSize = windowWidth <= 640 ? "text-xs" : windowWidth <= 1024 ? "text-sm" : "text-base";

  // ~62vh on phones, otherwise fixed floor; expand if the centered grid needs more height
  const baseMinHeight =
    windowWidth <= 640
      ? Math.max(400, Math.floor((typeof window !== "undefined" ? window.innerHeight : 700) * 0.62))
      : windowWidth <= 1024
      ? 460
      : 520;
  const gridMinHeight = selectedCategory ? Math.ceil(gridHeight + 96) : 0;
  const minHeight = Math.max(baseMinHeight, gridMinHeight);

  return (
    <div className="flex flex-col h-full w-full select-none">
      <div className="flex-none bg-slate-900 bg-opacity-50 rounded-t-lg border-t-2 border-x-2 border-fuchsia-200">
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {ALL_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base rounded-md border-2 border-fuchsia-200 shadow-md shadow-purple-800 transition-colors
                ${active ? "bg-slate-700 text-white" : "bg-rose-500/50 text-white hover:bg-pink-600"}`}
                aria-pressed={active}
                type="button"
              >
                {selectedCategory === null && <PingDot />}
                {category}
              </button>
            );
          })}
        </div>

        {selectedCategory === null ? (
          <p className="text-center text-fuchsia-200 text-sm mt-2">
            Pick a category—selected skills will snap to the center.
          </p>
        ) : (
          <div className="flex items-center justify-center gap-3 py-2">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center rounded-xl border border-rose-200 px-3 py-1 text-sm hover:bg-rose-50"
            >
              Clear selection
            </button>
          </div>
        )}
      </div>

      <div
        ref={containerRef}
        className="flex-grow relative overflow-hidden bg-slate-900 bg-opacity-50 rounded-b-lg border-b-2 border-x-2 border-fuchsia-200"
        style={{ minHeight }}
      >
        <AnimatePresence>
          {SKILLS_FOR_POOL.map((skill, index) => {
            const isSelected = selectedCategory === skill.category;

            let gridPos: { row: number; col: number } | undefined;
            if (isSelected && selectedCategory) {
              const i = selectedSkills.findIndex((s) => s.name === skill.name);
              if (i !== -1) gridPos = { row: Math.floor(i / gridColumns), col: i % gridColumns };
            }

            const state = cardStates[index] || { position: { x: 0, y: 0 } };

            return (
              <motion.div
                key={`${skill.name}-${index}`}
                className={`absolute ${
                  cardSize === 112 ? "w-28 h-28" : cardSize === 144 ? "w-36 h-36" : "w-48 h-48"
                } rounded-lg shadow-md flex flex-col items-center justify-center ${
                  isSelected ? "bg-slate-700 text-white z-10 border-2 border-fuchsia-200" : "bg-gray-500/50 text-white"
                }`}
                initial={
                  isSelected ? { scale: 0.7, opacity: 0 } : { scale: 0.7, x: state.position.x, y: state.position.y }
                }
                animate={
                  isSelected && gridPos
                    ? {
                        scale: 1,
                        opacity: 1,
                        x: offset.x + gridPos.col * cardSize * 1.07,
                        y: offset.y + gridPos.row * cardSize * 1.07,
                      }
                    : { scale: 0.7, x: state.position.x, y: state.position.y }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`${iconSize} mb-2`}>
                  {skillIcons[skill.name] ?? <span>{skill.name[0]}</span>}
                </div>
                <h3 className={`${textSize} font-bold text-center`}>{skill.name}</h3>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [mode, setMode] = useState<"boring" | "bouncy">("boring");
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader />

        <div className="mb-6 flex items-center gap-3">
          <span className="text-sm font-medium">Organize skills</span>
          <div className="inline-flex rounded-xl border border-rose-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setMode("boring")}
              aria-pressed={mode === "boring"}
              className={`px-3 py-1.5 text-sm ${mode === "boring" ? "bg-fuchsia-50 text-fuchsia-900" : "hover:bg-rose-50"}`}
            >
              Boring
            </button>
            <button
              type="button"
              onClick={() => setMode("bouncy")}
              aria-pressed={mode === "bouncy"}
              className={`px-3 py-1.5 text-sm border-l border-rose-200 ${
                mode === "bouncy" ? "bg-fuchsia-50 text-fuchsia-900" : "hover:bg-rose-50"
              }`}
            >
              Bouncy
            </button>
          </div>

          {mode === "bouncy" && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="ml-2 inline-flex items-center gap-2 rounded-xl border border-rose-200 px-3 py-1.5 text-sm hover:bg-rose-50"
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
              {paused ? "Resume Motion" : "Pause Motion"}
            </button>
          )}
        </div>

        {mode === "boring" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_CATEGORIES.map((title) => (
              <CategoryCard key={title} title={title} items={SKILL_GROUPS[title]} />
            ))}
          </div>
        ) : (
          <div className="mt-5">
            <FloatingPool paused={paused} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;