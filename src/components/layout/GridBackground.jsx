import React from 'react';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Background Base */}
      <div className="absolute inset-0 bg-[#080c14]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-mask opacity-60" />

      {/* Glowing Ambient Gradient Lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-subtle" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px]" />

      {/* Top Edge Ambient Highlight Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </div>
  );
}
