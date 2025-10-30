
import React from 'react';

export function Hero() {
  return (
    <section id="home" className="py-24 sm:py-32 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B2545] leading-tight tracking-tighter">
        I build dependable systems and beautiful user experiences.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
        A senior frontend engineer with a passion for crafting performant, accessible, and delightful web applications from concept to deployment.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#projects" 
          className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-[#0B2545] rounded-md hover:bg-[#1F6F8B] transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Projects
        </a>
        <a 
          href="#resume" 
          className="w-full sm:w-auto px-8 py-3 text-base font-medium text-[#0B2545] bg-white rounded-md hover:bg-gray-100 transition-colors duration-300 border border-gray-300 shadow-sm"
        >
          See My Resume
        </a>
      </div>
    </section>
  );
}
