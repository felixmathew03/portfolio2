
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="text-2xl font-bold tracking-tight text-white">Felix Mathew</div>
        <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Kerala
        </div>
        <div className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Felix. All rights reserved. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
