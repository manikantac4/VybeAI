import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, Zap, Users, ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import LayeredMetallicGoldButton from "./LayeredMetallicGoldButton";

export default function BuildathonsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const events = [
    {
      title: "Global 48-Hour Vibe Coding Sprint",
      date: "August 12 - 14, 2026",
      mode: "Hybrid / Global Discord & Campus Lab",
      lead: "VybeAI Initiative Team",
      desc: "Transform an initial concept into a deployed full-stack web app in 48 hours using Cursor, Claude 3.7, and agent swarms.",
      type: "Hackathon Sprint",
    },
    {
      title: "Offensive Cyber Shield Masterclass",
      date: "August 20, 2026",
      mode: "Virtual Interactive Lab",
      lead: "Ratnakar — Cybersecurity Lead",
      desc: "Deep-dive into penetration testing AI endpoints, auditing prompt injections, and configuring Zero-Trust shields.",
      type: "Masterclass",
    },
    {
      title: "Spatial UI & Glassmorphism Workshop",
      date: "August 28, 2026",
      mode: "Live Design Studio Session",
      lead: "Pandu Ranga — Spatial UI Lead",
      desc: "Learn how to build 60 FPS HTML5 3D particle canvas overlays, spatial card depth, and ultra-high-end web design systems.",
      type: "Design Workshop",
    },
    {
      title: "Autonomous Agent Swarms Hackathon",
      date: "September 05 - 07, 2026",
      mode: "Global Creator Guild Arena",
      lead: "Sahith Akula & Manoj Kumar",
      desc: "Build multi-agent autonomous teams that write code, execute unit tests, and auto-deploy microservices without human friction.",
      type: "Agent Sprint",
    },
  ];

  return (
    <section
      id="events"
      className={`py-24 sm:py-32 relative overflow-hidden scroll-mt-24 select-none transition-colors duration-500 ${
        isLight ? "bg-transparent text-slate-900" : "bg-transparent text-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>LIVE CREATION ARENAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            BUILDATHONS &{" "}
            <span className="bg-gradient-to-r from-[#fef08a] via-[#f7d774] to-[#d97706] bg-clip-text text-transparent font-serif italic">
              EVENTS.
            </span>
          </h2>

          <p className={`text-base sm:text-lg ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            High-energy build sprints, hands-on masterclasses, and global hackathons where creators build real software live.
          </p>
        </div>

        {/* 4 EVENt CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-8 border backdrop-blur-md shadow-xl flex flex-col justify-between transition-all ${
                isLight
                  ? "bg-white/90 border-[#d8d0be] hover:border-[#e2b740]"
                  : "bg-[#0e1118]/90 border-[#e2b740]/30 hover:border-[#e2b740]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase bg-amber-500/15 border border-amber-500/30 text-[#e2b740]">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#e2b740]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{event.mode}</span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {event.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/20 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">
                  Lead: {event.lead}
                </span>

                <LayeredMetallicGoldButton
                  text="Reserve Seat"
                  to="/portal/support/v1/contact-team"
                  size="sm"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
