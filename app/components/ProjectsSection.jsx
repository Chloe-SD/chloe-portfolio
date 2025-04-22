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

//mechanic shop images
import shop1 from '../../public/mechanicShop/shop1.png';
import shop2 from '../../public/mechanicShop/shop2.png';
import shop3 from '../../public/mechanicShop/shop3.png';
import shop4 from '../../public/mechanicShop/shop4.png';
import shop5 from '../../public/mechanicShop/shop5.png';

//travel agency images
import agency1 from '../../public/travelAgency/agency1.png';
import agency2 from '../../public/travelAgency/agency2.png';
import agency3 from '../../public/travelAgency/agency3.png';
import agency4 from '../../public/travelAgency/agency4.png';

//astute accounting images
import aa1 from '../../public/astuteAccounting/aa1.png';
import aa2 from '../../public/astuteAccounting/aa2.png';
import aa3 from '../../public/astuteAccounting/aa3.png';
import aa4 from '../../public/astuteAccounting/aa4.png';
import aa5 from '../../public/astuteAccounting/aa5.png';
import aa6 from '../../public/astuteAccounting/aa6.png';
import aa7 from '../../public/astuteAccounting/aa7.png';

// Sample project data structure
const projectsData = [
  {
    id: 'astuteAccounting',
    title: 'Astute Accounting',
    subtitle: 'Web App',
    description: 'My team\s SAIT Capstone project, an accounting document management system for an external client',
    thumbnail: aa1, 
    images: [
      aa2, 
      aa3,
      aa4,
      aa5,
      aa6,
      aa7
    ],
    tags: ['NextJS', 'Azure', 'Typescript'],  
    techStack: ['NextJS', 'Azure', 'Typescript', 'PostgreSQL', 'Firebase'],
    challenges: 'Security was top of mind for this project, strict RBAC and hierarchical permissions, separate portals, file encryption, and more. Another challenge was client communication and scope creep.',
    lessons: 'I was the Security Specialist on this project, I learned a ton about secure coding practices, API protections, middleware, and much more! I also developed great team and client communication skills.',
    liveUrl: 'https://astute-accounting.vercel.app/About'
  },
  {
    id: 'quantumdice',
    title: 'Quantum Dice Simulator',
    subtitle: 'Web App',
    description: 'Made for SAIT Emergex TrendCon 2025 - This interactive exploration of Quantum Computing concepts was a blast to make, and even more fun to present!',
    thumbnail: qdPoster, 
    images: [
      qdPoster, 
      qdNat20,
      qdAbout,
      qdAbout2,
      qdProbability
    ],
    tags: ['Python', 'Quantum Computing'],  
    techStack: ['Python', 'Quantum Computing', 'Streamlit'],
    challenges: 'The biggest challenge was ensuring the accuracy of the quantum algorithms while maintaining a user-friendly interface.',
    lessons: 'I learned a lot about emerging trends such as quantum simulations, AI-assisted development, open source scientific tools, and interactive data visualization.',
    githubUrl: 'https://github.com/Chloe-SD/quantum',
    liveUrl: 'https://quantum-dice-simulator.streamlit.app/'
  },
  {
    id: 'meetmoment',
    title: 'MeetMoment',
    subtitle: 'Web & Android App',
    description: 'A cross-platform app to simplify group scheduling and meeting management, with an intuitive interface and personal accounts to remember your meetings for you.',
    thumbnail: meetWebReq, 
    images: [
      meetWebReq, 
      meetCreateNew, 
      meetCommonAvail 
    ],
    tags: ['React', 'Android', 'Firebase'],
    techStack: ['React', 'Next.js', 'Firebase'],
    challenges: 'One of the biggest challenges was synchronizing availability data across platforms while maintaining a responsive user experience.',
    lessons: 'I gained deep insights into state management across platforms and improved my skills in creating intuitive UIs for complex scheduling tasks.',
    githubUrl: 'https://github.com/Chloe-SD/MeetMoment',
    liveUrl: 'https://meetmoment-webapp.vercel.app/'
  },
  {
    id: 'mechanicShop',
    title: 'Mechanic Shop',
    subtitle: 'Windows Native App',
    description: 'A full mechanic shop management app, for service writers to track customer information and vehicles, appointments, repair orders, jobs and technicians.',
    thumbnail: shop1, 
    images: [
      shop1, 
      shop2, 
      shop3,
      shop4,
      shop5 
    ],
    tags: ['.NET MAUI', 'C#', 'SQLite'],
    techStack: ['.NET MAUI', 'C#', 'SQLite'],
    challenges: 'Creating a highly intuitive UI, greying out buttons when not applicable and highlighting workflow steps.',
    lessons: 'I learned a lot about .NET MAUI and C#. This was also my first database connected app, so I learned a lot about database design and integrity.',
    githubUrl: 'https://github.com/Chloe-SD/MechanicShop'
  },
  {
    id: 'travelAgency',
    title: 'Travel Agency',
    subtitle: 'Windows Native App',
    description: 'A flight booking and customer itinerary management app for travel agents',
    thumbnail: agency1, 
    images: [
      agency1, 
      agency2, 
      agency3,
      agency4 
    ],
    tags: ['.NET MAUI', 'C#', 'XAML'],
    techStack: ['.NET MAUI', 'C#', 'XAML'],
    challenges: 'This was my first full application with a UI, it was a crash course in UI and UX design.',
    lessons: 'This is where I learned MVVM architecture. it was a challenging and rewarding experience and the lessons I learned from building this app have influenced all of my interfaces since.',
    githubUrl: 'https://github.com/Chloe-SD/TravelAgencyTeam2'
  },
  // Add more projects here...
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