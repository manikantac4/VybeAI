import React from "react";
import { Sparkles, Globe, Compass } from "lucide-react";

export default function Template3_SpaceOdyssey({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-white bg-slate-950 font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-indigo-500 text-white">
              TEMPLATE 3 — SPACE ODYSSEY GALAXY
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-indigo-950 text-indigo-300 border border-indigo-500/40">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-indigo-100">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-indigo-200">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-indigo-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800">
              <span className="text-[10px] text-indigo-300 block uppercase font-bold">MISSION BOUNTY</span>
              <span className="text-lg font-black text-amber-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800">
              <span className="text-[10px] text-indigo-300 block uppercase font-bold">LAUNCH DATE</span>
              <span className="text-xs font-bold text-white">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800">
              <span className="text-[10px] text-indigo-300 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-white">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800">
              <span className="text-[10px] text-indigo-300 block uppercase font-bold">ASTRONAUTS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-amber-400 hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl"
          >
            Launch Space Mission Registration
          </button>
        </div>
      </section>
    </div>
  );
}
