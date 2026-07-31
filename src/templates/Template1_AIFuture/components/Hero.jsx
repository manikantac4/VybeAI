import React from "react";
import { Sparkles, Calendar, Trophy, Globe, Shield } from "lucide-react";

export default function AIFutureHero({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};
  const sched = eventData.schedule || {};

  return (
    <section className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden text-left text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-950">
            TEMPLATE 1 — AI FUTURE
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase border border-amber-500/40 bg-amber-500/10 text-amber-400">
            {eventData.eventType}
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
            <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
          </div>
        </div>

        <button
          onClick={onRegisterClick}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Apply & Register Now</span>
        </button>
      </div>
    </section>
  );
}
