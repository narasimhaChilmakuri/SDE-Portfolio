
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = RESUME_DATA;

  return (
    <section id="projects" className="py-32 bg-zinc-950 scroll-mt-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-2 tracking-tight">Selected Work</h2>
              <p className="text-zinc-500 max-w-xl">
                Engineering scalable solutions for complex problems.
              </p>
            </div>
            <a 
              href="https://github.com/narasimhaChilmakuri" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-2 transition-colors"
            >
              View GitHub Profile <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-zinc-900/30 rounded-2xl border border-zinc-800/50 hover:border-accent-500/30 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full overflow-hidden">
                
                <div className="p-8 flex flex-col h-full z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors p-1"
                          title="View Code"
                        >
                           <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-sm text-zinc-400 leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-800/50">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-zinc-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};