import React from 'react';
import { X, ShieldCheck, Award, Calendar, CheckCircle2, ExternalLink, Download, Eye } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b101c] border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
                Verified Credential Archive
              </span>
              <span className="text-xs font-mono text-slate-400">{cert.credentialId}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">{cert.title}</h3>
            <p className="text-xs font-mono text-slate-400">{cert.issuer} • Issued {cert.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/40 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FULL RESOLUTION CERTIFICATE IMAGE DISPLAY */}
        <div className="rounded-xl bg-slate-950 border border-slate-800 p-2 overflow-hidden shadow-inner max-h-[480px] flex items-center justify-center">
          <img 
            src={cert.image} 
            alt={cert.title}
            className="max-h-[460px] w-auto object-contain rounded-lg shadow-2xl border border-slate-800"
          />
        </div>

        {/* Description & Skill Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Credential Scope</span>
            <p className="text-slate-300 leading-relaxed">
              {cert.desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">Assessed Competencies</span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-amber-300 text-xs font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={cert.document}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-glow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Open / Download Document</span>
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
