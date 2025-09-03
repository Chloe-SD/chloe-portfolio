"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

type HobbyKey = "blacksmithing" | "woodworking" | "hiking" | "photography" | "default";

type Hobby = {
  key: HobbyKey;
  label: string;
  img: string; // public/ path, e.g. "/images/about/blacksmithing.jpg"
  alt: string;
  emoji: string;
};

const HOBBIES: Hobby[] = [
  { key: "photography", label: "Photography", img: "/images/about/photography.png", alt: "Chloe taking a photo out on a hike.", emoji: "📷" },
  { key: "default", label: "Default", img: "/images/about/default.png", alt: "Chloe portrait photo.", emoji: "🙂" },
  { key: "blacksmithing", label: "Blacksmithing", img: "/images/about/blacksmithing.png", alt: "Chloe at the forge, working hot steel.", emoji: "⚒️" },
  { key: "woodworking", label: "Woodworking", img: "/images/about/woodworking.png", alt: "Chloe turning a bowl on the wood lathe.", emoji: "🪵" },
  { key: "hiking", label: "Hiking", img: "/images/about/hiking.png", alt: "Chloe hiking with mountains and waterfall in the background.", emoji: "🥾" },
];

const hobbyOrder: HobbyKey[] = ["default", "blacksmithing", "woodworking", "hiking", "photography"];

const AboutSection: React.FC = () => {
  const [active, setActive] = useState<HobbyKey>("default");
  const prefersReducedMotion = useReducedMotion();

  const idx = hobbyOrder.indexOf(active);
  const next = useCallback(() => setActive(hobbyOrder[(idx + 1) % hobbyOrder.length]), [idx]);
  const prev = useCallback(() => setActive(hobbyOrder[(idx - 1 + hobbyOrder.length) % hobbyOrder.length]), [idx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = HOBBIES.find((h) => h.key === active)!;

  return (
    <section id="about" className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">About Chloe</h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <p className="text-lg leading-relaxed">
              I&apos;m a Canada based software developer focused on building accessible, fast, and reliable web experiences.
              I love turning messy real-world requirements into clean and pleasant human-centered experiences. On
              projects, I think in journeys: how a person discovers, uses, and trusts your product, and what we
              can do to make each step clearer and kinder.
            </p>

            <p className="mt-4 text-base text-slate-200">
              My background blends hands-on craft experience with modern web dev. I bring that “measure twice, cut once”
              mindset to code. I prioritize inclusive design, security, and simple architectures you can evolve
              over time.
            </p>

            {/* Hobby chips */}
            <div className="mt-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                <Camera className="h-4 w-4" aria-hidden />
                <span>psst… click a hobby ↓</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {HOBBIES.filter((h) => h.key !== "default").map((h) => {
                  const activeBtn = active === h.key;
                  return (
                    <button
                      key={h.key}
                      type="button"
                      onClick={() => setActive(h.key)}
                      aria-pressed={activeBtn}
                      className={`rounded-xl border px-3 py-1.5 text-sm transition-colors inline-flex items-center gap-2
                        ${activeBtn ? "border-fuchsia-400 bg-fuchsia-50 text-fuchsia-900" : "border-rose-200 hover:bg-rose-50"}`}
                    >
                      <span aria-hidden className="text-base">{h.emoji}</span>
                      <span className="sr-only">{h.label} photo</span>
                      <span aria-hidden>{h.label}</span>
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setActive("default")}
                  aria-pressed={active === "default"}
                  className={`rounded-xl border px-3 py-1.5 text-sm transition-colors inline-flex items-center gap-2
                    ${active === "default" ? "border-fuchsia-400 bg-fuchsia-50 text-fuchsia-900" : "border-rose-200 hover:bg-rose-50"}`}
                >
                  <span aria-hidden className="text-base">🔄</span>
                  <span className="sr-only">Reset to portrait</span>
                  <span aria-hidden>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: photo switcher (Next/Image + motion wrapper) */}
          <div className="relative max-w-md mx-20">
            <div
              className="overflow-hidden rounded-3xl border border-fuchsia-400 bg-slate-800/50 backdrop-blur-sm"
              aria-live="polite"
            >
              {/* Make this div the aspect-ratio & positioning context for fill images */}
              <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.img}
                      alt={current.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority={current.key === "default"}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-3 text-sm text-slate-300">
              {active === "default" ? "Chloe" : `${current.emoji} ${current.label}`}
              <span className="sr-only"> photo selected.</span>
            </div>

            {/* <div className="mt-1 text-xs text-slate-400">Tip: use ← / → to switch photos.</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;