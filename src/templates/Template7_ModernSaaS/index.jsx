import React from "react";
import { Layout, Check, ArrowRight } from "lucide-react";

export default function Template7_ModernSaaS({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-slate-900 bg-white font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-teal-500 text-slate-950">
              TEMPLATE 7 — MODERN SAAS STARTUP
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-teal-950 text-teal-300 border border-teal-500/40">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-poppins text-white">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-300">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">GRANT POOL</span>
              <span className="text-lg font-black text-teal-400">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">BATCH DATE</span>
              <span className="text-xs font-bold text-white">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-white">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">BUILDERS</span>
              <span className="text-sm font-bold text-emerald-400">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl"
          >
            Launch SaaS Application
          </button>
        </div>
      </section>
    </div>
  );
}
