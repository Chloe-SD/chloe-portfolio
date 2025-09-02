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
    description: 'Production-ready document management platform with secure architecture. Built secure REST APIs with RBAC, JWT authentication, and comprehensive audit trails for financial data protection.',
    thumbnail: aa1, 
    images: [
      aa1, aa2, aa3, aa4, aa5, aa6, aa7
    ],
    tags: ['Enterprise Security', 'Client Project', 'Production Ready'],  
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'JWT', 'RBAC'],
    challenges: 'Implementing the neccesary security for sensitive financial data while maintaining an intuitive user experience. Managing stakeholder requirements and scope in an 8-month client project.',
    lessons: 'Gained solid understanding of security-first development, including role-based access control, secure API design, and heirarchical permission systems. Developed professional client communication and project management skills.',
    liveUrl: 'https://astute-accounting.vercel.app/About'
  },
  {
    id: 'meetmoment',
    title: 'MeetMoment',
    subtitle: 'Cross-Platform Scheduling Application • Live Production App',
    description: 'Full-stack scheduling solution with complex n-person availability algorithms and real-time synchronization. Built with unified backend serving both web and Android platforms.',
    thumbnail: meetWebReq, 
    images: [
      meetWebReq, 
      meetCreateNew, 
      meetCommonAvail 
    ],
    tags: ['Cross-Platform', 'Real-time Sync', 'Live Deployment'],
    techStack: ['React', 'Next.js', 'React Native', 'Firebase', 'Real-time Database'],
    challenges: 'Architecting cross-platform data synchronization for complex scheduling algorithms while maintaining responsive performance across web and mobile platforms.',
    lessons: 'Mastered cross-platform architecture patterns, real-time data management, and building production-ready applications that handle concurrent users and complex state synchronization.',
    githubUrl: 'https://github.com/Chloe-SD/MeetMoment',
    liveUrl: 'https://meetmoment-webapp.vercel.app/'
  },
  {
    id: 'quantumdice',
    title: 'Quantum Dice Simulator',
    subtitle: 'Educational Technology Platform • SAIT TrendCon 2025',
    description: 'Interactive quantum computing simulation demonstrating probability concepts through gamified learning. Presented to faculty and students as an example of emerging educational technology trends.',
    thumbnail: qdPoster, 
    images: [
      qdPoster, qdNat20, qdAbout, qdAbout2, qdProbability
    ],
    tags: ['Educational Tech', 'Quantum Computing', 'Data Visualization'],  
    techStack: ['Python', 'Streamlit', 'Quantum Algorithms', 'Data Visualization'],
    challenges: 'Translating complex quantum computing concepts into intuitive, interactive visualizations while maintaining scientific accuracy.',
    lessons: 'Explored cutting-edge educational technology, quantum simulation principles, and effective data visualization for complex scientific concepts.',
    githubUrl: 'https://github.com/Chloe-SD/quantum',
    liveUrl: 'https://quantum-dice-simulator.streamlit.app/'
  }
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