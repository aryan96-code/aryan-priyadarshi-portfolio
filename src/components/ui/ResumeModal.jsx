import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, Cpu, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/resume download payload dynamically
    const resumeText = `
===================================================================
ARYAN PRIYADARSHI — CURRICULUM VITAE
B.Tech Computer Science & Engineering (AI & ML) Student
Lovely Professional University
Email: ${PORTFOLIO_DATA.personal.email}
GitHub: ${PORTFOLIO_DATA.personal.github}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
===================================================================

EDUCATION
B.Tech — Computer Science & Engineering (AI & ML)
Lovely Professional University (August 2025 – Present)

TECHNICAL SKILLS
Languages: Python, C, C++
Technologies: HTML, CSS
Databases & Tools: MySQL, PostgreSQL, Supabase, Git, GitHub, VS Code
Soft Skills: Problem Solving, Time Management, Adaptability

FEATURED PROJECTS
1. FluencyBand AI — Wearable Pre-Stutter Detection System (25 Mar 2026 – 28 May 2026)
   - Engineered multimodal wearable hardware using MAX30102, GSR, MPU6050, and INMP441 sensors with ESP32.
   - Built a multiclass Random Forest pipeline with 10 features achieving 92.8% held-out test accuracy.
   - Maintained predictions within a 500 ms processing window and ~10 ms motor feedback trigger.

2. CampusCare Companion — Mental Wellness & Peer Support Platform (Nov 2025 – Dec 2025)
   - Built a responsive wellness platform combining mood tracking, 7/30-day analytics, and anonymous peer support.
   - Integrated Supabase authentication with PostgreSQL cloud synchronization and local-first storage.

COMMUNITY & EXTRA-CURRICULAR
Community Development Project — Introduction to Python Programming
Gurukul, Sijua (17 Jul 2026 – 25 Jul 2026)
- Facilitated a 6-day, 15-hour Python programming workshop for Classes 11–12 students.

CERTIFICATIONS
- Programming Fundamentals using Python — Infosys Springboard (Jul 2026)
- Introduction to Cyber Security — Infosys Springboard (Apr 2026)
- Leadership Fundamentals — EduTech Hub (Oct 2025)
===================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aryan_Priyadarshi_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b101c] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              Curriculum Vitae Preview
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">{PORTFOLIO_DATA.personal.name}</h3>
            <p className="text-xs font-mono text-cyan-400">{PORTFOLIO_DATA.personal.degree}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Summary */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </h4>
            <p className="text-slate-300">
              {PORTFOLIO_DATA.personal.degree} — {PORTFOLIO_DATA.personal.university} ({PORTFOLIO_DATA.personal.period})
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Key Projects</span>
            </h4>
            <ul className="space-y-1 text-slate-300">
              <li>• <strong>FluencyBand AI</strong>: Multimodal wearable, Random Forest ML, ESP32, 92.8% Accuracy.</li>
              <li>• <strong>CampusCare Companion</strong>: Full-stack wellness platform, Supabase, PostgreSQL, Chart.js.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certifications & Community</span>
            </h4>
            <p className="text-slate-300">
              Infosys Springboard (Python & Cyber Security), EduTech Hub (Leadership), Python Instructor at Gurukul Sijua (15 hrs).
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-glow-emerald"
          >
            <Download className="w-4 h-4" />
            <span>Download CV File</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
