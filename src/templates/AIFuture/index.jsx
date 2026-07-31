import React from "react";
import { Sparkles, Calendar, Trophy, Globe, ShieldCheck, Users, ArrowRight, Clock, MapPin } from "lucide-react";

export default function AIFutureTemplate({ eventData, activeSubpage, setActiveSubpage, onRegisterClick }) {
  const p = eventData.prizes || {};
  const sched = eventData.schedule || {};

  return (
    <div className="space-y-12 text-left text-white bg-slate-950 font-sans">
      {/* HERO SECTION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-950">
              {eventData.eventType}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase border border-amber-500/40 bg-amber-500/10 text-amber-400">
              AI Future Dark Theme
            </span>
            <span className="text-xs font-mono font-bold text-amber-500">
              {eventData.mode} Mode
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins tracking-tight leading-tight">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-300 leading-relaxed">
            {eventData.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {eventData.shortDescription || eventData.detailedDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">PRIZE POOL</span>
              <span className="text-lg font-black text-amber-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">EVENT DATE</span>
              <span className="text-xs font-bold text-slate-200">{sched.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">SUBMISSION DEADLINE</span>
              <span className="text-xs font-bold text-slate-200">{sched.submissionDeadline || "August 30"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">APPLICANTS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || eventData.participants?.length || 0}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onRegisterClick}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply & Register Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* TRACKS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold font-poppins text-white">Innovation Tracks</h2>
          <span className="text-xs font-mono text-amber-400 font-bold">AI Obsidian Theme</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(eventData.tracks || []).map((t, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Track {idx + 1}
              </span>
              <h3 className="text-lg font-bold font-poppins">{t.name || t.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.description}</p>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-slate-500">Prize:</span>
                <span className="text-amber-400">{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold font-poppins text-white">Event Schedule Timeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {(eventData.timelineMilestones || []).map((m, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 block">STAGE 0{idx + 1}</span>
              <h4 className="font-bold text-sm text-white">{m.milestoneName || m.stage}</h4>
              <span className="text-xs text-emerald-400 font-mono font-bold block">{m.date}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
