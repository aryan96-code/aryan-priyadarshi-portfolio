import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Terminal, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import ProfilePhoto from '../ui/ProfilePhoto';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[95vh] pt-28 pb-20 flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left order-2 lg:order-1">

            {/* Status Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Name & Role */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Hi, I'm{' '}
                <span className="text-gradient-emerald">Aryan</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-400 tracking-tight">
                Computer Science & Engineering
                <span className="block text-base sm:text-lg text-slate-500 mt-0.5 font-normal">
                  AI & ML Student · Lovely Professional University
                </span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I enjoy building practical systems where software meets real-world problems — from{' '}
              <strong className="text-white font-semibold">wearable hardware and machine learning</strong>
              {' '}to{' '}
              <strong className="text-white font-semibold">web applications and databases</strong>.
              Currently strengthening my foundations in programming, DSA, and web development.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#work"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-glow-sm flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-transparent text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-500 hover:bg-slate-900/50 transition-all duration-200 flex items-center justify-center gap-2"
                aria-label="Download or view resume"
              >
                <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                aria-label="Aryan's GitHub profile"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                aria-label="Aryan's LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                aria-label="Send Aryan an email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Subtle terminal hint — Easter egg trigger */}
              <button
                onClick={onOpenTerminal}
                className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-600 hover:text-emerald-400 hover:border-slate-700 transition-all"
                aria-label="Open developer terminal"
                title="developer terminal"
              >
                <Terminal className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
            <ProfilePhoto className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[340px] xl:h-[340px]" />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce hidden sm:block" aria-hidden="true">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
