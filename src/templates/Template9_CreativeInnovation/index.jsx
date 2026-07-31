import React from "react";
import { Sparkles, Palette } from "lucide-react";

export default function Template9_CreativeInnovation({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-slate-900 bg-white font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border border-purple-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-pink-500 text-white">
              TEMPLATE 9 — CREATIVE INNOVATION
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-purple-950 text-purple-300 border border-purple-500/40">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-poppins text-white">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-pink-200">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-purple-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800">
              <span className="text-[10px] text-purple-300 block uppercase font-bold">GRANT POOL</span>
              <span className="text-lg font-black text-pink-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800">
              <span className="text-[10px] text-purple-300 block uppercase font-bold">FESTIVAL DATE</span>
              <span className="text-xs font-bold text-white">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800">
              <span className="text-[10px] text-purple-300 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-white">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800">
              <span className="text-[10px] text-purple-300 block uppercase font-bold">CREATORS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-pink-500 hover:bg-pink-400 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl"
          >
            Join Creative Festival
          </button>
        </div>
      </section>
    </div>
  );
}
