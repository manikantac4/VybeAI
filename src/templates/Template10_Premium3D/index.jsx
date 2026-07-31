import React from "react";
import { Sparkles, Layers, Box } from "lucide-react";

export default function Template10_Premium3D({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-white bg-slate-950 font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-zinc-900 to-black border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md">
              TEMPLATE 10 — PREMIUM 3D EXPERIENCE
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-poppins tracking-tight text-white leading-tight">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-amber-200">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">SPATIAL PRIZE</span>
              <span className="text-lg font-black text-amber-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">DATE</span>
              <span className="text-xs font-bold text-white">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-white">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">BUILDERS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
          >
            Launch 3D Spatial Registration
          </button>
        </div>
      </section>
    </div>
  );
}
