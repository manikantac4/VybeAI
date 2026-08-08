import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Cpu, Rocket, Code2, Server, Database, Globe, Layers, ShieldCheck, 
  CheckCircle2, ArrowRight, Sparkles, Terminal, ChevronDown, ChevronUp, Lock, Zap
} from 'lucide-react';

export default function AiEngineeringCohortPage() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [openClass, setOpenClass] = useState(null);

  const teachingPattern = [
    { step: '01', title: 'Problem', desc: 'Identify real-world product bottleneck' },
    { step: '02', title: 'Why It Matters', desc: 'Understand architecture principles' },
    { step: '03', title: 'Technology', desc: 'Select standard production stack' },
    { step: '04', title: 'Build with AI', desc: 'Prompt & pair-program with AI tools' },
    { step: '05', title: 'Understand', desc: 'Code walkthrough & pattern analysis' },
    { step: '06', title: 'Debug & Deploy', desc: 'Fix edge cases & push to cloud' },
    { step: '07', title: 'Reflect', desc: 'Engineering explain-back review' },
  ];

  const weeksData = [
    {
      week: 1,
      title: 'Week 1 — Liftoff',
      subtitle: 'From Idea to Your First Live Web Application',
      goal: 'Understand the web → plan with AI → build → deploy → discover why modern frontend needs more than a static host.',
      classes: [
        {
          title: 'Class 1 — Understanding How the Internet Works',
          objective: 'Build a strong mental model of how modern websites work before writing code.',
          topics: ['Domain names & DNS (beginner-friendly)', 'How requests travel across the internet', 'Servers, Hosting, Frontend, Backend & Database', 'Website vs Web Application'],
          build: 'Visualize the complete lifecycle of a web request.',
          aiWorkflow: 'Use AI to explain unfamiliar web concepts in simple language and create a request-flow diagram.',
          explainBack: 'Explain how a website reaches the browser and why frontend, backend, and databases exist separately.',
        },
        {
          title: 'Class 2 — From Idea to Product with AI',
          objective: 'Understand how modern software engineers plan products before writing code and how AI participates in the development lifecycle.',
          topics: ['How software teams collaborate & Git/GitHub basics', 'What LLMs are & Context windows/tokens', 'Prompt engineering with constraints', 'PRD, TRD, User Stories & Feature breakdown'],
          build: 'Create a product idea with AI, generate PRD/TRD, user stories, and initial development plan.',
          aiWorkflow: 'Use ChatGPT/Claude to explain planning concepts rather than only generating code.',
          explainBack: 'Why create a PRD before coding? Which AI tool would you use for planning, coding, or debugging?',
        },
        {
          title: 'Class 3 — Build Your First Interactive Web Application',
          objective: 'Build an innovative interactive application using HTML, CSS, and JavaScript while learning to understand AI-generated frontend code.',
          topics: ['HTML & CSS fundamentals', 'JavaScript DOM manipulation & event listeners', 'Timers & LocalStorage', 'Reading and modifying AI-generated code'],
          build: 'FocusFlow productivity app (Pomodoro timer, task manager, theme switcher, statistics).',
          aiWorkflow: 'Generate UI with AI, inspect generated code, modify features, and debug UI issues.',
          explainBack: 'Explain one HTML section, modify one JavaScript feature without AI, and improve one CSS component.',
        },
        {
          title: 'Class 4 — Deploy Your First Web Application',
          objective: 'Learn version control and publish the first application to the internet.',
          topics: ['Installing Git & basics', 'GitHub repositories, commits, push & pull', 'GitHub Copilot & GitHub Pages'],
          build: 'Push FocusFlow to GitHub, publish using GitHub Pages, and write a professional README.',
          aiWorkflow: 'Use AI to explain Git commands and resolve simple Git merge/push issues.',
          explainBack: 'Why is GitHub more than cloud storage? What happens when GitHub Pages publishes the app?',
        },
        {
          title: 'Class 5 — Understanding Modern Frontend Development',
          objective: 'Understand why modern frontend frameworks such as React exist and how AI has changed frontend development.',
          topics: ['Problems with larger HTML/CSS/JS applications', 'Why React was created (Components, State, Props)', 'Modern AI frontend development with v0 & Cursor'],
          build: 'Generate multiple React portfolio designs and inspect project structure.',
          aiWorkflow: 'v0 → UI generation, Cursor → modification, Claude → explanation.',
          explainBack: 'Why was React created? When should you generate vs customize UI?',
        },
        {
          title: 'Class 6 — Build & Deploy Your Professional Portfolio',
          objective: 'Build and deploy a professional React portfolio using AI-assisted modern frontend development.',
          topics: ['React components in practice', 'Vercel deployment & static vs modern frontend hosting'],
          build: 'Hero, About, Skills, Projects, Contact, responsive portfolio pushed to GitHub and Vercel.',
          aiWorkflow: 'v0 → generate UI, Cursor → modify, GitHub → version control, Vercel → deployment.',
          explainBack: 'Explain why frontend alone cannot implement a complete SaaS with authentication.',
        },
      ],
      challenge: 'Build and deploy FocusFlow and your professional React portfolio to Vercel, publish LinkedIn technical post.',
    },
    {
      week: 2,
      title: 'Week 2 — Engine Room',
      subtitle: 'How Does a Website Become a Real Application?',
      goal: 'Build → persist data → deploy → authenticate → create a complete production SaaS.',
      classes: [
        {
          title: 'Class 1 — Understanding Backend & Building Your First API',
          objective: 'Understand why modern applications require a backend and build an Express backend connected to the portfolio.',
          topics: ['Why frontend alone is insufficient', 'Client-side vs Server-side', 'REST APIs & HTTP methods (GET, POST, PUT, DELETE)', 'Express.js project structure'],
          build: 'Node.js & Express server, Contact Form API, connect frontend to backend.',
          aiWorkflow: 'Cursor → generate Express backend, Claude → explain generated code.',
          explainBack: 'Explain one route, one API endpoint, and the request-response lifecycle.',
        },
        {
          title: 'Class 2 — Databases & Building Your First Admin Dashboard',
          objective: 'Understand why applications need persistent storage and integrate MongoDB into the portfolio backend.',
          topics: ['Why databases are required (SQL vs NoSQL)', 'MongoDB & MongoDB Atlas cloud collections', 'Connecting Express with MongoDB'],
          build: 'Store contact form submissions in MongoDB Atlas, build /admin route dashboard to view/edit messages.',
          aiWorkflow: 'Cursor → MongoDB integration, MongoDB Atlas → cloud database management.',
          explainBack: 'Why can’t applications store data in memory variables? Why choose MongoDB for this project?',
        },
        {
          title: 'Class 3 — Deploying Your First Backend & Starting Your First SaaS',
          objective: 'Deploy the portfolio backend to Render and introduce authentication while beginning the Personal Finance Tracker.',
          topics: ['Why localhost does not work in production', 'Render deployment & environment variables', 'Authentication vs Authorization & JWT overview'],
          build: 'Deploy Express backend to Render, connect production frontend, begin Personal Finance Tracker with JWT auth.',
          aiWorkflow: 'Antigravity → generate project structure, Render → deploy cloud backend.',
          explainBack: 'Why JWT instead of sessions? When might Supabase or Clerk be useful?',
        },
        {
          title: 'Class 4 — Building the Heart of Your SaaS',
          objective: 'Build the database and core user-specific functionality of the Personal Finance Tracker.',
          topics: ['Supabase & PostgreSQL database tables', 'User-specific data isolation & Row-Level Security (RLS)'],
          build: 'Create database tables, user authentication, Add/Edit/Delete Income & Expenses, transaction history dashboard.',
          aiWorkflow: 'Antigravity → extend app logic, Supabase → database management.',
          explainBack: 'Why do SaaS applications need databases? How is each user’s data kept separate?',
        },
        {
          title: 'Class 5 — Launching Your First SaaS Application',
          objective: 'Transform the Finance Tracker into a polished production-ready SaaS application.',
          topics: ['UI refinement, form validation & error handling', 'Production environment variables & debugging on Vercel + Render'],
          build: 'Complete remaining features, improve UX, deploy production frontend & backend.',
          aiWorkflow: 'Antigravity → UI polish, Cursor → debug, GitHub → version control.',
          explainBack: 'Why does every SaaS need a backend? Could you build another CRUD SaaS independently?',
        },
      ],
      challenge: 'Deploy Personal Finance Tracker SaaS with JWT authentication & Supabase database to production.',
    },
    {
      week: 3,
      title: 'Week 3 — Altitude',
      subtitle: 'Engineering Modern Internet Products',
      goal: 'Reverse engineer → choose services → integrate → build → ship a modern internet product.',
      classes: [
        {
          title: 'Class 1 — Reverse Engineering Spotify',
          objective: 'Understand how a modern music platform works from the user’s perspective and identify technology choices.',
          topics: ['Authentication & user profiles', 'Music catalogue, external APIs & metadata', 'Cloud storage vs database (Firebase vs JWT)'],
          build: 'Start Spotify Clone layout, configure Firebase, begin authentication flow.',
          aiWorkflow: 'Use AI to break down complex product features into API requirements.',
          explainBack: 'Why Firebase Authentication here when Week 2 used JWT? Which parts belong in a database vs media storage?',
        },
        {
          title: 'Class 2 — Firebase Authentication & Firestore',
          objective: 'Build the user and music-data layer of the Spotify Clone.',
          topics: ['Firebase Auth (Google Login & Email)', 'Firestore Collections & Documents', 'Reading & querying music metadata'],
          build: 'Google & Email Login, User Profiles, Firestore music catalogue search & filters.',
          aiWorkflow: 'Antigravity → generate features, Cursor → integrate Firebase APIs.',
          explainBack: 'Why use Firestore here? What data should be stored for each user?',
        },
        {
          title: 'Class 3 — APIs, Music & Media Delivery',
          objective: 'Understand how modern applications consume external APIs and handle media files.',
          topics: ['External APIs & HTTP request/response', 'Cloudinary object storage & media delivery', 'Thumbnail & audio streaming storage'],
          build: 'Connect external music API, fetch dynamic music, integrate Cloudinary media storage.',
          aiWorkflow: 'AI → read API documentation, Cursor → integrate Cloudinary.',
          explainBack: 'Why Firestore for metadata but object storage for images/audio? Where should actual MP3s live?',
        },
        {
          title: 'Class 4 — Building Premium Spotify',
          objective: 'Turn integrations into a complete Spotify-inspired product and introduce monetization.',
          topics: ['Music player state (Play/Pause, Next/Prev)', 'Premium vs Free access tiering', 'Razorpay / Stripe payment gateway flow'],
          build: 'Full music player UI, Upgrade page, Razorpay payment flow, premium status verification.',
          aiWorkflow: 'Antigravity → feature generation, Claude → payment verification logic.',
          explainBack: 'Why should payment verification happen on the backend? Why not trust frontend state for premium status?',
        },
        {
          title: 'Class 5 & 6 — AI Product: Idea to Working Product & Launch',
          objective: 'Start and finish a second product designed specifically around an AI capability (e.g. AI Study Companion).',
          topics: ['What is an AI API? (Prompt → Model → Response)', 'API keys, environment variables & cost awareness', 'AI response quality & error handling'],
          build: 'AI Study Companion product, PRD, UI generation, AI API integration, production deployment.',
          aiWorkflow: 'Use multiple AI tools on the same repo (Antigravity for app, Cursor for code, Claude for debugging).',
          explainBack: 'Why use an AI API instead of building intelligence ourselves? Explain the AI request flow.',
        },
      ],
      challenge: 'Ship Spotify Clone with Cloudinary & Razorpay + AI-powered product deployed to Vercel.',
    },
    {
      week: 4,
      title: 'Week 4 — Flight Systems',
      subtitle: 'Building, Securing & Launching Real-Time Applications',
      goal: 'Build real-time → containerize → deploy → automate → secure → polish → launch capstone.',
      classes: [
        {
          title: 'Class 1 — Building Real-Time Applications with Sockets',
          objective: 'Understand why traditional request-response is not enough and build with WebSockets & Socket.IO.',
          topics: ['Request/Response vs Real-Time Sockets', 'Socket.IO persistent connections, events, rooms & broadcasting', 'Live viewer count & chat'],
          build: 'Live Streaming Platform (Stream creation, join stream, live viewer count, real-time chat).',
          aiWorkflow: 'AI → generate Socket.IO event handlers, debug real-time issues.',
          explainBack: 'Why not poll the server every few seconds? What makes a socket connection different from an HTTP API?',
        },
        {
          title: 'Class 2 — Building the Live Streaming Experience',
          objective: 'Understand basic live video communication concepts with WebSockets & WebRTC.',
          topics: ['Capturing audio/video streams', 'WebRTC peer-to-peer signaling via Socket.IO', 'Streamer vs Viewer video pipeline'],
          build: 'Start/Stop live video stream, WebRTC video element integration, live chat & viewer count.',
          aiWorkflow: 'AI-assisted WebRTC integration & connection debugging.',
          explainBack: 'Explain what happens after the streamer presses Go Live. Explain Socket.IO vs WebRTC.',
        },
        {
          title: 'Class 3 — Containerizing Your Application with Docker',
          objective: 'Understand why applications are packaged into containers and containerize the Live Streaming Platform.',
          topics: ['Works on my machine problem & why Docker exists', 'Images vs Containers, Dockerfile & environment variables'],
          build: 'Create Dockerfile, build Docker image, run containerized app locally.',
          aiWorkflow: 'Generate Docker configuration with AI, ask AI to explain Docker instructions.',
          explainBack: 'Why package an application into a container instead of copying source code to a server?',
        },
        {
          title: 'Class 4 — Deploying Your Live Platform to Google Cloud',
          objective: 'Move the real-time application from localhost to Google Cloud.',
          topics: ['Production vs Local environment', 'Google Cloud Run / Cloud Servers & container deployment'],
          build: 'Deploy containerized app to Google Cloud, configure environment variables, test live stream in production.',
          aiWorkflow: 'AI-assisted deployment & cloud configuration debugging.',
          explainBack: 'What changed between localhost and production? What configuration must be different in production?',
        },
        {
          title: 'Class 5 & 6 — Securing, Automating & Capstone Polish',
          objective: 'Prepare the public application for real users with CI/CD, custom domains, and Cloudflare Turnstile.',
          topics: ['GitHub Actions CI/CD workflows', 'Custom domains & DNS basics', 'Cloudflare Turnstile CAPTCHA protection', 'UI/UX polish & typography'],
          build: 'GitHub Actions automated deploy, Cloudflare Turnstile protection, final capstone product refinement.',
          aiWorkflow: 'AI-assisted CI/CD & Turnstile integration.',
          explainBack: 'Why introduce CAPTCHA only after public launch? Why check Turnstile token on backend?',
        },
        {
          title: 'Class 7 — Solo Flight: Turing Wings Final Demo Day',
          objective: 'Independently build and present a product using the engineering workflow learned throughout the cohort.',
          topics: ['Problem statement & product solution', 'AI development workflow & tech decisions', 'Live demonstration & presentation'],
          build: 'Final Solo Capstone Project presentation.',
          aiWorkflow: 'Use multiple AI tools as collaborators, GitHub as single source of truth.',
          explainBack: 'Explain AI-generated implementation, architecture decisions, and future roadmap.',
        },
      ],
      challenge: 'Complete Solo Flight Capstone product, containerized with Docker and deployed live on Google Cloud.',
    },
  ];

  const toolsList = [
    { name: 'Antigravity', desc: 'AI Coding Assistant' },
    { name: 'Cursor', desc: 'AI IDE & Pair Programmer' },
    { name: 'ChatGPT / Claude', desc: 'Reasoning & Architecture' },
    { name: 'v0', desc: 'AI UI Design Generator' },
    { name: 'React 18', desc: 'Frontend Framework' },
    { name: 'Node.js & Express', desc: 'Backend REST APIs' },
    { name: 'MongoDB Atlas', desc: 'Document Database' },
    { name: 'Supabase & Postgres', desc: 'Relational SaaS DB' },
    { name: 'Firebase', desc: 'Auth & Firestore' },
    { name: 'Cloudinary', desc: 'Media & Asset Storage' },
    { name: 'Razorpay', desc: 'Monetization Gateway' },
    { name: 'Socket.IO & WebRTC', desc: 'Real-Time Streaming' },
    { name: 'Docker', desc: 'App Containerization' },
    { name: 'Google Cloud', desc: 'Cloud Production Server' },
    { name: 'GitHub Actions', desc: 'Automated CI/CD' },
    { name: 'Cloudflare Turnstile', desc: 'Bot & DDoS Protection' },
  ];

  const activeWeekObj = weeksData.find((w) => w.week === activeWeek);

  return (
    <div className="min-h-screen bg-[#050A0F] text-white selection:bg-[#22C55E] selection:text-black font-mono flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-12 space-y-16">

        {/* HERO SECTION */}
        <div className="relative bg-[#0B121E] border border-[#22C55E]/30 rounded-3xl p-6 sm:p-12 overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#4ADE80] text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#22C55E]" />
              <span>4-WEEK FLAGSHIP COHORT</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              AI Engineering Cohort
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed">
              From understanding the web to building, deploying, securing and launching modern AI-powered products.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
              Designed for beginners and college students entering software engineering in the AI era. Learn to collaborate with AI tools across GitHub codebases — treating AI as an engineering collaborator, not a blind code generator.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/cohorts/register?cohort=ai-engineering"
                className="py-4 px-8 rounded-2xl bg-[#22C55E] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#4ADE80] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#22C55E]/30"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>Register For Cohort • ₹4,999</span>
              </Link>
              <a
                href="#curriculum-schedule"
                className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 4-Week Schedule</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KEY STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Duration</span>
              <span className="text-sm font-bold text-white">4 Weeks (Live)</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Projects</span>
              <span className="text-sm font-bold text-[#4ADE80]">5+ Shipped SaaS</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Methodology</span>
              <span className="text-sm font-bold text-white">AI Pair-Programming</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Prerequisites</span>
              <span className="text-sm font-bold text-amber-400">Zero Prior Knowledge</span>
            </div>
          </div>
        </div>

        {/* TEACHING FRAMEWORK PATTERN */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">THE TEACHING PATTERN</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How You Learn & Build</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {teachingPattern.map((tp) => (
              <div key={tp.step} className="p-4 rounded-2xl bg-[#0B121E] border border-white/10 space-y-2 text-center flex flex-col justify-between">
                <span className="text-xs font-extrabold text-[#22C55E]">{tp.step}</span>
                <h3 className="text-xs font-bold text-white">{tp.title}</h3>
                <p className="text-[10px] text-slate-400 leading-tight">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-WEEK INTERACTIVE CURRICULUM SCHEDULE */}
        <div id="curriculum-schedule" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">4-WEEK INTENSIVE SCHEDULE</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Full Cohort Curriculum</h2>
            </div>

            {/* WEEK TABS */}
            <div className="flex items-center gap-2 bg-[#0B121E] p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
              {weeksData.map((w) => (
                <button
                  key={w.week}
                  onClick={() => {
                    setActiveWeek(w.week);
                    setOpenClass(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeWeek === w.week
                      ? 'bg-[#22C55E] text-black shadow-md'
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
            <div className="bg-[#0B121E] border border-[#22C55E]/40 rounded-3xl p-6 sm:p-10 space-y-8">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="text-xs font-bold text-[#22C55E] uppercase tracking-widest">
                  WEEK 0{activeWeekObj.week} SUMMARY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeWeekObj.title}
                </h3>
                <p className="text-sm font-semibold text-[#4ADE80]">{activeWeekObj.subtitle}</p>
                <p className="text-xs text-slate-300 pt-2 leading-relaxed">{activeWeekObj.goal}</p>
              </div>

              {/* CLASSES EXPANDABLE LIST */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Class Modules & Build Milestones</h4>

                {activeWeekObj.classes.map((cls, idx) => {
                  const isOpen = openClass === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 hover:border-[#22C55E]/40 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenClass(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#22C55E]/20 text-[#22C55E] font-bold text-xs flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <h5 className="text-sm sm:text-base font-bold text-white">{cls.title}</h5>
                            <p className="text-xs text-slate-400">{cls.objective}</p>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#22C55E]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-white/10 space-y-4 text-xs text-slate-300">
                          <div>
                            <span className="font-bold text-[#4ADE80] block mb-1">Topics Covered:</span>
                            <ul className="list-disc list-inside space-y-1 text-slate-300">
                              {cls.topics.map((t, i) => (
                                <li key={i}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                              <span className="font-bold text-white block mb-1">🛠️ Hands-on Build:</span>
                              <p className="text-[11px] text-slate-300">{cls.build}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                              <span className="font-bold text-[#38BDF8] block mb-1">🤖 AI Workflow:</span>
                              <p className="text-[11px] text-slate-300">{cls.aiWorkflow}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                              <span className="font-bold text-amber-400 block mb-1">🧠 Explain-Back:</span>
                              <p className="text-[11px] text-slate-300">{cls.explainBack}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* WEEKLY CHALLENGE & DELIVERABLE */}
              <div className="p-4 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#4ADE80] block">End-of-Week Deliverable:</span>
                  <p className="text-slate-300">{activeWeekObj.challenge}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0" />
              </div>
            </div>
          )}
        </div>

        {/* TOOLS & STACK COVERED */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">STACK & TOOLCHAIN</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Production Technologies Mastered</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {toolsList.map((t) => (
              <div key={t.name} className="p-4 rounded-2xl bg-[#0B121E] border border-white/10 space-y-1">
                <span className="text-sm font-bold text-white block">{t.name}</span>
                <span className="text-xs text-slate-400 block">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ENROLLMENT BOTTOM BANNER */}
        <div className="bg-gradient-to-r from-[#0B121E] via-[#09150E] to-[#0B121E] border border-[#22C55E]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#22C55E] uppercase tracking-widest">READY TO BECOME AN AI ENGINEER?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Join the AI Engineering Cohort</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              4 Weeks of live hands-on engineering, capstone review, 1-on-1 mentor guidance, and production portfolio build.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cohorts/register?cohort=ai-engineering"
              className="w-full sm:w-auto py-4 px-10 rounded-2xl bg-[#22C55E] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#4ADE80] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#22C55E]/20"
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
