import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Cpu, Rocket, Code2, Server, Database, Globe, Layers, ShieldCheck, 
  CheckCircle2, ArrowRight, Sparkles, Terminal, ChevronDown, ChevronUp, Lock, Zap, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiEngineeringCohortPage() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [openClass, setOpenClass] = useState(null);

  const teachingPattern = [
    { step: '01', title: 'Problem', desc: 'Real-world product bottleneck' },
    { step: '02', title: 'Architecture', desc: 'Core engineering principles' },
    { step: '03', title: 'Tech Stack', desc: 'Industry production tools' },
    { step: '04', title: 'Build w/ AI', desc: 'Pair-program with Cursor & Claude' },
    { step: '05', title: 'Understand', desc: 'Code walkthrough & logic review' },
    { step: '06', title: 'Deploy', desc: 'Cloud deployment & CI/CD' },
    { step: '07', title: 'Reflect', desc: 'Technical explain-back' },
  ];

  const weeksData = [
    {
      week: 1,
      title: 'Week 1 — Liftoff',
      subtitle: 'From Web Fundamentals to Your First Live App',
      goal: 'Understand web architecture → plan with AI → build interactive UI → publish to Vercel.',
      classes: [
        {
          title: 'Class 1 — How the Internet & Web Apps Work',
          objective: 'Master request-response cycles, DNS, hosting, and frontend-backend architecture.',
          topics: ['DNS & HTTP Requests', 'Frontend vs Backend vs Database', 'Request-Response Lifecycle'],
          build: 'Interactive Web Request Lifecycle visualizer.',
        },
        {
          title: 'Class 2 — AI Product Planning & PRD Generation',
          objective: 'Use AI to generate PRD/TRD documents, user stories, and task breakdowns.',
          topics: ['Git/GitHub Workflow', 'Context Windows & Tokens', 'PRD/TRD Specification Generation'],
          build: 'AI-assisted PRD & TRD documentation suite.',
        },
        {
          title: 'Class 3 — FocusFlow Pomodoro App',
          objective: 'Build an interactive app with HTML, CSS, JavaScript, Timers, and LocalStorage.',
          topics: ['DOM Events & State Management', 'LocalStorage Data Persistence', 'UI Micro-Animations'],
          build: 'FocusFlow productivity application with custom themes.',
        },
        {
          title: 'Class 4 — Git & Production Deployment',
          objective: 'Version control your code with Git & deploy to GitHub Pages.',
          topics: ['Git Commits & Branching', 'GitHub Repositories', 'GitHub Pages Deployment'],
          build: 'Live GitHub Pages application with documentation.',
        },
        {
          title: 'Class 5 & 6 — Modern React & Portfolio Launch',
          objective: 'Build and ship a professional React portfolio using v0 and Cursor.',
          topics: ['React Components & Props', 'State Management', 'Vercel Cloud Deployment'],
          build: 'Production React Developer Portfolio shipped live to Vercel.',
        },
      ],
      challenge: 'Ship FocusFlow + Developer Portfolio live on Vercel.',
    },
    {
      week: 2,
      title: 'Week 2 — Engine Room',
      subtitle: 'APIs, Cloud Databases & Authentication SaaS',
      goal: 'Build Express REST APIs → persist data in Supabase & MongoDB → deploy SaaS.',
      classes: [
        {
          title: 'Class 1 — Building Express REST APIs',
          objective: 'Build server-side HTTP endpoints with Express.js.',
          topics: ['Client vs Server', 'REST Methods (GET/POST)', 'Express Router & Middleware'],
          build: 'Backend API connected to frontend contact form.',
        },
        {
          title: 'Class 2 — Cloud Databases with MongoDB Atlas',
          objective: 'Persist application data in MongoDB Atlas cloud database.',
          topics: ['SQL vs NoSQL', 'MongoDB Collections & Schemas', 'Database CRUD Operations'],
          build: 'Admin Dashboard fetching live MongoDB records.',
        },
        {
          title: 'Class 3 — Render Cloud Deployment & JWT Auth',
          objective: 'Deploy Express server to Render and implement JWT authentication.',
          topics: ['Render Cloud Hosting', 'Environment Variables', 'JWT Token Authentication'],
          build: 'Secure user login & session verification.',
        },
        {
          title: 'Class 4 & 5 — SaaS Finance Tracker',
          objective: 'Build a full-stack financial tracker SaaS with Supabase PostgreSQL.',
          topics: ['Supabase Row-Level Security', 'Multi-Tenant Data Isolation', 'Dashboard Analytics'],
          build: 'Complete SaaS Finance Tracker with authentication & database storage.',
        },
      ],
      challenge: 'Deploy Personal Finance SaaS with JWT & Supabase to production.',
    },
    {
      week: 3,
      title: 'Week 3 — Altitude',
      subtitle: 'Cloud Media Storage, Payments & AI Products',
      goal: 'Integrate Cloudinary media → Razorpay payments → launch AI Study Companion SaaS.',
      classes: [
        {
          title: 'Class 1 & 2 — Spotify Clone & Firebase Auth',
          objective: 'Build music app layout with Firebase authentication and Firestore database.',
          topics: ['Firebase Google Auth', 'Firestore Collections', 'User Music Metadata'],
          build: 'Spotify-style music player with user accounts.',
        },
        {
          title: 'Class 3 & 4 — Cloudinary Media & Razorpay Payment',
          objective: 'Upload audio to Cloudinary and integrate Razorpay monetization checkout.',
          topics: ['Object Media Storage', 'Audio Streaming Pipeline', 'Razorpay Payment Gateway'],
          build: 'Premium Subscription tier with Razorpay verification.',
        },
        {
          title: 'Class 5 & 6 — AI Study Companion Product',
          objective: 'Build an AI-powered SaaS product consuming LLM APIs.',
          topics: ['OpenAI / Claude API Integration', 'Prompt Optimization', 'Cost Management'],
          build: 'AI Study Companion SaaS deployed live on Vercel.',
        },
      ],
      challenge: 'Ship Spotify Clone + AI Product live to production.',
    },
    {
      week: 4,
      title: 'Week 4 — Flight Systems',
      subtitle: 'Real-Time Streaming, Docker & Cloud Launch',
      goal: 'WebSockets & WebRTC → Docker containers → Google Cloud deployment → Demo Day.',
      classes: [
        {
          title: 'Class 1 & 2 — Real-Time Streaming with Socket.IO & WebRTC',
          objective: 'Build real-time live chat and video streaming.',
          topics: ['WebSockets vs HTTP', 'Socket.IO Broadcasting', 'WebRTC Video Pipelines'],
          build: 'Live streaming platform with real-time viewer chat.',
        },
        {
          title: 'Class 3 & 4 — Docker Containerization & Google Cloud',
          objective: 'Package application into Docker container and deploy to Google Cloud.',
          topics: ['Dockerfiles & Images', 'Container Isolation', 'Google Cloud Run Deployment'],
          build: 'Containerized real-time app running on Google Cloud.',
        },
        {
          title: 'Class 5 & 6 — CI/CD, Cloudflare Turnstile & Solo Demo Day',
          objective: 'Automate deployments with GitHub Actions and present capstone project.',
          topics: ['GitHub Actions CI/CD', 'Cloudflare DDoS Protection', 'Capstone Demo Day'],
          build: 'Final Solo Capstone Project presentation.',
        },
      ],
      challenge: 'Deploy containerized Capstone product live on Google Cloud.',
    },
  ];

  const toolsList = [
    { name: 'Antigravity & Cursor', desc: 'AI Coding Tools' },
    { name: 'React 18 & Node.js', desc: 'Full-Stack Engine' },
    { name: 'MongoDB & Supabase', desc: 'Cloud Databases' },
    { name: 'Firebase & Cloudinary', desc: 'Auth & Media Storage' },
    { name: 'Razorpay Gateway', desc: 'Monetization' },
    { name: 'Socket.IO & WebRTC', desc: 'Real-Time Systems' },
    { name: 'Docker & Google Cloud', desc: 'Container Launch' },
    { name: 'GitHub Actions', desc: 'CI/CD Automation' },
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#15803D] text-xs font-bold font-mono">
                <Cpu className="w-4 h-4 text-[#15803D]" />
                <span>4-WEEK FLAGSHIP COHORT</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090909] text-white text-xs font-bold font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Launch Date: August 25, 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono">
                <span>Tuition Fee: ₹4,999</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#090909] tracking-tight">
              AI Engineering Cohort
            </h1>

            <p className="text-base sm:text-lg text-black/80 font-medium">
              From web fundamentals to building, deploying, securing, and launching AI products.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/cohorts/register?cohort=ai-engineering"
                className="py-3.5 px-7 rounded-2xl bg-[#090909] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#22C55E] hover:text-black transition-all text-center flex items-center justify-center gap-2 shadow-md font-mono"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Register For Cohort • ₹4,999</span>
              </Link>
              <a
                href="#curriculum-schedule"
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
              <span className="text-sm font-bold text-[#15803D]">August 25, 2026</span>
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
              <span className="text-black/50 text-[10px] uppercase block">Projects</span>
              <span className="text-sm font-bold text-[#15803D]">5+ Shipped SaaS</span>
            </div>
          </div>
        </motion.div>

        {/* TEACHING FRAMEWORK */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803D] font-mono">THE TEACHING PATTERN</span>
            <h2 className="text-2xl font-extrabold text-[#090909]">How You Learn & Build</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {teachingPattern.map((tp) => (
              <div key={tp.step} className="p-3.5 rounded-2xl bg-white border border-black/10 space-y-1 shadow-xs">
                <span className="text-xs font-bold text-[#15803D] font-mono">{tp.step}</span>
                <h3 className="text-xs font-bold text-[#090909]">{tp.title}</h3>
                <p className="text-[10px] text-black/60 leading-tight">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-WEEK INTERACTIVE CURRICULUM */}
        <div id="curriculum-schedule" className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#15803D] font-mono">4-WEEK SCHEDULE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090909]">Cohort Curriculum</h2>
            </div>

            {/* WEEK TABS */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-black/10 overflow-x-auto shadow-xs font-mono">
              {weeksData.map((w) => (
                <button
                  key={w.week}
                  onClick={() => {
                    setActiveWeek(w.week);
                    setOpenClass(null);
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
                <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">
                  WEEK 0{activeWeekObj.week} SUMMARY
                </span>
                <h3 className="text-2xl font-extrabold text-[#090909]">
                  {activeWeekObj.title}
                </h3>
                <p className="text-xs text-black/70 leading-relaxed">{activeWeekObj.goal}</p>
              </div>

              {/* CLASSES ACCORDION */}
              <div className="space-y-3">
                {activeWeekObj.classes.map((cls, idx) => {
                  const isOpen = openClass === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAF8F5] border border-black/10 hover:border-[#22C55E]/50 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenClass(isOpen ? null : idx)}
                        className="w-full p-4 flex items-center justify-between text-left gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-[#22C55E]/15 text-[#15803D] font-bold text-xs flex items-center justify-center shrink-0 font-mono">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-[#090909]">{cls.title}</h4>
                            <p className="text-xs text-black/60">{cls.objective}</p>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#15803D]" /> : <ChevronDown className="w-4 h-4 text-black/40" />}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 pt-0 border-t border-black/10 space-y-3 text-xs text-black/80"
                          >
                            <div className="pt-2">
                              <span className="font-bold text-[#15803D] block mb-1">Topics:</span>
                              <div className="flex flex-wrap gap-1.5 font-mono">
                                {cls.topics.map((t, i) => (
                                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-black/10 text-[11px]">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-white border border-black/10">
                              <span className="font-bold text-[#090909] block mb-0.5">🛠️ Hands-on Build:</span>
                              <p className="text-[11px] text-black/70">{cls.build}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* WEEKLY CHALLENGE */}
              <div className="p-3.5 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="font-bold text-[#15803D] block">Weekly Deliverable:</span>
                  <p className="text-black/75">{activeWeekObj.challenge}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" />
              </div>
            </div>
          )}
        </div>

        {/* TOOLS & STACK COVERED */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803D] font-mono">STACK & TOOLS</span>
            <h2 className="text-2xl font-extrabold text-[#090909]">Technologies Mastered</h2>
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
            <span className="text-xs font-bold text-[#15803D] uppercase tracking-widest font-mono">JOIN THE COHORT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090909]">Become an AI Engineer</h2>
            <p className="text-xs text-black/70">
              4 Weeks of live hands-on engineering, 1-on-1 code review, and production SaaS build.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <Link
              to="/cohorts/register?cohort=ai-engineering"
              className="py-3.5 px-8 rounded-2xl bg-[#090909] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#22C55E] hover:text-black transition-all flex items-center gap-2 shadow-lg font-mono"
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
