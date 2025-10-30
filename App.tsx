
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { type Project } from './types';
import { projects } from './constants';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-slate-50 text-[#0B2545]">
      <Header />
      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects projects={projects} onProjectClick={handleOpenProject} />
        <Resume />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={handleCloseProject} />
      )}
    </div>
  );
}

export default App;
