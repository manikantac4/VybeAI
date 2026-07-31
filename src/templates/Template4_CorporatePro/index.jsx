import React from "react";
import { ShieldCheck, Award, Users } from "lucide-react";

export default function Template4_CorporatePro({ eventData, onRegisterClick }) {
  const p = eventData.prizes || {};

  return (
    <div className="space-y-12 text-left text-slate-900 bg-slate-50 font-sans">
      <section className="p-8 sm:p-14 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-900 text-white">
              TEMPLATE 4 — CORPORATE PROFESSIONAL
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-50 text-blue-800 border border-blue-200">
              {eventData.eventType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-poppins">
            {eventData.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-600">
            {eventData.tagline}
          </p>

          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">TOTAL REWARDS</span>
              <span className="text-lg font-black text-blue-900">{p.prizePool || eventData.prizePool}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">CONFERENCE DATE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.schedule?.eventStartDate || "August 2026"}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">MODE</span>
              <span className="text-xs font-bold text-slate-800">{eventData.mode}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">ATTENDEES</span>
              <span className="text-sm font-bold text-emerald-600">{eventData.analytics?.registrationsCount || 0}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-bold text-xs shadow-lg transition-all"
          >
            Register Corporate Delegate
          </button>
        </div>
      </section>
    </div>
  );
}
