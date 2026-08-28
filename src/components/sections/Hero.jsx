import React from 'react';
import { ArrowDown, FileText, Sparkles, Code, Cpu, Database, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wide shadow-glow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-gradient-emerald">Aryan</span>.
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight">
            {PORTFOLIO_DATA.personal.role}
          </h2>
        </div>

        {/* Short Original Bio */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          I am a B.Tech Computer Science & Engineering (AI & ML) student at Lovely Professional University. I bridge the gap between multimodal IoT bio-signal processing, machine learning models, and modern full-stack web platforms.
        </p>

        {/* Quick Tech Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Embedded & ESP32
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Random Forest & Bio-Signals
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-teal-400" /> Supabase & PostgreSQL
          </span>
        </div>

        {/* Primary Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-glow-emerald flex items-center justify-center gap-2 group"
          >
            <span>Explore My Work</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Quick Social Icons */}
        <div className="flex items-center justify-center gap-5 pt-6 text-slate-400">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
