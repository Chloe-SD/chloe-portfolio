"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "./project";
import { projectsData } from "./project";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      {/* <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">My Projects</h2> */}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
