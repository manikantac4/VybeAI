import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ShieldCheck, Terminal, Cpu, Lock, AlertTriangle, CheckCircle2, ArrowRight, 
  Sparkles, Key, Radio, ChevronDown, ChevronUp, Zap, FileText
} from 'lucide-react';

export default function AiCybersecurityCohortPage() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [openDay, setOpenDay] = useState(null);

  const securityMatrix = [
    { code: 'SEC-01', title: 'Network Recon', desc: 'OSI, TCP/IP, IP addressing & Kali Linux' },
    { code: 'SEC-02', title: 'Web Vulnerabilities', desc: 'Burp Suite, OWASP Top 10 & pentesting' },
    { code: 'SEC-03', title: 'Python Automation', desc: 'Log parsers, OSINT tools & socket scripts' },
    { code: 'SEC-04', title: 'AI Agents & MCP', desc: 'Ollama, OpenClaw & Multi-Agent SOC Systems' },
  ];

  const weeksData = [
    {
      week: 1,
      title: 'Week 1 — Networking Fundamentals & Kali Linux Essentials',
      subtitle: 'Build a Strong Cyber Foundation & Command Line Mastery',
      goal: 'Understand how devices communicate over the Internet, learn core networking concepts used in cybersecurity, and become comfortable using Kali Linux and the Linux command line.',
      days: [
        {
          title: 'Day 1 — Introduction to Cybersecurity & Course Setup',
          theory: 'Introduction to Cybersecurity, CIA Triad, Cyber Domains, Ethical Hacking vs Cybercrime, Responsible Disclosure.',
          practical: 'Install VirtualBox/VMware, Kali Linux setup, Interface Tour, Configure VM Settings & Snapshots.',
          exercise: 'Boot Kali Linux, explore desktop, open terminal, and update operating system package manager.',
          homework: 'Research one famous cyber attack (What happened, execution, impact, prevention).',
        },
        {
          title: 'Day 2 — Networking Fundamentals',
          theory: 'What is Networking? Why Networking Matters in Cybersecurity, Types of Networks (LAN, WAN, MAN, PAN), Network Topologies & Devices (Routers, Switches, Firewalls, Access Points).',
          practical: 'Draw a Home Network, Identify Network Devices, Observe Network Connections.',
          exercise: 'Create a network diagram showing Router, Devices, Internet Connection, and Wi-Fi Clients.',
          homework: 'Create a detailed network topology diagram of your home or college network.',
        },
        {
          title: 'Day 3 — IP Addressing & Network Communication',
          theory: 'IPv4 vs IPv6, Public vs Private IP, Static vs Dynamic, Subnet Mask, Default Gateway, MAC Address, DNS, DHCP, Common Ports (HTTP 80, HTTPS 443, FTP 21, SSH 22, SMTP 25), TCP vs UDP.',
          practical: 'Terminal commands: ip a, ifconfig, ping, traceroute, nslookup, dig.',
          exercise: 'Find IP Address & Gateway, Check DNS Resolution, Ping Websites, Trace Internet Routes.',
          homework: 'Prepare a network table containing Private IP, Public IP, Gateway, DNS Server, and MAC Address.',
        },
        {
          title: 'Day 4 — OSI Model, TCP/IP & Packet Flow',
          theory: '7-Layer OSI Model (Physical to Application), TCP/IP Model, Packet Journey (Computer → Switch → Router → ISP → Web Server), Network Protocols (HTTP, HTTPS, FTP, SSH, ICMP).',
          practical: 'Capture live packets using Wireshark, observe DNS requests, HTTP requests, and ICMP traffic.',
          exercise: 'Capture network traffic while browsing a website, running ping, and performing DNS lookups.',
          homework: 'Draw the complete packet flow diagram when opening a website in a browser.',
        },
        {
          title: 'Day 5 — Linux Essentials & Kali Linux Terminal',
          theory: 'Linux File System (Root, Home, File Structure), Essential Commands (pwd, ls, cd, mkdir, touch, cp, mv, rm, cat, nano), File Permissions (chmod, chown, sudo), Package & Process Management.',
          practical: 'Create directories, manage permissions, install software packages via apt.',
          exercise: 'Build directory structure: Cybersecurity/ (Notes/, Labs/, Projects/, Scripts/).',
          homework: 'Complete a Linux command worksheet using at least 20 commands learned.',
        },
      ],
      miniProject: 'Build Your Cybersecurity Lab Environment — Install Kali Linux VM, set up structured workspace, verify network connectivity, and submit lab documentation.',
    },
    {
      week: 2,
      title: 'Week 2 — Web Application Security & Ethical Vulnerability Assessment',
      subtitle: 'Inspect Traffic, Master OWASP Top 10 & Perform Vulnerability Scans',
      goal: 'Explore how web applications work, understand common web vulnerabilities, and learn ethical vulnerability assessment using Burp Suite, ZAP, and Nikto in authorized lab environments.',
      days: [
        {
          title: 'Day 1 — Web Fundamentals & HTTP Protocol',
          theory: 'Client-Server Architecture, Static vs Dynamic Websites, HTTP Methods (GET, POST, PUT, DELETE), Status Codes (200, 301, 403, 404, 500), Cookies & Session IDs.',
          practical: 'Inspect HTTP requests using Browser DevTools, view cookies, analyze headers, examine session tokens.',
          exercise: 'Open DevTools, analyze requests while logging into a website, observe response codes & session values.',
          homework: 'Document HTTP Methods, Cookies, Response Headers, and Security Headers of a public website.',
        },
        {
          title: 'Day 2 — Reconnaissance & Burp Suite',
          theory: 'Passive vs Active Reconnaissance, Web Enumeration, Burp Suite Architecture (Proxy, Intercept, Repeater, Intruder, Decoder), Recon tools (Nmap, Gobuster, Dirsearch, WhatWeb, Wappalyzer).',
          practical: 'Configure Browser Proxy, Intercept Requests, Modify Requests, Forward Requests, Discover Hidden Directories.',
          exercise: 'Practice using Burp Suite Community Edition, Gobuster, and Dirsearch against a local vulnerable web application.',
          homework: 'Document hidden directories discovered, technologies identified, and interesting HTTP endpoints.',
        },
        {
          title: 'Day 3 — OWASP Top 10 & Common Vulnerabilities',
          theory: 'OWASP Top 10 Overview (Broken Access Control, Injection, Cryptographic Failures, Insecure Design), SQL Injection, XSS, CSRF, File Upload Risks, Directory Traversal, Mitigations.',
          practical: 'Using DVWA or OWASP Juice Shop: Identify common vulnerabilities, observe application behavior, analyze secure vs insecure code.',
          exercise: 'Navigate intentionally vulnerable pages, observe how insecure inputs are handled, record findings.',
          homework: 'Create a vulnerability table including Vulnerability, Description, Risk Rating, and Mitigation.',
        },
        {
          title: 'Day 4 — Ethical Vulnerability Assessment',
          theory: 'Vulnerability Assessment Process (Planning, Recon, Scanning, Validation, Reporting, Remediation), Assessment Tools (OWASP ZAP, Nikto, Burp Scanner, Nmap NSE), Security Reporting.',
          practical: 'Run vulnerability scans against an intentionally vulnerable application using OWASP ZAP & Nikto.',
          exercise: 'Generate a vulnerability report including Finding, Severity, Evidence, and Recommendation.',
          homework: 'Write a one-page executive security assessment report based on lab results.',
        },
        {
          title: 'Day 5 — Mini Penetration Testing Workflow',
          theory: 'Ethical Penetration Testing Lifecycle (PTES Overview, OWASP Testing Guide, NIST SP 800-115), Evidence Collection, Screenshots, Risk Prioritization.',
          practical: 'Guided assessment of a vulnerable web application (Information Gathering, Directory Enumeration, HTTP Analysis, Vulnerability ID).',
          exercise: 'Complete a beginner-friendly web application security assessment and produce a professional report.',
          homework: 'Submit complete Web Application Security Assessment Report with screenshots.',
        },
      ],
      miniProject: 'Web Application Security Assessment — Perform recon on vulnerable target, inspect HTTP traffic, identify OWASP vulnerabilities, and generate executive report.',
    },
    {
      week: 3,
      title: 'Week 3 — AI-Assisted Python Scripting for Cybersecurity',
      subtitle: 'Automate Security Operations & Build OSINT Tools with Python & AI',
      goal: 'Learn how Python automates cybersecurity tasks. Build scripts for log analysis, file handling, network utilities, API interactions, and learn safe, ethical AI scripting workflows.',
      days: [
        {
          title: 'Day 1 — Python Fundamentals for Cybersecurity',
          theory: 'Why Python is useful in cybersecurity, Python syntax basics, Variables, Data Types, Input/Output, Operators, Conditions (if/else).',
          practical: 'Install Python & VS Code, run first Python program, write condition-based security scripts.',
          exercise: 'Write a script that checks IP reachability and prints security alerts based on user input.',
          homework: 'Practice 5 small Python programs using variables and conditional logic.',
        },
        {
          title: 'Day 2 — Loops, Functions & File Handling',
          theory: 'Loops (for, while), Functions, Lists & Dictionaries, Reading and Writing Files, CSV & JSON parsing.',
          practical: 'Read a text log file using Python, write filtered output to file, create reusable security functions.',
          exercise: 'Build a script that reads a server log file and prints lines containing suspicious keywords (e.g. "401 Unauthorized", "SQLi").',
          homework: 'Create a Python log note parser and save filtered output to a new CSV file.',
        },
        {
          title: 'Day 3 — Networking with Python',
          theory: 'Sockets overview, Requests library, IP lookup, Banner grabbing concepts, Port scanning concepts (lab-safe), Error handling.',
          practical: 'Use Python requests to fetch web content, create a simple DNS lookup utility, test connectivity to local lab host.',
          exercise: 'Write a script that checks whether a host is reachable and saves banner results.',
          homework: 'Modify the script to accept multiple target hosts from a text file.',
        },
        {
          title: 'Day 4 — AI for Script Assistance',
          theory: 'How AI helps with security scripting, Prompting for code generation, Reviewing AI-generated code, Security & privacy concerns.',
          practical: 'Use AI to draft a Python script, review & improve script manually, test & debug with AI assistance.',
          exercise: 'Ask an AI tool to create a log parser, then verify, test, and improve the output manually.',
          homework: 'Write a short reflection on how AI helped and what must still be verified manually.',
        },
        {
          title: 'Day 5 — Security Automation Mini Workflow',
          theory: 'Automation in SOC & Security Ops, Indicators of Compromise (IOCs), Hashing basics (MD5, SHA256), Summary report generation.',
          practical: 'Build a file hash checker, build a basic log keyword detector, generate a summary report.',
          exercise: 'Combine two small scripts into one workflow that scans a folder and reports suspicious files.',
          homework: 'Prepare final version of automation script with detailed comments.',
        },
      ],
      miniProject: 'OSINT (Open-Source Intelligence) Tool Development — Build a Python tool capable of collecting publicly available threat intelligence from user inputs.',
    },
    {
      week: 4,
      title: 'Week 4 — AI Agents for Cybersecurity',
      subtitle: 'Build Autonomous Security AI Agents with MCP & Multi-Agent Workflows',
      goal: 'Move from AI-assisted scripting to Agentic AI. Learn how AI agents work, how they use tools, memory, planning and reasoning via Model Context Protocol (MCP) to automate security autonomously.',
      days: [
        {
          title: 'Day 1 — Introduction to Agentic AI & MCP',
          theory: 'Evolution of AI (Assistant vs Agent), Agentic Architecture (LLM, Planning, Memory, Tool Calling, Reflection), Model Context Protocol (MCP) standards.',
          practical: 'Install Python, Ollama, OpenClaw, Hermes, Git; download local models (Llama 3, Qwen 3, Mistral).',
          exercise: 'Run your first local AI model, connect OpenClaw to local model, build a simple Hello Agent.',
          homework: 'Install all required agentic software and document local environment setup.',
        },
        {
          title: 'Day 2 — Building Your First Cybersecurity Agent',
          theory: 'AI Agent Lifecycle, Function Calling, Memory, Multi-step Reasoning, Autonomous Decision Making.',
          practical: 'Create a Security Agent capable of reading log files, summarizing logs, identifying suspicious events, producing recommendations.',
          exercise: 'Develop an AI SOC Assistant that analyzes sample authentication logs.',
          homework: 'Improve the assistant by adding severity classification (Low, Medium, High, Critical).',
        },
        {
          title: 'Day 3 — Integrating Cybersecurity Tools via MCP',
          theory: 'How AI interacts with tools (Nmap, WHOIS, VirusTotal, Shodan, AbuseIPDB, CVE Database), MCP Servers, Tool Permissions, API Integration.',
          practical: 'Connect your AI agent with Nmap, VirusTotal API, and WHOIS. Agent scans target in authorized lab & summarizes findings.',
          exercise: 'Build an AI Recon Assistant that queries public threat intelligence.',
          homework: 'Extend the agent with one additional public threat intelligence source (e.g. AbuseIPDB).',
        },
        {
          title: 'Day 4 — Multi-Agent Cybersecurity Systems',
          theory: 'Multi-Agent Systems (Planner, Research, Analyst, Reporting Agents), CrewAI & AutoGen Overview, Agent Communication & Delegation.',
          practical: 'Create multi-agent workflow: User → Recon Agent → Analysis Agent → Reporting Agent → Final Security Report.',
          exercise: 'Develop a Multi-Agent Vulnerability Assessment workflow.',
          homework: 'Improve one agent’s reasoning or reporting capabilities.',
        },
        {
          title: 'Day 5 — Capstone Project & Demo Day',
          theory: 'Building Production AI Security Systems, Prompt Injection Risks, LLM Security, Agent Evaluation, Future of AI Security.',
          practical: 'Complete final project: AI Agent for Automated Cybersecurity Assessment.',
          exercise: 'Live Demonstration & Solo Capstone Presentation.',
          homework: 'Prepare final presentation slides and open-source GitHub repository.',
        },
      ],
      miniProject: 'AI Agent for Automated Cybersecurity Assessment — Build an autonomous AI Agent that runs Nmap, WHOIS, VirusTotal, CVE searches, and generates executive security reports.',
    },
  ];

  const toolsList = [
    { name: 'Kali Linux', desc: 'Pentesting OS' },
    { name: 'Burp Suite', desc: 'Web Intercept Proxy' },
    { name: 'Nmap & Gobuster', desc: 'Recon & Enumeration' },
    { name: 'Wireshark', desc: 'Packet Analyzer' },
    { name: 'OWASP ZAP & Nikto', desc: 'Vulnerability Scanners' },
    { name: 'DVWA & Juice Shop', desc: 'Target Lab Environments' },
    { name: 'Python 3', desc: 'Security Automation' },
    { name: 'Ollama & Llama 3', desc: 'Local AI LLM Engines' },
    { name: 'OpenClaw & Hermes', desc: 'Agentic Frameworks' },
    { name: 'MCP Protocol', desc: 'Model Context Protocol' },
    { name: 'VirusTotal & WHOIS', desc: 'Threat Intel APIs' },
    { name: 'Shodan & AbuseIPDB', desc: 'Recon Intelligence' },
  ];

  const activeWeekObj = weeksData.find((w) => w.week === activeWeek);

  return (
    <div className="min-h-screen bg-[#030905] text-white selection:bg-[#22C55E] selection:text-black font-mono flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 space-y-16">

        {/* HERO SECTION */}
        <div className="relative bg-[#050E08] border border-[#06B6D4]/40 rounded-3xl p-6 sm:p-12 overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#06B6D4]" />
              <span>SPECIALIZED 4-WEEK CYBERSECURITY COHORT</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              AI & Cybersecurity Cohort
            </h1>

            <p className="text-base sm:text-xl text-[#4ADE80] font-medium leading-relaxed">
              Networking Fundamentals, Web Security, AI-Assisted Scripting, and Autonomous AI Security Agents.
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Transition from basic networking and Kali Linux setup to intercepting web traffic with Burp Suite, writing Python security scripts, and building autonomous AI Security Agents powered by Model Context Protocol (MCP).
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/cohorts/register?cohort=ai-cybersecurity"
                className="py-4 px-8 rounded-2xl bg-[#06B6D4] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#22D3EE] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#06B6D4]/30"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>Join Security Ops • ₹4,999</span>
              </Link>
              <a
                href="#security-schedule"
                className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Inspect Tactical Syllabus</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KEY STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Duration</span>
              <span className="text-sm font-bold text-white">4 Weeks (Hands-On Lab)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Lab Targets</span>
              <span className="text-sm font-bold text-[#06B6D4]">DVWA, Juice Shop, OWASP</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">AI Standard</span>
              <span className="text-sm font-bold text-[#4ADE80]">MCP Agentic Framework</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Prerequisites</span>
              <span className="text-sm font-bold text-amber-400">Zero Prior Knowledge</span>
            </div>
          </div>
        </div>

        {/* TERMINAL SIMULATION GRAPHIC */}
        <div className="bg-[#020503] border border-[#22C55E]/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-400 ml-2 font-mono">root@turingwings-sec-lab:~#</span>
            </div>
            <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">LIVE SOC AGENT TERMINAL</span>
          </div>

          <div className="space-y-2 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">
            <p className="text-[#22C55E]">$ nmap -sC -sV -p 80,443 target.turingwings.lab</p>
            <p className="text-slate-400">Starting Nmap 7.94 ( https://nmap.org ) at 2026-08-08 14:15 UTC</p>
            <p className="text-slate-300">Nmap scan report for target.turingwings.lab (192.168.1.105)</p>
            <p className="text-slate-400">PORT    STATE SERVICE VERSION</p>
            <p className="text-amber-400">80/tcp  open  http    Apache httpd 2.4.52 ((Ubuntu))</p>
            <p className="text-amber-400">443/tcp open  ssl/http OpenSSL 3.0.2</p>
            <p className="text-[#06B6D4]">[+] Burp Suite Intercept Enabled: Intercepted HTTP POST /api/login</p>
            <p className="text-[#4ADE80]">[+] OpenClaw AI Security Agent initialized via MCP protocol...</p>
            <p className="text-slate-300">[AI SOC]: Analyzing authentication log parameters...</p>
            <p className="text-red-400 font-bold">[ALERT]: SQL Injection pattern identified in username parameter 'admin' OR '1'='1'</p>
            <p className="text-[#22C55E] font-bold">[SUCCESS]: AI Agent generated security mitigation patch & parameterized SQL query!</p>
          </div>
        </div>

        {/* SECURITY OPERATIONS MATRIX */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">TACTICAL MATRIX</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">4-Stage Security Operations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityMatrix.map((m) => (
              <div key={m.code} className="p-5 rounded-2xl bg-[#050E08] border border-white/10 space-y-2 text-center flex flex-col justify-between">
                <span className="text-xs font-extrabold text-[#06B6D4]">{m.code}</span>
                <h3 className="text-sm font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-tight">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-WEEK INTERACTIVE TACTICAL SYLLABUS */}
        <div id="security-schedule" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">TACTICAL LAB SYLLABUS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">4-Week Operations Plan</h2>
            </div>

            {/* WEEK TABS */}
            <div className="flex items-center gap-2 bg-[#050E08] p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
              {weeksData.map((w) => (
                <button
                  key={w.week}
                  onClick={() => {
                    setActiveWeek(w.week);
                    setOpenDay(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeWeek === w.week
                      ? 'bg-[#06B6D4] text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Week {w.week}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE WEEK CARD DETAILS */}
          {activeWeekObj && (
            <div className="bg-[#050E08] border border-[#06B6D4]/40 rounded-3xl p-6 sm:p-10 space-y-8">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">
                  WEEK 0{activeWeekObj.week} SUMMARY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeWeekObj.title}
                </h3>
                <p className="text-sm font-semibold text-[#4ADE80]">{activeWeekObj.subtitle}</p>
                <p className="text-xs text-slate-300 pt-2 leading-relaxed">{activeWeekObj.goal}</p>
              </div>

              {/* DAYS EXPANDABLE LIST */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Daily Labs & Tactical Milestones</h4>

                {activeWeekObj.days.map((day, idx) => {
                  const isOpen = openDay === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 hover:border-[#06B6D4]/40 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#06B6D4]/20 text-[#06B6D4] font-bold text-xs flex items-center justify-center shrink-0">
                            D{idx + 1}
                          </span>
                          <div>
                            <h5 className="text-sm sm:text-base font-bold text-white">{day.title}</h5>
                            <p className="text-xs text-slate-400 line-clamp-1">{day.theory}</p>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#06B6D4]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-white/10 space-y-4 text-xs text-slate-300">
                          <div>
                            <span className="font-bold text-[#06B6D4] block mb-1">Theoretical Foundations:</span>
                            <p className="text-slate-300 leading-relaxed">{day.theory}</p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                              <span className="font-bold text-white block mb-1">🧪 Practical Lab:</span>
                              <p className="text-[11px] text-slate-300">{day.practical}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                              <span className="font-bold text-[#4ADE80] block mb-1">⚡ Hands-on Exercise:</span>
                              <p className="text-[11px] text-slate-300">{day.exercise}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                              <span className="font-bold text-amber-400 block mb-1">📝 Homework / Deliverable:</span>
                              <p className="text-[11px] text-slate-300">{day.homework}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* MINI PROJECT DELIVERABLE */}
              <div className="p-4 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#06B6D4] block">Week Mini Project Deliverable:</span>
                  <p className="text-slate-300">{activeWeekObj.miniProject}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4] shrink-0" />
              </div>
            </div>
          )}
        </div>

        {/* TOOLS & STACK COVERED */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">SECURITY TOOLKIT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Cybersecurity Tools & AI Stack</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolsList.map((t) => (
              <div key={t.name} className="p-4 rounded-2xl bg-[#050E08] border border-white/10 space-y-1">
                <span className="text-sm font-bold text-white block">{t.name}</span>
                <span className="text-xs text-slate-400 block">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ENROLLMENT BOTTOM BANNER */}
        <div className="bg-gradient-to-r from-[#050E08] via-[#05140B] to-[#050E08] border border-[#06B6D4]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">READY FOR CYBER SECURITY OPERATIONS?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Join the AI & Cybersecurity Cohort</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              4 Weeks of live pentesting labs, Python security automation, Model Context Protocol AI agents, and vulnerability assessment capstone.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cohorts/register?cohort=ai-cybersecurity"
              className="w-full sm:w-auto py-4 px-10 rounded-2xl bg-[#06B6D4] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#22D3EE] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#06B6D4]/20"
            >
              <span>Register Now • ₹4,999</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
