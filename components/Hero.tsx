
import React from 'react';
import { ArrowRight, Github, Linkedin, Cpu, Database, Layout, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col items-center text-center">
      {/* Interactive Background elements */}
      <div className="absolute top-1/4 left-10 text-indigo-500/10 animate-float opacity-0 lg:opacity-100 blur-[1px]" style={{ animationDelay: '0s' }}>
        <Cpu className="w-24 h-24" />
      </div>
      <div className="absolute bottom-1/4 right-10 text-emerald-500/10 animate-float opacity-0 lg:opacity-100 blur-[1px]" style={{ animationDelay: '2s' }}>
        <Database className="w-24 h-24" />
      </div>

      <div className="space-y-10 max-w-5xl relative z-10 px-4">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-black animate-pulse">
          <Sparkles className="w-4 h-4" />
          CODING THE FUTURE 
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
          Hi, I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400 hover:tracking-normal transition-all duration-700 cursor-pointer">Felix Mathew</span>
        </h1>

        <div className="relative h-12 flex justify-center items-center">
          <p className="text-2xl md:text-3xl text-slate-400 font-medium max-w-2xl mx-auto italic">
            <span className="typing-effect">MERN and Python FullStack Expert & Mentor.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-[2rem] font-black transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:-translate-y-2 active:scale-95"
          >
            EXPLORE WORKS
            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-12 py-6 rounded-[2rem] font-black transition-all hover:border-white/20 hover:-translate-y-2"
          >
            LET'S CHAT
          </a>
        </div>

        <div className="flex items-center justify-center gap-10 pt-16">
          {[
            { Icon: Github, href: 'https://github.com/felixmathew03', label: 'Github' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/felixmathew03', label: 'LinkedIn' },
          ].map(({ Icon, href, label }, i) => (
            <a 
              key={i}
              href={href} 
              target='_blank'
              aria-label={label}
              className="text-slate-500 hover:text-indigo-400 transition-all hover:scale-150 hover:-rotate-12 flex flex-col items-center gap-2"
            >
              <Icon className="w-8 h-8" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100">Profile</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-32 animate-bounce opacity-30">
        <div className="flex flex-col items-center gap-4 text-slate-500 text-xs font-mono uppercase tracking-[0.5em]">
          Scroll
          <div className="w-[2px] h-20 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
