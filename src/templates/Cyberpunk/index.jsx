import React from "react";
import { Zap, ShieldCheck, Terminal, Cpu, Sparkles } from "lucide-react";

export default function CyberpunkTemplate({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-pink-50 bg-black font-mono">
      {/* HERO SECTION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border-2 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.2)] relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-pink-500 text-black">
              CYBERPUNK NEON :: {eventData.eventType}
            </span>
            <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-cyan-950 text-cyan-400 border border-cyan-500">
              MATRIX GRID ACTIVE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-lg font-bold text-pink-300">
            {eventData.tagline}
          </p>

          {/* Quick Metrics */}
          <div className="pt-4 border-t border-pink-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-zinc-900 border border-pink-500/40">
              <span className="text-[10px] text-pink-400 block uppercase font-bold">BOUNTY POOL</span>
              <span className="text-lg font-black text-cyan-300">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3 bg-zinc-900 border border-cyan-500/40">
              <span className="text-[10px] text-cyan-400 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-pink-300">{eventData.mode}</span>
            </div>
            <div className="p-3 bg-zinc-900 border border-pink-500/40">
              <span className="text-[10px] text-pink-400 block uppercase font-bold">START DATE</span>
              <span className="text-xs font-bold text-slate-200">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3 bg-zinc-900 border border-cyan-500/40">
              <span className="text-[10px] text-cyan-400 block uppercase font-bold">HACKERS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-sm bg-pink-500 hover:bg-cyan-400 text-black font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(236,72,153,0.8)]"
          >
            [ EXECUTE_REGISTRATION ]
          </button>
        </div>
      </section>

      {/* TRACKS */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold uppercase text-cyan-400 border-b border-cyan-500/30 pb-2">
          :: CYBER CHALLENGE TRACKS ::
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(eventData.tracks || []).map((t, idx) => (
            <div key={idx} className="p-6 bg-zinc-950 border border-pink-500/40 space-y-3">
              <span className="px-2 py-0.5 text-[10px] bg-cyan-500 text-black font-bold">
                TRACK_0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-pink-300">{t.name || t.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.description}</p>
              <div className="pt-2 border-t border-pink-500/20 text-xs text-cyan-300 font-bold flex justify-between">
                <span>BOUNTY:</span>
                <span>{t.prize}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
