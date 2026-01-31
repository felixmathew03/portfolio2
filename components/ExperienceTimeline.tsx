
import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <>
      {/* Experience Column */}
      <div className="space-y-12">
        <div className="flex items-center gap-6 mb-10">
          <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.1)] group-hover:rotate-6 transition-transform">
            <Briefcase className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Career</h2>
            <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Professional Journey</div>
          </div>
        </div>

        <div className="relative space-y-16 border-l-4 border-dashed border-indigo-500/20 ml-8 pl-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group/exp">
              <div className="absolute -left-[70px] top-0 w-10 h-10 rounded-2xl bg-indigo-500 text-white flex items-center justify-center border-4 border-[#050505] shadow-xl group-hover/exp:scale-125 transition-transform group-hover/exp:rotate-12">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.08] transition-all duration-500 group-hover/exp:-translate-y-2 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm font-black font-mono text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20 w-fit">
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{exp.role}</h3>
                  <div className="text-indigo-400 text-lg font-bold">{exp.company}</div>
                </div>
                <ul className="space-y-4 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-base text-slate-400 leading-relaxed flex items-start gap-4 group/li">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover/li:scale-150 transition-transform"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div className="space-y-12">
        <div className="flex items-center gap-6 mb-10">
          <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:rotate-6 transition-transform">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Growth</h2>
            <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Educational Background</div>
          </div>
        </div>

        <div className="relative space-y-10 border-l-4 border-dashed border-emerald-500/20 ml-8 pl-12">
          {EDUCATIONS.map((edu, idx) => (
            <div key={edu.id} className="relative group/edu">
              <div className="absolute -left-[70px] top-0 w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center border-4 border-[#050505] shadow-xl group-hover/edu:scale-125 transition-transform group-hover/edu:-rotate-12">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-3 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all duration-500 group-hover/edu:-translate-y-2 shadow-2xl">
                <div className="text-sm font-black font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20 w-fit">
                  {edu.period}
                </div>
                <div className="space-y-1 pt-2">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{edu.degree}</h3>
                  <div className="text-slate-400 text-base font-bold italic">{edu.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceTimeline;
