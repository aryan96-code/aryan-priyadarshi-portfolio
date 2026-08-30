import React, { useState } from 'react';
import { Activity, Cpu, Zap, Clock, CheckCircle2, Github, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

/**
 * SelectedWork – displays the two main projects (FluencyBand AI and CampusCare) in a clean card layout.
 * All gamified "boss fight" UI has been removed. Metrics, sensor table, and tech‑stack pills are shown for FluencyBand.
 * CampusCare shows a feature grid and tech‑stack pills.
 */
export default function SelectedWork({ onOpenFluencyBandModal, activeSkillFilter, onClearSkillFilter }) {
  const fluencyBand = PORTFOLIO_DATA.projects.find(p => p.id === 'fluencyband-ai');
  const campusCare = PORTFOLIO_DATA.projects.find(p => p.id === 'campuscare-companion');

  // Helper to render tech‑stack pills with skill filter logic
  const renderTechPills = (techStack) => (
    <div className="pt-2 flex flex-wrap items-center gap-2">
      {techStack.map((tech) => (
        <span
          key={tech}
          className={`px-3 py-1 rounded-full text-xs font-mono transition-all border ${
            activeSkillFilter && activeSkillFilter.toLowerCase() === tech.toLowerCase()
              ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-glow-sm'
              : 'bg-slate-900 text-emerald-300 border-emerald-500/20'
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <Activity className="w-3.5 h-3.5" />
          <span>// 01. FEATURED PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Selected <span className="text-gradient-emerald">Work</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Building practical hardware‑software systems and full‑stack web applications.
        </p>
        {activeSkillFilter && (
          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="text-xs font-mono text-cyan-400">Skill Filter Active: <strong>{activeSkillFilter}</strong></span>
            <button
              onClick={onClearSkillFilter}
              className="text-xs font-mono text-rose-400 underline hover:text-rose-300"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* FluencyBand AI – Featured Card */}
      <div className={`relative group transition-all duration-500 ${
        activeSkillFilter && !fluencyBand.techStack.some(t => t.toLowerCase() === activeSkillFilter.toLowerCase())
          ? 'opacity-40 grayscale-[50%]'
          : 'opacity-100'
      }`}
        >
        {/* Glow backdrop */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-2xl bg-[#0b101c] border-2 border-emerald-500/40 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold tracking-wider">
                PROJECT {fluencyBand.number}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {fluencyBand.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">{fluencyBand.dates}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={fluencyBand.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>View Repository</span>
              </a>
              <button
                onClick={onOpenFluencyBandModal}
                className="px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 font-bold text-xs flex items-center gap-2 transition-all shadow-glow-sm"
              >
                <Cpu className="w-4 h-4" />
                <span>Hardware Deep‑Dive</span>
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {fluencyBand.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-[#080d19] border-2 border-emerald-500/30 hover:border-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl" />
                <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider font-bold">{metric.label}</span>
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono text-gradient-emerald block my-1">{metric.value}</span>
                <span className="text-xs text-slate-300 block">{metric.sub}</span>
              </div>
            ))}
          </div>

          {/* Sensors Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Hardware Sensor Fusion & Acquisition Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {fluencyBand.sensors.map((sensor, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{sensor.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">{sensor.type}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{sensor.function}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          {renderTechPills(fluencyBand.techStack)}
        </div>
      </div>

      {/* CampusCare Companion – Product Card */}
      <div className={`rounded-2xl bg-[#0b101c] border-2 border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8 transition-all duration-500 ${
        activeSkillFilter && !campusCare.techStack.some(t => t.toLowerCase() === activeSkillFilter.toLowerCase())
          ? 'opacity-40 grayscale-[50%]'
          : 'opacity-100'
      }`}
        >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold tracking-wider">
              PROJECT {campusCare.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {campusCare.title}
            </h3>
            <p className="text-xs font-mono text-slate-400">{campusCare.dates}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={campusCare.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {campusCare.features.map((feat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-white block">{feat.title}</span>
              <p className="text-xs text-slate-400 leading-snug">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        {renderTechPills(campusCare.techStack)}
      </div>
    </section>
  );
}
