
import React from 'react';
import { TECH_STACK } from '../constants';
import { Layers, Rocket, ShieldCheck, Zap, Github } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <div className="space-y-20 px-4">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Skill Set</h2>
        <p className="text-slate-400 text-xl">The stack I use to deliver modern, robust, and scalable digital solutions.</p>
        <div className="flex justify-center items-center gap-3">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-indigo-500"></div>
          <SparkleIcon />
          <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TECH_STACK.map((group, idx) => (
          <div 
            key={group.category} 
            className="reveal group p-8 rounded-[2.5rem] bg-[#0d0d12] border border-white/5 hover:border-indigo-500/20 transition-all duration-700 hover:bg-[#12121a] hover:-translate-y-3 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:rotate-[360deg] transition-transform duration-1000">
                {idx === 0 && <Layers className="w-6 h-6" />}
                {idx === 1 && <Rocket className="w-6 h-6" />}
                {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                {idx === 3 && <Zap className="w-6 h-6" />}
              </div>
              <h3 className="text-sm font-mono font-black uppercase tracking-[0.3em] text-indigo-400">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="px-4 py-2.5 rounded-2xl bg-[#050505] border border-white/10 text-sm font-bold text-slate-400 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all cursor-pointer transform hover:scale-110 active:scale-95"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Visual Stats Card */}
      <div className="reveal relative group overflow-hidden p-12 rounded-[3rem] bg-gradient-to-br from-indigo-950/20 via-[#0d0d12] to-transparent border border-white/5 shadow-inner">
        <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:rotate-[30deg] transition-transform duration-1000">
          <Github className="w-64 h-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-center md:text-left">
            <div className="text-sm font-mono text-emerald-400 flex items-center gap-3 justify-center md:justify-start font-black tracking-widest">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              DEVELOPER ACTIVITY
            </div>
            <h3 className="text-5xl font-black text-white tracking-tighter">500+ CONTRIBUTIONS</h3>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">Maintaining a consistent presence in the open-source and professional dev landscape.</p>
          </div>
          
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-3 p-6 bg-black/40 rounded-3xl backdrop-blur-md border border-white/5">
            {[...Array(48)].map((_, i) => (
              <div 
                key={i} 
                className={`w-5 h-5 rounded-[4px] transition-all hover:scale-150 cursor-help ${
                  i % 7 === 0 ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse' : 
                  i % 4 === 0 ? 'bg-indigo-800' : 
                  i % 3 === 0 ? 'bg-slate-700' : 'bg-slate-900'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SparkleIcon = () => (
  <svg className="w-8 h-8 text-indigo-500 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" />
  </svg>
);

export default TechStack;
