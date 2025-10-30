
import React, { useEffect } from 'react';
import { type Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
          aria-label="Close project details"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative h-64 overflow-hidden rounded-t-lg">
           <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#0B2545]">{project.title}</h2>
          <div className="flex flex-wrap gap-2 my-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm font-semibold bg-mustard-100 text-[#E0A800] bg-[#E0A800]/10 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed my-6">{project.longDescription}</p>

          <div className="flex items-center space-x-4">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-[#0B2545] rounded-md hover:bg-opacity-80 transition-colors shadow-sm">
                <GithubIcon className="h-5 w-5" />
                <span>View Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#1F6F8B] bg-white rounded-md hover:bg-gray-100 transition-colors border border-gray-300 shadow-sm">
                <ExternalLinkIcon className="h-5 w-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
}
