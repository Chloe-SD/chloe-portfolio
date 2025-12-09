// ProjectCard.jsx - Updated Image handling
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "./project";

type ProjectCardProps = {
  project: Project;
  openModal: (project: Project) => void; //method
};

const ProjectCard = ({ project, openModal }: ProjectCardProps) => {
  const { title, subtitle, description, thumbnail, tags } = project;

  return (
    <div
      className="bg-slate-900 bg-opacity-50 border-2 border-fuchsia-200 
                    shadow-md shadow-purple-800 rounded-md overflow-hidden
                    flex flex-col h-full transition-all hover:shadow-lg hover:shadow-purple-700"
    >
      {/* Thumbnail with consistent aspect ratio */}
      <div className="relative w-full pt-[56.25%] p-2">
        {" "}
        {/* 16:9 aspect ratio */}
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute top-0 left-0 object-cover"
          priority
        />
      </div>

      {/* Content section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Tags bar */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags?.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-pink-500 px-2 py-1 rounded-full text-white"
            >
              {tag}
            </span>
          ))}
          {tags?.length > 3 && (
            <span className="text-xs text-gray-400">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-sm text-pink-300 mb-3">{subtitle}</h4>

        <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        <button
          onClick={() => openModal(project)}
          className="mt-auto flex items-center gap-2 bg-pink-500 hover:bg-pink-600 
                    text-white font-bold py-2 px-4 rounded-md transition-colors
                    border-2 border-fuchsia-200 shadow-md shadow-purple-800 self-start"
        >
          View Project <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
