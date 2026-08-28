import React, { useEffect, useState } from 'react';
import { Trophy, X, Sparkles } from 'lucide-react';

export default function AchievementToast({ achievement, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/95 border-2 border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-md max-w-sm text-slate-100">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 animate-bounce">
          <Trophy className="w-5 h-5 text-amber-400" />
        </div>
        <div className="space-y-0.5 flex-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Achievement Unlocked!
          </span>
          <h4 className="text-xs font-bold text-white font-mono">{achievement.title}</h4>
          <p className="text-[11px] text-slate-300">{achievement.desc}</p>
        </div>
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
