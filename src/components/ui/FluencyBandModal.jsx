import React from 'react';
import { X, Cpu, Activity, Zap, CheckCircle2, ShieldAlert, Radio, Server, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function FluencyBandModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const fluency = PORTFOLIO_DATA.projects.find(p => p.id === 'fluencyband-ai');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b101c] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              Hardware & ML Deep-Dive
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">{fluency.title}</h3>
            <p className="text-xs font-mono text-slate-400">{fluency.dates}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fluency.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/20 text-center">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono block">{m.value}</span>
              <span className="text-xs font-semibold text-slate-200 block mt-1">{m.label}</span>
              <span className="text-[11px] text-slate-400 block">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* Architectural Flow Diagram */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Server className="w-4 h-4" /> Real-Time Signal & Feedback Architecture
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-emerald-400 font-bold block">1. Sensors</span>
              <span className="text-slate-400 text-[11px]">MAX30102, GSR, MPU6050, INMP441</span>
            </div>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">2. ESP32 Acquisition</span>
              <span className="text-slate-400 text-[11px]">C++ Firmware, TCP Streaming</span>
            </div>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-emerald-400 font-bold block">3. Flask Inference</span>
              <span className="text-slate-400 text-[11px]">10-Feature Random Forest (&lt;500ms)</span>
            </div>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-amber-400 font-bold block">4. Biofeedback</span>
              <span className="text-slate-400 text-[11px]">3-Level Vibrotactile (~10ms)</span>
            </div>
          </div>
        </div>

        {/* Detailed Hardware & Sensor Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Sensor Specifications & Role</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fluency.sensors.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-mono">{s.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono">
                    {s.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{s.function}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Key Implementation Highlights</h4>
          <ul className="space-y-2">
            {fluency.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={fluency.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-all"
          >
            <Code className="w-4 h-4" />
            <span>Repository Link</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
