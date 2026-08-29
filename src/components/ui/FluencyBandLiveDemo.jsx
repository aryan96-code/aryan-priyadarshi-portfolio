import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, RefreshCw, Zap, ShieldAlert, CheckCircle2, Radio } from 'lucide-react';

export default function FluencyBandLiveDemo() {
  const [isRunning, setIsRunning] = useState(true);
  const [state, setState] = useState('Normal'); // Normal, Stressed, Pre-Stutter
  const [signalData, setSignalData] = useState([]);
  const [hapticTriggered, setHapticTriggered] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      // Generate synthetic bio-signal values simulating PPG / GSR / IMU readings
      const rand = Math.random();
      let newState = 'Normal';
      let triggered = false;

      if (rand > 0.75) {
        newState = 'Pre-Stutter';
        triggered = true;
      } else if (rand > 0.45) {
        newState = 'Stressed';
      }

      setState(newState);
      setHapticTriggered(triggered);

      setSignalData(prev => {
        const next = [...prev, Math.floor(Math.random() * 40) + 30];
        if (next.length > 24) next.shift();
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="rounded-2xl bg-slate-950 border-2 border-emerald-500/40 p-5 space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyan-400" /> Interactive Hardware Bio-Signal Simulator
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1"
          >
            {isRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
            <span>{isRunning ? 'Pause Signal' : 'Stream Signal'}</span>
          </button>
        </div>
      </div>

      {/* Live Waveform Canvas */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>MAX30102 PPG Pulse & GSR Electrodermal Stream</span>
          <span className="text-cyan-400">Sampling Rate: 100 Hz | Window: 500 ms</span>
        </div>

        <div className="h-24 bg-[#060a12] rounded-xl border border-slate-800 p-3 flex items-end justify-between gap-1 overflow-hidden relative">
          {/* Grid line background */}
          <div className="absolute inset-0 bg-grid-mask opacity-30 pointer-events-none" />

          {signalData.map((val, idx) => (
            <div key={idx} className="w-full bg-slate-900 rounded-t flex items-end h-full">
              <div 
                className={`w-full transition-all duration-300 rounded-t ${
                  state === 'Pre-Stutter' 
                    ? 'bg-gradient-to-t from-rose-600 to-amber-400 shadow-[0_0_10px_rgba(244,63,94,0.5)]' 
                    : state === 'Stressed'
                    ? 'bg-gradient-to-t from-amber-500 to-cyan-400'
                    : 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                }`}
                style={{ height: `${val}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inference & Motor Feedback Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        
        {/* ML State Classifier */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-0.5">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Classified State</span>
          <span className={`text-sm font-extrabold font-mono uppercase tracking-wider block ${
            state === 'Pre-Stutter' ? 'text-rose-400 animate-pulse' : state === 'Stressed' ? 'text-amber-400' : 'text-emerald-400'
          }`}>
            {state} State
          </span>
        </div>

        {/* Inference Latency */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-0.5">
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Inference Window</span>
          <span className="text-sm font-extrabold font-mono text-cyan-400 block">
            482 ms / 500 ms
          </span>
        </div>

        {/* Vibrotactile Motor Trigger */}
        <div className={`p-3 rounded-xl border text-center space-y-0.5 transition-all ${
          hapticTriggered 
            ? 'bg-rose-500/20 border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.4)]' 
            : 'bg-slate-900/90 border-slate-800'
        }`}>
          <span className="text-[10px] font-mono text-slate-500 block uppercase">Motor Response</span>
          <span className={`text-sm font-extrabold font-mono block ${
            hapticTriggered ? 'text-rose-300 animate-bounce' : 'text-slate-400'
          }`}>
            {hapticTriggered ? '⚡ ~10ms Vibrotactile Active' : 'Standby Mode'}
          </span>
        </div>

      </div>

    </div>
  );
}
