import React from "react";
import { Link } from "react-router-dom";
import TuringWingsLogo from "./TuringWingsLogo";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer className={`pt-16 pb-12 relative overflow-hidden transition-colors duration-500 border-t ${
      isLight ? "bg-slate-900 text-white border-slate-800" : "bg-[#07090f] text-white border-amber-500/20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="md:col-span-6 space-y-4 text-left">
            <TuringWingsLogo size="lg" forceWhiteText={true} />

            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-3">
              An ecosystem of creators, innovators, builders, and future thinkers who believe modern technology, AI, and digital creation should be accessible, inspiring, collaborative, and empowering for everyone.
            </p>
          </div>

          {/* Column 2: Clean Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About & Vision</Link></li>
              <li><Link to="/programs" className="hover:text-amber-400 transition-colors">Guild Programs</Link></li>
              <li><Link to="/community" className="hover:text-amber-400 transition-colors">Creator Network</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Team</Link></li>
              <li><Link to="/login" className="hover:text-amber-400 transition-colors">Account Sign In</Link></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono">Community</h4>
            <p className="text-xs text-slate-400">
              Join our buildathons, workshops, and creator sprints.
            </p>
            <Link
              to="/login"
              className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-md hover:scale-105 transition-all mt-2"
            >
              Join Ecosystem →
            </Link>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Turing Wings. All rights reserved.</p>
          <p>
            Built for <span className="font-bold text-amber-400">Creators & Innovators</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
