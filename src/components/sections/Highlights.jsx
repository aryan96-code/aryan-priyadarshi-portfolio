import React from 'react';
import { Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

/**
 * Compact highlights bar – replaces the large AchievementsSection.
 * Shows a few real stats (projects, ML accuracy, teaching hours, certifications).
 */
export default function Highlights() {
  const { highlights } = PORTFOLIO_DATA;

  return (
    <section id="highlights" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0b101c] border border-slate-800 text-center shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center justify-center mb-2 text-emerald-400">
              <Star className="w-5 h-5 mr-1" />
              <span className="text-xl font-bold text-white">{item.value}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-300 tracking-wide uppercase mb-1">{item.label}</h3>
            <p className="text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
