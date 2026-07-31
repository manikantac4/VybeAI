import React from "react";
import { Flame, Trophy, Zap } from "lucide-react";

export default function Template6_GamingArena({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-white bg-zinc-950 font-mono">
      <section className="p-8 sm:p-14 rounded-3xl bg-zinc-900 border-2 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)] relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-red-600 text-white shadow-lg">
              TEMPLATE 6 — GAMING RGB ARENA
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/40">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-bold text-amber-400">
            "{eventData.tagline}"
          </p>

          <div className="pt-4 border-t border-red-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-red-500/40">
              <span className="text-[10px] text-red-400 block uppercase font-bold">TOURNAMENT POOL</span>
              <span className="text-lg font-black text-amber-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-amber-500/40">
              <span className="text-[10px] text-amber-400 block uppercase font-bold">START DATE</span>
              <span className="text-xs font-bold text-white">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-red-500/40">
              <span className="text-[10px] text-red-400 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-white">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-950 border border-amber-500/40">
              <span className="text-[10px] text-amber-400 block uppercase font-bold">PLAYERS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-amber-400 hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(239,68,68,0.8)]"
          >
            ENTER TOURNAMENT ARENA
          </button>
        </div>
      </section>
    </div>
  );
}
