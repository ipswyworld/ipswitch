import React from 'react';
import { skillCategories } from '../constants';
import { type SkillCategory } from '../types';

// Fix: Explicitly type SkillBar as a React Function Component to allow special props like 'key'.
const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-xs font-semibold text-[#1F6F8B]">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-[#1F6F8B] h-2.5 rounded-full" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">Technical Skills</h2>
        <p className="mt-4 text-lg text-gray-600">My ever-growing toolkit for building things on the web.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category: SkillCategory) => (
          <div key={category.category} className="bg-white p-6 rounded-lg shadow-md border border-gray-200/50">
            <h3 className="text-xl font-semibold text-[#0B2545] mb-4">{category.category}</h3>
            <div>
              {category.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
