
import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <p className="text-slate-400">Have a project in mind or want to talk tech? Reach out through any of these channels.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500">Email</div>
                <a href="mailto:dizousa@gmail.com" className="text-slate-200 hover:text-indigo-400 transition-colors">felixmathewtt@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500">Phone</div>
                <a href="tel:869954123" className="text-slate-200 hover:text-emerald-400 transition-colors">9539215831</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500">Location</div>
                <div className="text-slate-200">Kottayam, Kerala, India</div>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <Github />, label: 'Github' },
                { icon: <Linkedin />, label: 'LinkedIn' }
              ].map((social) => (
                <button
                  key={social.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 shadow-2xl">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                placeholder="What's this about?"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me more..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button 
                type="button"
                className="w-full group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-600/30"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
