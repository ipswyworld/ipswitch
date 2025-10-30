
import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-[#0B2545] group-hover:text-[#1F6F8B] transition-colors">John Doe</span>
              <span className="hidden sm:block text-sm font-medium text-gray-500">/ Senior Frontend Engineer</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0B2545] transition-colors">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0B2545] transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="#resume" className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200/50 transition-colors">
              Resume
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-[#1F6F8B] rounded-md hover:bg-[#0B2545] transition-colors shadow-sm">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
