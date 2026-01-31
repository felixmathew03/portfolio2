
import React from 'react';
import { ExternalLink, Github, Eye, Code, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  // Triple projects for infinite illusion
  const marqueeProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <div className="space-y-20 py-20">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 text-indigo-400 text-xs font-mono font-black uppercase tracking-[0.4em]">
              <Layers className="w-4 h-4" /> Portfolio Highlights
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
              Bold <br/>
              <span className="text-indigo-600">Creations.</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium">
              A curated selection of architected systems, showcasing my mastery of the <span className="text-slate-200">full-stack pipeline</span>.
              <span className="block mt-4 text-sm font-black text-indigo-500/60 uppercase tracking-widest">Hover to pause and explore deep details</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
             <a href="https://github.com/felixmathew03" className="flex items-center gap-4 bg-white/5 hover:bg-indigo-600 px-10 py-5 rounded-full text-white font-black transition-all border border-indigo-500/20 group shadow-2xl">
              GITHUB ARCHIVE
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Marquee */}
      <div className="relative w-full overflow-hidden py-16 group/marquee">
        <div className="animate-marquee flex gap-12 px-6">
          {marqueeProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="perspective-1000 w-[450px] sm:w-[600px] shrink-0"
            >
              <div className="card-3d preserve-3d group flex flex-col h-full bg-[#0d0d12] border border-white/5 rounded-[3rem] overflow-hidden hover:border-indigo-500/50 hover:bg-[#12121a] transition-all duration-1000 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Interactive Glass Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center gap-6">
                    <a href={project.liveUrl} className="flex items-center gap-4 px-10 py-4 bg-indigo-600 text-white rounded-full font-black text-base hover:bg-indigo-500 hover:scale-110 shadow-2xl transition-all transform -translate-y-8 group-hover:translate-y-0 duration-700">
                      <Eye className="w-5 h-5" />
                      LIVE PREVIEW
                    </a>
                    <a href={project.githubUrl} className="flex items-center gap-4 px-10 py-4 bg-white/10 backdrop-blur-2xl text-white rounded-full font-black text-base border border-white/20 hover:bg-white/20 hover:scale-110 transition-all transform translate-y-8 group-hover:translate-y-0 duration-700">
                      <Code className="w-5 h-5" />
                      CODEBASE
                    </a>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-8 left-8">
                    <div className="px-4 py-2 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 text-[10px] font-black text-indigo-400 uppercase tracking-widest shadow-xl">
                      Featured Build
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tighter leading-none">{project.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed line-clamp-2 italic">"{project.description}"</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-black text-slate-400 bg-white/5 px-4 py-1.5 rounded-xl border border-white/10 group-hover:border-indigo-500/40 transition-all uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-tight">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full shrink-0 group-hover:scale-150 group-hover:animate-pulse"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Projects;
