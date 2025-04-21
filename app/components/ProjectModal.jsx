// ProjectModal.jsx - With outside click to close
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalContentRef = useRef(null);
  
  // Handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
        onClose();
      }
    }
    
    // Only add listener if the modal is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Add escape key functionality too
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") onClose();
      });
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  const { 
    title, 
    subtitle, 
    description, 
    images, 
    techStack, 
    challenges, 
    lessons, 
    githubUrl, 
    liveUrl 
  } = project;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div 
        ref={modalContentRef}
        className="bg-slate-900 border-2 border-fuchsia-200 shadow-lg shadow-purple-800 
                 rounded-md w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 
                   p-2 rounded-full text-white z-10 transition-all hover:bg-pink-600
                   flex items-center justify-center"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        {/* Image gallery */}
        {images && images.length > 0 && (
          <div className="relative w-full">
            <div className="aspect-video relative">
              <Image 
                src={images[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-contain"
                priority
              />
            </div>
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 
                           bg-black bg-opacity-50 hover:bg-opacity-70 text-white 
                           p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                           bg-black bg-opacity-50 hover:bg-opacity-70 text-white 
                           p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Image indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 
                              flex space-x-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-2 h-2 rounded-full ${
                        i === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-pink-300">{subtitle}</p>
          </div>
          
          <p className="text-gray-200 mb-6">{description}</p>
          
          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-slate-800 text-gray-200 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Challenges */}
          {challenges && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Challenges</h3>
              <p className="text-gray-300">{challenges}</p>
            </div>
          )}
          
          {/* Lessons Learned */}
          {lessons && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">What I Learned</h3>
              <p className="text-gray-300">{lessons}</p>
            </div>
          )}
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 
                         text-white px-4 py-2 rounded-md transition-colors"
              >
                <Github size={18} /> GitHub Repo
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 
                         text-white px-4 py-2 rounded-md transition-colors
                         border-2 border-fuchsia-200"
              >
                <ExternalLink size={18} /> View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;