import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = PORTFOLIO_DATA.personal.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.warn('Clipboard copy failed:', e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Let's Connect</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Have an idea <span className="text-gradient-emerald">worth building?</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          I am always open to discussing new projects, technical collaborations, research opportunities, or software ideas.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Quick Contact Actions */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Copy Card */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-3 shadow-xl">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">Direct Email</span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-slate-200 truncate mr-2">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all text-xs font-semibold flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-[#0b101c] border border-slate-800 space-y-3 shadow-xl">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Professional Profiles</span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 text-slate-300 transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 text-slate-300 transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Status Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/20 text-xs text-slate-400 space-y-1">
            <span className="font-semibold text-emerald-400 block">Response Time</span>
            <p>Typically responds within 24 hours to academic and project inquiries.</p>
          </div>

        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0b101c] border border-slate-800 p-6 sm:p-8 space-y-5 shadow-xl">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Send className="w-5 h-5 text-emerald-400" />
            <span>Send a Direct Message</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Rivera"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your idea or project inquiry..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-glow-emerald flex items-center justify-center gap-2"
            >
              <span>{formSent ? 'Opening Email Client...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
