import React from 'react';
import { RESUME_DATA } from '../constants';

export const Skills: React.FC = () => {
  const { skills } = RESUME_DATA;

  return (
    <section id="skills" className="py-32 bg-zinc-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-16 text-center tracking-tight">
            Technical Proficiency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {skills.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-widest pl-1">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800/50 rounded text-sm text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};