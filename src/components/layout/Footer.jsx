import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <div className="w-7 h-7 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <span>Aryan Priyadarshi</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            {PORTFOLIO_DATA.personal.degree} • {PORTFOLIO_DATA.personal.university}
          </p>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} Aryan Priyadarshi. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
