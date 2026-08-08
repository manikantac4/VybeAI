import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cpu, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Code2, Terminal, Rocket, Layers } from 'lucide-react';

export default function CohortsListPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#22C55E] selection:text-black font-mono flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 space-y-16">
        
        {/* HERO BANNER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Intensive Cohorts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Build Real Products with AI Engineering & Cybersecurity
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hands-on 4-week flagship programs designed for engineers and college builders. Learn to collaborate with AI tools, build full-stack SaaS apps, automate security, and launch real systems.
          </p>
        </div>

        {/* 2 FLAGSHIP COHORTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* COHORT 1: AI ENGINEERING COHORT */}
          <div className="bg-[#0B0F17] border border-[#22C55E]/30 hover:border-[#22C55E] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300 shadow-2xl group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
                  FLAGSHIP 01 • 4 WEEKS
                </span>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                  Enrolling Now
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white group-hover:text-[#4ADE80] transition-colors">
                      AI Engineering Cohort
                    </h2>
                    <p className="text-xs text-slate-400">Build, Deploy & Launch AI Products</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  From web fundamentals to building, deploying, securing and launching modern AI-powered products. Learn to pair-program with Cursor, Antigravity, Claude, Supabase & Docker.
                </p>
              </div>

              {/* 4-WEEK TIMELINE MINI STEPS */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">4-Week Transformation</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#22C55E] font-bold">W1: Liftoff</span>
                    <p className="text-[11px] text-slate-400 truncate">Web & AI Planning</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#22C55E] font-bold">W2: Engine Room</span>
                    <p className="text-[11px] text-slate-400 truncate">APIs & SaaS Engine</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#22C55E] font-bold">W3: Altitude</span>
                    <p className="text-[11px] text-slate-400 truncate">Spotify & AI Product</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#22C55E] font-bold">W4: Flight Systems</span>
                    <p className="text-[11px] text-slate-400 truncate">Real-Time & Capstone</p>
                  </div>
                </div>
              </div>

              {/* TOOLS BADGES */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Antigravity', 'Cursor', 'Claude', 'React', 'Node.js', 'Supabase', 'Docker'].map((tool) => (
                  <span key={tool} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/cohorts/ai-engineering"
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-2xl bg-[#22C55E] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#4ADE80] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#22C55E]/20"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cohorts/register?cohort=ai-engineering"
                className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/15 transition-all"
              >
                Register ₹4,999
              </Link>
            </div>
          </div>

          {/* COHORT 2: AI & CYBERSECURITY COHORT */}
          <div className="bg-[#050B07] border border-[#22C55E]/40 hover:border-[#22C55E] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300 shadow-2xl group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1 rounded-full border border-[#06B6D4]/30">
                  FLAGSHIP 02 • 4 WEEKS
                </span>
                <span className="text-xs font-bold text-[#4ADE80] bg-[#22C55E]/10 px-2.5 py-0.5 rounded-md border border-[#22C55E]/30">
                  Enrolling Now
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#06B6D4]/20 border border-[#06B6D4]/40 flex items-center justify-center text-[#06B6D4]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white group-hover:text-[#06B6D4] transition-colors">
                      AI & Cybersecurity Cohort
                    </h2>
                    <p className="text-xs text-slate-400">Networking, Pentesting & AI Security Agents</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  Master networking fundamentals, Kali Linux, OWASP web application security, Python security automation, and build autonomous AI Security Agents with Model Context Protocol (MCP).
                </p>
              </div>

              {/* 4-WEEK TIMELINE MINI STEPS */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">4-Week Operations</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#06B6D4] font-bold">W1: Kali & Network</span>
                    <p className="text-[11px] text-slate-400 truncate">Cyber Lab Setup</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#06B6D4] font-bold">W2: Web Pentesting</span>
                    <p className="text-[11px] text-slate-400 truncate">OWASP & Burp Suite</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#06B6D4] font-bold">W3: Python Auto</span>
                    <p className="text-[11px] text-slate-400 truncate">OSINT & Log Tools</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[#06B6D4] font-bold">W4: AI Agents</span>
                    <p className="text-[11px] text-slate-400 truncate">MCP & Multi-Agent</p>
                  </div>
                </div>
              </div>

              {/* TOOLS BADGES */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Python', 'Ollama', 'OpenClaw', 'MCP'].map((tool) => (
                  <span key={tool} className="text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/cohorts/ai-cybersecurity"
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-2xl bg-[#06B6D4] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#22D3EE] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#06B6D4]/20"
              >
                <span>View Security Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cohorts/register?cohort=ai-cybersecurity"
                className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/15 transition-all"
              >
                Register ₹4,999
              </Link>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
