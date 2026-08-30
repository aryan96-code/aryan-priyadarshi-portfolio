import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Education & <span className="text-gradient-emerald">Degree</span>
        </h2>
      </div>

      {/* Main Cards */}
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={edu.id || idx} className="rounded-2xl bg-[#0b101c] border border-slate-800 p-6 sm:p-10 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className={`px-3 py-1 rounded text-xs font-mono font-semibold ${
                  edu.current 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-slate-900 text-slate-400 border border-slate-850'
                }`}>
                  {edu.current ? 'Current Enrollment' : 'Completed'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-2">
                  {edu.institution}
                </h3>
                <p className="text-base font-semibold text-cyan-400">{edu.degree}</p>
              </div>

              <div className="text-right space-y-1">
                <span className="text-xs font-mono text-slate-300 block flex items-center justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {edu.duration}
                </span>
                <span className="text-xs text-slate-500 font-mono block flex items-center justify-end gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {edu.location}
                </span>
              </div>
            </div>

            {/* Specialization Highlights */}
            {edu.focus && edu.focus.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Academic Focus & Core Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.focus.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
