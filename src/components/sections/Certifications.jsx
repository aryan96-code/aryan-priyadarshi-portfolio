import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Eye, Download, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Certifications({ onOpenCertificate }) {
  const certs = PORTFOLIO_DATA.certifications;
  const [selectedIssuer, setSelectedIssuer] = useState('All');

  const issuers = ['All', 'Infosys Springboard', 'EduTech Hub'];

  const filteredCerts = selectedIssuer === 'All' 
    ? certs 
    : certs.filter(c => c.issuer === selectedIssuer);

  return (
    <section id="certs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials & Certificates</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Certifications & <span className="text-gradient-emerald">Badges</span>
        </h2>
        <p className="text-slate-400 text-base">
          Official credentials and course certifications verifying Python engineering, cyber security defense, and leadership fundamentals.
        </p>

        {/* Interactive Issuer Filter Pills */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setSelectedIssuer(issuer)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all border ${
                selectedIssuer === issuer
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-glow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Cards with Interactive Visual Certificate Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-2xl bg-[#0b101c] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Ambient hover glow line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-6 space-y-5">
              
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:rotate-12 transition-transform duration-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-mono">{cert.issuer}</p>
                    <p className="text-[10px] text-slate-500 font-mono">{cert.credentialId}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-300 text-xs font-mono font-semibold">
                  {cert.date}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* EMBEDDED VISUAL CERTIFICATE PREVIEW IMAGE */}
              <div 
                onClick={() => onOpenCertificate(cert)}
                className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden cursor-pointer group/img aspect-[4/3] flex items-center justify-center p-1.5 shadow-inner"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top rounded-lg group-hover/img:scale-105 transition-transform duration-500 filter brightness-95 group-hover/img:brightness-100"
                  loading="lazy"
                />
                
                {/* Hover overlay preview trigger */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Expand Preview
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                {cert.desc}
              </p>

              {/* Competency Skill Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom Action Footer */}
            <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>

              <button
                onClick={() => onOpenCertificate(cert)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 text-amber-300 font-semibold text-xs flex items-center gap-1.5 transition-all"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
