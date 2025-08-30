// ProjectsSection.jsx - Updated image paths
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// meetMoment images
import meetWebReq from '../../public/meetMoment/meetWebReq.png';
import meetCreateNew from '../../public/meetMoment/MeetCreateNew.png';
import meetCommonAvail from '../../public/meetMoment/MeetCommonAvail.png';

// quantumDice images
import qdPoster from '../../public/quantumDice/qdPoster.png';
import qdNat20 from '../../public/quantumDice/qdNat20.png';
import qdAbout from '../../public/quantumDice/qdAbout.png';
import qdAbout2 from '../../public/quantumDice/qdAbout2.png';
import qdProbability from '../../public/quantumDice/qdProbability.png';


//astute accounting images
import aa1 from '../../public/astuteAccounting/aa1.png';
import aa2 from '../../public/astuteAccounting/aa2.png';
import aa3 from '../../public/astuteAccounting/aa3.png';
import aa4 from '../../public/astuteAccounting/aa4.png';
import aa5 from '../../public/astuteAccounting/aa5.png';
import aa6 from '../../public/astuteAccounting/aa6.png';
import aa7 from '../../public/astuteAccounting/aa7.png';

const projectsData = [
  {
    id: 'astuteAccounting',
    title: 'Astute Accounting',
    subtitle: 'Financial Document Management • External Client Project',
    description:
      'Production-ready document management system built for a local accounting firm. Designed secure REST APIs with RBAC (four permission levels), JWT authentication, and audit trails to protect financial data. Implemented encryption and automated workflows that reduced manual organization by ~80% and cut client onboarding time in half.',
    thumbnail: aa1,
    images: [
      aa1, aa2, aa3, aa4, aa5, aa6, aa7
    ],
    tags: ['Security', 'Client Project', 'Production Ready'],  
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'RBAC'],
    challenges:
      'Balancing strict security requirements with the need for an intuitive and adaptive user experience. Coordinating scope changes and stakeholder feedback over an 8-month timeline while ensuring performance and maintainability.',
    lessons:
      'Deepened expertise in secure API design, RBAC middleware, and data encryption. Learned to manage stakeholder communication in a professional client project and deliver production-quality software through Agile sprints.',
    liveUrl: 'https://astute-accounting.vercel.app/About',
  },
   {
    id: 'meetmoment',
    title: 'MeetMoment',
    subtitle: 'Cross-Platform Scheduling Application • Live Production App',
    description:
      'A scheduling solution that synchronizes availability across web and mobile platforms in real time through a unified backend. Featuring Firebase authentication and real-time data visualizations of group or individual availability.',
    thumbnail: meetWebReq,
    images: [meetWebReq, meetCreateNew, meetCommonAvail],
    tags: ['Cross-Platform', 'Real-time Sync', 'Live Deployment'],
    techStack: ['React', 'Next.js', 'React Native', 'Firebase', 'Realtime DB'],
    challenges:
      'Architecting a consistent user experience across two platforms sharing resources. Designing a complex n-person availability algorithim to help schedule meetings',
    lessons:
      'Gained practical knowledge in cross-platform architecture and state synchronization. Strengthened ability to design backends that serve multiple clients consistently.',
    githubUrl: 'https://github.com/Chloe-SD/MeetMoment',
    liveUrl: 'https://meetmoment-webapp.vercel.app/',
  },
  {
    id: 'quantumdice',
    title: 'Quantum Dice Simulator',
    subtitle: 'Educational Technology Platform • SAIT TrendCon 2025',
    description:
      'An interactive quantum simulation platform built with Qiskit and Streamlit. Translates complex probability concepts into gamified dice rolls and clear visualizations. Presented at SAIT EmergEx TrendCon 2025, where it helped faculty and students engage with quantum computing in an approachable way.',
    thumbnail: qdPoster,
    images: [qdPoster, qdNat20, qdAbout, qdAbout2, qdProbability],
    tags: ['Educational Tech', 'Quantum Computing', 'Data Visualization'],
    techStack: ['Python', 'Streamlit', 'Quantum Algorithms', 'Data Visualization'],
    challenges:
      'Making advanced quantum concepts accessible without oversimplifying the science. Building interactive visualizations that were both accurate and engaging for non-specialist users.',
    lessons:
      'Developed skills in data visualization and educational technology design. Learned how to bridge the gap between scientific accuracy and inclusive user experience, while presenting technical content to diverse audiences.',
    githubUrl: 'https://github.com/Chloe-SD/quantum',
    liveUrl: 'https://quantum-dice-simulator.streamlit.app/',
  },
];


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (project) => {
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