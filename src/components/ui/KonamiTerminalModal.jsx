import React, { useState, useEffect } from 'react';
import { X, Terminal, Sparkles, Check, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function KonamiTerminalModal({ isOpen, onClose }) {
  const [command, setCommand] = useState('');
  const [logs, setLogs] = useState([
    "=== ARYAN PRIYADARSHI ADVANCED SYSTEM TERMINAL v2.5 ===",
    "Type 'help' for a list of secret commands.",
    "Type 'stats', 'quest', 'skills', 'clear', or 'contact'."
  ]);

  useEffect(() => {
    if (isOpen) {
      setLogs(prev => [...prev, ">> SESSION INITIALIZED. Welcome, Operative."]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    setCommand('');

    if (!cmd) return;

    let response = [];
    if (cmd === 'help') {
      response = [
        "Available Secret Commands:",
        "  help     - Show list of available terminal commands",
        "  stats    - View Aryan's RPG Developer Stats & XP",
        "  quest    - View current active Quest details",
        "  skills   - List unlocked skill trees",
        "  easter   - Reveal secret fun fact",
        "  clear    - Clear terminal screen",
        "  exit     - Close developer terminal"
      ];
    } else if (cmd === 'stats') {
      response = [
        "----------------------------------------",
        "Developer: Aryan Priyadarshi",
        "Role: B.Tech CSE (AI & ML) Engineer",
        "Projects: FluencyBand AI, CampusCare",
        "Core Skills: Embedded Systems, Machine Learning, Full-Stack Web Development",
        "----------------------------------------"
      ];
    } else if (cmd === 'quest') {
      response = [
        "PROJECT: FluencyBand AI Wearable",
        "Test Accuracy: 92.8% (held-out test set)",
        "Latency: ~10ms motor response",
        "Status: Completed"
      ];
    } else if (cmd === 'skills') {
      response = [
        "UNLOCKED SKILL TREES:",
        "  [Comfortable] Python, C++, C, HTML5, CSS3",
        "  [Building]    PostgreSQL, MySQL, Supabase, Chart.js",
        "  [Learning]    DSA in C++, Scikit-Learn Random Forest"
      ];
    } else if (cmd === 'easter') {
      response = [
        "🎉 SECRET FUN FACT:",
        "  When tuning the MAX30102 PPG sensor for FluencyBand AI,",
        "  Aryan tested the bio-signal streaming late at night until the Flask TCP server logged 10,000+ real-time packets!"
      ];
    } else if (cmd === 'clear') {
      setLogs([]);
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      response = [`Command not recognized: '${cmd}'. Type 'help' for command list.`];
    }

    setLogs(prev => [...prev, `> ${cmd}`, ...response]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#090e18] border-2 border-emerald-500/80 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden flex flex-col font-mono text-xs text-emerald-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-200 text-xs">aryan_priyadarshi_terminal.sh</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">KONAMI_ACTIVE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log Viewport */}
        <div className="p-4 h-80 overflow-y-auto space-y-1.5 bg-[#060911] text-emerald-300 leading-relaxed selection:bg-emerald-500/30 selection:text-emerald-200">
          {logs.map((log, i) => (
            <div key={i} className={log.startsWith('>') ? 'text-cyan-400 font-bold' : log.startsWith('===') ? 'text-amber-400 font-bold' : 'text-emerald-300'}>
              {log}
            </div>
          ))}
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <input
            type="text"
            autoFocus
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type 'help' or 'stats'..."
            className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono"
          />
          <button type="submit" className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] rounded hover:bg-emerald-500 hover:text-slate-950 font-bold transition-all">
            RUN
          </button>
        </form>

      </div>
    </div>
  );
}
