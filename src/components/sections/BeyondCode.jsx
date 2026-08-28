import React from 'react';
import { Heart, Users, Clock, Calendar, CheckCircle2, GraduationCap, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function BeyondCode() {
  const data = PORTFOLIO_DATA.communityTeaching;

  return (
    <section id="beyond-code" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
          <Heart className="w-3.5 h-3.5" />
          <span>Community Development</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Beyond <span className="text-gradient-cyan">Code</span>
        </h2>
      </div>

      {/* Positioning Quote Card */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0b101c] to-cyan-950/40 border border-teal-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-4">
        <Quote className="w-10 h-10 text-teal-400/20 mx-auto" />
        <blockquote className="text-xl sm:text-3xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-snug">
          "{data.quote}"
        </blockquote>
        <p className="text-xs font-mono text-teal-400">
          Community Teaching Initiative • Gurukul, Sijua (LPU)
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Stats Cards */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">{stat.label}</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block text-gradient-cyan">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 block">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Right Details Box */}
        <div className="lg:col-span-8 rounded-2xl bg-[#0b101c] border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-mono">
                {data.dates}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-2">
                {data.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">{data.organization} • {data.location}</p>
            </div>

            <div className="space-y-3 pt-2">
              {data.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Focus Area: Python Syntax & Computational Thinking</span>
            <span className="text-teal-400 font-semibold">Gurukul Sijua</span>
          </div>
        </div>

      </div>

    </section>
  );
}
