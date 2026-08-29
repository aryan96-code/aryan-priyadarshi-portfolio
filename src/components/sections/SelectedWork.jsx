import React, { useState } from 'react';
import { 
  Activity, 
  Cpu, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Github, 
  ExternalLink, 
  Layers, 
  ShieldAlert, 
  Swords, 
  Trophy, 
  Target,
  Radio,
  Lock,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import FluencyBandLiveDemo from '../ui/FluencyBandLiveDemo';

export default function SelectedWork({ onOpenFluencyBandModal, activeSkillFilter, onClearSkillFilter }) {
  const fluencyBand = PORTFOLIO_DATA.projects.find(p => p.id === 'fluencyband-ai');
  const campusCare = PORTFOLIO_DATA.projects.find(p => p.id === 'campuscare-companion');

  const [activeCampusTab, setActiveCampusTab] = useState('mood');

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <Swords className="w-3.5 h-3.5" />
          <span>// 01. FEATURED QUESTS & BOSS BATTLES</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Selected <span className="text-gradient-emerald">Work</span>
        </h2>
        
        <p className="text-slate-400 text-base sm:text-lg">
          Transforming complex engineering challenges into victorious real-world hardware & software products.
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

      {/* ============================================================ */}
      {/* FEATURED BOSS QUEST 1: FluencyBand AI */}
      {/* ============================================================ */}
      <div className={`relative group transition-all duration-500 ${
        activeSkillFilter && !fluencyBand.techStack.some(t => t.toLowerCase() === activeSkillFilter.toLowerCase())
          ? 'opacity-40 grayscale-[50%]'
          : 'opacity-100'
      }`}>
        {/* Glow backdrop behind featured card */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-emerald-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-2xl bg-[#0b101c] border-2 border-emerald-500/40 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8">
          
          {/* Top Banner & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold tracking-wider">
                  ⚡ {fluencyBand.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800">
                  {fluencyBand.questLevel}
                </span>
              </div>
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
                <span>Hardware Deep-Dive</span>
              </button>
            </div>
          </div>

          {/* GAMIFIED BOSS FIGHT FRAMEWORK */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* The Boss */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span>The Boss Challenge</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                {fluencyBand.bossFight.theBoss}
              </p>
            </div>

            {/* Your Weapons */}
            <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                <Swords className="w-4 h-4 text-cyan-400" />
                <span>Engineered Weapons</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                {fluencyBand.bossFight.yourWeapons}
              </p>
            </div>

            {/* The Victory */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>The Victory Outcome</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                {fluencyBand.bossFight.theVictory}
              </p>
            </div>
          </div>

          {/* REAL-TIME BIO-SIGNAL HARDWARE DEMO WIDGET */}
          <FluencyBandLiveDemo />

          {/* KEY METRICS GRID - HIGH VISUAL POP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {fluencyBand.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-[#080d19] border-2 border-emerald-500/30 hover:border-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden group/metric"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover/metric:bg-emerald-500/20 transition-all" />
                <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider font-bold">
                  {metric.label}
                </span>
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono text-gradient-emerald block my-1">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-300 block">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Multimodal Hardware & Sensor Array */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hardware Sensor Fusion & Acquisition Pipeline</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {fluencyBand.sensors.map((sensor, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{sensor.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                      {sensor.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{sensor.function}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2">Weapon Stack:</span>
            {fluencyBand.techStack.map((tech) => (
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

        </div>
      </div>

      {/* ============================================================ */}
      {/* QUEST 2: CampusCare Companion (Dashboard Visual Style) */}
      {/* ============================================================ */}
      <div className={`rounded-2xl bg-[#0b101c] border-2 border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8 transition-all duration-500 ${
        activeSkillFilter && !campusCare.techStack.some(t => t.toLowerCase() === activeSkillFilter.toLowerCase())
          ? 'opacity-40 grayscale-[50%]'
          : 'opacity-100'
      }`}>
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold tracking-wider">
                {campusCare.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800">
                {campusCare.questLevel}
              </span>
            </div>
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

        {/* GAMIFIED BOSS FIGHT FRAMEWORK */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
            <span className="text-xs font-mono text-rose-400 font-bold uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> The Boss Challenge
            </span>
            <p className="text-slate-300 text-xs leading-relaxed">
              {campusCare.bossFight.theBoss}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
              <Swords className="w-4 h-4" /> Engineered Weapons
            </span>
            <p className="text-slate-300 text-xs leading-relaxed">
              {campusCare.bossFight.yourWeapons}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" /> The Victory Outcome
            </span>
            <p className="text-slate-300 text-xs leading-relaxed">
              {campusCare.bossFight.theVictory}
            </p>
          </div>
        </div>

        {/* Dashboard Product Interactive Showcase */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
          {/* Top Bar Controls */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">campuscare.app/dashboard</span>
            </div>

            {/* Interactive Tab Selector */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveCampusTab('mood')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeCampusTab === 'mood' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mood Log
              </button>
              <button
                onClick={() => setActiveCampusTab('analytics')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeCampusTab === 'analytics' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                7/30D Trends
              </button>
              <button
                onClick={() => setActiveCampusTab('support')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeCampusTab === 'support' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Peer Support
              </button>
            </div>
          </div>

          {/* Interactive Content Area */}
          <div className="p-6 bg-gradient-to-b from-slate-950 to-[#080d19] min-h-[220px] flex items-center justify-center">
            {activeCampusTab === 'mood' && (
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Daily Mental Check-In</span>
                  <span className="text-cyan-400">Supabase Auth Sync</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Calm', 'Focused', 'Stressed', 'Energetic'].map((mood, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center hover:border-cyan-500/40 cursor-pointer transition-all">
                      <span className="text-sm font-bold text-white block">{mood}</span>
                      <span className="text-[10px] text-slate-400">Log level 1-5</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCampusTab === 'analytics' && (
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Visual Trend Progression (Chart.js)</span>
                  <span className="text-emerald-400">7-Day & 30-Day Aggregates</span>
                </div>
                {/* Simulated Chart Graphic */}
                <div className="h-28 w-full bg-slate-900/60 rounded-lg border border-slate-800 flex items-end justify-between p-3 gap-2">
                  {[40, 65, 55, 80, 75, 90, 85].map((h, i) => (
                    <div key={i} className="w-full bg-slate-800 rounded-t overflow-hidden h-full flex items-end">
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-t transition-all duration-500" 
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeCampusTab === 'support' && (
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Anonymous Peer Support Workspace</span>
                  <span className="text-cyan-400">PostgreSQL Encrypted</span>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Anonymous Peer Thread #402</span>
                  </div>
                  <p className="text-xs text-slate-400">"Shared advice on balancing exam preparation with sleep hygiene..."</p>
                </div>
              </div>
            )}
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

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">Weapon Stack:</span>
          {campusCare.techStack.map((tech) => (
            <span 
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all border ${
                activeSkillFilter && activeSkillFilter.toLowerCase() === tech.toLowerCase()
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-glow-sm'
                  : 'bg-slate-900 text-cyan-300 border-cyan-500/20'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
