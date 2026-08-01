import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Zap, Clock, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const DEFAULT_EVENTS = [
  {
    title: "Global 48-Hour Vibe Coding Sprint",
    startDate: "Batch 01 — Aug 2026",
    mode: "Global Discord & Campus Lab",
    lead: "Turing Wings Team",
    description: "Transform raw concepts into deployed full-stack web applications in 48 hours using Cursor, Claude 3.7, and agent swarms.",
    status: "upcoming",
  },
  {
    title: "Offensive Cyber Shield Masterclass",
    startDate: "Batch 01 — Sept 2026",
    mode: "Virtual Interactive Lab",
    lead: "Ratnakar — Cybersecurity Lead",
    description: "Deep-dive into penetration testing AI endpoints, auditing prompt injection vectors, and configuring Zero-Trust shields.",
    status: "upcoming",
  },
  {
    title: "Spatial UI & Glassmorphism Canvas Workshop",
    startDate: "Batch 02 — Oct 2026",
    mode: "Live Design Studio Session",
    lead: "Pandu Ranga — Spatial UI Lead",
    description: "Learn how to build 60 FPS HTML5 3D particle canvas overlays, spatial card depth, and ultra-high-end web design systems.",
    status: "upcoming",
  },
  {
    title: "Autonomous Agent Swarms Hackathon",
    startDate: "Batch 02 — Nov 2026",
    mode: "Global Creator Guild Arena",
    lead: "Sahith Akula & Manoj Kumar",
    description: "Build multi-agent autonomous teams that write code, execute unit tests, and auto-deploy microservices without human friction.",
    status: "upcoming",
  },
];

export default function BuildathonsSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [events, setEvents] = useState(DEFAULT_EVENTS);
  const [notifiedEvents, setNotifiedEvents] = useState({});

  useEffect(() => {
    fetch("https://turingwings-backend.onrender.com/api/events")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.length > 0) {
          setEvents(data);
        }
      })
      .catch((err) => console.log("Backend offline, using fallback buildathons data:", err));
  }, []);

  const toggleNotify = (idx) => {
    setNotifiedEvents((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="events"
      className="py-24 sm:py-32 relative overflow-hidden scroll-mt-24 select-none bg-transparent text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            BUILDATHONS &{" "}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent font-serif italic">
              EVENTS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700">
            High-energy 48-hour build sprints, hands-on masterclasses, and global hackathons live synced with Turing Wings HQ.
          </p>
        </div>

        {/* 4 EVENT CARDS GRID WITH UPCOMING SOON BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          {events.map((event, idx) => (
            <motion.div
              key={event._id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-8 border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-amber-500/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-amber-500/15 border border-amber-500/30 text-amber-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{event.status?.toUpperCase() || "UPCOMING SOON"}</span>
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{event.startDate || "Dates TBD"}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-slate-900">
                  {event.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {event.tagline || event.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{event.mode || "Hybrid"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Lead: {event.lead || "Turing Wings Team"}</span>
                  </div>
                </div>
              </div>

              {/* Card Action CTA */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleNotify(idx)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                    notifiedEvents[idx]
                      ? "bg-emerald-50 border border-emerald-300 text-emerald-700"
                      : "bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800"
                  }`}
                >
                  {notifiedEvents[idx] ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Notified & Registered!</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 text-amber-600" />
                      <span>Get Event Alerts</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
