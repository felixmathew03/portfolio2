
import React from 'react';
import { User, Briefcase, GraduationCap, MapPin, Code, Zap, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: MapPin, label: 'Location', value: 'Kottayam, Kerala', color: 'text-indigo-500' },
    { icon: Briefcase, label: 'Current Role', value: 'Full Stack Trainer', color: 'text-emerald-500' },
    { icon: Globe, label: 'Environment', value: 'On-site', color: 'text-blue-500' },
    { icon: Cpu, label: 'Focus', value: 'Scalable Architecture', color: 'text-orange-500' },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center px-4">
      <div className="relative group perspective-1000 order-2 lg:order-1">
        <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-25 transition-all duration-1000"></div>
        
        <div className="relative card-3d rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-1000 hover:rotate-2 group-hover:scale-[1.05]">
          <img 
            src="https://picsum.photos/seed/dizuosa_dev/1200/1200" 
            alt="DiZuosa Dev" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
             <div className="p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:translate-y-full transition-transform duration-700">
               <div className="text-xl font-black text-white italic">"Logic meets Design."</div>
             </div>
          </div>
        </div>
        
        {/* Animated Orbs */}
        <div className="absolute -bottom-12 -left-12 p-8 bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
          <Code className="w-10 h-10 text-indigo-500 mb-2" />
          <div className="text-xs font-black text-white uppercase tracking-tighter">Clean Code</div>
        </div>
        <div className="absolute -top-12 -right-12 p-8 bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
          <Zap className="w-10 h-10 text-emerald-500 mb-2" />
          <div className="text-xs font-black text-white uppercase tracking-tighter">Elegant Solutions</div>
        </div>
      </div>

      <div className="space-y-12 order-1 lg:order-2">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold tracking-[0.2em] uppercase">
            Discovery Phase
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">
            Elevating Web <br/>
            <span className="text-indigo-500">Experiences.</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          
          <div className="space-y-6">
            <p className="text-slate-400 text-xl leading-relaxed">
              I'm <span className="text-slate-100 font-black">Felix</span>, a dedicated Full Stack Engineer and Educator at Synnefo Solutions. My journey is defined by a relentless pursuit of engineering excellence and a passion for teaching.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in transforming complex business requirements into high-performance, maintainable web ecosystems. When I'm not architecting systems, I'm mentoring the next wave of talent in Kochi, Kerala.
            </p>
          </div>
        </div>

        <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-500 cursor-default"
            >
              <div className={`p-4 rounded-2xl bg-white/5 ${stat.color} group-hover:scale-125 transition-transform duration-500`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500 tracking-widest font-bold">{stat.label}</div>
                <div className="text-base font-black text-slate-200">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
