import React from 'react';
import { type Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// Fix: Explicitly type ProjectCard as a React Function Component to allow special props like 'key'.
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border border-gray-200/50"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0B2545] mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-teal-100 text-[#1F6F8B] rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
