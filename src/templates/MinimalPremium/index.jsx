import React from "react";
import { Sparkles, Calendar, Trophy, ArrowRight } from "lucide-react";

export default function MinimalPremiumTemplate({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-slate-900 bg-white font-sans">
      {/* HERO SECTION */}
      <section className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-900 text-white">
              {eventData.eventType}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase border border-amber-500/40 bg-amber-50 text-amber-800">
              Minimal Luxury Gold Theme
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight text-slate-900">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-600 leading-relaxed italic">
            "{eventData.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {eventData.shortDescription || eventData.detailedDescription}
          </p>

          {/* Metrics */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">PRIZE POOL</span>
              <span className="text-lg font-black text-amber-600">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">EVENT DATE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">APPLICANTS</span>
              <span className="text-sm font-bold text-emerald-600">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Register for Buildathon</span>
          </button>
        </div>
      </section>

      {/* TRACKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-3">
          Curated Tracks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(eventData.tracks || []).map((t, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800">
                Track 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold font-serif text-slate-900">{t.name || t.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.description}</p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-slate-400">Award:</span>
                <span className="text-amber-600">{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
