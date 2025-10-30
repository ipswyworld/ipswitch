
import React from 'react';
import { resume } from '../constants';
import { DownloadIcon } from './Icons';
import { type ResumeItem } from '../types';

const ResumeSection = ({ title, items }: { title: string; items: ResumeItem[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-[#0B2545] border-b-2 border-[#1F6F8B] pb-2 mb-6">{title}</h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col sm:flex-row justify-between">
            <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-500 sm:text-right">{item.period}</p>
          </div>
          <p className="text-md font-medium text-[#1F6F8B]">{item.companyOrInstitution}</p>
          <p className="mt-2 text-gray-600">{item.description}</p>
          {item.points && (
             <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                {item.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);


export function Resume() {
  return (
    <section id="resume" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">My Resume</h2>
        <p className="mt-4 text-lg text-gray-600">A detailed look at my professional journey and qualifications.</p>
        <a 
          href="/resume.pdf" 
          download 
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#E0A800] rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <DownloadIcon className="h-5 w-5"/>
          Download PDF
        </a>
      </div>
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-xl border border-gray-200/50">
        <ResumeSection title="Experience" items={resume.experience} />
        <ResumeSection title="Education" items={resume.education} />
      </div>
    </section>
  );
}
