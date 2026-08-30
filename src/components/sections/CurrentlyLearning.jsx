import React from 'react';
import { Compass, BookOpen, Hammer, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function CurrentlyLearning() {
  const items = PORTFOLIO_DATA.currentlyLearning;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Exploring':
        return {
          bg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
          icon: <Compass className="w-3.5 h-3.5" />
        };
      case 'Learning':
        return {
          bg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          icon: <BookOpen className="w-3.5 h-3.5" />
        };
      case 'Building':
        return {
          bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          icon: <Hammer className="w-3.5 h-3.5" />
        };
      case 'Comfortable':
        return {
          bg: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
          icon: <CheckCircle className="w-3.5 h-3.5" />
        };
      default:
        return {
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
          icon: <Sparkles className="w-3.5 h-3.5" />
        };
    }
  };

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Currently Learning</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Currently <span className="text-gradient-cyan">Learning</span>
        </h2>
        <p className="text-slate-400 text-base">
          Honest progress tracking across core computer science and software development domains.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const badge = getStatusBadge(item.status);
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.category}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border flex items-center gap-1.5 ${badge.bg}`}>
                    {badge.icon}
                    <span>{item.status}</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Phase</span>
                <span className="text-slate-300 font-semibold">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
