import React from 'react';
import { Trophy, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function AchievementsSection({ unlockedIds }) {
  const { achievements } = PORTFOLIO_DATA;

  const unlockedCount = achievements.filter(a => unlockedIds.has(a.id)).length;
  const progressPercent = Math.round((unlockedCount / achievements.length) * 100);

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <Trophy className="w-3.5 h-3.5" />
          <span>// 07. VISITOR ACHIEVEMENTS HUB</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Exploration <span className="text-gradient-emerald">Achievements</span>
        </h2>
        
        <p className="text-slate-400 text-base">
          Interactive quest system rewarding visitors as they survey technical stacks, filter skills, and explore credentials!
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto space-y-1.5 pt-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-amber-400 font-bold">Progress: {unlockedCount} / {achievements.length} Unlocked</span>
            <span className="text-emerald-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-900 rounded-full border border-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500 shadow-glow-emerald"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {achievements.map((ach) => {
          const isUnlocked = unlockedIds.has(ach.id);
          return (
            <div
              key={ach.id}
              className={`p-5 rounded-2xl border transition-all duration-300 space-y-2 flex flex-col justify-between ${
                isUnlocked
                  ? 'bg-gradient-to-b from-slate-900 to-[#080e19] border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-950/60 border-slate-800 opacity-60'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isUnlocked ? 'bg-amber-500/20 text-amber-400 border border-amber-400/50' : 'bg-slate-900 text-slate-600 border border-slate-800'
                  }`}>
                    {isUnlocked ? <Trophy className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isUnlocked ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}>
                    {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
                  </span>
                </div>

                <h3 className={`text-sm font-bold tracking-tight font-mono ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-400 leading-snug">
                  {ach.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                {isUnlocked ? '✓ Badge Collected' : 'Interact with site to unlock'}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
