
import React from 'react';
import { type Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function Projects({ projects, onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg text-gray-600">A selection of projects that showcase my passion for building.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => onProjectClick(project)} 
          />
        ))}
      </div>
    </section>
  );
}
