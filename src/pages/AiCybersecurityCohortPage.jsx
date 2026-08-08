import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ShieldCheck, Terminal, Cpu, Lock, AlertTriangle, CheckCircle2, ArrowRight, 
  Sparkles, Key, Radio, ChevronDown, ChevronUp, Zap, FileText, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiCybersecurityCohortPage() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [openDay, setOpenDay] = useState(null);

  const securityMatrix = [
    { code: 'SEC-01', title: 'Network Recon', desc: 'OSI, TCP/IP & Kali Linux setup' },
    { code: 'SEC-02', title: 'Web App Pentest', desc: 'Burp Suite & OWASP Top 10' },
    { code: 'SEC-03', title: 'Python Auto', desc: 'Log parsers & OSINT tools' },
    { code: 'SEC-04', title: 'AI SOC Agents', desc: 'Model Context Protocol (MCP)' },
  ];

  const weeksData = [
    {
      week: 1,
      title: 'Week 1 — Networking & Kali Linux Essentials',
      subtitle: 'Build a Cyber Foundation & Terminal Command Mastery',
      goal: 'Understand Internet device communication → setup Kali Linux VM → capture packets in Wireshark.',
      days: [
        {
          title: 'Day 1 — Cybersecurity Foundations & Kali Setup',
          theory: 'CIA Triad, Ethical Hacking principles, VM setup.',
          practical: 'Install Kali Linux VM & configure workspace.',
        },
        {
          title: 'Day 2 & 3 — Networking & IP Architecture',
          theory: 'Routers, Switches, Firewalls, IPv4 vs IPv6, Ports & Protocols.',
          practical: 'Terminal commands: ip a, ping, traceroute, nslookup, dig.',
        },
        {
          title: 'Day 4 & 5 — Wireshark Packet Analysis & Linux Terminal',
          theory: 'OSI 7-Layer Model, Packet Flow, Linux File Permissions.',
          practical: 'Live Wireshark packet capture & Linux shell scripts.',
        },
      ],
      miniProject: 'Build & configure complete Kali Linux Cyber Lab Environment.',
    },
    {
      week: 2,
      title: 'Week 2 — Web Security & Ethical Pentesting',
      subtitle: 'Burp Suite Proxy, OWASP Top 10 & Scanners',
      goal: 'Inspect HTTP traffic → master Burp Suite → perform vulnerability scans with OWASP ZAP.',
      days: [
        {
          title: 'Day 1 & 2 — HTTP Protocol & Burp Suite Proxy',
          theory: 'Client-Server architecture, HTTP headers, Cookies & Sessions.',
          practical: 'Burp Suite Intercept, Repeater, & directory discovery.',
        },
        {
          title: 'Day 3 & 4 — OWASP Top 10 & Security Scanning',
          theory: 'SQL Injection, XSS, CSRF, Insecure Direct Object References.',
          practical: 'DVWA & Juice Shop lab pentesting with OWASP ZAP & Nikto.',
        },
        {
          title: 'Day 5 — Security Assessment Reporting',
          theory: 'Penetration testing lifecycle & vulnerability documentation.',
          practical: 'Generate executive security audit report with proof-of-concept.',
        },
      ],
      miniProject: 'Perform Web Application Security Audit & generate executive report.',
    },
    {
      week: 3,
      title: 'Week 3 — Python Security Automation & OSINT',
      subtitle: 'Automate Log Parsers, Port Tools & Threat Intel APIs',
      goal: 'Write Python scripts for log parsing → IP lookups → OSINT threat intelligence collection.',
      days: [
        {
          title: 'Day 1 & 2 — Python Fundamentals & Log Parsers',
          theory: 'Python syntax, conditions, file handling, regular expressions.',
          practical: 'Write automated log parser for authentication attacks.',
        },
        {
          title: 'Day 3 & 4 — Network Utilities & AI Scripting Assistance',
          theory: 'Sockets, HTTP requests library, AI prompt engineering for security code.',
          practical: 'Build Python host scanner & threat intelligence utility.',
        },
        {
          title: 'Day 5 — Automation Security Workflow',
          theory: 'SOC Indicators of Compromise (IOCs) & file hash verification.',
          practical: 'Combine scripts into automated incident response tool.',
        },
      ],
      miniProject: 'Build Python OSINT Threat Intelligence Tool.',
    },
    {
      week: 4,
      title: 'Week 4 — Autonomous AI Security Agents (MCP)',
      subtitle: 'Build Multi-Agent SOC Workflows with Model Context Protocol',
      goal: 'Agentic AI framework → Ollama local LLMs → tool calling via MCP → Capstone presentation.',
      days: [
        {
          title: 'Day 1 & 2 — Agentic AI & Model Context Protocol',
          theory: 'LLM agents vs chat assistants, MCP specification, local models.',
          practical: 'Setup Ollama, Llama 3, OpenClaw & build initial Security Agent.',
        },
        {
          title: 'Day 3 & 4 — Multi-Agent Threat Analysis Workflows',
          theory: 'Tool permissions, VirusTotal API, Nmap integration, agent delegation.',
          practical: 'Build Multi-Agent SOC assessment system.',
        },
        {
          title: 'Day 5 — Capstone Project & Demo Day',
          theory: 'Autonomous AI Security Systems, LLM security risks.',
          practical: 'Live Demonstration & Solo Capstone presentation.',
        },
      ],
      miniProject: 'Build Autonomous AI Agent for Automated Cybersecurity Assessment.',
    },
  ];

  const toolsList = [
    { name: 'Kali Linux', desc: 'Pentesting OS' },
    { name: 'Burp Suite', desc: 'Intercept Proxy' },
    { name: 'Nmap & Gobuster', desc: 'Reconnaissance' },
    { name: 'Wireshark', desc: 'Packet Analyzer' },
    { name: 'OWASP ZAP & Nikto', desc: 'Vulnerability Scanners' },
    { name: 'Python 3', desc: 'Security Automation' },
    { name: 'Ollama & Llama 3', desc: 'Local AI Models' },
    { name: 'OpenClaw & MCP', desc: 'Agentic Framework' },
  ];

  const activeWeekObj = weeksData.find((w) => w.week === activeWeek);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#090909] selection:bg-[#22C55E] selection:text-black font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-8 py-10 space-y-12">

        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-black/10 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl"
        >
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284C7]/10 border border-[#0284C7]/30 text-[#0284C7] text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>4-WEEK CYBERSECURITY COHORT</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090909] text-white text-xs font-bold font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Launch Date: September 01, 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono">
                <span>Tuition Fee: ₹4,999</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#090909] tracking-tight">
              AI & Cybersecurity Cohort
            </h1>

            <p className="text-base sm:text-lg text-[#0284C7] font-medium">
              Networking, Web Pentesting, Python Automation & Autonomous AI Security Agents.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/cohorts/register?cohort=ai-cybersecurity"
                className="py-3.5 px-7 rounded-2xl bg-[#090909] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0284C7] transition-all text-center flex items-center justify-center gap-2 shadow-md font-mono"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Join Security Ops • ₹4,999</span>
              </Link>
              <a
                href="#security-schedule"
                className="py-3.5 px-5 rounded-2xl bg-[#FAF8F5] hover:bg-black/5 text-[#090909] font-bold text-xs text-center border border-black/15 transition-all flex items-center justify-center gap-2 font-mono"
              >
                <span>View 4-Week Schedule</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KEY STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-black/10 text-xs font-mono">
            <div>
              <span className="text-black/50 text-[10px] uppercase block">Launch Date</span>
              <span className="text-sm font-bold text-[#0284C7]">September 01, 2026</span>
            </div>
            <div>
              <span className="text-black/50 text-[10px] uppercase block">Tuition Fee</span>
              <span className="text-sm font-bold text-[#090909]">₹4,999</span>
            </div>
            <div>
              <span className="text-black/50 text-[10px] uppercase block">Duration</span>
              <span className="text-sm font-bold text-[#090909]">4 Weeks Live</span>
            </div>
            <div>
              <span className="text-black/50 text-[10px] uppercase block">Lab Standard</span>
              <span className="text-sm font-bold text-[#15803D]">MCP Agent Framework</span>
            </div>
          </div>
        </motion.div>

        {/* TERMINAL SIMULATION GRAPHIC */}
        <div className="bg-[#090D16] border border-black/10 rounded-3xl p-5 sm:p-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="text-[11px] text-slate-400 font-mono ml-1">root@turingwings-sec:~#</span>
            </div>
            <span className="text-[10px] font-bold text-[#38BDF8] font-mono">LIVE AI SOC TERMINAL</span>
          </div>

          <div className="space-y-1.5 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">
            <p className="text-[#4ADE80]">$ nmap -sC -sV -p 80,443 target.turingwings.lab</p>
            <p className="text-[#38BDF8]">[+] Burp Suite Proxy Intercept: POST /api/login</p>
            <p className="text-[#4ADE80]">[+] OpenClaw AI Agent: Analyzing authentication logs...</p>
            <p className="text-red-400 font-bold">[ALERT]: SQL Injection pattern identified on username input</p>
            <p className="text-[#4ADE80] font-bold">[SUCCESS]: AI Agent generated security mitigation patch!</p>
          </div>
        </div>

        {/* SECURITY OPERATIONS MATRIX */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] font-mono">OPERATIONS MATRIX</span>
            <h2 className="text-2xl font-extrabold text-[#090909]">4-Stage Security Operations</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {securityMatrix.map((m) => (
              <div key={m.code} className="p-3.5 rounded-2xl bg-white border border-black/10 space-y-1 shadow-xs">
                <span className="text-xs font-bold text-[#0284C7] font-mono">{m.code}</span>
                <h3 className="text-xs font-bold text-[#090909]">{m.title}</h3>
                <p className="text-[10px] text-black/60 leading-tight">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-WEEK INTERACTIVE LAB SYLLABUS */}
        <div id="security-schedule" className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] font-mono">TACTICAL SYLLABUS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090909]">Operations Plan</h2>
            </div>

            {/* WEEK TABS */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-black/10 overflow-x-auto shadow-xs font-mono">
              {weeksData.map((w) => (
                <button
                  key={w.week}
                  onClick={() => {
                    setActiveWeek(w.week);
                    setOpenDay(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeWeek === w.week
                      ? 'bg-[#090909] text-white shadow-md'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  Week {w.week}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE WEEK CARD DETAILS */}
          {activeWeekObj && (
            <div className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-1 border-b border-black/10 pb-4">
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest font-mono">
                  WEEK 0{activeWeekObj.week} SUMMARY
                </span>
                <h3 className="text-2xl font-extrabold text-[#090909]">
                  {activeWeekObj.title}
                </h3>
                <p className="text-xs text-black/70 leading-relaxed">{activeWeekObj.goal}</p>
              </div>

              {/* DAYS ACCORDION */}
              <div className="space-y-3">
                {activeWeekObj.days.map((day, idx) => {
                  const isOpen = openDay === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAF8F5] border border-black/10 hover:border-[#0284C7]/50 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : idx)}
                        className="w-full p-4 flex items-center justify-between text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-[#0284C7]/15 text-[#0284C7] font-bold text-xs flex items-center justify-center shrink-0 font-mono">
                            D{idx + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[#090909]">{day.title}</h4>
                            <p className="text-xs text-black/60">{day.theory}</p>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#0284C7]" /> : <ChevronDown className="w-4 h-4 text-black/40" />}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 pt-0 border-t border-black/10 space-y-3 text-xs text-black/80"
                          >
                            <div className="p-3 rounded-xl bg-white border border-black/10">
                              <span className="font-bold text-[#0284C7] block mb-0.5">🧪 Practical Lab & Exercise:</span>
                              <p className="text-[11px] text-black/70">{day.practical}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* MINI PROJECT DELIVERABLE */}
              <div className="p-3.5 rounded-2xl bg-[#0284C7]/10 border border-[#0284C7]/30 flex items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="font-bold text-[#0284C7] block">Week Deliverable:</span>
                  <p className="text-black/75">{activeWeekObj.miniProject}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0" />
              </div>
            </div>
          )}
        </div>

        {/* TOOLS & STACK COVERED */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] font-mono">SECURITY TOOLKIT</span>
            <h2 className="text-2xl font-extrabold text-[#090909]">Security Tools & AI Stack</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {toolsList.map((t) => (
              <div key={t.name} className="p-3.5 rounded-2xl bg-white border border-black/10 space-y-0.5 shadow-xs">
                <span className="text-xs font-bold text-[#090909] block font-mono">{t.name}</span>
                <span className="text-[11px] text-black/60 block">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div className="bg-white border border-black/10 rounded-3xl p-8 sm:p-10 text-center space-y-5 shadow-xl">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest font-mono">JOIN SECURITY OPS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090909]">AI & Cybersecurity Cohort</h2>
            <p className="text-xs text-black/70">
              4 Weeks of live pentesting labs, Python security automation, and autonomous MCP agents.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <Link
              to="/cohorts/register?cohort=ai-cybersecurity"
              className="py-3.5 px-8 rounded-2xl bg-[#090909] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0284C7] transition-all flex items-center gap-2 shadow-lg font-mono"
            >
              <span>Register Now • ₹4,999</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
