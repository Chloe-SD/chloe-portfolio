import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import meetWebReq from '/public/meetMoment/meetWebReq.png';
import meetCreateNew from '/public/meetMoment/MeetCreateNew.png';
import meetCommonAvail from '/public/meetMoment/MeetCommonAvail.png';

const images = [
  { src: meetWebReq, description: 'Web Request Page' },
  { src: meetCreateNew, description: 'Create New Meeting' },
  { src: meetCommonAvail, description: 'Common Availability' }
];

const MeetMoment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    //Pauses auto-scrolling if the mouse is hovering over the carousel
    if (!isPaused) {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="flex flex-col space-y-5">
      <div 
        className="carousel relative flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity z-10"
        >
          ‹
        </button>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="min-w-full flex-shrink-0 flex flex-col items-center">
              <div className="relative w-full h-64 md:h-96">
                <Image src={image.src} alt="MeetMoment" layout="fill" objectFit="contain" className='rounded-md'/>
              </div>
              <p className="text-white mt-2">{image.description}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity z-10"
        >
          ›
        </button>
      </div>
      <div className="info-section">
        <h2 className="text-2xl font-bold">MeetMoment</h2>
        <p>More in-depth information about the project...</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/your-repo" className="text-blue-500"><button>GitHub</button></a>
          <a href="https://your-deployed-project.com" className="text-blue-500">Live Project</a>
        </div>
      </div>
    </div>
  );
};

export default MeetMoment;