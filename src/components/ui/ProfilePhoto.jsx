import React from 'react';

/**
 * ProfilePhoto component
 *
 * Displays the profile photo from public/images/aryan-profile.jpg.
 * Falls back to an initials avatar if the image hasn't been placed yet.
 *
 * HOW TO USE YOUR PHOTO:
 * Place your photo at: /Users/aryan/Desktop/portfolio/public/images/aryan-profile.jpg
 * Supported formats: .jpg, .jpeg, .png, .webp
 * Recommended: square crop, min 400x400px
 */
export default function ProfilePhoto({ className = '' }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      className={`relative group flex-shrink-0 ${className}`}
      aria-label="Profile photo of Aryan Priyadarshi"
    >
      {/* Outer glow ring — subtle */}
      <div className="absolute -inset-1 rounded-2xl bg-emerald-500/20 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

      {/* Photo frame */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group-hover:-translate-y-0.5 transition-transform duration-300">
        {!imgError ? (
          <img
            src="./images/aryan-profile.jpg"
            alt="Aryan Priyadarshi — CSE Student & Developer"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Placeholder shown until photo is added */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 select-none">
            <span className="text-4xl sm:text-5xl font-bold text-emerald-400 font-mono tracking-tight">
              AP
            </span>
            <span className="mt-2 text-xs text-slate-500 font-mono text-center px-4">
              Add photo to<br/>public/images/<br/>aryan-profile.jpg
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
