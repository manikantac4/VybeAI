import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex flex-col text-left select-none">
              <div className="font-extrabold tracking-wide text-xl leading-none text-white">
                <span>TURING </span>
                <span className="text-cyan-400">WINGS</span>
              </div>
              <span className="font-semibold uppercase tracking-widest text-[9.5px] text-slate-400 mt-1">
                Learn. Build. Innovate.
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-3">
              An ecosystem of creators, innovators, builders, and future thinkers who believe modern technology, AI, and digital creation should be accessible, inspiring, collaborative, and empowering for everyone.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/portal/core/v1/dashboard-overview" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/portal/system/v1/organization-profile" className="hover:text-cyan-400 transition-colors">About & Vision</Link></li>
              <li><Link to="/portal/services/v2/program-catalog" className="hover:text-cyan-400 transition-colors">Initial Programs</Link></li>
              <li><Link to="/portal/analytics/v1/feedback-center" className="hover:text-cyan-400 transition-colors">Creator Reviews</Link></li>
              <li><Link to="/portal/auth/v1/account-access" className="hover:text-cyan-400 transition-colors">Login / Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact / Community */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">Community</h4>
            <p className="text-xs text-slate-400">
              Join our buildathons, workshops, and creator sprints.
            </p>
            <Link
              to="/portal/auth/v1/account-access"
              className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all mt-2"
            >
              Join Ecosystem →
            </Link>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Turing Wings. All rights reserved.</p>
          <p>
            Built for <span className="font-bold text-cyan-400">Creators & Innovators</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
