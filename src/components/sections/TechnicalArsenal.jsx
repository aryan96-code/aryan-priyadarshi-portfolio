import React from 'react';
import { Terminal, Code, Database, Wrench, HeartHandshake, CheckCircle2, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function TechnicalArsenal({ activeSkillFilter, onSelectSkillFilter }) {
  const { languages, technologies, databasesAndTools, softSkills } = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <Terminal className="w-3.5 h-3.5" />

        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical <span className="text-gradient-emerald">Arsenal</span>
        </h2>
        
        <p className="text-slate-400 text-base">
          Click any skill chip to highlight connected project cards across the portfolio.
        </p>

        {activeSkillFilter && (
          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="text-xs font-mono text-emerald-400 font-bold">Active Filter: {activeSkillFilter}</span>
            <button
              onClick={() => onSelectSkillFilter(null)}
              className="text-xs font-mono text-rose-400 underline hover:text-rose-300"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Languages Card */}
        <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-emerald-500/30 transition-all space-y-4 shadow-lg">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Languages</h3>
          </div>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div 
                key={lang.name}
                onClick={() => onSelectSkillFilter(lang.name)}
                className={`p-3 rounded-xl bg-slate-900/80 border cursor-pointer transition-all space-y-1 ${
                  activeSkillFilter && activeSkillFilter.toLowerCase() === lang.name.toLowerCase()
                    ? 'border-emerald-400 bg-emerald-500/10 shadow-glow-sm'
                    : 'border-slate-800 hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-mono">{lang.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                    {lang.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{lang.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Card */}
        <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4 shadow-lg">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Technologies</h3>
          </div>
          <div className="space-y-3">
            {technologies.map((tech) => (
              <div 
                key={tech.name}
                onClick={() => onSelectSkillFilter(tech.name)}
                className={`p-3 rounded-xl bg-slate-900/80 border cursor-pointer transition-all space-y-1 ${
                  activeSkillFilter && activeSkillFilter.toLowerCase() === tech.name.toLowerCase()
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-glow-sm'
                    : 'border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-mono">{tech.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                    {tech.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Databases & Tools Card */}
        <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-teal-500/30 transition-all space-y-4 shadow-lg">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Databases & Tools</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {databasesAndTools.map((tool) => (
              <div 
                key={tool.name}
                onClick={() => onSelectSkillFilter(tool.name)}
                className={`p-2.5 rounded-lg bg-slate-900/80 border cursor-pointer transition-all flex items-center justify-between ${
                  activeSkillFilter && activeSkillFilter.toLowerCase() === tool.name.toLowerCase()
                    ? 'border-teal-400 bg-teal-500/10 shadow-glow-sm'
                    : 'border-slate-800 hover:border-teal-500/40'
                }`}
              >
                <span className="text-xs font-bold text-slate-200 font-mono">{tool.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Card */}
        <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-emerald-500/30 transition-all space-y-4 shadow-lg">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Soft Skills</h3>
          </div>
          <div className="space-y-3">
            {softSkills.map((skill) => (
              <div key={skill} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
