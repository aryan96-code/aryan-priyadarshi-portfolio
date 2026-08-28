import React from 'react';
import { User, GraduationCap, Code2, Cpu, Target, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase shadow-glow-sm">
          <User className="w-3.5 h-3.5" />
          <span>// 03. BACKGROUND & MINDSET</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient-cyan">Me</span>
        </h2>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Bio Box with Scannable Highlights */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0b101c] border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <span>Student Developer @ Lovely Professional University</span>
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a Computer Science & Engineering student specializing in <strong className="text-emerald-300 font-bold">AI & Machine Learning</strong> at Lovely Professional University. My work focuses on <strong className="text-cyan-300 font-bold">bridging hardware sensor arrays with ML models</strong>, converting complex bio-signals into <strong className="text-emerald-300 font-bold">real-time low-latency feedback systems</strong>.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              My engineering philosophy revolves around <strong className="text-slate-200">building real projects that solve tangible challenges</strong>. Whether it's acquiring bio-signals from MAX30102 PPG and GSR sensors or crafting full-stack web platforms with Supabase and PostgreSQL, I prioritize <strong className="text-cyan-300">technical rigor, low latency, and clean architecture</strong>.
            </p>

            {/* Scannable Bullet Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">⚡ Hardware-ML Fusion</span>
                <span className="text-slate-300">ESP32 microcontrollers, bio-signal acquisition & Random Forest classification.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="font-bold text-cyan-400 block font-mono">🌐 Cloud & Web Systems</span>
                <span className="text-slate-300">PostgreSQL, Supabase Auth, local-first storage & visual trend analytics.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">Degree</span>
              <span className="text-emerald-400 font-semibold">{PORTFOLIO_DATA.personal.degree}</span>
            </div>
            <div>
              <span className="text-slate-500 block">University</span>
              <span className="text-cyan-400 font-semibold">{PORTFOLIO_DATA.personal.university}</span>
            </div>
          </div>
        </div>

        {/* Right Pillar Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-emerald-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Hardware & Bio-Signal Fusion</h4>
            <p className="text-xs text-slate-400">
              Integrating ESP32 microcontrollers with PPG, GSR, IMU, and MEMS acoustic sensors for real-time inference pipelines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Full-Stack & Cloud Architecture</h4>
            <p className="text-xs text-slate-400">
              Designing responsive web platforms with Supabase auth, PostgreSQL, local-first storage, and data visualization.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-teal-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Continuous Growth & Teaching</h4>
            <p className="text-xs text-slate-400">
              Sharing technical knowledge by conducting community Python workshops for high school students.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
