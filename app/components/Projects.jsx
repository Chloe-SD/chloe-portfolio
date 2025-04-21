import React, { useState } from 'react';
import Image from 'next/image';
import meetWebReq from '/public/MeetMoment/meetWebReq.png';
import MeetMoment from './meetMoment';

const projectData = [
  {
    headline: 'MeetMoment',
    subHeadline: 'Web / Android App',
    info: 'A cross-platform app to simplify group scheduling and meeting management, with an intuitive interface and personal accounts to remember your meetings for you.',
    image: meetWebReq,
    DetailComponent: MeetMoment,
  },
  // Add more project objects here
];

// ProjectCard Component
const ProjectCard = ({ headline, subHeadline, info, image, DetailComponent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openDetail = () => {
    setIsExpanded(true);
  };

  const closeDetail = () => {
    setIsExpanded(false);
  };

  return (
    <div className="flex flex-col bg-slate-900 bg-opacity-50 
    border-2 border-fuchsia-200 shadow-md shadow-purple-800 rounded-md 
    p-5 space-y-5 items-center justify-center">
      
      {!isExpanded ? (
        <>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='flex flex-col md:w-1/3 space-y-8 px-5 mt-5 md:mt-0 justify-center'>
              <h3 className="text-2xl font-bold text-center">{headline}<br/>{subHeadline}</h3>
              <p>{info}</p>
              <button onClick={openDetail} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md 
                  transition-colors text-sm md:text-base border-2 border-fuchsia-200
                  shadow-md shadow-purple-800">
                See More
              </button>
            </div>

            <div className='md:w-2/3'>
              <Image src={image} alt={headline} max-width={500} max-height={500} className='rounded-md
              border-2 border-fuchsia-200 shadow-md shadow-purple-800'/>
            </div>
        </div>
          
        </>
      ) : (
        <>
          <DetailComponent />
          <button onClick={closeDetail} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md 
              transition-colors text-sm md:text-base border-2 border-fuchsia-200
              shadow-md shadow-purple-800 mt-5">
            Show Less
          </button>
        </>
      )}
    </div>
  );
};

// Projects Component
const Projects = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          headline={project.headline}
          subHeadline={project.subHeadline}
          info={project.info}
          image={project.image}
          DetailComponent={project.DetailComponent}
        />
      ))}
    </div>
  );
};

export default Projects;