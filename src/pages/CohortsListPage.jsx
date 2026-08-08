import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cpu, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Code2, Terminal, Rocket, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CohortsListPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#090909] selection:bg-[#22C55E] selection:text-black font-mono flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 space-y-16">
        
        {/* HERO BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 max-w-3xl mx-auto pt-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#15803D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Intensive Cohorts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#090909] tracking-tight leading-tight font-sans">
            Build Real Products with AI Engineering & Cybersecurity
          </h1>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl mx-auto leading-relaxed font-sans">
            Hands-on 4-week flagship programs designed for engineers and college builders. Learn to collaborate with AI tools, build full-stack SaaS apps, automate security, and launch real systems.
          </p>
        </motion.div>

        {/* 2 FLAGSHIP COHORTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* COHORT 1: AI ENGINEERING COHORT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-black/10 hover:border-[#22C55E] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl group flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#15803D] bg-[#22C55E]/10 px-3 py-1 rounded-full border border-[#22C55E]/30">
                  FLAGSHIP 01 • 4 WEEKS
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                  Enrolling Now
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#15803D]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#090909] group-hover:text-[#15803D] transition-colors font-sans">
                      AI Engineering Cohort
                    </h2>
                    <p className="text-xs text-black/60 font-sans">Build, Deploy & Launch AI Products</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-black/75 leading-relaxed pt-2 font-sans">
                  From web fundamentals to building, deploying, securing and launching modern AI-powered products. Learn to pair-program with Cursor, Antigravity, Claude, Supabase & Docker.
                </p>
              </div>

              {/* 4-WEEK TIMELINE MINI STEPS */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-black/50">4-Week Transformation</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#15803D] font-bold">W1: Liftoff</span>
                    <p className="text-[11px] text-black/60 truncate">Web & AI Planning</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#15803D] font-bold">W2: Engine Room</span>
                    <p className="text-[11px] text-black/60 truncate">APIs & SaaS Engine</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#15803D] font-bold">W3: Altitude</span>
                    <p className="text-[11px] text-black/60 truncate">Spotify & AI Product</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#15803D] font-bold">W4: Flight Systems</span>
                    <p className="text-[11px] text-black/60 truncate">Real-Time & Capstone</p>
                  </div>
                </div>
              </div>

              {/* TOOLS BADGES */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Antigravity', 'Cursor', 'Claude', 'React', 'Node.js', 'Supabase', 'Docker'].map((tool) => (
                  <span key={tool} className="text-[10px] font-bold text-black/70 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-black/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/cohorts/ai-engineering"
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-2xl bg-[#090909] text-white hover:bg-[#22C55E] hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cohorts/register?cohort=ai-engineering"
                className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#22C55E]/10 text-[#090909] font-bold text-xs text-center border border-black/15 transition-all"
              >
                Register ₹4,999
              </Link>
            </div>
          </motion.div>

          {/* COHORT 2: AI & CYBERSECURITY COHORT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-black/10 hover:border-[#22C55E] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl group flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-[#0284C7]/10 px-3 py-1 rounded-full border border-[#0284C7]/30">
                  FLAGSHIP 02 • 4 WEEKS
                </span>
                <span className="text-xs font-bold text-[#15803D] bg-[#22C55E]/10 px-2.5 py-0.5 rounded-md border border-[#22C55E]/30">
                  Enrolling Now
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 border border-[#0284C7]/30 flex items-center justify-center text-[#0284C7]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#090909] group-hover:text-[#0284C7] transition-colors font-sans">
                      AI & Cybersecurity Cohort
                    </h2>
                    <p className="text-xs text-black/60 font-sans">Networking, Pentesting & AI Security Agents</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-black/75 leading-relaxed pt-2 font-sans">
                  Master networking fundamentals, Kali Linux, OWASP web application security, Python security automation, and build autonomous AI Security Agents with Model Context Protocol (MCP).
                </p>
              </div>

              {/* 4-WEEK TIMELINE MINI STEPS */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-black/50">4-Week Operations</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#0284C7] font-bold">W1: Kali & Network</span>
                    <p className="text-[11px] text-black/60 truncate">Cyber Lab Setup</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#0284C7] font-bold">W2: Web Pentesting</span>
                    <p className="text-[11px] text-black/60 truncate">OWASP & Burp Suite</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#0284C7] font-bold">W3: Python Auto</span>
                    <p className="text-[11px] text-black/60 truncate">OSINT & Log Tools</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/10 space-y-1">
                    <span className="text-[#0284C7] font-bold">W4: AI Agents</span>
                    <p className="text-[11px] text-black/60 truncate">MCP & Multi-Agent</p>
                  </div>
                </div>
              </div>

              {/* TOOLS BADGES */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Python', 'Ollama', 'OpenClaw', 'MCP'].map((tool) => (
                  <span key={tool} className="text-[10px] font-bold text-black/70 bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-black/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/cohorts/ai-cybersecurity"
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-2xl bg-[#090909] text-white hover:bg-[#0284C7] font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>View Security Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cohorts/register?cohort=ai-cybersecurity"
                className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#0284C7]/10 text-[#090909] font-bold text-xs text-center border border-black/15 transition-all"
              >
                Register ₹4,999
              </Link>
            </div>
          </motion.div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
