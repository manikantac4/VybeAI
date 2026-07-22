import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Check, Sparkles, X } from "lucide-react";

export default function ProgramsSection() {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);

  const programs = [
    {
      id: "web-creation",
      title: "AI-Powered Web Creation Bootcamp",
      subtitle: "Build modern web apps from scratch using natural language prompts & AI pair programming.",
      duration: "4 Weeks",
      level: "Beginner Friendly",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      highlights: ["AI Component Design", "Tailwind & React Basics", "Deploy to Vercel"],
      iconSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      syllabus: [
        "Week 1: Web Fundamentals & AI Prompt Spec Drafting",
        "Week 2: Responsive UI Design with Tailwind & React",
        "Week 3: Dynamic State & Interactive User APIs",
        "Week 4: Production Build & Portfolio Launch"
      ]
    },
    {
      id: "vibe-coding",
      title: "Vibe Coding for Beginners",
      subtitle: "Turn raw ideas into software by conversing naturally with AI engines.",
      duration: "3 Weeks",
      level: "Zero Code Needed",
      badge: "Most Popular",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
      highlights: ["Natural Language Specs", "Pair Programming", "Rapid MVP Shipping"],
      iconSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      syllabus: [
        "Week 1: Thinking in Systems & Natural Language Specs",
        "Week 2: Vibe Coding UI/UX Iterations & Debugging",
        "Week 3: Shipping Your First Functional Software Tool"
      ]
    },
    {
      id: "ai-tools",
      title: "Modern AI Tools & Workflows",
      subtitle: "Master LLMs, asset generators, and automated developer pipelines.",
      duration: "2 Weeks",
      level: "All Skill Levels",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      highlights: ["Advanced Prompt Engineering", "AI Generative Assets", "Automated Pipelines"],
      iconSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      ),
      syllabus: [
        "Week 1: Advanced Prompting & Generative Asset Workflows",
        "Week 2: Automating Pipelines & Deploying AI Assistants"
      ]
    },
    {
      id: "buildathons",
      title: "Buildathons & Innovation Sprints",
      subtitle: "High-energy weekend sprints to build MVPs with peer collaboration.",
      duration: "Weekend Sprint",
      level: "Collaborative Sprints",
      badge: "Community Event",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      highlights: ["48-Hour MVP Creation", "Direct Mentorship", "Live Demo Showcase"],
      iconSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
        </svg>
      ),
      syllabus: [
        "Day 1: Team Formation & Rapid Spec Sprint",
        "Day 2: 48-Hour Prototype Building & Live Demo Presentation"
      ]
    }
  ];

  const activeCourse = programs[activeCourseIndex];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#f8fffe] text-slate-900 relative overflow-hidden scroll-mt-20 select-none">
      
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Concise Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200 inline-block mb-3 shadow-sm">
            INTERACTIVE PRACTICAL COURSES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif italic text-slate-900 leading-tight">
            Learn By Building. <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Launch With Confidence.
            </span>
          </h2>
        </div>

        {/* Interactive Course Selection Tabs */}
        <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 mb-8 sm:mb-10 max-w-full">
          {programs.map((prog, idx) => (
            <button
              key={prog.id}
              onClick={() => setActiveCourseIndex(idx)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 border ${
                activeCourseIndex === idx
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 scale-[1.02]"
                  : "bg-white text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm"
              }`}
            >
              <span className="shrink-0">{prog.iconSvg}</span>
              <span>{prog.title.split(" ")[0]} {prog.title.split(" ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Course Showcase Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-10 shadow-2xl text-left grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative overflow-hidden"
          >
            {/* Left Column: Concise Text Details */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-cyan-200">
                  {activeCourse.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] sm:text-xs font-bold border border-slate-200">
                  {activeCourse.level}
                </span>
                {activeCourse.badge && (
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] sm:text-xs font-bold uppercase border border-purple-200">
                    {activeCourse.badge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif italic text-slate-900 leading-tight">
                {activeCourse.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeCourse.subtitle}
              </p>

              {/* Punchy Key Highlights */}
              <div className="space-y-2 pt-1 sm:pt-2">
                {activeCourse.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/portal/auth/v1/account-access"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll In Bootcamp</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setSelectedModal(activeCourse)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all text-center"
                >
                  View Quick Syllabus
                </button>
              </div>

            </div>

            {/* Right Column: Real Course Preview Image */}
            <div className="lg:col-span-6 relative mt-2 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  className="w-full h-48 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg text-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500 text-white flex items-center justify-center shrink-0">
                      {activeCourse.iconSvg}
                    </div>
                    <div>
                      <p className="text-xs font-bold font-serif italic">{activeCourse.title}</p>
                      <p className="text-[10px] text-slate-500 font-semibold">{activeCourse.duration} • Practical Creation</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 animate-pulse" />
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Quick Syllabus Modal */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative"
            >
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg sm:text-xl font-bold font-serif italic text-slate-900 mb-4 pr-6">
                {selectedModal.title} — Syllabus
              </h3>

              <div className="space-y-2.5 mb-6">
                {selectedModal.syllabus.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Link
                  to="/portal/auth/v1/account-access"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs"
                >
                  Enroll Now →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
