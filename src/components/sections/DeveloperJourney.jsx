import React from 'react';
import { GitCommit, GraduationCap, Award, Cpu, Globe, Users, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function DeveloperJourney() {
  const events = PORTFOLIO_DATA.journeyTimeline;

  const getEventIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'project':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'community':
        return <Users className="w-4 h-4 text-teal-400" />;
      default:
        return <GitCommit className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <Calendar className="w-3.5 h-3.5" />

        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Developer <span className="text-gradient-emerald">Journey</span>
        </h2>
        <p className="text-slate-400 text-base">
          Milestones from academic commencement at LPU in August 2025 through hardware, software, and community achievements.
        </p>
      </div>

      {/* Visual Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10 my-8">
        {events.map((evt, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-emerald-400 flex items-center justify-center transition-all shadow-md group-hover:scale-110">
              {getEventIcon(evt.type)}
            </div>

            {/* Event Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2 shadow-lg hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {evt.year}
                </span>
                <span className="text-xs text-slate-500 font-mono capitalize">{evt.type}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">{evt.title}</h3>
              <h4 className="text-xs font-medium text-cyan-400">{evt.subtitle}</h4>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                {evt.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
