import React from "react";

export default function TuringWingsLogo({ size = "md", light = false, className = "" }) {
  const dimensions = {
    sm: { width: 32, height: 32, text: "text-lg", tagline: "text-[8px]" },
    md: { width: 42, height: 42, text: "text-xl", tagline: "text-[9.5px]" },
    lg: { width: 58, height: 58, text: "text-3xl", tagline: "text-[11px]" }
  }[size] || dimensions.md;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logoLeftWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
            <linearGradient id="logoRightWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="logoBrain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* Left Wing (Electric Cyan to Blue) */}
          <path
            d="M 52 50 C 35 30, 15 25, 5 38 C 12 48, 28 50, 42 58 C 22 55, 12 60, 8 72 C 18 78, 35 72, 48 68 C 30 75, 20 85, 22 92 C 34 94, 48 80, 55 72 Z"
            fill="url(#logoLeftWing)"
          />

          {/* Right Wing (Purple to Magenta) */}
          <path
            d="M 68 50 C 85 30, 105 25, 115 38 C 108 48, 92 50, 78 58 C 98 55, 108 60, 112 72 C 102 78, 85 72, 72 68 C 90 75, 100 85, 98 92 C 86 94, 72 80, 65 72 Z"
            fill="url(#logoRightWing)"
          />

          {/* Brain Core */}
          <g fill="url(#logoBrain)">
            <circle cx="50" cy="45" r="3.5" />
            <circle cx="43" cy="55" r="3.5" />
            <circle cx="52" cy="65" r="3.5" />
            <circle cx="45" cy="75" r="3.5" />
            <path d="M 50 45 L 43 55 L 52 65 L 45 75 M 50 45 L 57 48 M 43 55 L 57 58 M 52 65 L 57 68" stroke="url(#logoBrain)" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="70" cy="45" r="3.5" />
            <circle cx="77" cy="55" r="3.5" />
            <circle cx="68" cy="65" r="3.5" />
            <circle cx="75" cy="75" r="3.5" />
            <path d="M 70 45 L 77 55 L 68 65 L 75 75 M 70 45 L 63 48 M 77 55 L 63 58 M 68 65 L 63 68" stroke="url(#logoBrain)" strokeWidth="2.5" strokeLinecap="round" />

            <line x1="60" y1="40" x2="60" y2="80" stroke="url(#logoBrain)" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className={`font-extrabold tracking-wide ${dimensions.text} leading-none ${light ? "text-white" : "text-slate-900"}`}>
          <span>TURING </span>
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            WINGS
          </span>
        </div>
        <span className={`font-semibold uppercase tracking-widest ${dimensions.tagline} mt-1 ${light ? "text-slate-200" : "text-slate-500"}`}>
          Learn. Build. Innovate.
        </span>
      </div>
    </div>
  );
}
