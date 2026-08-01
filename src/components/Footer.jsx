import React from "react";
import { Link } from "react-router-dom";
import TuringWingsLogo from "./TuringWingsLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-md text-left">
            <Link to="/" className="flex items-center gap-2">
              <TuringWingsLogo size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Turing Wings — AI-Native Engineering Ecosystem. Building next-generation software engineers through practical building, live cohort mentorship, and production-ready portfolios.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-left text-xs">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Platform</h4>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="hover:text-amber-400 transition-colors">Flagship Cohorts</Link></li>
                <li><Link to="/buildathons" className="hover:text-amber-400 transition-colors">Buildathons</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Community</h4>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="https://discord.gg/turingwings" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Discord Server</a></li>
                <li><a href="https://instagram.com/turingwings" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Team</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Turing Wings. All rights reserved.</p>
          <p className="text-[11px]">Designed for AI-Native Engineering</p>
        </div>
      </div>
    </footer>
  );
}
